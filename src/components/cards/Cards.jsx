import React from "react";
import Image from "next/image";
import { Carousel } from "antd";

import Card1 from "@/assets/images/photos/card_img/card1.jpg";
import Card2 from "@/assets/images/photos/card_img/card2.jpg";
import Card3 from "@/assets/images/photos/card_img/card3.jpg";
import Card4 from "@/assets/images/photos/card_img/card4.jpg";
import Card5 from "@/assets/images/photos/card_img/card5.jpg";
import Card6 from "@/assets/images/photos/card_img/card6.jpg";

const contentStyle = {
  height: "250px",
  background: "#f8ffff",
};

const Cards = () => {
  return (
    <section className="pt-[60px]">
      <h2 className="uppercase text-[32px] leading-10 font-bold text-center mb-[40px]">
        Проекты команды PRODUCTFIT
      </h2>
      <div className="grid grid-cols-3 gap-[70px] mb-10 sm:grid-cols-1 sm:hidden">
        <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
          <Image
            src={Card1}
            alt="card img"
            className="max-w-285px] max-h-[175px] mb-5"
          />
          <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
            Cabify
          </h4>
          <p className="text-[#000000]">
            Кроссплатформенное приложение под Android и iOS разработано на React
            Native(Python)
          </p>
        </div>
        <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
          <Image
            src={Card2}
            alt="card img"
            className="max-w-285px] max-h-[175px] mb-5"
          />
          <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
            Ural Airlines
          </h4>
          <p className="text-[#000000]">
            Все сервисы для пассажиров «Уральских авиалиний» в одном приложении
            на Swift и Java
          </p>
        </div>
        <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
          <Image
            src={Card3}
            alt="card img"
            className="max-w-285px] max-h-[175px] mb-5"
          />
          <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
            OpenGift
          </h4>
          <p className="text-[#000000]">
            Система монетизации OpenSource-проектов на основе блокчейна
            hyperledger fabric
          </p>
        </div>
        <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
          <Image
            src={Card4}
            alt="card img"
            className="max-w-285px] max-h-[175px] mb-5"
          />
          <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
            PlanDi
          </h4>
          <p className="text-[#000000]">
            Сервис поиска актуальной работы проектировщикам и компаниям
          </p>
        </div>
        <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
          <Image
            src={Card5}
            alt="card img"
            className="max-w-285px] max-h-[175px] mb-5"
          />
          <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
            Коалиция
          </h4>
          <p className="text-[#000000]">
            Проект для ведущего в России Центра образования, который
            осуществляет подготовку школьников к сдаче ЕГЭ.
          </p>
        </div>
        <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
          <Image
            src={Card6}
            alt="card img"
            className="max-w-285px] max-h-[175px] mb-5"
          />
          <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
            Rubetek
          </h4>
          <p className="text-[#000000]">
            Управление домом IoT и микрофреймворк на языке Python совместно с
            Java и Swift
          </p>
        </div>
      </div>
      <div className="hidden sm:block">
        <Carousel autoplay>
          <div style={contentStyle}>
            <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
              <Image
                src={Card1}
                alt="card img"
                className="max-w-285px] max-h-[175px] mb-5"
              />
              <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
                Cabify
              </h4>
              <p className="text-[#000000]">
                Кроссплатформенное приложение под Android и iOS разработано на
                React Native(Python)
              </p>
            </div>
          </div>
          <div style={contentStyle}>
            <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
              <Image
                src={Card2}
                alt="card img"
                className="max-w-285px] max-h-[175px] mb-5"
              />
              <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
                Ural Airlines
              </h4>
              <p className="text-[#000000]">
                Все сервисы для пассажиров «Уральских авиалиний» в одном
                приложении на Swift и Java
              </p>
            </div>
          </div>
          <div style={contentStyle}>
            <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
              <Image
                src={Card3}
                alt="card img"
                className="max-w-285px] max-h-[175px] mb-5"
              />
              <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
                OpenGift
              </h4>
              <p className="text-[#000000]">
                Система монетизации OpenSource-проектов на основе блокчейна
                hyperledger fabric
              </p>
            </div>
          </div>
          <div style={contentStyle}>
            <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
              <Image
                src={Card4}
                alt="card img"
                className="max-w-285px] max-h-[175px] mb-5"
              />
              <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
                PlanDi
              </h4>
              <p className="text-[#000000]">
                Сервис поиска актуальной работы проектировщикам и компаниям
              </p>
            </div>
          </div>
          <div style={contentStyle}>
            <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
              <Image
                src={Card5}
                alt="card img"
                className="max-w-285px] max-h-[175px] mb-5"
              />
              <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
                Коалиция
              </h4>
              <p className="text-[#000000]">
                Проект для ведущего в России Центра образования
                <span className="text-[#000000] sm:hidden">
                  , который осуществляет подготовку школьников к сдаче ЕГЭ.
                </span>
              </p>
            </div>
          </div>
          <div style={contentStyle}>
            <div className="shadow-card w-full min-h-80 rounded-[25px] bg-gradient-to-b from-white to-[#F7F9FD] py-5 px-7">
              <Image
                src={Card6}
                alt="card img"
                className="max-w-285px] max-h-[175px] mb-5"
              />
              <h4 className="font-bold text-[16px] leading-5 text-center mb-3">
                Rubetek
              </h4>
              <p className="text-[#000000]">
                Управление домом IoT и микрофреймворк на языке Python совместно
                с Java и Swift
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <button className="sm:mt-4 uppercase text-center py-[24px] w-[230px] font-bold border border-[#1E959B] rounded-[15px] mx-auto block shadow-btn">
        Все проекты
      </button>
    </section>
  );
};

export default Cards;
