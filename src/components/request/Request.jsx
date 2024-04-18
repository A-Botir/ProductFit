import Image from "next/image";

import PanelImg from "@/assets/images/photos/Request_img.svg";

const Request = () => {
  return (
    <section className="grid grid-cols-2 items-center gap-28 my-32 sm:grid-cols-1 sm:gap-20 sm:my-16">
      <div>
        <Image src={PanelImg} alt="section image" />
      </div>
      <div>
        <h2 className="text-[32px] leading-10 font-bold mb-4 sm:hidden">
          Начнем работу над вашим ІТ-проектом через 24 часа
        </h2>
        <p className="mb-8 text-[#3C3C3C] sm:hidden">
          Проектируем, запускаем и сопровождаем IT-проеты любой сложности
        </p>
        <button className="text-[24px] w-[60%] shadow-btn bg-[#F05670] text-white font-bold rounded-[15px] py-9 block mx-auto leading-[30px]">
          ОСТАВИТЬ ЗАЯВКУ
        </button>
      </div>
    </section>
  );
};

export default Request;
