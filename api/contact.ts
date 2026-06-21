import nodemailer from "nodemailer";

function cleanHeaderValue(value: string) {
  // Убираем переносы строк, чтобы пользователь не мог сломать email-заголовки
  return value.replace(/[\r\n]/g, " ").trim();
}

function escapeHtml(value: string) {
  // Экранируем пользовательский текст перед вставкой в HTML-письмо
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body ?? {};

    const cleanName = cleanHeaderValue(String(name ?? ""));
    const cleanEmail = cleanHeaderValue(String(email ?? ""));
    const cleanMessage = String(message ?? "").trim();

    if (!cleanName || cleanName.length > 60) {
      return res.status(400).json({ error: "Invalid name" });
    }

    if (!cleanEmail || cleanEmail.length > 254 || !isValidEmail(cleanEmail)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (!cleanMessage || cleanMessage.length > 500) {
      return res.status(400).json({ error: "Invalid message" });
    }

    const smtpHost = process.env.ZOHO_SMTP_HOST;
    const smtpPort = Number(process.env.ZOHO_SMTP_PORT ?? 465);
    const smtpUser = process.env.ZOHO_SMTP_USER;
    const smtpPass = process.env.ZOHO_SMTP_PASS;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!smtpHost || !smtpUser || !smtpPass || !contactToEmail) {
      console.error("Missing SMTP environment variables");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: `"Liežuvis Website" <${smtpUser}>`,
      to: contactToEmail,
      replyTo: `"${cleanName}" <${cleanEmail}>`,
      subject: "Новое сообщение с сайта Liežuvis",
      text: [
        "Новое сообщение с сайта Liežuvis",
        "",
        `Имя: ${cleanName}`,
        `Email: ${cleanEmail}`,
        "",
        "Сообщение:",
        cleanMessage,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>Новое сообщение с сайта Liežuvis</h2>
          <p><strong>Имя:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Сообщение:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}