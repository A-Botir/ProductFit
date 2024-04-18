import Logo from "@/assets/images/icon/logo.svg";
import Image from "next/image";

const Header = () => {
  const TargetLink = ({ url, children }) => (
    <a href={url} rel="noopener noreferrer">
      {children}
    </a>
  );
  return (
    <header className="container py-8 mx-auto">
      <div className="flex justify-around items-center">
        <button>
          <Image src={Logo} alt="logo img" />
        </button>
        <div className="flex gap-20 items-center sm:hidden">
          <div className="flex items-center gap-8">
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
            <button className="flex justify-center gap-3 items-center">
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
              <p className="text-[16px] font-bold"></p>
              +7 800 301-79-27
            </button>
          </div>
          <button className="py-[22px] w-[186px] text-center rounded-[15px] bg-[#F05670] hover:opacity-85 text-white font-bold">
            НАЧАТЬ ПРОЕКТ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
