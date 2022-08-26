import layoutStyles from "../styles/Home.module.css";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-scroll";
const durationFn = function (deltaTop) {
  return deltaTop;
};
import Image from "next/image";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="overflow-x-hidden w-full ">
      <nav
        className="bg-black w-full xl:flex hidden overflow-x-hidden  px-20 py-10 justify-between  flex items-center border-bottom border-gary-500 border-2 border-bottom border-gray-600"
        id="fourth-section"
      >
        <ul className=" flex gap-12">
          <li className="text-xl font-normal text-white cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              ABOUT US
            </Link>
          </li>

          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-xl font-normal text-white  cursor-pointer"
            >
              OUR SERVICES
            </Link>
          </li>

          <li className="text-xl font-normal text-white  cursor-pointer">
            {" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {" "}
              CONTACT US
            </Link>
          </li>
        </ul>
        <button className="hover:bg-white hover:text-black text-white bg-gray-300 py-4 px-6 ml-auto font-semibold text-base transition duration-300">
          JOIN THE CAUSE
        </button>
      </nav>
      <div className="w-full bg-black pl-20">
        <button
          className=" block xl:hidden text-gray bg-black   lg:py-12 md:py-6 py-4 "
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image src="/menu.svg" height="40" width="40" alt="menu" />
        </button>
      </div>
      <div>
        <div
          className={
            showMenu
              ? "absolute top-0 xl:hidden w-full h-full transform -translate-x-0 z-40 transition duration-700"
              : "absolute top-0 xl:hidden w-full h-full transform -translate-x-full z-40 transition duration-700"
          }
          id="mobile-nav"
        >
          <div className="py-14 bg-gray-600  grid grid-cols-1 relative">
            <div className="items-right justify-center flex absolute right-8 p-4 -top-0  text-white z-40 cursor-pointer">
              <Image
                src="/Vectorcross.png"
                width={20}
                height={20}
                alt=""
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-2xl font-normal text-white  cursor-pointer  rounded  justify-center mx-auto hover:bg-white hover:text-black text-white bg-gray-600 p-6 font-semibold text-base"
            >
              ABOUT US
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-2xl font-normal text-white  cursor-pointer  rounded  justify-center mx-auto hover:bg-white hover:text-black text-white bg-gray-600 p-6 font-semibold text-base"
            >
              {" "}
              OUR SERVICES
            </Link>{" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-2xl font-normal text-white  cursor-pointer justify-center mx-auto  rounded  hover:bg-white hover:text-black text-white bg-gray-600 p-6 font-semibold text-base"
            >
              {" "}
              CONTACT US
            </Link>{" "}
            <button className="hover:bg-white w-full justify-center mx-auto hover:text-black text-white bg-gray-600 py-4 px-6 mx-auto font-semibold text-2xl  transition duration-300">
              JOIN THE CAUSE
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-black lg:pb-20 md:pb-8 pb-4 overflow-hidden sm:px-0 px-10 w-full ">
        <div className="flex justify-center text-center flex-col items-center pt-10">
          <img
            src="
               https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%201786.png"
            alt="Group%201786"
            width="400"
            height="571"
            className="mx-auto  object-fit cursor-pointer "
          />
          <p className="font-semibold lg:text-5xl md:text-4xl text-3xl text-white pt-8 mx-auto font-['Ibarra+Real+Nova']">
            Build Better - Save Planet
          </p>
        </div>
        <div className="sm:absolute top-0 sm:flex hidden">
          <Image
            src="/Group s2.png"
            width={350}
            height={500}
            className="animate-pulse-slow"
          />
        </div>
        <div className="sm:absolute top-0 right-0 sm:flex hidden">
          <Image
            src="/Group 8.png"
            width={350}
            height={500}
            className=" animate-pulse-slow"
          />
        </div>
      </div>
      <div className="absolute  -mb-80">
        {" "}
        <Image src="/bgb.png" alt="bg" height="290px" width="3000px" />
      </div>
      <div className=" relative justify-center mx-auto lg:pb-36 md:pb-20 pb-10 -mt-28">
        <Image
          src="/Group 1734.png"
          alt="texture"
          layout="fill"
          className="absolute -z-10 top-0"
        />
        <div className="container justify-center mx-auto  sm:pt-24   ">
          <h1 className="font-bold lg:text-[80px] md:text-6xl text-4xl text-black text-center w-9/12  leading-tight justify-center mx-auto pt-72 pb-10 font-['Ibarra+Real+Nova']">
            Carbon Coyote CIC is a future facing, disruptive architectural
            practice that provides full design & build services
          </h1>
          <p className="lg:text-[40px] md:text-3xl text-xl justify-center mx-auto text-center lg:leading-[56px] md:leading-9 leading-7 text-slate-600 lg:w-10/12 w-full lg:px-28 px-10 ont-[Work+Sans]  z-30">
            Our CIC mission is to promote & implement Net Zero Carbon, Nil Bill,
            Fast Build Systems for new housing developments, alongside
            developing web3 based Carbon Offset products to catalyse momentum in
            climate change mitigation.
          </p>
        </div>
      </div>

      <div
        className=" element relative justify-center mx-auto lg:py-28 py-10"
        id="about"
      >
        <Image
          src="/bg-video.png"
          layout="fill"
          className="absolute -z-10 px-28"
        />
        <div className="bg-white h-[597px] z-30 w-10/12 mx-auto my-28 relative">
          <iframe
            src="https://player.vimeo.com/video/699768191?h=16f3a2be74&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 h-full w-full"
            title="MODA template.mp4"
          ></iframe>
        </div>
      </div>
      <div
        className="pt-28 justify-center mx-auto text-center container lg:mx-20 px-8 lg:pb-40 md:pb-20 pb-10 "
        id="services"
      >
        {" "}
        <h2 className=" font-['Ibarra+Real+Nova'] font-bold lg:text-[64px] md:text-4xl text-3xl md:pb-20 pb-12">
          Our Services
        </h2>
        <div className="lg:flex justify-center mx-auto pb-20 ">
          <Image
            src="/Group 1773 1.svg"
            alt="Carbodioxide"
            height={213}
            width={296}
            className="lg:w-1/2 w-full "
          />
          <div className="lg:pl-8 pl-0 lg:w-1/2  w-full lg:pt-0 pt-10 ">
            <h1 className="font-semibold lg:text-[40px] md:text-3xl text-2xl mt-4 md:mt-0 font-['Ibarra+Real+Nova'] lg:text-left text-center">
              Net Zero Carbon Homes - Self Builders
            </h1>
            <p className="lg:text-xl md:text-lg text-base text-slate-600 pt-6 pb-9 font-[Work+Sans] text-justify ">
              We demystify and simplify the process of building a Net Zero
              Carbon home. It&apos;s possible to create a home that is both an
              amazing space to enjoy life and simultaneous looks after the
              planet. We provide a full &apos; hand held &apos; service from
              start to finish which includes following;
            </p>
            <div className="flex">
              <Image
                src="/checkmark-done.svg"
                alt="Carbodioxide"
                height={24}
                width={24}
              />
              <p className="font-semibold lg:text-base text-sm font-['Ibarra+Real+Nova'] pl-3.5">
                Design & planning services
              </p>
            </div>
            <div className="flex py-6">
              <Image
                src="/checkmark-done.svg"
                alt="Carbodioxide"
                height={24}
                width={24}
              />
              <p className="font-semibold lg:text-base text-sm font-['Ibarra+Real+Nova'] pl-3.5">
                Approved construction contractor list
              </p>
            </div>
            <div className="flex">
              <Image
                src="/checkmark-done.svg"
                alt="Carbodioxide"
                height={24}
                width={24}
              />
              <p className="font-semibold lg:text-base text-sm font-['Ibarra+Real+Nova'] pl-3.5">
                Self-Build finance provision through partners
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex flex-row-reverse justify-center mx-auto lg:pb-28 md:pb-10 pb-6   ">
          <Image
            src="/Group 1775 1.svg"
            alt="Carbodioxide2"
            height={213}
            width={296}
            className="lg:w-1/2 w-full"
          />
          <div className="lg:w-1/2 w-full lg:pr-8 pr-0  lg:pt-0 pt-10 ">
            <h1 className="font-semibold lg:text-[40px] md:text-3xl text-2xl mt-4 md:mt-0 font-['Ibarra+Real+Nova'] lg:text-left text-center">
              Net Zero Carbon Homes - Developers
            </h1>
            <p className="lg:text-xl md:text-lg text-base text-slate-600 pt-6 pb-9 font-[Work+Sans] text-justify ">
              We utilise the most up-to-date methods of Off-Site Manufacturing,
              Passive House design to ensure your build program is as short and
              predictable as possible
            </p>
            <p className="lg:text-xl md:text-lg text-base text-slate-600 pb-9 font-[Work+Sans] text-justify ">
              Ensuring your developments have an optimised and predictable
              profit margin and the highest quality and value proposition for
              your potential buyers
            </p>
          </div>
        </div>
        <div className="lg:flex justify-center mx-auto lg:pb-20 md:pb-10 pb-0 ">
          <Image
            src="/image 11.svg"
            alt="Carbodioxide"
            height={213}
            width={296}
            className="lg:w-1/2 w-full"
          />
          <div className="lg:pl-8 pl-0 lg:w-1/2 w-full  lg:pt-0 pt-10 ">
            <h1 className="font-semibold lg:text-[40px] md:text-3xl text-2xl mt-4 md:mt-0 font-['Ibarra+Real+Nova'] lg:text-left text-center">
              Carbon Offset Service
            </h1>
            <p className="lg:text-xl md:text-lg text-base text-slate-600 pt-6 pb-6 font-[Work+Sans] text-justify ">
              Carbon Coyote has a series of verified offset partners to ensure
              any offset you wish to make that&apos;s associated with either
              your home, business or life is as effective as possible
            </p>
            <p className="lg:text-xl md:text-lg text-base text-slate-600 font-[Work+Sans] text-justify ">
              Through collaboration with leading academics, we are evolving the
              carbon offsetting game, building on the chain, to guarantee the
              highest % of your offset lands where it needs to be, fully
              transparent, fast, and accurate.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        {" "}
        <div className="absolute right-0 top-32 -z-30 md:flex hidden">
          <Image src="/aa.png" alt="profile " height={936} width={302} />
        </div>
        <div className="justify-center mx-auto text-center container lg:pb-40 md:pb-20 pb-10 lg:px-20 px-8 leading-none relative">
          {" "}
          <h1 className="font-bold lg:text-[64px] md:text-4xl text-3xl text-black text-center  lg:leading-tight justify-center mx-auto md:pb-20 md:pb-12 pb-6 font-['Ibarra+Real+Nova']">
            We are looking to work with climate-focused Self-builders and
            housing developers
          </h1>
          <p className="font-[Work+Sans] lg:text-xl md:text-lg text-base text-slate-600">
            Drop your email below and join the movement :)
          </p>
          <div className="flex lg:flex-row flex-col justify-center mx-auto lg:mt-16 md:mt-10 mt-6">
            <input
              placeholder="ENTER YOUR EMAIL HERE"
              className="placeholder-gray-500 lg:w-[378px] w-[250] px-6 py-6  bg-slate-100 hover:bg-white focus:bg-white focus:border focus:border-1 focus:border-black hover:border hover:border-1 hover:border-black focus:outline-none"
            />
            <button className="lg:text-base text-sm lg:px-7 px-4 py-6  bg-black lg:mt-0 mt-6 text-white font-semibold font-['Ibarra+Real+Nova'] border border-1 border-black lg:ml-4 ml-0 hover:bg-gray-200 focus:bg-gray-300 hover:text-black focus:text-black  transition duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="justify-center mx-auto text-center lg:px-20 lg:px-8 px-4 lg:pb-40 md:pb-20 pb-10 container">
          {" "}
          <h2 className=" font-['Ibarra+Real+Nova'] font-bold lg:text-[64px] md:text-4xl text-3xl lg:pb-20 md:pb-10 pb-6  leading-[96px]">
            Meet the Visionaries
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="flex flex-col">
              <Image
                src="/Hipkiss_CC_Prof_Pic.png"
                alt="profile "
                height={428}
                width={405}
              />
              <div className="flex justify-between pt-6 mt-0.5">
                <div className="flex items-center">
                  <p className="font-['Ibarra+Real+Nova'] lg:text-xl sm:text-base   text-sm font-normal text-slate-700">
                    Matt Hipkiss{" "}
                  </p>
                  <p className="font-[Work+Sans]  xl:text-xl sm:text-base   text-sm font-semibold text-black xl:pl-8 pl-2">
                    MSci CTO
                  </p>
                </div>
                <Image
                  src="/Vector.svg"
                  alt="profile "
                  height={21}
                  width={21}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                src="/image 7.png"
                alt="profile "
                height={428}
                width={405}
              />
              <div className="flex justify-between pt-6 mt-0.5">
                <div className="flex justify-center">
                  <p className="font-['Ibarra+Real+Nova'] xl:text-xl sm:text-base   text-sm   font-normal text-slate-700">
                    Lee Candler
                  </p>
                  <p className="font-[Work+Sans]  xl:text-xl sm:text-base   text-sm font-semibold text-black xl:pl-8 pl-2">
                    BSC MSci CEO
                  </p>
                </div>
                <Image
                  src="/Vector.svg"
                  alt="profile "
                  height={21}
                  width={21}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                src="/Justin_CC_Profile_Pic_SENSIBLE.png"
                alt="profile "
                height={428}
                width={405}
              />
              <div className="flex justify-between pt-6 mt-0.5">
                <div className="flex justify-center">
                  <p className="font-['Ibarra+Real+Nova'] xl:text-xl sm:text-base   text-sm   font-normal text-slate-700">
                    Justin Shaer
                  </p>
                  <p className="font-[Work+Sans]  xl:text-xl sm:text-base   text-sm font-semibold text-black xl:pl-8 pl-2">
                    BSc ACIAT CATO
                  </p>
                </div>
                <Image
                  src="/Vector.svg"
                  alt="profile "
                  height={21}
                  width={21}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="flex whitespace-no-wrap overflow-x-hidden w-full bg-black   lg:h-32 md:28 h-24 ">
        <div className="relative items-center my-auto">
          <ul className="flex animate-marquee">
            <li className="mx-4 text-xl md:text-[32px] font-['Ibarra+Real+Nova'] text-white my-auto  w-[479px]">
              Harnessing Web3 - Save Planet{" "}
            </li>
            <li className="mx-4 my-auto">
              <Image
                src="/Star 1.svg"
                width={32}
                height={32}
                className="my-auto"
              />
            </li>
            <li className="mx-4 font-['Ibarra+Real+Nova'] text-white my-auto text-xl md:text-[32px] w-[356px]">
              Build Better - Save Planet
            </li>
            <li className="mx-4 my-auto">
              <Image
                src="/Star 1.svg"
                width={32}
                height={32}
                className="my-auto"
              />
            </li>
            <li className="mx-4  font-['Ibarra+Real+Nova'] text-white my-auto text-xl md:text-[32px]  w-[479px]">
              Harnessing Web3 - Save Planet{" "}
            </li>
            <li className="mx-4 my-auto">
              <Image
                src="/Star 1.svg"
                width={32}
                height={32}
                className="my-auto"
              />
            </li>
          </ul>
          <ul className="flex absolute top-0 right-4 left-0  items-center animate-marquee2">
            <li className="mx-4  font-['Ibarra+Real+Nova'] text-white text-xl md:text-[32px] w-[356px]">
              Build Better - Save Planet
            </li>
            <li className="mx-4">
              <Image
                src="/Star 1.svg"
                width={32}
                height={32}
                className="my-auto"
              />
            </li>

            <li className="mx-4  font-['Ibarra+Real+Nova'] text-white text-xl md:text-[32px] w-[479px]">
              Harnessing Web3 - Save Planet{" "}
            </li>
            <li className="mx-4 ">
              <Image src="/Star 1.svg" width={32} height={32} />
            </li>
            <li className="mx-4  font-['Ibarra+Real+Nova'] text-white text-xl md:text-[32px] w-[356px]">
              Build Better - Save Planet
            </li>
            <li className="mx-4">
              <Image
                src="/Star 1.svg"
                width={32}
                height={32}
                className="my-auto"
              />
            </li>
          </ul>
        </div>
      </article>

      <div className="justify-center mx-auto text-center px-20 lg:pt-40 md:pt-26 pt-14 container lg:pb-36 md:pb-20 pb-10">
        {" "}
        <h2 className=" font-['Ibarra+Real+Nova'] font-bold lg:text-[64px] md:text-4xl text-3xl lg:pb-20 pb-10 ">
          Get in Touch
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-10 gap-6">
          <div className="w-54 mx-auto flex flex-col justify-center text-center">
            <Image
              src="/email (1) 1.svg"
              alt="profile "
              height={80}
              width={80}
            />
            <p className="lg:pt-6 pt-4 font-['Ibarra+Real+Nova'] lg:text-2xl md:text-xl text-lg font-semibold lg:pb-4 pb-2 text-center mx-auto">
              {" "}
              Email Address
            </p>
            <p className="pt-0.5 text-slate-600 font-[Work+Sans] lg:text-base md:text-sm font-normal italic ">
              CarbonCoyote@gmail.com
            </p>
          </div>
          <div className="w-54 mx-auto flex flex-col justify-center text-center">
            <Image src="/phone 1.svg" alt="profile " height={80} width={80} />
            <p className="lg:pt-6 pt-4 font-['Ibarra+Real+Nova'] lg:text-2xl md:text-xl text-lg font-semibold  lg:pb-4 pb-2">
              {" "}
              Phone Number
            </p>
            <p className="pt-0.5 text-slate-600 font-[Work+Sans] lg:text-base text-sm font-normal italic">
              009-338-390
            </p>
          </div>
          <div className="w-54 mx-auto flex flex-col justify-center text-center">
            <Image src="/image 4.svg" alt="profile " height={80} width={80} />
            <p className="lg:pt-6 pt-4 font-['Ibarra+Real+Nova'] lg:text-2xl md:text-xl text-lg font-semibold  lg:pb-4 pb-2">
              {" "}
              Our Socials
            </p>
            <p className="pt-0.5 text-slate-600 font-[Work+Sans] lg:text-base text-sm italic font-normal">
              Linkdin.com
            </p>
          </div>
          <div className="w-54 mx-auto flex flex-col justify-center text-center">
            <Image src="/image 6.svg" alt="profile " height={80} width={80} />
            <p className="lg:pt-6 pt-4 font-['Ibarra+Real+Nova'] lg:text-2xl md:text-xl text-lg font-semibold  lg:pb-4 pb-2">
              {" "}
              Location
            </p>
            <p className="pt-0.5 text-slate-600 font-[Work+Sans] italic lg:text-base text-sm font-normal">
              Headquarter address here
            </p>
          </div>
        </div>
      </div>
      <div
        className=" flex flex-col   relative justify-center mx-auto lg:pb-36 md:pb-20 pb-10 lg:pt-20 md:pt-10 pt-6 "
        id="contact"
      >
        <Image
          src="/Group 1731.png"
          alt="texture"
          layout="fill"
          className="absolute "
        />
        <div className=" container justify-center mx-auto flex flex-col">
          <div className="mx-auto pb-12">
            <Image
              src="/Group 1727.png"
              alt="texture"
              width={281}
              height={247}
            />
          </div>
          <ul className="md:flex mx-auto justify-center text-center pb-16 z-30">
            <li className="lg:text-xl md:text-lg text-sm font-['Ibarra+Real+Nova'] cursor-pointer lg:py-0 py-2 ">
              <Link href="#fourth-section">
                <a> HOME</a>
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="lg:text-xl md:text-lg text-sm font-['Ibarra+Real+Nova'] cursor-pointer md:px-12"
              >
                ABOUT US
              </Link>
            </li>
            <li className="lg:py-0 py-2">
              {" "}
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="lg:text-xl md:text-lg text-sm font-['Ibarra+Real+Nova'] cursor-pointer md:pr-12 my-4"
              >
                {" "}
                OUR SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="lg:text-xl md:text-lg text-sm font-['Ibarra+Real+Nova'] cursor-pointer"
              >
                {" "}
                CONTACT US
              </Link>
            </li>
          </ul>
          <div
            className="flex gap-6 justify-center      mx-auto pb-16
          "
          >
            <Image
              src="/twitter-sign 1.svg"
              alt="twitter"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/instagram (2) 1.svg"
              alt="twitter"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/tiktok 1.svg"
              alt="twitter"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/linkedin-logo 1.svg"
              alt="twitter"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex text-center justify-center  items-center mx-auto my-auto">
          <p className="text-slate-600 lg:text-xl md:text-lg text-sm text-center z-30 pb-0.5 pr-1.5">
            2022 CarbonCoyote CIC. All rights reserved
          </p>

          <Image
            src="/Frame.svg"
            alt="cc"
            width={16}
            height={16}
            className="pt-6"
          />
        </div>
      </div>
    </div>
  );
}
