import Image from "next/image";
import Layout from "@/assets/images/photos/Layer_img.svg";

const Banner = () => {
  return (
    <section className="pt-[96px] pb-5 sm:pt-8">
      <div className="bg-[#1E959B] py-32 relative sm:bg-[#f8ffff] sm:py-0">
        <div className="container mx-auto sm:mb-[60px]">
          <h2 className="font-bold text-[32px] leading-10 uppercase mb-3 text-[#F8FFFF] sm:text-[#1E959B]">
            Начнем проект?
          </h2>
          <p className="text-[16px] text-[#F8FFFF] mt-5 mb-6 sm:text-[#1E959B]">
            Усилим Вашу команду и запустим проект быстрее!
          </p>
          <button className="shadow-btn py-[22px] w-[280px] text-center text-[16px] leading-5 rounded-[15px] bg-[#F8FFFF] border-[#F8FFFF] border font-bold">
            УЗНАТЬ СТОИМОСТЬ ПРОЕКТА
          </button>
        </div>
        <div className="absolute top-[-96px] right-0 flex justify-end sm:hidden">
          <Image src={Layout} alt="banner img" className="max-w-[84%]" />
        </div>
        <div className="bg-[#1E959B]">
          <div className="hidden sm:flex sm:relative sm:justify-center w-full h-[250px]">
            <Image
              src={Layout}
              alt="banner img"
              className="sm:absolute sm:top-[-45px] sm:max-w-[62%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
