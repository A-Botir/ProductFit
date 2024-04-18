import Logo from "@/assets/images/icon/logo.svg";
import Image from "next/image";

const Footer = () => {
  const TargetLink = ({ url, children }) => (
    <a href={url} rel="noopener noreferrer">
      {children}
    </a>
  );
  return (
    <footer className="container py-8  mx-auto">
      <div className="flex items-center justify-between sm:flex-col sm:gap-6">
        <button className="sm:hidden">
          <Image src={Logo} alt="logo img" />
        </button>
        <ul className="space-y-4 sm:flex sm:justify-between sm:items-centers sm:w-full">
          <li className="text-[16px] leading-5 sm:hidden">
            Мобильные приложения
          </li>
          <li className="text-[16px] leading-5 hidden sm:block">
            Перейти к сайту
          </li>
          <li className="text-[16px] leading-5">Главная страница</li>
        </ul>
        <ul className="space-y-4">
          <li className="text-[16px] leading-5 font-bold">Связаться с нами</li>
          <li className="text-[16px] leading-5 flex items-center justify-center gap-2 font-bold sm:hidden">
            <svg
              width="18"
              height="32"
              viewBox="0 0 18 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.637 0H2.305C1.03 0 0 1.034 0 2.309V29.379C0 30.65 1.03 31.685 2.305 31.685H15.637C16.91 31.685 17.944 30.651 17.944 29.379V2.309C17.943 1.034 16.91 0 15.637 0ZM16.215 25.672H1.729V3.895H16.215V25.672ZM12.062 2.343H5.88099V1.669H12.063L12.062 2.343ZM14.707 2.035C14.707 2.361 14.441 2.625 14.116 2.625C13.79 2.625 13.525 2.36 13.525 2.035C13.525 1.71 13.79 1.445 14.116 1.445C14.442 1.444 14.707 1.709 14.707 2.035ZM11.785 29.225H6.15599V27.493H11.785V29.225Z"
                fill="#1E959B"
              />
            </svg>
            <p className="text-[16px]"></p>
            +7 800 301-79-27
          </li>
        </ul>
        <div className="flex items-center justify-center gap-6 sm:flex-col">
          <div className="flex items-center gap-4">
            <div className="text-[16px] leading-5 sm:flex items-center justify-center gap-2 font-boldh hidden">
              <svg
                width="18"
                height="32"
                viewBox="0 0 18 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.637 0H2.305C1.03 0 0 1.034 0 2.309V29.379C0 30.65 1.03 31.685 2.305 31.685H15.637C16.91 31.685 17.944 30.651 17.944 29.379V2.309C17.943 1.034 16.91 0 15.637 0ZM16.215 25.672H1.729V3.895H16.215V25.672ZM12.062 2.343H5.88099V1.669H12.063L12.062 2.343ZM14.707 2.035C14.707 2.361 14.441 2.625 14.116 2.625C13.79 2.625 13.525 2.36 13.525 2.035C13.525 1.71 13.79 1.445 14.116 1.445C14.442 1.444 14.707 1.709 14.707 2.035ZM11.785 29.225H6.15599V27.493H11.785V29.225Z"
                  fill="#1E959B"
                />
              </svg>
              <p className="text-[16px]"></p>
              +7 800 301-79-27
            </div>
            <TargetLink url={"https://web.telegram.org/a/"}>
              <svg
                width="47"
                height="35"
                viewBox="0 0 47 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_138_3496)">
                  <path
                    d="M17.8233 22.0766L17.1717 31.2415C18.104 31.2415 18.5077 30.841 18.9919 30.3601L23.3626 26.1831L32.4191 32.8155C34.0801 33.7411 35.2503 33.2537 35.6984 31.2874L41.6431 3.4318L41.6447 3.43016C42.1716 0.97482 40.7568 0.0146773 39.1385 0.617023L4.19585 13.995C1.81109 14.9207 1.8472 16.2501 3.79046 16.8525L12.7239 19.6311L33.4745 6.64705C34.451 6.00039 35.339 6.35818 34.6086 7.00485L17.8233 22.0766H17.8233Z"
                    fill="#1E959B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_138_3496">
                    <rect width="46.2903" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </TargetLink>
            <TargetLink url={"https://mail.google.com/mail/u"}>
              <svg
                width="47"
                height="35"
                viewBox="0 0 47 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_138_3476)">
                  <path
                    d="M29.894 17.956L43.1102 26.3111V9.24817L29.894 17.956Z"
                    fill="#1E959B"
                  />
                  <path
                    d="M3.90771 9.24817V26.3111L17.1239 17.956L3.90771 9.24817Z"
                    fill="#1E959B"
                  />
                  <path
                    d="M40.6598 4.2793H6.35761C5.13498 4.2793 4.16472 5.19075 3.98096 6.36438L23.5087 19.2302L43.0365 6.36438C42.8527 5.19075 41.8824 4.2793 40.6598 4.2793Z"
                    fill="#1E959B"
                  />
                  <path
                    d="M27.6499 19.4359L24.183 21.7195C23.9772 21.8542 23.7444 21.9204 23.5092 21.9204C23.274 21.9204 23.0412 21.8542 22.8354 21.7195L19.3684 19.4335L3.98633 29.163C4.17499 30.3269 5.14035 31.231 6.35808 31.231H40.6603C41.878 31.231 42.8434 30.3269 43.032 29.163L27.6499 19.4359Z"
                    fill="#1E959B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_138_3476">
                    <rect width="46.2903" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </TargetLink>
          </div>
          <div className="flex justify-center items-center gap-2">
            <TargetLink url={"#"}>
              <svg
                width="89"
                height="84"
                viewBox="0 0 89 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_138_3538)">
                  <path
                    d="M10 25C10 13.9543 18.9543 5 30 5H59C70.0457 5 79 13.9543 79 25V49C79 60.0457 70.0457 69 59 69H30C18.9543 69 10 60.0457 10 49V25Z"
                    fill="url(#paint0_linear_138_3538)"
                  />
                </g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M59.5098 24.5405C59.5098 25.2413 59.2869 25.9514 58.7229 26.3673C57.9829 26.9128 57.0683 27.2353 56.0784 27.2353H53.9313C52.2745 27.2353 50.9313 25.8921 50.9313 24.2353V21.7451C50.9313 21.2312 51.0182 20.7375 51.1782 20.2781C51.4816 19.4063 52.4152 19 53.3384 19H56.5098C58.1667 19 59.5098 20.3431 59.5098 22V24.5405ZM56.0784 27.9216C57.53 27.9216 59.5098 28.9158 59.5098 30.3674V51C59.5098 52.6569 58.1667 54 56.5098 54H33C31.3431 54 30 52.6569 30 51V22C30 20.3431 31.3431 19 33 19H48.142C49.3987 19 50.2451 20.4883 50.2451 21.7451V24.9216C50.2451 26.5784 51.5882 27.9216 53.2451 27.9216H56.0784ZM32.0589 23.804C32.0589 23.4249 32.3662 23.1177 32.7452 23.1177H46.4707C46.8497 23.1177 47.1569 23.4249 47.1569 23.804C47.1569 24.183 46.8497 24.4902 46.4707 24.4902H32.7452C32.3662 24.4902 32.0589 24.183 32.0589 23.804ZM32.0589 27.2353C32.0589 26.8563 32.3662 26.5491 32.7452 26.5491H46.4707C46.8497 26.5491 47.1569 26.8563 47.1569 27.2353C47.1569 27.6144 46.8497 27.9216 46.4707 27.9216H32.7452C32.3662 27.9216 32.0589 27.6144 32.0589 27.2353ZM32.7452 29.9804C32.3662 29.9804 32.0589 30.2877 32.0589 30.6667C32.0589 31.0457 32.3662 31.353 32.7452 31.353H56.7648C57.1438 31.353 57.4511 31.0457 57.4511 30.6667C57.4511 30.2877 57.1438 29.9804 56.7648 29.9804H32.7452ZM32.0589 34.0981C32.0589 33.7191 32.3662 33.4118 32.7452 33.4118H56.7648C57.1438 33.4118 57.4511 33.7191 57.4511 34.0981C57.4511 34.4771 57.1438 34.7844 56.7648 34.7844H32.7452C32.3662 34.7844 32.0589 34.4771 32.0589 34.0981ZM32.7452 36.8432C32.3662 36.8432 32.0589 37.1504 32.0589 37.5295C32.0589 37.9085 32.3662 38.2157 32.7452 38.2157H56.7648C57.1438 38.2157 57.4511 37.9085 57.4511 37.5295C57.4511 37.1504 57.1438 36.8432 56.7648 36.8432H32.7452ZM32.0589 40.9608C32.0589 40.5818 32.3662 40.2746 32.7452 40.2746H56.7648C57.1438 40.2746 57.4511 40.5818 57.4511 40.9608C57.4511 41.3398 57.1438 41.6471 56.7648 41.6471H32.7452C32.3662 41.6471 32.0589 41.3398 32.0589 40.9608ZM32.7452 43.7059C32.3662 43.7059 32.0589 44.0132 32.0589 44.3922C32.0589 44.7712 32.3662 45.0785 32.7452 45.0785H56.7648C57.1438 45.0785 57.4511 44.7712 57.4511 44.3922C57.4511 44.0132 57.1438 43.7059 56.7648 43.7059H32.7452ZM32.0589 47.8236C32.0589 47.4446 32.3662 47.1373 32.7452 47.1373H56.7648C57.1438 47.1373 57.4511 47.4446 57.4511 47.8236C57.4511 48.2026 57.1438 48.5098 56.7648 48.5098H32.7452C32.3662 48.5098 32.0589 48.2026 32.0589 47.8236ZM32.7452 50.5687C32.3662 50.5687 32.0589 50.8759 32.0589 51.2549C32.0589 51.634 32.3662 51.9412 32.7452 51.9412H56.7648C57.1438 51.9412 57.4511 51.634 57.4511 51.2549C57.4511 50.8759 57.1438 50.5687 56.7648 50.5687H32.7452Z"
                  fill="#F8FAFD"
                />
                <defs>
                  <filter
                    id="filter0_d_138_3538"
                    x="0"
                    y="0"
                    width="89"
                    height="84"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.117647 0 0 0 0 0.584314 0 0 0 0 0.607843 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_138_3538"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_138_3538"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_138_3538"
                    x1="79"
                    y1="37"
                    x2="10"
                    y2="37"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1E959B" />
                    <stop offset="1" stopColor="#AFDEDE" />
                  </linearGradient>
                </defs>
              </svg>
            </TargetLink>
            <p className="text-[#000000] sm:text-[12px] sm:leading-[14px]">
              Индивидуальный предприниматель <br /> Степанов Георгий
              Константинович <br />
              Адрес: г. Обнинск, ул. Белкинская. 19, <br /> 136 ОГРНИП
              318402700019269 ИНН <br /> 402571298900 Банк МОСКОВСКИЙ ФИЛИАЛ{" "}
              <br /> АО КБ "МОДУЛЬБАНК" <br />
              БИК 044525092 К/c 30101810645250000092 <br /> Счет
              40802810970010085488
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 sm:mt-4">
        <p className="text-center text-[16px] text-[#3C3C3C80]">
          Copyright © 2021 ProductFit
        </p>
      </div>
    </footer>
  );
};

export default Footer;
