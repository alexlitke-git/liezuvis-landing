import { useEffect, useState, type ReactNode } from "react";
import svgPaths from "@/imports/Frame23/svg-olo4zkfgdm";
import img0100Screen from "@/imports/Frame23/04e9d54d1a01f6a0dc28b3561edc6a0af3a80fca.png";
import img11 from "@/imports/Frame23/ddf64b505381a61b346435be8901aba185badec7.png";
import imgScreenshot1 from "@/imports/Frame23/0387b2547495501e3046d140413c5d7858ed0c95.png";
import imgScreenshot2 from "@/imports/Frame23/019ebbe9b62b6f083ec2608a7b83702992cb5ed6.png";
import img1 from "@/imports/Frame23/5a6fa0c5de793018243263e67e6bf64264125451.png";
import imgScreenshot3 from "@/imports/Frame23/43c9f97263b4afeaa6c5dcbe9384c3f32dfc9335.png";
import img2 from "@/imports/Frame23/f276d77d0776d7e8b4b09b613084fff8d056b0b3.png";
import imgScreenshot4 from "@/imports/Frame23/690ee182b8a4848ad0e8204ecb616245bf0f8800.png";
import imgScreenshot6 from "@/imports/Frame23/f842f47bd36d888fa7b7c806c8da6c9018a1c332.png";
import imgScreenshot7 from "@/imports/Frame23/87614d242d5fc66faa649dbb2307a1368a5ae767.png";
import img3 from "@/imports/Frame23/2f33217a7179a38269e8b910f5a16a7a3426749d.png";
import imgScreenshot8 from "@/imports/Frame23/36f6cc7953a9c39dc27973968b82bb7e86c1c574.png";
import imgScreenshot9 from "@/imports/Frame23/ce32f873c10f7808982809442e901c9612c617dd.png";
import imgBuy from "@/imports/Frame23/cb875115a4f3e1ab31b6f35ea281be07f0e3165f.png";
import { imgIcon, imgArrowUpward } from "@/imports/Frame23/svg-qj3rs";
import languageIcon from "@/imports/language.svg";
import imgScreenshot5New from "@/imports/photo_2026-06-18_22.57.56.jpeg";

// ─── Content container (max-width + margins) ──────────────────────────────────
function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-[1680px] mx-auto px-[24px] md:px-[80px] min-[1280px]:px-[112px] min-[1440px]:px-[160px] w-full ${className}`}>
      {children}
    </div>
  );
}

// ─── Reusable check list item ─────────────────────────────────────────────────
function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex gap-[15px] items-start">
      <div className="overflow-clip relative shrink-0 size-[24px]">
        <div className="absolute bottom-1/4 left-[16.04%] right-[16.04%] top-[24.9%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 12.025">
            <path d={svgPaths.p23b3580} fill="#1E8663" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">{text}</p>
    </div>
  );
}

// ─── Phone screenshot with border ─────────────────────────────────────────────
function PhoneShot({ src }: { src: string }) {
  return (
    <div className="flex items-center p-[8px] shrink-0">
      <div className="h-[410px] w-[192px] min-[1280px]:h-[510px] min-[1280px]:w-[236px] relative rounded-[24px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={src} />
        <div aria-hidden className="absolute border-8 border-[#cac4d0] border-solid inset-[-8px] rounded-[32px] pointer-events-none" />
      </div>
    </div>
  );
}

// ─── Two-phone layout: side-by-side on desktop, cascade on tablet ──────────────
function PhonePair({
  src1,
  src2,
  reverse = false,
  avatarSrc,
}: {
  src1: string;
  src2: string;
  reverse?: boolean;
  avatarSrc?: string;
}) {
  const border = <div aria-hidden className="absolute border-8 border-[#cac4d0] border-solid inset-[-8px] rounded-[32px] pointer-events-none" />;

  return (
    <div className="flex-1 min-w-0">
      {/* Desktop: side by side */}
      <div className={`hidden min-[1280px]:flex gap-[40px] items-center ${reverse ? 'justify-end' : ''}`}>
        {/* Первый телефон оборачиваем в relative-контейнер,
            чтобы аватарка была привязана именно к нему, а не ко всей секции */}
        <div className="relative shrink-0">
          <PhoneShot src={src1} />

          {avatarSrc && (
            <div
              className="absolute rounded-full size-[120px] overflow-hidden pointer-events-none z-[3]"
              style={{
                left: '-72px',
                top: '240px',
              }}
            >
              <img
                alt=""
                className="absolute h-[123.97%] left-[-31.28%] max-w-none top-0 w-[165.3%]"
                src={avatarSrc}
              />
            </div>
          )}
        </div>

        <PhoneShot src={src2} />
      </div>

      {/* Tablet: cascade — phone1 front, phone2 behind+smaller with shadow */}
      <div className={`flex min-[1280px]:hidden items-center h-[426px] ${reverse ? 'justify-end' : ''}`}>
        {/* Front phone */}
        <div className="flex items-center p-[8px] shrink-0 relative z-[2] mr-[-80px]">
          <div className="h-[410px] relative rounded-[24px] shrink-0 w-[192px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={src1} />
            {border}

            {avatarSrc && (
              <div
                className="absolute rounded-full size-[96px] overflow-hidden pointer-events-none z-[3]"
                style={{
                  left: '-58px',
                  top: '188px',
                }}
              >
                <img
                  alt=""
                  className="absolute h-[123.97%] left-[-31.28%] max-w-none top-0 w-[165.3%]"
                  src={avatarSrc}
                />
              </div>
            )}
          </div>
        </div>

        {/* Back phone — fills height with padding, slightly smaller */}
        <div className="relative z-[1] self-stretch flex items-center">
          <div className="flex items-center py-[40px] h-full relative">
            <div className="aspect-[252/526] h-full relative rounded-[24px] shrink-0">
              <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={src2} />
              {border}
            </div>

            {/* Shadow blur on the left side of back phone */}
            <div className="absolute left-0 top-[40px] bottom-[40px] w-[79px] rounded-l-[32px] overflow-hidden pointer-events-none">
              <div className="w-full h-full bg-[#2e1b5e] opacity-40" style={{ filter: 'blur(40px)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobilePhoneSlider({
  src1,
  src2,
  avatarSrc,
}: {
  src1: string;
  src2: string;
  avatarSrc?: string;
}) {
  const [active, setActive] = useState<0 | 1>(0);

  return (
    <div className="md:hidden relative w-full overflow-hidden pt-[8px] pb-[8px]">
      <div className="relative h-[520px]">
        <button
          type="button"
          onClick={() => setActive(0)}
          className="absolute top-0 transition-all duration-300"
          style={{
            left: active === 0 ? "52px" : "-220px",
            zIndex: active === 0 ? 2 : 1,
          }}
        >
          <PhoneShot src={src1} />
        </button>

        <button
          type="button"
          onClick={() => setActive(1)}
          className="absolute top-0 transition-all duration-300"
          style={{
            left: active === 1 ? "52px" : "300px",
            zIndex: active === 1 ? 2 : 1,
          }}
        >
          <PhoneShot src={src2} />
        </button>

        {avatarSrc && (
          <div className="absolute left-[8px] top-[210px] rounded-full size-[96px] overflow-hidden pointer-events-none z-[3]">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover size-full rounded-full"
              src={avatarSrc}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const FEATURE_ITEMS = ["полноценные уроки и курсы", "изучение грамматики", "тренажёр времён и падежей", "речевые конструкции", "литовская озвучка", "словарь, диалоги и многое другое"];

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  const HEADER_HEIGHT = 72;

  const [phoneScale, setPhoneScale] = useState(1);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const update = () => {
      const tablet = window.innerWidth < 1280;
      setIsTablet(tablet);

      if (tablet) {
        setPhoneScale(0.9);
      } else {
        const sectionH = Math.max(window.innerHeight - HEADER_HEIGHT, 720);
        const available = sectionH - 144; // 72px padding top & bottom
        setPhoneScale(Math.min(1, available / 742));
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const sectionStyle = isTablet
    ? { minHeight: "auto" }
    : {
        height: `calc(100svh - ${HEADER_HEIGHT}px)`,
        minHeight: "720px",
      };

  return (
    <section id="hero" className="bg-[#fef7ff] relative flex items-center" style={sectionStyle}>
      {/* Blobs wrapper — overflow-hidden here so blobs don't escape section, but content can overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blurred blobs */}
      <div className="absolute left-[-242px] size-[804px] top-[-402px] pointer-events-none">
        <div className="absolute inset-[-49.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1604 1604">
            <g filter="url(#filter-hero-1)">
              <circle cx="802" cy="802" fill="#E8DEF8" r="402" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1604" id="filter-hero-1" width="1604" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-402px] right-[-242px] size-[804px] pointer-events-none">
        <div className="absolute inset-[-49.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1604 1604">
            <g filter="url(#filter-hero-2)" opacity="0.8">
              <circle cx="802" cy="802" fill="white" r="402" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1604" id="filter-hero-2" width="1604" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      </div>{/* closes blobs overflow wrapper */}

      {/* Floating icons */}
      <div className="absolute left-[80px] top-[200px] -rotate-15 opacity-60 pointer-events-none">
        <div className="overflow-clip size-[48px]">
          <div className="absolute inset-[8.33%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <path d={svgPaths.p3700ce00} fill="#EADDFF" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute right-[120px] top-[80px] rotate-15 opacity-60 pointer-events-none">
        <div className="overflow-clip size-[69px]">
          <div className="absolute inset-[4.17%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.6545 63.6545">
              <path d={svgPaths.p1527980} fill="#EADDFF" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[60px] top-[80px] -rotate-15 opacity-60 pointer-events-none">
        <div className="overflow-clip size-[69px]">
          <div className="absolute inset-[8.33%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.8677 57.8677">
              <path d={svgPaths.pdfa8970} fill="#D0BCFF" />
            </svg>
          </div>
        </div>
      </div>

      {/* Language icon — behind content, center of section, slightly below middle */}
      <img
        src={languageIcon}
        alt=""
        aria-hidden
        className="absolute z-[3] pointer-events-none min-[1280px]:z-0"
        style={{
          left: isTablet ? "calc(50% + 182px)" : "50%",
          top: isTablet ? "760px" : "58%",
          transform: "translate(-50%, -50%)",
          width: isTablet ? "88px" : "56px",
          height: isTablet ? "88px" : "56px",
        }}
      />

      {/* Content */}
      <Container className="relative z-10 flex flex-col min-[1280px]:flex-row items-center justify-start min-[1280px]:justify-center gap-[48px] min-[1280px]:gap-[40px] py-[48px] min-[1280px]:py-0">
        {/* Left / top column */}
        <div className="flex flex-col gap-[32px] items-center min-[1280px]:items-start w-full min-[1280px]:flex-1 min-[1280px]:min-w-0">
          <div className="flex flex-col gap-[24px] min-[1280px]:gap-[32px] items-center min-[1280px]:items-start w-full">
            <h1 className="w-full font-['Roboto_Condensed',sans-serif] font-bold text-[#4f378a] text-[44px] leading-[52px] tracking-[-0.25px] text-center min-[1280px]:text-left min-[1280px]:text-[52px] min-[1280px]:leading-[56px]">
              Литовский язык&nbsp;для русскоязычных
            </h1>

            <div className="flex flex-col gap-[16px] items-center min-[1280px]:items-start w-full">
              <p className="w-full font-['Roboto',sans-serif] font-normal text-[#4a4459] text-[24px] leading-[32px] text-center min-[1280px]:text-left">
                Долгожданное мобильное приложение для системного изучения литовского языка
              </p>

              {/* Feature list — desktop only */}
              <div className="hidden min-[1280px]:flex flex-col gap-[12px] w-full">
                {FEATURE_ITEMS.map((t) => (
                  <CheckItem key={t} text={t} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col min-[768px]:flex-row gap-[16px] min-[1280px]:gap-[24px] items-stretch min-[1280px]:items-start justify-center min-[1280px]:justify-start w-full">
            <a
              href="#download"
              className="w-full min-[768px]:w-auto bg-[#6750a4] border-2 border-[#6750a4] flex items-center justify-center px-[40px] py-[20px] rounded-[12px] cursor-pointer hover:opacity-90 transition-opacity"
              style={{ boxShadow: "0 8px 20px rgba(103, 80, 164, 0.45)" }}
            >
              <span className="font-['Roboto',sans-serif] font-medium text-white text-[22px] leading-[28px] whitespace-nowrap">
                Купить за 10 €/мес
              </span>
            </a>

            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("features");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: "smooth" });
              }}
              className="w-full min-[768px]:w-auto bg-[rgba(208,188,255,0.16)] flex items-center justify-center px-[40px] py-[20px] rounded-[12px] border-2 border-[#d0bcff] cursor-pointer hover:bg-[rgba(208,188,255,0.3)] transition-colors"
            >
              <span className="font-['Roboto',sans-serif] font-medium text-[#6750a4] text-[22px] leading-[28px] whitespace-nowrap">
                Узнать больше
              </span>
            </a>
          </div>
        </div>

        {/* Phone mockup + mobile feature card */}
        <div
          className="flex justify-center min-[1280px]:flex-1 min-[1280px]:min-w-0 min-[1280px]:items-center relative z-[2] w-full items-start"
          style={isTablet ? { height: "860px", flexShrink: 0 } : {}}
        >
          <div style={{ width: `${370 * phoneScale}px`, height: `${742 * phoneScale}px`, flexShrink: 0 }}>
            <div style={{ transformOrigin: isTablet ? "top center" : "top left",
              position: "absolute",
              left: isTablet ? "50%" : undefined,
              transform: isTablet
                ? `translateX(-50%) scale(${phoneScale})`
                : `scale(${phoneScale})` }}>

              <div className="h-[742px] relative w-[370px]">
                <div className="absolute inset-[3.13%_6.73%_2.89%_6.26%]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img0100Screen} />
                </div>

                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370 742">
                  <path clipRule="evenodd" d={svgPaths.p3a7aa080} fill="#79747E" fillRule="evenodd" />
                </svg>

                <div className="absolute inset-[93.17%_6.5%_2.89%_6.5%]">
                  <div className="-translate-x-1/2 absolute bg-[#79747e] bottom-[9px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" />
                </div>

                <div className="absolute bg-white h-[129px] overflow-clip rounded-[24px] w-[130px]" style={{ left: "305px", top: "434px" }}>
                  <img alt="App icon" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={img11} />
                  <div className="absolute bg-[rgba(255,255,255,0.1)] inset-0 rounded-[24px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile feature card */}
          <div className="absolute left-0 right-0 bottom-[24px] block min-[768px]:hidden bg-[#6750a4] rounded-[24px] overflow-hidden z-[4]">
            <div className="absolute right-[-80px] top-[-80px] size-[300px] pointer-events-none opacity-30">
              <div className="absolute inset-[-49.75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1604 1604">
                  <g filter="url(#filter-card-blob-mobile)">
                    <circle cx="802" cy="802" fill="#D0BCFF" r="402" />
                  </g>
                  <defs>
                    <filter id="filter-card-blob-mobile" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1604" width="1604" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="200" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] px-[28px] py-[28px] relative z-10">
              {FEATURE_ITEMS.map((t) => (
                <div key={t} className="flex gap-[16px] items-start">
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <div className="absolute bottom-1/4 left-[16.04%] right-[16.04%] top-[24.9%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 12.025">
                        <path d={svgPaths.p23b3580} fill="#EADDFF" />
                      </svg>
                    </div>
                  </div>

                  <p className="font-['Roboto',sans-serif] font-normal text-white text-[22px] leading-[28px] tracking-[0.5px]">
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet feature card */}
        <div className="hidden min-[768px]:block min-[1280px]:hidden w-full bg-[#6750a4] rounded-[24px] overflow-hidden relative z-0">
          <div className="absolute right-[-80px] top-[-80px] size-[300px] pointer-events-none opacity-30">
            <div className="absolute inset-[-49.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1604 1604">
                <g filter="url(#filter-card-blob)">
                  <circle cx="802" cy="802" fill="#D0BCFF" r="402" />
                </g>
                <defs>
                  <filter id="filter-card-blob" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1604" width="1604" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="200" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-[24px] gap-y-[16px] px-[48px] py-[40px] relative z-10">
            {FEATURE_ITEMS.map((t) => (
              <div key={t} className="flex gap-[12px] items-start">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute bottom-1/4 left-[16.04%] right-[16.04%] top-[24.9%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 12.025">
                      <path d={svgPaths.p23b3580} fill="#EADDFF" />
                    </svg>
                  </div>
                </div>

                <p className="font-['Roboto',sans-serif] font-normal text-white text-[18px] leading-[24px] tracking-[0.5px]">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── Feature sections ─────────────────────────────────────────────────────────
function FeatureRow({
  left,
  right,
  bg = "white",
}: {
  left: ReactNode;
  right: ReactNode;
  bg?: string;
}) {
  return (
    <div className="relative overflow-hidden w-full" style={{ background: bg }}>
      <Container className="flex flex-col min-[1280px]:flex-row gap-[40px] min-[1280px]:gap-[40px] items-start min-[1280px]:items-center py-[56px] min-[1280px]:py-[80px]">
        {left}
        {right}
      </Container>
    </div>
  );
}

function SectionText({ title, body, items }: { title: string; body: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-[24px] min-[1280px]:gap-[32px] items-start flex-1 min-w-0 w-full">
      <h2 className="font-['Roboto_Condensed',sans-serif] font-bold text-[#6750a4] text-[32px] leading-[40px] min-[1280px]:text-[40px] min-[1280px]:leading-[48px] tracking-[-0.25px]">
        {title}
      </h2>

      <p className="font-['Roboto',sans-serif] font-normal text-[#4a4459] text-[24px] leading-[32px] min-[1280px]:text-[22px] min-[1280px]:leading-[28px]">
        {body}
      </p>

      <div className="flex flex-col gap-[12px] w-full">
        {items.map((t) => (
          <CheckItem key={t} text={t} />
        ))}
      </div>
    </div>
  );
}

function MobileFeatureImages({
  src1,
  src2,
  avatarSrc,
}: {
  src1: string;
  src2?: string;
  avatarSrc?: string;
}) {
  const [active, setActive] = useState<0 | 1>(0);

  if (!src2) {
    return (
      <div className="min-[1280px]:hidden relative w-full overflow-hidden pt-[8px]">
        <div className="flex justify-center">
          <PhoneShot src={src1} />
        </div>
        {avatarSrc && (
          <div className="absolute left-[24px] top-[220px] rounded-full size-[96px] overflow-hidden pointer-events-none z-[3]">
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full rounded-full" src={avatarSrc} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-[1280px]:hidden relative w-full overflow-hidden pt-[8px] pb-[8px]">
      <div className="relative h-[520px]">
        <button
          type="button"
          onClick={() => setActive(0)}
          className="absolute top-0 transition-all duration-300"
          style={{
            left: active === 0 ? "52px" : "-220px",
            zIndex: active === 0 ? 2 : 1,
          }}
        >
          <PhoneShot src={src1} />
        </button>

        <button
          type="button"
          onClick={() => setActive(1)}
          className="absolute top-0 transition-all duration-300"
          style={{
            left: active === 1 ? "52px" : "300px",
            zIndex: active === 1 ? 2 : 1,
          }}
        >
          <PhoneShot src={src2} />
        </button>

        {avatarSrc && (
          <div className="absolute left-[8px] top-[210px] rounded-full size-[96px] overflow-hidden pointer-events-none z-[3]">
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full rounded-full" src={avatarSrc} />
          </div>
        )}
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div id="features" className="relative overflow-hidden w-full bg-white">
      <Container className="flex flex-col min-[1280px]:flex-row gap-[40px] items-start min-[1280px]:items-center py-[56px] min-[1280px]:py-[80px]">
        <div className="hidden min-[1280px]:block relative flex-1 min-w-0">
          <PhonePair src1={imgScreenshot1} src2={imgScreenshot2} />
          <div
            className="absolute rounded-full size-[120px] overflow-hidden pointer-events-none z-[3]"
            style={{ left: "-58px", top: "266px" }}
          >
            <img alt="" className="absolute inset-0 max-w-none object-bottom size-full rounded-full" src={img1} />
          </div>
        </div>

        <SectionText
          title="Грамматика каждого слова"
          body="Получайте подробную грамматическую справку по каждому слову, когда работаете с переводом текста и в других упражнениях."
          items={["грамматика слова", "озвучка каждого слова", "озвучка готового предложения"]}
        />

        <MobileFeatureImages src1={imgScreenshot2} src2={imgScreenshot1} avatarSrc={img1} />
      </Container>
    </div>
  );
}

function Section2() {
  return (
    <div className="relative overflow-hidden w-full bg-white">
      <Container className="flex flex-col min-[1280px]:flex-row gap-[40px] items-start min-[1280px]:items-center py-[56px] min-[1280px]:py-[80px]">
        <SectionText
          title="Изучение форм слов"
          body="Изучайте и оттачивайте навыки использования слов: глаголов, прилагательных, существительных и других частей речи."
          items={["грамматическая справка", "озвучка каждого слова"]}
        />

        <div className="hidden min-[1280px]:flex items-center justify-center flex-1 min-w-0">
          <div className="relative">
            <PhoneShot src={imgScreenshot3} />
            <div
              className="absolute rounded-full size-[120px] overflow-hidden pointer-events-none"
              style={{ right: "-70px", top: "270px" }}
            >
              <img alt="" className="absolute h-[362.87%] left-[-194.91%] max-w-none top-[-35.27%] w-[483.83%]" src={img2} />
            </div>
          </div>
        </div>

        <MobileFeatureImages src1={imgScreenshot3} avatarSrc={img2} />
      </Container>
    </div>
  );
}

function Section3() {
  return (
    <div className="relative bg-[#fef7ff] overflow-hidden w-full">
      {/* Purple blob */}
      <div className="absolute z-0 pointer-events-none size-[560px] left-[-300px] top-[-260px] min-[1280px]:left-[-242px] min-[1280px]:top-[-402px] min-[1280px]:size-[804px]">
        <div className="absolute inset-[-49.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1604 1604">
            <g filter="url(#filter-s3-1)">
              <circle cx="802" cy="802" fill="#E8DEF8" r="402" />
            </g>
            <defs>
              <filter id="filter-s3-1" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1604" width="1604" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* White blob */}
      <div className="absolute z-0 pointer-events-none size-[560px] right-[-300px] bottom-[-260px] min-[1280px]:right-[-242px] min-[1280px]:bottom-[-402px] min-[1280px]:size-[804px]">
        <div className="absolute inset-[-49.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1604 1604">
            <g filter="url(#filter-s3-2)" opacity="0.8">
              <circle cx="802" cy="802" fill="white" r="402" />
            </g>
            <defs>
              <filter id="filter-s3-2" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1604" width="1604" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <Container className="relative z-[1] flex flex-col min-[1280px]:flex-row gap-[40px] items-start min-[1280px]:items-center py-[56px] min-[1280px]:py-[80px]">
        <div className="hidden min-[1280px]:block flex-1 min-w-0">
          <PhonePair src1={imgScreenshot4} src2={imgScreenshot5New} />
        </div>

        <SectionText
          title="Тренажёр и работа над ошибками"
          body="Главная трудность в литовском языке — это многочисленные формы одних и тех же слов. Поэтому мы подготовили для вас удобные тренажёр форм, где вы сможете закреплять свои знания. Также вам доступна работа над ошибками."
          items={["работа над ошибками", "ваш собственный словарь", "тренировка труднозапоминаемых слов", "тренировка форм слов", "все ключевые части речи"]}
        />

        <MobileFeatureImages src1={imgScreenshot4} src2={imgScreenshot5New} />
      </Container>

      <div className="hidden min-[1280px]:block absolute right-[191px] top-[488px] size-[64px] pointer-events-none">
        {/* оставь здесь твой SVG floating exercise icon без изменений */}
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="relative overflow-hidden w-full bg-white">
      <Container className="flex flex-col min-[1280px]:flex-row gap-[40px] items-start min-[1280px]:items-center py-[56px] min-[1280px]:py-[80px]">
        <SectionText
          title="Изучайте новые слова"
          body="Пополняйте свой словарный запас с помощью современных методик обучения."
          items={[
            "визуальные образы",
            "произношение слов",
            "примеры использования",
            "дополнительные пояснения",
            "литовская озвучка",
            "сохранение нужных слов в словарь",
          ]}
        />

        <div className="hidden min-[1280px]:block relative flex-1 min-w-0">
          <PhonePair src1={imgScreenshot6} src2={imgScreenshot7} reverse avatarSrc={img3} />
        </div>

        <MobileFeatureImages src1={imgScreenshot6} src2={imgScreenshot7} avatarSrc={img3} />
      </Container>
    </div>
  );
}

function Section5() {
  return (
    <div className="relative overflow-hidden w-full bg-white">
      <Container className="flex flex-col min-[1280px]:flex-row gap-[40px] items-start min-[1280px]:items-center py-[56px] min-[1280px]:py-[80px]">
        <div className="hidden min-[1280px]:block flex-1 min-w-0">
          <PhonePair src1={imgScreenshot8} src2={imgScreenshot9} />
        </div>

        <SectionText
          title="Аудирование и произношение"
          body="Тренируйте правильное произношение и аудирование литовского с помощью специальных упражнений."
          items={["переслушивайте аудио", "запоминайте произношение", "повторяйте вслед за методистом"]}
        />

        <MobileFeatureImages src1={imgScreenshot8} src2={imgScreenshot9} />
      </Container>
    </div>
  );
}

// ─── Legal pages data and layout ───────────────────────────────────────────────
type LegalBlock = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

const PRIVACY_POLICY: LegalBlock[] = [
  {
    title: "1. Общие положения",
    paragraphs: [
      "Liežuvis — мобильное приложение для изучения литовского языка.",
      "Настоящая Политика конфиденциальности объясняет, какие данные могут обрабатываться при использовании приложения, для каких целей они используются и какие права есть у пользователя.",
      "Используя приложение, пользователь соглашается с настоящей Политикой конфиденциальности.",
    ],
  },
  {
    title: "2. Какие данные мы можем обрабатывать",
    paragraphs: ["При использовании приложения могут обрабатываться следующие данные:"],
    items: [
      "данные аккаунта: адрес электронной почты, имя или идентификатор пользователя, если они предоставлены через Apple, Google или email-вход;",
      "технические данные, необходимые для работы приложения;",
      "данные о прогрессе обучения: пройденные уроки, результаты упражнений, статистика, текущий урок;",
      "данные словаря пользователя: добавленные слова, статус изучения, результаты тренировок;",
      "данные о подписке и доступе к платным функциям;",
      "настройки пользователя, включая настройки push-уведомлений.",
    ],
  },
  {
    title: "3. Для чего используются данные",
    paragraphs: ["Данные используются для:"],
    items: [
      "создания и поддержки аккаунта;",
      "входа в приложение;",
      "сохранения прогресса обучения;",
      "работы словаря пользователя и тренажёров;",
      "предоставления доступа к подписке и платным функциям;",
      "отправки push-уведомлений, если пользователь разрешил уведомления;",
      "улучшения стабильности и качества работы приложения;",
      "поддержки пользователя.",
    ],
  },
  {
    title: "4. Вход через Apple, Google или email",
    paragraphs: [
      "Пользователь может входить в приложение с помощью Apple, Google или email.",
      "При использовании сторонних сервисов входа приложение может получать базовые данные, необходимые для создания и идентификации аккаунта, например адрес электронной почты или уникальный идентификатор пользователя.",
    ],
  },
  {
    title: "5. Подписка и платежи",
    paragraphs: [
      "Оплата подписки обрабатывается через App Store или Google Play.",
      "Приложение не получает и не хранит данные банковских карт пользователя.",
      "Информация о статусе подписки может использоваться приложением для предоставления доступа к платному контенту и функциям.",
    ],
  },
  {
    title: "6. Push-уведомления",
    paragraphs: [
      "Приложение может отправлять push-уведомления, если пользователь дал на это разрешение.",
      "Пользователь может отключить уведомления в настройках приложения или настройках устройства.",
    ],
  },
  {
    title: "7. Передача данных третьим лицам",
    paragraphs: [
      "Данные могут обрабатываться с использованием сервисов, необходимых для работы приложения, например сервисов авторизации, хранения данных, отправки уведомлений, обработки подписок и размещения приложения.",
      "Мы не продаём персональные данные пользователей.",
    ],
  },
  {
    title: "8. Хранение и защита данных",
    paragraphs: [
      "Мы принимаем разумные технические и организационные меры для защиты данных пользователя.",
      "Данные хранятся столько, сколько необходимо для работы приложения, выполнения юридических обязательств и защиты законных интересов.",
    ],
  },
  {
    title: "9. Удаление аккаунта и данных",
    paragraphs: [
      "Пользователь может запросить удаление аккаунта и связанных с ним данных через приложение или связавшись с разработчиком.",
      "После удаления аккаунта связанные данные пользователя удаляются или обезличиваются, за исключением случаев, когда их хранение требуется законом, правилами App Store или Google Play, либо необходимо для финансовой, налоговой или юридической отчётности.",
      "Удаление аккаунта не отменяет активную подписку автоматически. Управление подпиской осуществляется через App Store или Google Play.",
    ],
  },
  {
    title: "10. Права пользователя",
    paragraphs: ["Пользователь может запросить:"],
    items: [
      "доступ к своим данным;",
      "исправление данных;",
      "удаление аккаунта и связанных данных;",
      "ограничение обработки данных, если применимо.",
    ],
  },
  {
    title: "11. Изменения Политики конфиденциальности",
    paragraphs: [
      "Мы можем обновлять настоящую Политику конфиденциальности.",
      "Продолжение использования приложения после обновления означает согласие с новой редакцией Политики конфиденциальности.",
    ],
  },
  {
    title: "12. Контакты",
    paragraphs: [
      "По вопросам конфиденциальности и обработки данных пользователь может связаться с разработчиком по контактным данным, указанным в приложении.",
    ],
  },
];

const TERMS_OF_USE: LegalBlock[] = [
  {
    title: "1. Общие положения",
    paragraphs: [
      "Liežuvis — образовательное приложение для изучения литовского языка.",
      "Используя приложение, пользователь подтверждает согласие с настоящими Условиями использования и Политикой конфиденциальности.",
    ],
  },
  {
    title: "2. Аккаунт пользователя",
    paragraphs: [
      "Для использования отдельных функций приложения может потребоваться создание учётной записи.",
      "Пользователь несёт ответственность за сохранность данных своей учётной записи.",
    ],
  },
  {
    title: "3. Подписка",
    paragraphs: [
      "Некоторые функции и материалы приложения доступны только пользователям с активной подпиской.",
      "Подписка предоставляет доступ к контенту и функциям, доступным в приложении в течение периода действия подписки.",
      "Условия оплаты, продления и отмены подписки регулируются правилами App Store и Google Play.",
    ],
  },
  {
    title: "4. Учебный контент и обновления",
    paragraphs: [
      "Приложение находится в стадии активного развития.",
      "Учебные материалы, уроки, упражнения, словарь, теория, функции приложения и структура курса могут периодически добавляться, изменяться, перерабатываться или удаляться.",
      "Разработчик не гарантирует выпуск определённого количества уроков, функций или обновлений в конкретные сроки.",
    ],
  },
  {
    title: "5. Результаты обучения",
    paragraphs: [
      "Приложение является инструментом для самостоятельного изучения языка.",
      "Результаты обучения зависят от множества факторов, включая регулярность занятий, уровень подготовки пользователя и объём самостоятельной практики.",
      "Использование приложения не гарантирует достижение определённого уровня владения литовским языком, успешную сдачу экзаменов или достижение иных образовательных результатов.",
    ],
  },
  {
    title: "6. Интеллектуальная собственность",
    paragraphs: [
      "Все материалы приложения, включая тексты, упражнения, изображения, аудио и программный код, защищены законодательством об интеллектуальной собственности.",
      "Копирование, распространение или коммерческое использование материалов без разрешения правообладателя запрещено.",
    ],
  },
  {
    title: "7. Ограничение ответственности",
    paragraphs: [
      "Приложение предоставляется «как есть».",
      "Разработчик прилагает разумные усилия для обеспечения корректной работы сервиса, однако не гарантирует отсутствие ошибок, перебоев, технических сбоев или временной недоступности отдельных функций.",
    ],
  },
  {
    title: "8. Изменение сервиса",
    paragraphs: [
      "Разработчик вправе изменять содержание приложения, структуру курса, доступные функции и настоящие Условия использования.",
      "Продолжение использования приложения после внесения изменений означает согласие пользователя с обновлённой редакцией условий.",
    ],
  },
  {
    title: "9. Контакты",
    paragraphs: [
      "По вопросам работы приложения пользователь может связаться с разработчиком по контактным данным, указанным в приложении.",
    ],
  },
];

function LegalPage({
  title,
  subtitle,
  blocks,
  onBack,
}: {
  title: string;
  subtitle: string;
  blocks: LegalBlock[];
  onBack: () => void;
}) {
  return (
    <section className="bg-white py-[40px]">
      <Container>
        <article className="mx-auto max-w-[680px]">
          <button
            type="button"
            onClick={onBack}
            className="mb-[40px] rounded-[100px] bg-[#e8def8] px-[24px] py-[12px] font-['Roboto',sans-serif] font-medium text-[#4a4459] text-[16px] leading-[24px] tracking-[0.5px] hover:bg-[#d8cef0] transition-colors"
          >
            ← Вернуться на сайт
          </button>

          <header className="mb-[40px]">
            <h1 className="font-['Roboto_Condensed',sans-serif] font-bold text-[#6750a4] text-[40px] leading-[48px] tracking-[-0.25px]">
              {title}
            </h1>

            <p className="mt-[8px] font-['Roboto',sans-serif] font-normal text-[#625b71] text-[16px] leading-[24px] tracking-[0.5px]">
              {subtitle}
            </p>
          </header>

          <div className="flex flex-col gap-[32px]">
            {blocks.map((block) => (
              <section key={block.title}>
                <h2 className="mb-[24px] font-['Roboto_Condensed',sans-serif] font-bold text-[#6750a4] text-[28px] leading-[36px] tracking-[-0.25px]">
                  {block.title}
                </h2>

                <div className="flex flex-col gap-[12px]">
                  {block.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {block.items && (
                    <ul className="flex flex-col gap-[12px] list-disc pl-[24px]">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}

function DeleteAccountPage({ onBack }: { onBack: () => void }) {
  return (
    <section className="bg-white py-[40px]">
      <div className="mx-auto w-full max-w-[680px] px-[20px] sm:px-[40px]">
        <article>
          <button
            type="button"
            onClick={onBack}
            className="mb-[40px] rounded-[100px] bg-[#e8def8] px-[24px] py-[12px] font-['Roboto',sans-serif] font-medium text-[#4a4459] text-[16px] leading-[24px] tracking-[0.5px] hover:bg-[#d8cef0] transition-colors"
          >
            ← Вернуться на сайт
          </button>

          <header className="mb-[40px]">
            <h1 className="font-['Roboto_Condensed',sans-serif] font-bold text-[#6750a4] text-[40px] leading-[48px] tracking-[-0.25px]">
              Удаление аккаунта Liežuvis
            </h1>

            <p className="mt-[8px] font-['Roboto',sans-serif] font-normal text-[#625b71] text-[16px] leading-[24px] tracking-[0.5px]">
              Delete Account
            </p>
          </header>

          <div className="flex flex-col gap-[32px]">
            <section>
              <p className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">
                Пользователи приложения Liežuvis могут удалить свой аккаунт и связанные с ним данные непосредственно в приложении.
              </p>
            </section>

            <section>
              <h2 className="mb-[24px] font-['Roboto_Condensed',sans-serif] font-bold text-[#6750a4] text-[28px] leading-[36px] tracking-[-0.25px]">
                Как удалить аккаунт
              </h2>

              <img
                src="/images/delete-account-steps.png"
                alt="Инструкция по удалению аккаунта Liežuvis"
                className="mb-[24px] w-full rounded-[24px] border border-[#cac4d0]"
              />

              <ol className="flex flex-col gap-[12px] list-decimal pl-[24px]">
                <li className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">
                  Откройте приложение Liežuvis.
                </li>
                <li className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">
                  Перейдите во вкладку «Профиль».
                </li>
                <li className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">
                  Нажмите «Удалить аккаунт».
                </li>
                <li className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">
                  Подтвердите удаление.
                </li>
              </ol>

              <p className="mt-[16px] font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">
                После подтверждения аккаунт будет удалён.
              </p>
            </section>

            <section>
              <h2 className="mb-[24px] font-['Roboto_Condensed',sans-serif] font-bold text-[#6750a4] text-[28px] leading-[36px] tracking-[-0.25px]">
                Какие данные удаляются
              </h2>

              <p className="mb-[12px] font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">
                При удалении аккаунта удаляются:
              </p>

              <ul className="flex flex-col gap-[12px] list-disc pl-[24px]">
                <li className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">профиль пользователя;</li>
                <li className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">прогресс обучения;</li>
                <li className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">результаты упражнений;</li>
                <li className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">настройки пользователя;</li>
                <li className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">данные доступа к приложению.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-[24px] font-['Roboto_Condensed',sans-serif] font-bold text-[#6750a4] text-[28px] leading-[36px] tracking-[-0.25px]">
                Какие данные могут сохраняться
              </h2>

              <div className="flex flex-col gap-[12px]">
                <p className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">
                  Некоторые технические записи могут временно храниться в резервных копиях и журналах системы в целях обеспечения безопасности и восстановления работоспособности сервиса.
                </p>

                <p className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">
                  Такие данные автоматически удаляются в соответствии с политикой хранения данных и не используются для идентификации пользователя после удаления аккаунта.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-[24px] font-['Roboto_Condensed',sans-serif] font-bold text-[#6750a4] text-[28px] leading-[36px] tracking-[-0.25px]">
                Контакты
              </h2>

              <p className="font-['Roboto',sans-serif] font-normal text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px]">
                Если у вас возникли вопросы, свяжитесь с нами через форму обратной связи на сайте Liežuvis.
              </p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}

// ─── Download / Buy banner ─────────────────────────────────────────────────────
function AppStoreBadge() {
  return (
    <div className="h-[59px] relative shrink-0 w-[204px]">
      <div className="absolute contents inset-0">
        <div className="absolute inset-[1.89%_0.56%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 201.962 56.7736">
            <path d={svgPaths.p10092c00} fill="black" />
          </svg>
        </div>
        <div className="absolute inset-[15.54%_75.15%_20.68%_9.48%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.4003 37.6296">
            <g><path d={svgPaths.p201ab600} fill="white" /><path d={svgPaths.p26977700} fill="white" /></g>
          </svg>
        </div>
        <div className="absolute inset-[45%_9.51%_11.47%_31.41%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120.641 25.6842">
            <g>
              <path d={svgPaths.p2a75db00} fill="white" />
              <path d={svgPaths.p11ae7b00} fill="white" />
              <path d={svgPaths.p19d10000} fill="white" />
              <path d={svgPaths.p2ab30980} fill="white" />
              <path d={svgPaths.p2ca23a80} fill="white" />
              <path d={svgPaths.p1ad1bb80} fill="white" />
              <path d={svgPaths.p139ce9f0} fill="white" />
              <path d={svgPaths.p61b3700} fill="white" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-[16.39%_10.22%_66.15%_32.35%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.291 10.3014">
            <g>
              <path d={svgPaths.pf89dd80} fill="white" />
              <path d={svgPaths.p269a3500} fill="white" />
              <path d={svgPaths.p3d986f80} fill="white" />
              <path d={svgPaths.p2069bd00} fill="white" />
              <path d={svgPaths.p344c9f30} fill="white" />
              <path d={svgPaths.p28870ba0} fill="white" />
              <path d={svgPaths.p33f01f00} fill="white" />
              <path d={svgPaths.p9e4dc00} fill="white" />
              <path d={svgPaths.p37060080} fill="white" />
              <path d={svgPaths.p31325580} fill="white" />
              <path d={svgPaths.p3fb8c990} fill="white" />
              <path d={svgPaths.p3a563980} fill="white" />
              <path d={svgPaths.p256b7100} fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="bg-[#4f378b] relative overflow-hidden py-[72px] min-[1280px]:py-[80px]">
      {/* Background blur circle */}
      <div className="-translate-x-1/2 absolute left-1/2 size-[804px] top-[-526px] pointer-events-none">
        <div className="absolute inset-[-49.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1604 1604">
            <g filter="url(#filter-dl-1)" opacity="0.3">
              <circle cx="802" cy="802" fill="#D0BCFF" r="402" />
            </g>
            <defs>
              <filter id="filter-dl-1" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1604" width="1604" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBuy} />

      <Container className="relative z-10 flex flex-col items-center text-white text-center">
        <div className="w-full max-w-[720px] px-[16px]">
          <h2 className="font-['Roboto_Condensed',sans-serif] font-bold text-[40px] leading-[48px] min-[1280px]:text-[64px] min-[1280px]:leading-[72px] tracking-[-0.25px] w-full">
            Уже доступно<br className="min-[1280px]:hidden" /> 40+ уроков
          </h2>

          <div className="mt-[32px] flex flex-col gap-[24px] min-[1280px]:mt-[20px] min-[1280px]:gap-[20px]">
            <p className="font-['Roboto',sans-serif] font-normal text-[24px] leading-[32px] w-full">
              Мы ежедневно работаем, чтобы вы могли регулярно получать новые уроки и постоянно совершенствовать знания литовского языка.
            </p>

            <p className="font-['Roboto',sans-serif] font-normal text-[24px] leading-[32px] w-full">
              Стоимость подписки всего лишь <span className="font-medium">10 €/месяц</span>. Пробный период три дня.
            </p>
          </div>
        </div>
      </Container>

      <Container className="relative z-10 flex flex-col min-[768px]:flex-row gap-[24px] min-[1280px]:gap-[40px] items-center justify-center mt-[48px]">
        <AppStoreBadge />

        <div className="h-[59px] bg-black rounded-[8px] flex items-center justify-center px-[16px] gap-[12px] w-[204px]">
          <svg width="24" height="27" viewBox="0 0 24 27" fill="none">
            <path d="M1.5 0.5L13.5 12.5L1.5 24.5" stroke="white" strokeWidth="1.5" />
            <path d="M0 1.5L12 13.5L0 25.5V1.5Z" fill="url(#gp1)" />
            <defs>
              <linearGradient id="gp1" x1="0" y1="1.5" x2="12" y2="13.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00A0FF" />
                <stop offset="1" stopColor="#00BEFF" />
              </linearGradient>
            </defs>
          </svg>

          <div>
            <div className="text-white text-[9px] font-['Roboto',sans-serif]">GET IT ON</div>
            <div className="text-white text-[16px] font-['Roboto',sans-serif] font-medium leading-tight">Google Play</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const COOLDOWN_MS = 10 * 60 * 1000;
const LS_KEY = "liezuvis_last_sent";

function useContactCooldown() {
  const getSentAt = () => {
    const v = localStorage.getItem(LS_KEY);
    return v ? parseInt(v, 10) : null;
  };
  const getMinutesLeft = () => {
    const sentAt = getSentAt();
    if (!sentAt) return 0;
    const elapsed = Date.now() - sentAt;
    return Math.max(0, Math.ceil((COOLDOWN_MS - elapsed) / 60000));
  };
  const [minutesLeft, setMinutesLeft] = useState(getMinutesLeft);

  useEffect(() => {
    if (minutesLeft === 0) return;
    const id = setInterval(() => {
      const m = getMinutesLeft();
      setMinutesLeft(m);
      if (m === 0) clearInterval(id);
    }, 30000);
    return () => clearInterval(id);
  }, [minutesLeft]);

  const markSent = () => {
    localStorage.setItem(LS_KEY, String(Date.now()));
    setMinutesLeft(10);
  };

  return { minutesLeft, markSent };
}

// ─── Contact Form ──────────────────────────────────────────────────────────────
function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const isValidEmail = (v: string) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(v);
  const sanitizeEmail = (v: string) => v.replace(/[^\x20-\x7E]/g, "");
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [shaking, setShaking] = useState({ name: false, email: false, message: false });
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const { minutesLeft, markSent } = useContactCooldown();
  const sent = minutesLeft > 0;

  const shake = (field: "name" | "email" | "message") => {
    setShaking((s) => ({ ...s, [field]: true }));
    setTimeout(() => setShaking((s) => ({ ...s, [field]: false })), 500);
  };

  const handleSubmit = () => {
    if (sent) return;

    const newErrors = {
      name: name.trim() === "",
      email: !isValidEmail(email.trim()),
      message: message.trim() === "",
    };

    setErrors(newErrors);

    if (newErrors.name) shake("name");
    if (newErrors.email) shake("email");
    if (newErrors.message) shake("message");
    if (newErrors.name || newErrors.email || newErrors.message) return;

    setSendError(false);
    setIsSending(true);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        markSent();
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setSendError(true);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const fieldClass = (field: "name" | "email" | "message") =>
    [
      "relative rounded-[4px] border transition-colors",
      errors[field] ? "border-[#B3261E]" : "border-[#79747e]",
      shaking[field] ? "animate-shake" : "",
    ].join(" ");

  const inputClass =
    "w-full px-[16px] font-['Roboto',sans-serif] text-[#1d1b20] text-[16px] leading-[24px] tracking-[0.5px] bg-transparent outline-none rounded-[4px] placeholder-[#49454f]";

  return (
    <section id="contact" className="bg-white py-[72px] min-[1280px]:py-[80px]">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15% { transform: translateX(-6px); }
          35% { transform: translateX(6px); }
          55% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
          90% { transform: translateX(-2px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }

        @keyframes fly-right {
          0%   { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(160px); opacity: 0; }
        }
        @keyframes fade-out-text {
          0%   { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(40px); }
        }
        @keyframes fade-in-sent {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fly { animation: fly-right 0.45s ease-out 0.3s forwards; }
        .animate-fadeout { animation: fade-out-text 0.25s ease-in forwards; }
        .animate-fadein { animation: fade-in-sent 0.4s ease-out 0.1s both; }

        @keyframes invalid-flash {
          0%, 100% { border-color: #79747e; }
          20%, 60% { border-color: #B3261E; }
        }
        .animate-invalid { animation: shake 0.5s ease-in-out, invalid-flash 0.6s ease-in-out; }
      `}</style>

      <Container>
        <div className="max-w-[600px] mx-auto flex flex-col gap-[32px] items-center">
          <h2 className="font-['Roboto_Condensed',sans-serif] font-bold text-[#6750a4] text-[28px] leading-[34px] min-[1280px]:text-[40px] min-[1280px]:leading-[48px] tracking-[-0.25px] text-center">
            Обратная связь
          </h2>

          <p className="font-['Roboto',sans-serif] font-normal text-[#4a4459] text-[24px] leading-[32px] min-[1280px]:text-[22px] min-[1280px]:leading-[28px] text-center">
            Есть вопрос, предложение или проблема с приложением? Напишите нам — мы ответим на почту.
          </p>

          <div className="flex flex-col gap-[16px] w-full mb-[20px]">
            <div className={fieldClass("name")}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.trim()) setErrors((er) => ({ ...er, name: false }));
                }}
                maxLength={60}
                className={`${inputClass} h-[56px] py-[4px]`}
              />
            </div>

            <div
              className={[
                "relative rounded-[4px] border transition-colors",
                emailInvalid ? "animate-invalid border-[#B3261E]" : errors.email ? "border-[#B3261E]" : "border-[#79747e]",
                shaking.email ? "animate-shake" : "",
              ].join(" ")}
            >
              <input
                type="email"
                placeholder="Ваша почта"
                value={email}
                onChange={(e) => {
                  const raw = e.target.value;
                  const v = sanitizeEmail(raw);

                  if (v !== raw) {
                    setEmailInvalid(true);
                    setTimeout(() => setEmailInvalid(false), 600);
                  }

                  setEmail(v);

                  if (isValidEmail(v)) setErrors((er) => ({ ...er, email: false }));
                }}
                maxLength={254}
                className={`${inputClass} h-[56px] py-[4px]`}
              />
            </div>

            <div className="relative">
              <div className={`${fieldClass("message")} relative`}>
                <textarea
                  placeholder="Текст сообщения"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (e.target.value.trim()) setErrors((er) => ({ ...er, message: false }));
                  }}
                  maxLength={500}
                  className={`${inputClass} h-[152px] py-[12px] resize-none ${message.length > 0 ? "pr-[72px]" : ""}`}
                />

                {message.length > 0 && (
                  <span className="absolute bottom-[10px] right-[16px] font-['Roboto',sans-serif] text-[#49454f] text-[12px] leading-[16px] tracking-[0.4px] pointer-events-none select-none">
                    {message.length} / 500
                  </span>
                )}
              </div>

              {sent && (
                <p className="absolute left-[16px] top-[calc(100%+4px)] font-['Roboto',sans-serif] text-[#49454f] text-[12px] leading-[16px] tracking-[0.4px] whitespace-normal min-[1280px]:whitespace-nowrap">
                  Следующее сообщение можно отправить через {minutesLeft} мин. после предыдущего.
                </p>
              )}

              {sendError && (
                <p className="absolute left-[16px] right-[16px] top-[calc(100%+4px)] font-['Roboto',sans-serif] text-[#B3261E] text-[12px] leading-[16px] tracking-[0.4px] whitespace-normal min-[1280px]:whitespace-nowrap">
                  Сообщение не удалось отправить. Проверьте интернет-соединение и попробуйте снова.
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={sent || isSending}
            className="relative overflow-hidden flex items-center justify-center gap-[12px] w-full min-[1280px]:w-auto px-[48px] py-[32px] rounded-[100px] transition-colors duration-300"
            style={
              sent
                ? { background: "rgba(29,27,32,0.1)", cursor: "not-allowed" }
                : sendError
                  ? { background: "#FFDAD6", cursor: "pointer" }
                  : { background: "#e8def8", cursor: isSending ? "default" : "pointer" }
            }
          >
            {isSending && (
              <div className="flex items-center gap-[12px]">
                <div className="overflow-clip relative shrink-0 size-[32px] animate-fly">
                  <div className="absolute inset-[16.67%_8.33%_16.67%_12.5%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3333 21.3333">
                      <path d={svgPaths.p1803bb80} fill="#4A4459" />
                    </svg>
                  </div>
                </div>

                <span className="animate-fadeout font-['Roboto',sans-serif] font-normal text-[#4a4459] text-[24px] leading-[32px] whitespace-nowrap">
                  Отправить
                </span>
              </div>
            )}

            {!isSending && !sent && sendError && (
              <div className="animate-fadein flex items-center gap-[12px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                    fill="#B3261E"
                  />
                </svg>

                <span className="font-['Roboto',sans-serif] font-normal text-[#B3261E] text-[24px] leading-[32px] whitespace-nowrap">
                  Ошибка
                </span>
              </div>
            )}

            {!isSending && !sent && !sendError && (
              <div className="flex items-center gap-[12px]">
                <div className="overflow-clip relative shrink-0 size-[32px]">
                  <div className="absolute inset-[16.67%_8.33%_16.67%_12.5%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3333 21.3333">
                      <path d={svgPaths.p1803bb80} fill="#4A4459" />
                    </svg>
                  </div>
                </div>

                <span className="font-['Roboto',sans-serif] font-normal text-[#4a4459] text-[24px] leading-[32px] whitespace-nowrap">
                  Отправить
                </span>
              </div>
            )}

            {sent && !isSending && (
              <div className="animate-fadein flex items-center gap-[12px]" style={{ opacity: 0.38 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#1D1B20" />
                </svg>

                <span className="font-['Roboto',sans-serif] font-normal text-[#1D1B20] text-[24px] leading-[32px] whitespace-nowrap">
                  Отправлено
                </span>
              </div>
            )}
          </button>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#e8def8] py-[32px] min-[1280px]:py-[28px] w-full">
      <Container className="flex flex-col min-[1280px]:flex-row items-center min-[1280px]:justify-between gap-[32px]">
        <span className="font-['Roboto',sans-serif] font-medium text-[#6750a4] text-[36px] leading-[44px] min-[1280px]:text-[28px] min-[1280px]:leading-[36px]">
          Liežuvis
        </span>

        <div className="flex flex-col min-[1280px]:flex-row gap-[28px] min-[1280px]:gap-[40px] items-center font-['Roboto',sans-serif] font-medium text-[#625b71] text-[14px] leading-[20px] tracking-[0.1px]">
          <a href="/privacy-policy" className="hover:text-[#4f378a] transition-colors whitespace-nowrap">
            Политика конфиденциальности
          </a>

          <a href="/terms-of-use" className="hover:text-[#4f378a] transition-colors whitespace-nowrap">
            Условия использования
          </a>

          <a href="/delete-account" className="hover:text-[#4f378a] transition-colors whitespace-nowrap">
            Удаление аккаунта
          </a>

          <a href="mailto:support@liezuvis.app" className="hover:text-[#4f378a] transition-colors whitespace-nowrap">
            support@liezuvis.app
          </a>
        </div>
      </Container>
    </footer>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const getPageFromPath = () => {
    if (window.location.pathname === "/privacy-policy") return "privacy";
    if (window.location.pathname === "/terms-of-use") return "terms";
    if (window.location.pathname === "/delete-account") return "delete-account";
    return "home";
  };

  const [page, setPage] = useState<"home" | "privacy" | "terms" | "delete-account">(getPageFromPath);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [buttonBottom, setButtonBottom] = useState(24);

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath());
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const footer = document.querySelector("footer");

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const overlap = window.innerHeight - footerTop;
        setButtonBottom(overlap > 0 ? overlap + 24 : 24);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (page !== "home") {
      setShowScrollTop(false);
      return;
    }

    const hero = document.getElementById("hero");

    if (!hero) {
      setShowScrollTop(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShowScrollTop(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [page]);

  const goHome = () => {
    window.history.pushState(null, "", "/");
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const scrollToElement = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const offset = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: offset, behavior: "smooth" });
    };

    if (page !== "home") {
      window.history.pushState(null, "", "/");
      setPage("home");

      setTimeout(scrollToElement, 0);
      return;
    }

    scrollToElement();
  };

  return (
    <div className="min-h-screen bg-white font-['Roboto',sans-serif]">
      {/* ── Sticky Header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b border-[#cac4d0] h-[72px] flex items-center"
      >
        <Container className="flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="font-['Roboto',sans-serif] font-medium text-[#6750a4] text-center leading-[44px] transition-all duration-300 cursor-pointer bg-transparent border-none"
            style={{ fontSize: scrolled ? "26px" : "36px" }}
          >
            Liežuvis
          </button>

          <nav className="flex gap-[40px] items-center font-['Roboto',sans-serif] font-medium text-[#625b71] text-[14px] leading-[20px] tracking-[0.1px]">
            <button
              onClick={() => scrollTo("hero")}
              className="hover:text-[#4f378a] transition-colors cursor-pointer bg-transparent border-none font-medium text-[14px] tracking-[0.1px]"
            >
              В начало
            </button>

            <button
              onClick={() => scrollTo("features")}
              className="hover:text-[#4f378a] transition-colors cursor-pointer bg-transparent border-none font-medium text-[14px] tracking-[0.1px]"
            >
              Преимущества
            </button>

            <button
              onClick={() => scrollTo("download")}
              className="hover:text-[#4f378a] transition-colors cursor-pointer bg-transparent border-none font-medium text-[14px] tracking-[0.1px]"
            >
              Скачать
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="hover:text-[#4f378a] transition-colors cursor-pointer bg-transparent border-none font-medium text-[14px] tracking-[0.1px]"
            >
              Обратная связь
            </button>
          </nav>
        </Container>
      </header>

      {/* ── Page Content ── */}
      <main style={{ paddingTop: "72px" }}>
        {page === "home" && (
          <>
            <HeroSection />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <DownloadSection />
            <ContactSection />
          </>
        )}

        {page === "privacy" && (
          <LegalPage
            title="Политика конфиденциальности"
            subtitle="Privacy Policy"
            blocks={PRIVACY_POLICY}
            onBack={goHome}
          />
        )}

        {page === "terms" && (
          <LegalPage
            title="Условия использования"
            subtitle="Terms of Use"
            blocks={TERMS_OF_USE}
            onBack={goHome}
          />
        )}

        {page === "delete-account" && (
          <DeleteAccountPage onBack={goHome} />
        )}
      </main>

      <Footer />

      {/* ── Scroll-to-top button ── */}
      {page === "home" && (
        <div
          className="fixed right-6 z-50 transition-all duration-300"
          style={{
            bottom: `${buttonBottom}px`,
            opacity: showScrollTop ? 1 : 0,
            pointerEvents: showScrollTop ? "auto" : "none",
          }}
        >
          <button
            onClick={() => scrollTo("hero")}
            className="bg-[#e8def8] flex items-center justify-center rounded-full w-[56px] h-[56px] cursor-pointer hover:bg-[#d8cef0] transition-colors shadow-md"
            aria-label="Вернуться наверх"
          >
            <div className="size-[24px] relative">
              <div
                className="absolute inset-[16.67%]"
                style={{
                  maskImage: `url("${imgArrowUpward}")`,
                  maskRepeat: "no-repeat",
                  maskPosition: "-4px -4px",
                  maskSize: "24px 24px",
                }}
              >
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16 16"
                >
                  <path d={svgPaths.p3ac9f400} fill="#4A4459" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
