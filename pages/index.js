import layoutStyles from "../styles/Home.module.css";
import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="overflow-x-hidden w-full">
      <nav
        className="bg-black w-full xl:flex hidden overflow-x-hidden  px-20 py-10 justify-between  flex items-center border-bottom border-gary-500 border-2 border-bottom border-gray-600"
        id="fourth-section"
      >
        <ul className=" flex gap-12">
          <li className="text-xl font-normal text-white cursor-pointer">
            <Link href="#first-section">
              <a>ABOUT US</a>
            </Link>
          </li>
          <li className="text-xl font-normal text-white  cursor-pointer">
            <Link href="#second-section">
              <a> OUR SERVICES</a>
            </Link>
          </li>

          <li className="text-xl font-normal text-white  cursor-pointer">
            {" "}
            <Link href="#third-section">
              <a> CONTACT US</a>
            </Link>
          </li>
        </ul>
        <button className="hover:bg-white hover:text-black text-white bg-gray-300 py-4 px-6 ml-auto font-semibold text-base">
          JOIN THE CAUSE
        </button>
      </nav>
      <button
        className="ml-auto block xl:hidden text-gray bg-black w-full py-12"
        onClick={() => setShowMenu(!showMenu)}
      >
        <Image src="/menu.svg" height="40" width="40" alt="menu" />
      </button>
      <div>
        <ul
          className={`${
            showMenu ? " xl:hidden flex " : "hidden"
          } flex-col w-full px-8 bg-gray-600 rounded-xl my-6  py-14 fixed -top-10  left-0 right-0 z-30`}
        >
          <li className="items-right justify-center flex absolute right-20 p-4   text-black z-40">
            <Image
              src="/Vectorcross.png"
              width={20}
              height={20}
              alt=""
              onClick={() => setShowMenu(!showMenu)}
              className="mx-auto justify-center"
            />
          </li>
          <li className="text-xl font-normal text-white cursor-pointer rounded  justify-center mx-auto rounded hover:bg-white hover:text-black text-white bg-gray-600 py-4 px-6 font-semibold text-base">
            <Link href="#first-section ">
              <a>ABOUT US</a>
            </Link>
          </li>
          <li className="text-xl font-normal text-white  cursor-pointer  rounded  justify-center mx-auto hover:bg-white hover:text-black text-white bg-gray-600 py-4 px-6 font-semibold text-base">
            <Link href="#second-section">
              <a> OUR SERVICES</a>
            </Link>
          </li>

          <li className="text-xl font-normal text-white  cursor-pointer justify-center mx-auto  rounded  hover:bg-white hover:text-black text-white bg-gray-600 py-4 px-6 font-semibold text-base">
            {" "}
            <Link href="#third-section">
              <a> CONTACT US</a>
            </Link>
          </li>
          <li>
            {" "}
            <button className="hover:bg-white w-full  hover:text-black text-white bg-gray-600 py-4 px-6 mx-auto font-semibold text-base">
              JOIN THE CAUSE
            </button>
          </li>
        </ul>
      </div>

      <div className="relative bg-black pb-20 overflow-hidden sm:px-0 px-10 w-full">
        <div className="flex justify-center text-center flex-col items-center pt-10">
          <img
            src="
               https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%201786.png"
            alt="Group%201786"
            width="400"
            height="571"
            className="mx-auto  object-fit"
          />
          <p className="font-semibold lg:text-5xl text-3xl text-white pt-8 mx-auto font-['Ibarra+Real+Nova']">
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
        <div className="sm:absolute top-0 right-0 sm:visible invisible">
          <Image
            src="/Group 8.png"
            width={350}
            height={500}
            className=" animate-pulse-slow"
          />
        </div>
      </div>
      <div className="absolute">
        {" "}
        <Image src="/bgb.png" alt="bg" height="270px" width="3000px" />
      </div>
      <div className=" relative justify-center mx-auto pb-36">
        <Image
          src="/Group 1734.png"
          alt="texture"
          layout="fill"
          className="absolute -z-10"
        />
        <div className="container justify-center mx-auto ">
          <h1 className="font-bold lg:text-[80px] text-4xl text-black text-center w-9/12 lg:leading-[96px] justify-center mx-auto pt-72 pb-10 font-['Ibarra+Real+Nova']">
            Carbon Coyote CIC is a future facing, disruptive architectural
            practice that provides full design & build services
          </h1>
          <p className="lg:text-[40px] text-xl justify-center mx-auto text-center leading-[56px] text-slate-600 lg:w-10/12 w-full lg:px-28 px-10 font-['Ibarra+Real+Nova'] z-30">
            Our CIC mission is to promote & implement Net Zero Carbon, Nil Bill,
            Fast Build Systems for new housing developments, alongside
            developing web3 based Carbon Offset products to catalyse momentum in
            climate change mitigation.
          </p>
        </div>
      </div>
      <div
        className=" relative justify-center mx-auto lg:py-28 py-10"
        id="first-section"
      >
        <Image
          src="/bg-video.png"
          layout="fill"
          className="absolute -z-10 px-28"
        />
        <div className="bg-white h-[597px] z-30 w-10/12 mx-auto my-28 relative">
          <iframe
            src="https://player.vimeo.com/video/699768191?h=16f3a2be74&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            className="absolute top-0 left-0 h-full w-full"
            title="MODA template.mp4"
          ></iframe>
        </div>
      </div>
      <div
        className="pt-28 justify-center mx-auto text-center container lg:mx-20 mx-10 lg:pb-40 pb-20"
        id="second-section"
      >
        {" "}
        <h2 className=" font-['Ibarra+Real+Nova'] font-bold md:text-[64px] sm:text-4xl text-3xl  md:pb-20 pb-12">
          Our Services
        </h2>
        <div className="lg:flex justify-center mx-auto pb-20">
          <Image
            src="/Group 1773 1.svg"
            alt="Carbodioxide"
            height={213}
            width={296}
            className="lg:w-1/2 w-full"
          />
          <div className="lg:pl-8 pl-0 lg:w-1/2  w-full">
            <h1 className="font-semibold text-[40px] font-['Ibarra+Real+Nova'] text-left">
              Net Zero Carbon Homes - Self Builders
            </h1>
            <p className="text-xl text-slate-600 pt-6 pb-9 font-[Work+Sans] text-justify">
              We demystify and simplify the process of building a Net Zero
              Carbon home. It's possible to create a home that is both an
              amazing space to enjoy life and simultaneous looks after the
              planet. We provide a full 'hand held' service from start to finish
              which includes following;
            </p>
            <div className="flex">
              <Image
                src="/checkmark-done.svg"
                alt="Carbodioxide"
                height={24}
                width={24}
              />
              <p className="font-semibold text-base font-['Ibarra+Real+Nova'] pl-3.5">
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
              <p className="font-semibold text-base font-['Ibarra+Real+Nova'] pl-3.5">
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
              <p className="font-semibold text-base font-['Ibarra+Real+Nova'] pl-3.5">
                Self-Build finance provision through partners
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex flex-row-reverse justify-center mx-auto pb-28">
          <Image
            src="/Group 1775 1.svg"
            alt="Carbodioxide2"
            height={213}
            width={296}
            className="lg:w-1/2 w-full"
          />
          <div className="lg:w-1/2 w-full lg:pr-8 pr-0">
            <h1 className="font-semibold text-[40px] font-['Ibarra+Real+Nova'] text-left">
              Net Zero Carbon Homes - Developers
            </h1>
            <p className="text-xl text-slate-600 pt-6 pb-6 font-[Work+Sans] text-justify pr-14">
              We utilise the most up-to-date methods of Off-Site Manufacturing,
              Passive House design to ensure your build program is as short and
              predictable as possible
            </p>
            <p className="text-xl text-slate-600 pb-9 font-[Work+Sans] text-justify pr-14">
              Ensuring your developments have an optimised and predictable
              profit margin and the highest quality and value proposition for
              your potential buyers
            </p>
          </div>
        </div>
        <div className="lg:flex justify-center mx-auto pb-20">
          <Image
            src="/image 11.svg"
            alt="Carbodioxide"
            height={213}
            width={296}
            className="lg:w-1/2"
          />
          <div className="lg:pl-8 pl-0 lg:w-1/2 ">
            <h1 className="font-semibold text-[40px] font-['Ibarra+Real+Nova'] text-left">
              Net Zero Carbon Homes - Self Builders
            </h1>
            <p className="text-xl text-slate-600 pt-6 pb-6 font-[Work+Sans] text-justify pr-14">
              Carbon Coyote has a series of verified offset partners to ensure
              any offset you wish to make that's associated with either your
              home, business or life is as effective as possible
            </p>
            <p className="text-xl text-slate-600 pb-9 font-[Work+Sans] text-justify pr-14">
              Through collaboration with leading academics, we are evolving the
              carbon offsetting game, building on the chain, to guarantee the
              highest % of your offset lands where it needs to be, fully
              transparent, fast, and accurate.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-28 justify-center mx-auto text-center container pb-40 lg:px-20 px-8">
        {" "}
        <p className=" font-['Ibarra+Real+Nova'] font-bold md:text-[64px] sm:text-4xl text-3xl  md:pb-20 pb-12  md:leading-[96px] ">
          We are looking to work with climate-focused Self-builders and housing
          developers
        </p>
        <p className="font-[Work+Sans] text-xl text-slate-600">
          Drop your email below and join the movement :)
        </p>
        <div>
          <input
            placeholder="ENTER YOUR EMAIL HERE"
            className="placeholder-gray-500 lg:w-[378px] w-[250] p-6 mt-16 bg-slate-100 hover:bg-white focus:bg-white focus:border focus:border-1 focus:border-black hover:border hover:border-1 hover:border-black focus:outline-none"
          />
          <button className="text-base px-7 mt-6 py-6 bg-black text-white font-semibold font-['Ibarra+Real+Nova'] border border-1 border-black ml-4 hover:bg-gray-200 focus:bg-gray-300 hover:text-black focus:text-black">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="justify-center mx-auto text-center lg:px-20 px-8 pb-40 container">
        {" "}
        <h2 className=" font-['Ibarra+Real+Nova'] font-bold md:text-[64px] sm:text-4xl text-3xl  pb-20  leading-[96px]">
          Meet the Visionaries
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col">
            <Image
              src="/Hipkiss_CC_Prof_Pic.png"
              alt="profile "
              height={428}
              width={405}
            />
            <div className="flex justify-between pt-6 mt-0.5">
              <div className="flex ">
                <p className="font-['Ibarra+Real+Nova'] lg:text-xl sm:text-base   text-sm font-normal text-slate-700">
                  Matt Hipkiss{" "}
                </p>
                <p className="font-[Work+Sans]  md:text-xl sm:text-base   text-sm font-semibold text-black lg:pl-8 pl-4">
                  MSci CTO
                </p>
              </div>
              <Image src="/Vector.svg" alt="profile " height={21} width={21} />
            </div>
          </div>
          <div className="flex flex-col">
            <Image src="/image 7.png" alt="profile " height={428} width={405} />
            <div className="flex justify-between pt-6 mt-0.5">
              <div className="flex ">
                <p className="font-['Ibarra+Real+Nova'] xl:text-xl sm:text-base   text-sm   font-normal text-slate-700">
                  Lee Candler
                </p>
                <p className="font-[Work+Sans]  xl:text-xl sm:text-base   text-sm font-semibold text-black xl:pl-8 pl-4">
                  BSC MSci CEO
                </p>
              </div>
              <Image src="/Vector.svg" alt="profile " height={21} width={21} />
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
              <div className="flex ">
                <p className="font-['Ibarra+Real+Nova'] xl:text-xl sm:text-base   text-sm font-normal text-slate-700">
                  Justin Shaer
                </p>
                <p className="font-[Work+Sans]  xl:text-xl sm:text-base text-sm  font-semibold text-black xl:pl-8 pl-4">
                  BSc ACIAT CATO
                </p>
              </div>
              <Image src="/Vector.svg" alt="profile " height={21} width={21} />
            </div>
          </div>
        </div>
      </div>

      <article class="flex whitespace-no-wrap overflow-x-hidden w-full bg-black  h-[128px] ">
        <div class="relative items-center my-auto">
          <ul class="flex animate-marquee">
            <li class="mx-4 text-text-xl md:text-[32px] font-['Ibarra+Real+Nova'] text-white my-auto  w-[479px]">
              Harnessing Web3 - Save Planet{" "}
            </li>
            <li class="mx-4 my-auto">
              <Image
                src="/Star 1.svg"
                width={32}
                height={32}
                className="my-auto"
              />
            </li>
            <li class="mx-4 font-['Ibarra+Real+Nova'] text-white my-auto text-xl md:text-[32px] w-[356px]">
              Build Better - Save Planet
            </li>
            <li class="mx-4 my-auto">
              <Image
                src="/Star 1.svg"
                width={32}
                height={32}
                className="my-auto"
              />
            </li>
            <li class="mx-4  font-['Ibarra+Real+Nova'] text-white my-auto text-xl md:text-[32px]  w-[479px]">
              Harnessing Web3 - Save Planet{" "}
            </li>
            <li class="mx-4 my-auto">
              <Image
                src="/Star 1.svg"
                width={32}
                height={32}
                className="my-auto"
              />
            </li>
          </ul>
          <ul class="flex absolute top-0 right-4 left-0  items-center animate-marquee2">
            <li class="mx-4  font-['Ibarra+Real+Nova'] text-white text-xl md:text-[32px] w-[356px]">
              Build Better - Save Planet
            </li>
            <li class="mx-4">
              <Image
                src="/Star 1.svg"
                width={32}
                height={32}
                className="my-auto"
              />
            </li>

            <li class="mx-4  font-['Ibarra+Real+Nova'] text-white text-xl md:text-[32px] w-[479px]">
              Harnessing Web3 - Save Planet{" "}
            </li>
            <li class="mx-4 ">
              <Image src="/Star 1.svg" width={32} height={32} />
            </li>
            <li class="mx-4  font-['Ibarra+Real+Nova'] text-white text-xl md:text-[32px] w-[356px]">
              Build Better - Save Planet
            </li>
            <li class="mx-4">
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

      <div className="justify-center mx-auto text-center px-20 pt-40 container pb-36">
        {" "}
        <h2 className=" font-['Ibarra+Real+Nova'] font-bold md:text-[64px] sm:text-4xl text-3xl pb-20 pb-28">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div>
            <Image src="/phone 1.svg" alt="profile " height={80} width={80} />
            <p className="pt-6 font-['Ibarra+Real+Nova'] text-2xl font-semibold pb-4">
              {" "}
              Phone Number
            </p>
            <p className="pt-0.5 text-slate-600 font-[Work+Sans] text-base font-normal italic">
              009-338-390
            </p>
          </div>
          <div>
            <Image src="/image 4.svg" alt="profile " height={80} width={80} />
            <p className="pt-6 font-['Ibarra+Real+Nova'] text-2xl font-semibold pb-4">
              {" "}
              Our Socials
            </p>
            <p className="pt-0.5 text-slate-600 font-[Work+Sans] text-base italic font-normal">
              Linkdin.com
            </p>
          </div>
          <div>
            <Image src="/image 6.svg" alt="profile " height={80} width={80} />
            <p className="pt-6 font-['Ibarra+Real+Nova'] text-2xl font-semibold pb-4">
              {" "}
              Location
            </p>
            <p className="pt-0.5 text-slate-600 font-[Work+Sans] italic text-base font-normal">
              Headquarter address here
            </p>
          </div>
        </div>
      </div>
      <div
        className=" flex flex-col   relative justify-center mx-auto pb-36 pt-20 "
        id="third-section"
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
            <li className="text-xl font-['Ibarra+Real+Nova'] cursor pointer">
              <Link href="#fourth-section">
                <a> HOME</a>
              </Link>
            </li>
            <li className="text-xl font-['Ibarra+Real+Nova'] cursor pointer md:px-12">
              <Link href="#first-section">
                <a> ABOUT US</a>
              </Link>
            </li>
            <li className="text-xl font-['Ibarra+Real+Nova'] cursor pointer md:pr-12">
              {" "}
              <Link href="#second-section">
                <a> OUR SERVICES</a>
              </Link>
            </li>
            <li className="text-xl font-['Ibarra+Real+Nova'] cursor pointer">
              <Link href="#third-section">
                <a> CONTACT US</a>
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
          <p className="text-slate-600 text-xl text-center z-30 pb-0.5 pr-1.5">
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
