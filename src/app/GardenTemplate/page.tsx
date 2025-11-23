"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function GardenTemplate() {
  // Countdown timer state
  const targetDate = new Date("2024-12-31T23:59:59").getTime();
  const [timeUnits, setTimeUnits] = useState([
    { value: 0, label: "DAYS" },
    { value: 0, label: "HOURS" },
    { value: 0, label: "MINUTES" },
    { value: 0, label: "SECONDS" },
  ]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeUnits([
          { value: days, label: "DAYS" },
          { value: hours, label: "HOURS" },
          { value: minutes, label: "MINUTES" },
          { value: seconds, label: "SECONDS" },
        ]);
      } else {
        setTimeUnits([
          { value: 0, label: "DAYS" },
          { value: 0, label: "HOURS" },
          { value: 0, label: "MINUTES" },
          { value: 0, label: "SECONDS" },
        ]);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
    <div
      className="relative w-full min-h-screen bg-[url(https://c.animaapp.com/qkMuECjX/img/cover-opening.png)] bg-cover bg-center"
      data-model-id="158:2371"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />

      <img
        className="absolute top-0 left-0 w-full h-auto max-h-[70vh] object-cover"
        alt="Couple in garden paradise"
        src="https://c.animaapp.com/qkMuECjX/img/image-159.png"
      />

      <div className="absolute top-[30%] md:top-[347px] left-1/2 -translate-x-1/2 w-[90%] max-w-[558px] h-auto min-h-[200px] md:h-[233px] bg-[#ffffff1a] rounded-[10px] border border-solid border-green-300" />

      <div className="flex flex-col w-[90%] max-w-[382px] justify-center px-4 py-2 absolute top-[31%] md:top-[360px] left-1/2 -translate-x-1/2 rounded-[10px] items-center gap-1">
        <h1 className="w-fit font-['Playfair_Display'] font-normal text-[#238546] text-4xl md:text-[64px] text-center tracking-tight leading-tight">
          Alexander
        </h1>

        <div className="inline-flex justify-center px-2.5 py-0 items-center gap-2 md:gap-4">
          <div className="flex flex-col w-16 md:w-[124px] items-start gap-2.5 p-2.5">
            <img
              className="w-full h-px object-cover"
              alt=""
              src="https://c.animaapp.com/qkMuECjX/img/line-2.svg"
            />
          </div>

          <div
            className="w-fit font-['Times_New_Roman'] font-normal text-[#ff9400] text-4xl md:text-[64px] text-center tracking-tight leading-tight whitespace-nowrap"
            aria-hidden="true"
          >
            &amp;
          </div>

          <div className="flex flex-col w-16 md:w-[124px] items-start gap-2.5 p-2.5">
            <img
              className="w-full h-px object-cover"
              alt=""
              src="https://c.animaapp.com/qkMuECjX/img/line-2-1.svg"
            />
          </div>
        </div>

        <h1 className="w-fit font-['Playfair_Display'] font-normal text-[#248547] text-4xl md:text-[64px] text-center tracking-tight leading-tight">
          Isabella
        </h1>
      </div>

      <div className="absolute top-[65%] md:top-[680px] left-1/2 -translate-x-1/2 w-[90%] max-w-[382px] flex justify-center bg-white rounded-[50px] border border-solid border-green-300 shadow-[0px_5px_10px_#00000040]">
        <div className="flex w-full flex-col p-4 md:p-6 items-center gap-2">
          <p className="w-fit font-['Times_New_Roman'] font-normal text-[#2a9f54] text-lg md:text-2xl text-center tracking-tight leading-normal whitespace-nowrap">
            Dear Dear Beloved Guest,
          </p>

          <p className="w-full max-w-[306px] font-['Times_New_Roman'] font-normal text-[#26c25f] text-sm md:text-base text-center tracking-tight leading-normal">
            You&#39;re warmly invited to celebrate our special day in our garden
            paradise!
          </p>
        </div>
      </div>

      <button
        className="flex w-[90%] max-w-[224px] h-[45px] items-center justify-center gap-2.5 p-2.5 absolute top-[85%] md:top-[850px] left-1/2 -translate-x-1/2 rounded-[50px] bg-[linear-gradient(90deg,rgba(39,195,95,1)_0%,rgba(42,159,84,1)_100%)] cursor-pointer border-0"
        type="button"
        aria-label="Open Invitation"
      >
        <span className="w-fit font-['Times_New_Roman'] font-bold text-white text-base tracking-tight leading-normal whitespace-nowrap">
          Open Invitation
        </span>
      </button>

      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[15px] w-[21px] h-9 flex justify-center rounded-[10.5px] border border-solid border-[#26c25f]"
        role="img"
        aria-label="Scroll down indicator"
      >
        <div className="mt-[7px] w-[3px] h-3.5 bg-[#2a9f54] rounded-[505px]" />
      </div>
    </div>

    {/* Words of Love Section */}
    <section
      className="relative w-full min-h-screen bg-[url(https://c.animaapp.com/C9WhKdjL/img/image-70.png)] bg-cover bg-center py-16 px-4"
      data-model-id="158:2394"
      aria-labelledby="quotes-heading"
    >
      <header className="flex flex-col w-full max-w-[545px] mx-auto items-center gap-4 mb-8 md:mb-12">
        <h1
          id="quotes-heading"
          className="w-fit font-['Playfair_Display'] font-normal text-[#2a9f54] text-4xl md:text-[64px] text-center tracking-tight leading-normal"
        >
          Words of Love
        </h1>

        <p className="w-full font-['Times_New_Roman'] font-normal text-[#26c25f] text-xl md:text-[32px] text-center tracking-tight leading-normal">
          Sacred verses that bless our garden of love
        </p>
      </header>

      <div
        className="flex items-center justify-center gap-4 mb-8 relative"
        aria-hidden="true"
      >
        <div className="w-32 md:w-48 h-px bg-green-500"></div>

        <img
          className="w-[80px] h-[38px] md:w-[157px] md:h-[76px]"
          alt="Decorative floral element"
          src="https://c.animaapp.com/C9WhKdjL/img/clip-path-group@2x.png"
        />

        <div className="w-32 md:w-48 h-px bg-green-500"></div>
      </div>

      <article className="w-full max-w-[744px] mx-auto flex justify-center bg-[#ffffff80] rounded-[10px] border border-solid border-green-300 p-6 md:p-8">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p
            className="w-full font-['Times_New_Roman'] font-normal text-[#248547] text-2xl md:text-4xl text-center tracking-tight leading-relaxed"
            lang="ar"
            dir="rtl"
          >
            ومن ايته ان خلق لكم من انفسكم ازواجا لتسكنوا اليها وجعل بينكم مودة
            ورحمة ان في ذلك لايت لقوم يتفكرون
          </p>

          <p className="w-full font-['Times_New_Roman'] font-normal text-[#26c25f] text-sm md:text-base text-center tracking-tight leading-normal">
            Artinya: &quot;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
            menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri
            agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa
            cinta dan kasih sayang. Sesungguhnya pada yang demikian itu
            benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
            berpikir.&quot;
          </p>

          <div className="w-full font-['Times_New_Roman'] font-bold text-[#26c25f] text-sm md:text-base text-center tracking-tight leading-normal">
            -QS. Ar-Rum: 21
          </div>
        </div>
      </article>

      <div
        className="absolute bottom-0 right-0 w-[200px] h-[133px] md:w-[429px] md:h-[286px]"
        aria-hidden="true"
      >
        <Image
          src="/assets/garden/burungpijak.png"
          alt="Decorative bird element"
          width={429}
          height={286}
          className="w-full h-full object-contain"
        />
      </div>
    </section>

    {/* Love Story Section */}
    <section
      className="relative w-full min-h-screen py-16 px-4"
      data-model-id="158:2446"
      aria-label="Our Love Story"
    >
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt=""
        src="https://c.animaapp.com/1Axp70GI/img/image-58.png"
        role="presentation"
      />
      
      <img
        className="absolute right-0 md:right-[-125px] bottom-0 md:bottom-[-121px] w-[300px] h-[102px] md:w-[542px] md:h-[185px]"
        alt=""
        src="https://c.animaapp.com/1Axp70GI/img/blue-and-green-classic-watercolor-illustration-the-art-of-garden.png"
        role="presentation"
      />
      
      <img
        className="absolute bottom-0 left-0 w-[242px] h-[157px] md:w-[484px] md:h-[314px] object-cover"
        alt=""
        src="https://c.animaapp.com/1Axp70GI/img/image-53.png"
        role="presentation"
      />

      <header className="relative flex flex-col w-full max-w-[610px] mx-auto items-center gap-2 mb-8 md:mb-12 z-10">
        <h1 className="w-fit font-['Playfair_Display'] font-normal text-[#2a9f54] text-4xl md:text-[64px] text-center tracking-tight leading-normal">
          Our Love Story
        </h1>
        <p className="w-full font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight leading-normal">
          Two souls blooming together in nature&#39;s paradise
        </p>
      </header>

      <div className="relative flex flex-col md:flex-row gap-6 md:gap-[25px] justify-center items-center md:items-start px-4 z-10">
        {/* Alexander Card */}
        <article className="flex w-full max-w-[491px] bg-[#ffffffcc] rounded-[10px] border border-solid border-[#26c25f] flex-col items-center pt-14 pb-6 px-4 gap-6 relative">
          <img
            className="absolute top-[15px] right-[50px] md:left-[222px] w-[120px] h-[112px] md:w-[165px] md:h-[154px]"
            alt=""
            src="https://c.animaapp.com/1Axp70GI/img/vector-1@2x.png"
            role="presentation"
          />
          
          <div className="relative w-[228px] h-[228px]">
            <img
              className="w-full h-full object-cover rounded-full"
              alt="Portrait of Alexander William Thompson"
              src="https://c.animaapp.com/1Axp70GI/img/rectangle-17721.svg"
            />
          </div>
          
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <h2 className="font-['Times_New_Roman'] font-normal italic text-[#2a9f54] text-2xl md:text-[32px] text-center tracking-tight leading-normal whitespace-nowrap">
              Alexander William Thompson
            </h2>
            <p className="font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight leading-normal">
              Putra/Putri dari:
            </p>
            <p className="font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight leading-normal">
              William Thompson & Elizabeth Thompson
            </p>
          </div>
          
          <a
            href="https://instagram.com/alexanderson"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[209px] h-[42px] items-center justify-center gap-2 bg-[#26c25f] rounded-[50px] cursor-pointer hover:bg-[#22a84f] transition-colors no-underline"
            aria-label="Visit Alexander William Thompson's Instagram profile"
          >
            <img
              className="w-[25px] h-[25px]"
              alt=""
              src="https://c.animaapp.com/1Axp70GI/img/social-icons.svg"
              role="presentation"
            />
            <span className="font-['Times_New_Roman'] font-bold text-white text-base tracking-tight leading-normal whitespace-nowrap">
              @alexanderson
            </span>
          </a>
        </article>

        {/* Isabella Card */}
        <article className="flex w-full max-w-[491px] bg-[#ffffffcc] rounded-[10px] border border-solid border-[#26c25f] flex-col items-center pt-14 pb-6 px-4 gap-6 relative">
          <img
            className="absolute top-[15px] right-[50px] md:left-[221px] w-[120px] h-[112px] md:w-[165px] md:h-[154px]"
            alt=""
            src="https://c.animaapp.com/1Axp70GI/img/vector-1@2x.png"
            role="presentation"
          />
          
          <div className="relative w-[228px] h-[228px]">
            <img
              className="w-full h-full object-cover rounded-full"
              alt="Portrait of Isabella Grace Martinez"
              src="https://c.animaapp.com/1Axp70GI/img/rectangle-17722.svg"
            />
          </div>
          
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <h2 className="font-['Times_New_Roman'] font-normal italic text-[#2a9f54] text-2xl md:text-[32px] text-center tracking-tight leading-normal whitespace-nowrap">
              Isabella Grace Martinez
            </h2>
            <p className="font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight leading-normal">
              Putra/Putri dari:
            </p>
            <p className="font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight leading-normal">
              Roberto Martinez & Sofia Martinez
            </p>
          </div>
          
          <a
            href="https://instagram.com/princess_bella"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[209px] h-[42px] items-center justify-center gap-2 bg-[#26c25f] rounded-[50px] cursor-pointer hover:bg-[#22a84f] transition-colors no-underline"
            aria-label="Visit Isabella Grace Martinez's Instagram profile"
          >
            <img
              className="w-[25px] h-[25px]"
              alt=""
              src="https://c.animaapp.com/1Axp70GI/img/social-icons-1.svg"
              role="presentation"
            />
            <span className="font-['Times_New_Roman'] font-bold text-white text-base tracking-tight leading-normal whitespace-nowrap">
              @princess_bella
            </span>
          </a>
        </article>
      </div>
    </section>

    {/* Story Love Timeline Section */}
    <section
      className="relative w-full min-h-screen bg-[url(https://c.animaapp.com/8kN9qjpl/img/image-70.png)] bg-cover bg-center py-16 px-4"
      data-model-id="158:2477"
    >
      <header className="relative flex flex-col w-full max-w-[563px] mx-auto items-center gap-2 mb-12 md:mb-16 z-10">
        <h1 className="w-fit font-['Playfair_Display'] font-normal text-[#2a9f54] text-4xl md:text-[64px] text-center tracking-tight leading-normal">
          Our Love Journey
        </h1>
        <p className="w-full font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight leading-normal">
          Every love story is beautiful, but ours blooms eternally
        </p>
      </header>

      {/* Decorative Images - Show on all devices with responsive sizing */}
      <img
        className="absolute top-[calc(50%+100px)] md:top-[calc(50%+50px)] right-0 w-[228px] h-[400px] md:w-[342px] md:h-[600px] lg:w-[456px] lg:h-[800px] object-cover"
        alt="Decorative floral illustration"
        src="https://c.animaapp.com/8kN9qjpl/img/image-61.png"
      />

      <img
        className="absolute right-0 bottom-0 w-[244px] h-[152px] md:w-[366px] md:h-[228px] lg:w-[488px] lg:h-[305px] object-cover"
        alt="Decorative garden scene"
        src="https://c.animaapp.com/8kN9qjpl/img/image-60.png"
      />

      <img
        className="absolute left-0 bottom-0 w-[251px] h-[280px] md:w-[377px] md:h-[420px] lg:w-[503px] lg:h-[561px]"
        alt="Decorative tree illustration"
        src="https://c.animaapp.com/8kN9qjpl/img/image-62.png"
      />

      <img
        className="absolute left-0 bottom-0 w-[202px] h-[119px] md:w-[303px] md:h-[179px] lg:w-[405px] lg:h-[239px] object-cover"
        alt="Decorative bridge scene"
        src="https://c.animaapp.com/8kN9qjpl/img/image-59@2x.png"
      />

      <img
        className="absolute top-[101px] left-[50px] md:left-[150px] lg:left-[226px] w-[37px] h-[45px] md:w-[55px] md:h-[67px] lg:w-[74px] lg:h-[90px] object-cover"
        alt="Decorative bird illustration"
        src="https://c.animaapp.com/8kN9qjpl/img/image-71@2x.png"
      />

      <img
        className="absolute top-[300px] md:top-[386px] left-6 md:left-8 lg:left-12 w-[52px] h-[63px] md:w-[78px] md:h-[94px] lg:w-[104px] lg:h-[126px] object-cover"
        alt="Decorative bird illustration"
        src="https://c.animaapp.com/8kN9qjpl/img/image-72@2x.png"
      />

      {/* Timeline */}
      <div className="relative max-w-[900px] mx-auto px-4 md:px-8" aria-label="Love story timeline">
        {/* Timeline Line - CSS only */}
        <div
          className="absolute left-4 md:left-8 lg:left-12 top-0 w-1 h-full rounded-[50px] bg-[linear-gradient(180deg,rgba(30,255,90,1)_0%,rgba(255,218,124,1)_100%)]"
          aria-hidden="true"
        />

        {/* Timeline Dots - CSS only */}
        <div className="absolute left-1.5 md:left-5 lg:left-9 top-0 w-7 h-7 md:w-10 md:h-10 bg-[#00d254] rounded-full border-2 border-solid border-[#16c300]" aria-hidden="true" />
        <div className="absolute left-1.5 md:left-5 lg:left-9 top-[200px] md:top-[237px] w-7 h-7 md:w-10 md:h-10 bg-[#00d254] rounded-full border-2 border-solid border-[#16c300]" aria-hidden="true" />
        <div className="absolute left-1.5 md:left-5 lg:left-9 top-[400px] md:top-[474px] w-7 h-7 md:w-10 md:h-10 bg-[#00d254] rounded-full border-2 border-solid border-[#16c300]" aria-hidden="true" />

        {/* Timeline Events */}
        <div className="flex flex-col gap-6 md:gap-8 ml-12 md:ml-24 lg:ml-32">
          {/* Event 1: 2020 */}
          <article className="relative bg-[#ffffffcc] rounded-[10px] border-l-4 border-solid border-green-300 shadow-[0px_4px_4px_#00000040] p-6">
            <div className="inline-flex items-center justify-center px-4 py-1 bg-[#86efac80] rounded-[50px] mb-3">
              <time className="font-['Georgia'] font-normal text-[#2a9f54] text-lg md:text-xl text-center tracking-tight leading-normal">
                2020
              </time>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-lg md:text-xl tracking-tight leading-normal">
                Once Upon a Time
              </h2>
              <p className="font-['Times_New_Roman'] font-normal text-[#26c25f] text-base md:text-xl tracking-tight leading-normal">
                We first met at a magical coffee shop where Alex accidentally spilled coffee on Isabella&apos;s fairy tale book. Love at first sight (and spill)! ☕💕
              </p>
            </div>
          </article>

          {/* Event 2: 2021 */}
          <article className="relative bg-[#ffffffcc] rounded-[10px] border-l-4 border-solid border-green-300 shadow-[0px_4px_4px_#00000040] p-6">
            <div className="inline-flex items-center justify-center px-4 py-1 bg-[#86efac80] rounded-[50px] mb-3">
              <time className="font-['Georgia'] font-normal text-[#2a9f54] text-lg md:text-xl text-center tracking-tight leading-normal">
                2021
              </time>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-lg md:text-xl tracking-tight leading-normal">
                The First Date
              </h2>
              <p className="font-['Times_New_Roman'] font-normal text-[#26c25f] text-base md:text-xl tracking-tight leading-normal">
                Our first official date was a romantic picnic under the stars. Alex brought his guitar and serenaded Isabella with her favorite song. 🌟🎵
              </p>
            </div>
          </article>

          {/* Event 3: 2023 */}
          <article className="relative bg-[#ffffffcc] rounded-[10px] border-l-4 border-solid border-green-300 shadow-[0px_4px_4px_#00000040] p-6">
            <div className="inline-flex items-center justify-center px-4 py-1 bg-[#86efac80] rounded-[50px] mb-3">
              <time className="font-['Georgia'] font-normal text-[#2a9f54] text-lg md:text-xl text-center tracking-tight leading-normal">
                2023
              </time>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-lg md:text-xl tracking-tight leading-normal">
                The Proposal
              </h2>
              <p className="font-['Times_New_Roman'] font-normal text-[#26c25f] text-base md:text-xl tracking-tight leading-normal">
                Alex proposed in a beautiful garden filled with pink roses, getting down on one knee with a crown-shaped ring box. She said yes! 👑💍
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* Countdown Section */}
    <section
      className="relative w-full min-h-[537px] bg-[url(https://c.animaapp.com/3ZNzJT1E/img/image-70.png)] bg-cover bg-center py-16 px-4"
      data-model-id="158:2513"
      aria-label="Wedding reception countdown"
    >
      <img
        className="absolute top-[calc(50%-30px)] md:top-[calc(50%-45px)] right-0 lg:right-[100px] w-[150px] h-[206px] md:w-[300px] md:h-[413px] object-cover"
        alt="Decorative floral arrangement"
        src="https://c.animaapp.com/3ZNzJT1E/img/image-68.png"
      />

      <img
        className="absolute left-0 bottom-0 w-[232px] h-[182px] md:w-[465px] md:h-[365px]"
        alt="Decorative botanical illustration"
        src="https://c.animaapp.com/3ZNzJT1E/img/image-62@2x.png"
      />

      <header className="relative flex flex-col w-full max-w-[840px] mx-auto items-center gap-2 mb-8 md:mb-12 z-10">
        <h1 className="w-fit font-['Playfair_Display'] font-normal text-[#2a9f54] text-3xl md:text-5xl text-center tracking-tight leading-normal">
          Counting Down to Our Reception
        </h1>
        <p className="w-full max-w-[530px] font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight leading-normal">
          Until our hearts bloom as one in nature&apos;s embrace...
        </p>
      </header>

      <div
        className="relative flex flex-wrap justify-center gap-4 md:gap-8 max-w-[735px] mx-auto z-10"
        role="timer"
        aria-live="polite"
      >
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[70px] h-[90px] md:w-[159px] md:h-[155px] bg-[#ffffff80] rounded-[10px] border border-solid border-green-300 p-2"
          >
            <time className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-2xl md:text-[40px] text-center tracking-tight leading-normal">
              {unit.value.toString().padStart(2, '0')}
            </time>
            <div className="font-['Georgia'] font-normal text-[#26c25f] text-sm md:text-2xl text-center tracking-tight leading-normal">
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      <img
        className="absolute right-0 bottom-0 w-[176px] h-[123px] md:w-[300px] md:h-[210px] object-cover"
        alt="Decorative nature scene"
        src="https://c.animaapp.com/3ZNzJT1E/img/image-59@2x.png"
      />
    </section>

    {/* When & Where Section */}
    <section
      className="relative w-full min-h-[1200px] md:min-h-screen bg-[url(https://c.animaapp.com/1Dr6WgZx/img/image-58.png)] bg-cover bg-center py-16 px-4 pb-24"
      data-model-id="158:2542"
      aria-label="Wedding event details"
    >
      {/* Background overlay untuk memastikan background full */}
      <div className="absolute inset-0 bg-[url(https://c.animaapp.com/1Dr6WgZx/img/image-58.png)] bg-cover bg-center -z-10" />

      <img
        className="absolute bottom-0 right-[20px] md:right-[100px] lg:right-[351px] w-[200px] h-[412px] md:w-[325px] md:h-[668px]"
        alt=""
        src="https://c.animaapp.com/1Dr6WgZx/img/image-134.png"
        aria-hidden="true"
      />

      <header className="relative flex flex-col w-full max-w-[496px] mx-auto items-center gap-2 mb-12 md:mb-16 z-10">
        <h1 className="w-fit font-['Playfair_Display'] font-normal text-[#2a9f54] text-4xl md:text-5xl text-center tracking-tight leading-normal">
          When &amp; Where
        </h1>
        <p className="w-full font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight leading-normal">
          Join us in celebrating our garden paradise wedding
        </p>
      </header>

      <img
        className="absolute w-[200px] h-[197px] md:w-[301px] md:h-[296px] lg:w-[20.90%] lg:h-[28.87%] bottom-0 right-0 lg:right-[63.61%]"
        alt=""
        src="https://c.animaapp.com/1Dr6WgZx/img/group-169@2x.png"
        aria-hidden="true"
      />

      <img
        className="absolute top-[250px] md:top-[311px] right-[20px] md:right-[50px] lg:right-[223px] w-[60px] h-[73px] md:w-[94px] md:h-[114px]"
        alt=""
        src="https://c.animaapp.com/1Dr6WgZx/img/image-56@2x.png"
        aria-hidden="true"
      />

      <img
        className="absolute top-[89px] right-[20px] md:right-[50px] lg:right-[422px] w-[95px] h-[115px] md:w-[146px] md:h-[177px]"
        alt=""
        src="https://c.animaapp.com/1Dr6WgZx/img/image-59@2x.png"
        aria-hidden="true"
      />

      <img
        className="absolute top-[150px] md:top-[182px] left-[20px] md:left-[50px] lg:left-[66px] w-[50px] h-[60px] md:w-[73px] md:h-[88px]"
        alt=""
        src="https://c.animaapp.com/1Dr6WgZx/img/image-61@2x.png"
        aria-hidden="true"
      />

      <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 justify-center items-center md:items-start px-4 z-10 max-w-6xl mx-auto">
        {/* Holy Matrimony Card */}
        <article className="flex flex-col w-full max-w-[382px] bg-[#ffffffcc] rounded-[10px] border border-solid border-green-300 shadow-[0px_4px_5px_#00000040] p-6">
          <header className="flex flex-col items-center gap-2 mb-4">
            <h2 className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-2xl md:text-[32px] text-center tracking-tight leading-normal whitespace-nowrap">
              Holy Matrimony
            </h2>
            <div className="w-[94px] h-[3px] bg-[#26c25f] rounded-[50px]" aria-hidden="true" />
          </header>

          <div className="flex flex-col gap-3 mb-4">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" alt="" src="https://c.animaapp.com/1Dr6WgZx/img/calendar-03-1.svg" aria-hidden="true" />
              <div className="font-['Georgia'] font-normal text-[#2a9f54] text-base tracking-tight leading-normal">
                Saturday, March 15, 2025
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" alt="" src="https://c.animaapp.com/1Dr6WgZx/img/clock-01-1.svg" aria-hidden="true" />
              <div className="font-['Georgia'] font-normal text-[#2a9f54] text-base tracking-tight leading-normal">
                08:00 AM
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" alt="" src="https://c.animaapp.com/1Dr6WgZx/img/location-09-2.svg" aria-hidden="true" />
              <div className="font-['Georgia'] font-normal text-[#2a9f54] text-base tracking-tight leading-normal">
                Masjid Al-Barokah
              </div>
            </div>
          </div>

          <address className="not-italic mb-4">
            <p className="font-['Georgia'] font-normal text-[#26c25f] text-[13px] tracking-tight leading-normal">
              Jl. Kebahagiaan No. 123, Jakarta Selatan
            </p>
          </address>

          <button
            type="button"
            className="flex w-full h-[31px] items-center justify-center gap-2 px-4 py-2 bg-[#26c25f] rounded-[10px] cursor-pointer border-0 mb-4"
            aria-label="Add Holy Matrimony to Calendar"
          >
            <img className="w-4 h-4" alt="" src="https://c.animaapp.com/1Dr6WgZx/img/plus-sign-1.svg" aria-hidden="true" />
            <span className="font-['Times_New_Roman'] font-bold text-white text-base tracking-tight leading-normal whitespace-nowrap">
              Add to Calendar
            </span>
          </button>

          <img
            className="w-full h-[312px] object-cover rounded mb-4"
            alt="Map location for Masjid Al-Barokah"
            src="https://c.animaapp.com/1Dr6WgZx/img/rectangle-17711-1@2x.png"
          />

          <button
            type="button"
            className="flex w-full h-[31px] items-center justify-center gap-2 px-4 py-2 bg-white rounded-[10px] border border-solid border-[#2a9f54] cursor-pointer"
            aria-label="View Masjid Al-Barokah on Maps"
          >
            <img className="w-4 h-4" alt="" src="https://c.animaapp.com/1Dr6WgZx/img/location-09-3.svg" aria-hidden="true" />
            <span className="font-['Times_New_Roman'] font-bold text-[#2a9f54] text-base tracking-tight leading-normal whitespace-nowrap">
              View on Maps
            </span>
          </button>
        </article>

        {/* Wedding Reception Card */}
        <article className="flex flex-col w-full max-w-[382px] bg-[#ffffffcc] rounded-[10px] border border-solid border-green-300 shadow-[0px_4px_5px_#00000040] p-6">
          <header className="flex flex-col items-center gap-2 mb-4">
            <h2 className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-2xl md:text-[32px] text-center tracking-tight leading-normal whitespace-nowrap">
              Wedding Reception
            </h2>
            <div className="w-[94px] h-[3px] bg-[#26c25f] rounded-[50px]" aria-hidden="true" />
          </header>

          <div className="flex flex-col gap-3 mb-4">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" alt="" src="https://c.animaapp.com/1Dr6WgZx/img/calendar-03-1.svg" aria-hidden="true" />
              <div className="font-['Georgia'] font-normal text-[#2a9f54] text-base tracking-tight leading-normal">
                Saturday, March 15, 2025
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" alt="" src="https://c.animaapp.com/1Dr6WgZx/img/clock-01-1.svg" aria-hidden="true" />
              <div className="font-['Georgia'] font-normal text-[#2a9f54] text-base tracking-tight leading-normal">
                07:00 PM
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" alt="" src="https://c.animaapp.com/1Dr6WgZx/img/location-09-2.svg" aria-hidden="true" />
              <div className="font-['Georgia'] font-normal text-[#2a9f54] text-base tracking-tight leading-normal">
                The Royal Ballroom
              </div>
            </div>
          </div>

          <address className="not-italic mb-4">
            <p className="font-['Georgia'] font-normal text-[#26c25f] text-[13px] tracking-tight leading-normal">
              Jl. Cinta Sejati No. 456, Jakarta Selatan
            </p>
          </address>

          <button
            type="button"
            className="flex w-full h-[31px] items-center justify-center gap-2 px-4 py-2 bg-[#26c25f] rounded-[10px] cursor-pointer border-0 mb-4"
            aria-label="Add Wedding Reception to Calendar"
          >
            <img className="w-4 h-4" alt="" src="https://c.animaapp.com/1Dr6WgZx/img/plus-sign-1.svg" aria-hidden="true" />
            <span className="font-['Times_New_Roman'] font-bold text-white text-base tracking-tight leading-normal whitespace-nowrap">
              Add to Calendar
            </span>
          </button>

          <img
            className="w-full h-[312px] object-cover rounded mb-4"
            alt="Map location for The Royal Ballroom"
            src="https://c.animaapp.com/1Dr6WgZx/img/rectangle-17711-1@2x.png"
          />

          <button
            type="button"
            className="flex w-full h-[31px] items-center justify-center gap-2 px-4 py-2 bg-white rounded-[10px] border border-solid border-[#2a9f54] cursor-pointer"
            aria-label="View The Royal Ballroom on Maps"
          >
            <img className="w-4 h-4" alt="" src="https://c.animaapp.com/1Dr6WgZx/img/location-09-3.svg" aria-hidden="true" />
            <span className="font-['Times_New_Roman'] font-bold text-[#2a9f54] text-base tracking-tight leading-normal whitespace-nowrap">
              View on Maps
            </span>
          </button>
        </article>
      </div>

      <img
        className="absolute bottom-0 left-0 w-[250px] h-[211px] md:w-[411px] md:h-[348px]"
        alt=""
        src="https://c.animaapp.com/1Dr6WgZx/img/image-73.png"
        aria-hidden="true"
      />

      <img
        className="absolute bottom-0 left-0 w-[300px] h-[264px] md:w-[561px] md:h-[494px]"
        alt=""
        src="https://c.animaapp.com/1Dr6WgZx/img/image-132.png"
        aria-hidden="true"
      />

      <img
        className="absolute bottom-0 right-0 w-[150px] h-[509px] md:w-[248px] md:h-[842px]"
        alt=""
        src="https://c.animaapp.com/1Dr6WgZx/img/image-133.png"
        aria-hidden="true"
      />

      <img
        className="absolute bottom-0 right-0 w-[180px] h-[97px] md:w-[273px] md:h-[147px]"
        alt=""
        src="https://c.animaapp.com/1Dr6WgZx/img/image-69@2x.png"
        aria-hidden="true"
      />
    </section>

    {/* Dress Code Section */}
    <section
      className="relative w-full min-h-[800px] md:min-h-[581px] bg-[url(https://c.animaapp.com/3ZNzJT1E/img/image-70.png)] bg-cover bg-center py-16 px-4 overflow-hidden"
      data-model-id="158:2662"
      aria-labelledby="dress-code-heading"
    >
      {/* Decorative Images - All visible on mobile and desktop */}
      
      {/* Image 73 - Bottom Right */}
      <img
        className="absolute right-0 bottom-0 md:-bottom-5 w-[200px] h-[122px] md:w-[436px] md:h-[267px] object-cover z-10"
        alt=""
        src="https://c.animaapp.com/zU2qxdlJ/img/image-73@2x.png"
        aria-hidden="true"
      />

      {/* Image 134 - Bottom Left (taller vertical) */}
      <img
        className="absolute left-[10px] md:left-[66px] bottom-[-7px] w-[100px] h-[215px] md:w-[218px] md:h-[468px] object-cover z-10"
        alt=""
        src="https://c.animaapp.com/zU2qxdlJ/img/image-134@2x.png"
        aria-hidden="true"
      />

      {/* Image 133 - Left side (very tall vertical) */}
      <img
        className="absolute left-0 bottom-0 w-[85px] h-[255px] md:w-[187px] md:h-[560px] object-cover z-10"
        alt=""
        src="https://c.animaapp.com/zU2qxdlJ/img/image-133.png"
        aria-hidden="true"
      />

      {/* Image 69 - Bottom Left Corner (horizontal) */}
      <img
        className="absolute left-0 bottom-[-10px] md:bottom-[-23px] w-[100px] h-[49px] md:w-[218px] md:h-[106px] object-cover z-10"
        alt=""
        src="https://c.animaapp.com/zU2qxdlJ/img/image-69@2x.png"
        aria-hidden="true"
      />

      {/* Image 132 - Bottom Right (large horizontal) */}
      <img
        className="absolute bottom-0 right-0 md:right-[-11px] w-[270px] h-[175px] md:w-[590px] md:h-[382px] object-cover z-10"
        alt=""
        src="https://c.animaapp.com/zU2qxdlJ/img/image-132.png"
        aria-hidden="true"
      />

      {/* Background gradient card */}
      <div
        className="relative z-20 top-[60px] md:top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[744px] h-auto md:h-96 rounded-[10px] bg-[linear-gradient(119deg,rgba(181,255,187,1)_0%,rgba(253,249,200,1)_50%,rgba(181,255,187,1)_100%)] p-4 pb-8 md:mt-[116px]"
        aria-hidden="true"
      >
        {/* Header */}
        <header className="flex flex-col items-center pt-6 md:pt-12">
          <h2
            id="dress-code-heading"
            className="font-['Playfair_Display'] font-normal text-[#2a9f54] text-3xl md:text-5xl text-center tracking-tight"
          >
            Dress Code
          </h2>
          <p className="font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight mt-2">
            Coqutte Theme
          </p>
        </header>

        {/* Color Cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mt-8 md:mt-16">
          {/* Garden Green Card */}
          <div className="flex flex-col items-center justify-center gap-2.5 p-4 w-[200px] md:w-[243px] h-[130px] md:h-[154px] bg-white rounded-[10px] border-[0.5px] border-solid border-[#0000001a]">
            <div
              className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full"
              style={{ backgroundColor: '#66dc7e' }}
              role="img"
              aria-label="Garden Green color swatch"
            />
            <div
              className="font-['Georgia'] font-normal text-xl md:text-2xl text-center tracking-tight"
              style={{ color: '#66dc7e' }}
            >
              Garden Green
            </div>
          </div>

          {/* Sunflower Card */}
          <div className="flex flex-col items-center justify-center gap-2.5 p-4 w-[200px] md:w-[243px] h-[130px] md:h-[154px] bg-white rounded-[10px] border border-solid border-[#f5ca0f]">
            <div
              className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full"
              style={{ backgroundColor: '#f5ca0f' }}
              role="img"
              aria-label="Sunflower color swatch"
            />
            <div
              className="font-['Georgia'] font-normal text-xl md:text-2xl text-center tracking-tight"
              style={{ color: '#f5ca0f' }}
            >
              Sunflower
            </div>
          </div>
        </div>

        {/* Description Text */}
        <p className="font-['Times_New_Roman'] font-normal text-[#26c25f] text-base md:text-2xl text-center tracking-tight mt-6 md:mt-8 px-4">
          We kindly request our guests to wear Garden Green colors and Sunflower
        </p>
      </div>
    </section>
    
    {/* Moments Gallery Section */}
    <section
      className="relative w-full min-h-[900px] md:min-h-[1110px] bg-[url(https://c.animaapp.com/3ZNzJT1E/img/image-70.png)] bg-cover bg-center py-16 px-4 overflow-hidden"
      data-model-id="158:2685"
      aria-label="Wedding moments gallery"
    >
      {/* Decorative Images - All visible on mobile and desktop with smaller sizes */}
      
      {/* Image 74 - Moved to Bottom Right */}
      <img
        className="absolute bottom-0 right-0 w-[150px] h-[179px] md:w-[350px] md:h-[418px] object-cover z-10"
        alt="Wedding moment decoration"
        src="https://c.animaapp.com/4h46nLOe/img/image-74.png"
        aria-hidden="true"
      />

      {/* Bottom decorations - much smaller size for mobile */}
      <img
        className="absolute left-0 bottom-0 md:bottom-[-31px] w-[130px] h-[80px] md:w-[500px] md:h-[308px] object-cover z-10"
        alt="Wedding moment decoration"
        src="https://c.animaapp.com/4h46nLOe/img/image-67.png"
        aria-hidden="true"
      />

      <img
        className="absolute bottom-0 right-[-30px] md:right-0 w-[100px] h-[45px] md:w-[350px] md:h-[157px] object-cover z-10"
        alt="Wedding moment decoration"
        src="https://c.animaapp.com/4h46nLOe/img/image-66.png"
        aria-hidden="true"
      />

      <img
        className="absolute bottom-0 right-[-10px] md:bottom-0 md:right-[50px] w-[80px] h-[52px] md:w-[280px] md:h-[182px] object-cover z-10"
        alt="Wedding moment decoration"
        src="https://c.animaapp.com/4h46nLOe/img/image-64@2x.png"
        aria-hidden="true"
      />

      <img
        className="absolute bottom-0 right-[10px] md:right-auto md:left-[1232px] w-[50px] h-[47px] md:w-[150px] md:h-[141px] object-cover z-10"
        alt="Wedding moment decoration"
        src="https://c.animaapp.com/4h46nLOe/img/image-63@2x.png"
        aria-hidden="true"
      />

      <img
        className="absolute bottom-[50px] right-[160px] md:bottom-0 md:right-auto md:left-[901px] w-[70px] h-[71px] md:w-[180px] md:h-[183px] object-cover z-10"
        alt="Wedding moment decoration"
        src="https://c.animaapp.com/4h46nLOe/img/image-73@2x.png"
        aria-hidden="true"
      />

      {/* Header */}
      <header className="relative flex flex-col w-full max-w-[669px] mx-auto items-center gap-2 mb-8 md:mb-12 z-10">
        <h1 className="font-['Playfair_Display'] font-normal text-[#2a9f54] text-3xl md:text-5xl text-center tracking-tight">
          Our Moments
        </h1>
        <p className="font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight">
          A glimpse of our beautiful garden love story
        </p>
      </header>

      {/* Featured Image */}
      <img
        className="relative w-full max-w-[598px] h-[250px] md:h-[364px] mx-auto object-cover rounded-lg mb-8 z-10"
        alt="Featured wedding moment"
        src="https://c.animaapp.com/4h46nLOe/img/rectangle-18.svg"
      />

      {/* Gallery Carousel */}
      <div
        className="relative flex items-center gap-2 md:gap-[9px] max-w-[712px] mx-auto overflow-x-scroll mb-8 z-10 pb-4"
        role="region"
        aria-label="Photo gallery carousel"
      >
        <img
          className="w-[138px] h-28 object-cover flex-shrink-0 rounded"
          alt="Gallery image 1"
          src="https://c.animaapp.com/4h46nLOe/img/rectangle-19.svg"
        />
        <img
          className="w-[170px] h-[126px] flex-shrink-0 rounded"
          alt="Gallery image 2"
          src="https://c.animaapp.com/4h46nLOe/img/rectangle-20.svg"
        />
        <img
          className="w-[138px] h-28 object-cover flex-shrink-0 rounded"
          alt="Gallery image 3"
          src="https://c.animaapp.com/4h46nLOe/img/rectangle-21.svg"
        />
        <img
          className="w-[138px] h-28 object-cover flex-shrink-0 rounded"
          alt="Gallery image 4"
          src="https://c.animaapp.com/4h46nLOe/img/rectangle-22.svg"
        />
        <img
          className="w-[138px] h-28 object-cover flex-shrink-0 rounded"
          alt="Gallery image 5"
          src="https://c.animaapp.com/4h46nLOe/img/rectangle-23.svg"
        />
      </div>

      {/* Share Your Moments Card */}
      <aside
        className="relative w-[90%] max-w-[552px] mx-auto flex flex-col items-center gap-4 p-6 rounded-[10px] border border-solid border-green-300 bg-[linear-gradient(119deg,rgba(181,255,187,1)_0%,rgba(253,249,200,1)_50%,rgba(181,255,187,1)_100%)] z-10"
        aria-label="Share your moments"
      >
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-['Playfair_Display'] font-normal text-[#2a9f54] text-2xl md:text-[32px] text-center tracking-tight">
            Share Your Moments
          </h2>
          <p className="font-['Times_New_Roman'] font-normal text-[#26c25f] text-sm md:text-base text-center tracking-tight max-w-[260px]">
            Tag us in your photos and videos from our garden paradise
            celebration using
          </p>
        </div>

        <button
          className="flex items-center justify-center gap-2 px-4 py-3 h-[50px] w-full max-w-[323px] bg-white rounded-[10px] border border-solid border-green-300 cursor-pointer hover:bg-gray-50 focus:outline-2 focus:outline-offset-2 focus:outline-green-300 transition-colors"
          onClick={() => {
            navigator.clipboard.writeText("#GardenWedding2025");
            alert("Hashtag copied to clipboard!");
          }}
          aria-label="Copy hashtag GardenWedding2025 to clipboard"
          type="button"
        >
          <span className="font-['Consolas'] font-normal text-[#2a9f54] text-base tracking-tight whitespace-nowrap">
            #GardenWedding2025
          </span>
          <img
            className="w-6 h-6"
            alt="Copy icon"
            src="https://c.animaapp.com/4h46nLOe/img/copy-01.svg"
            aria-hidden="true"
          />
        </button>
      </aside>
    </section>

    {/* RSVP Section */}
    <RsvpSectionComponent />

    {/* Wedding Wishes Section */}
    <WishSection />

    {/* Wedding Gift & Thank You Section (Grouped) */}
    <WeddingGiftAndThanks />

    {/* QR Code Section */}
    <QrCodeSection />

    {/* Thank You Section */}
    <ThankYouSection />

    </>
  );
}

// RSVP Section Component
function RsvpSectionComponent() {
  const [fullName, setFullName] = useState("Alif & partner");
  const [attendance, setAttendance] = useState("hadir");
  const [guestCount, setGuestCount] = useState("1 orang");
  const [message, setMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const guestOptions = ["1 orang", "2 orang", "3 orang", "4 orang", "5 orang"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      fullName,
      attendance,
      guestCount,
      message,
    });
  };

  return (
    <section className="relative w-full min-h-[900px] md:min-h-[1000px] bg-[url(https://c.animaapp.com/3ZNzJT1E/img/image-70.png)] bg-cover bg-center py-16 px-4" data-model-id="158:2713" aria-label="RSVP">
      <div className="flex flex-col w-full max-w-96 mx-auto items-center gap-2.5 mb-8 relative z-20">
        <h1 className="font-['Playfair_Display'] font-normal text-[#2a9f54] text-4xl md:text-5xl text-center tracking-tight">
          RSVP
        </h1>

        <p className="w-full max-w-[532px] font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight">
          Please confirm your attendance to our garden celebration
        </p>
      </div>

      <img
        className="absolute bottom-[100px] md:bottom-[150px] right-0 w-[200px] h-[350px] md:w-[362px] md:h-[627px] object-cover z-10"
        alt="Decorative garden image"
        src="https://c.animaapp.com/LPpkom9D/img/image-69.png"
        aria-hidden="true"
      />

      <img
        className="absolute bottom-[100px] md:bottom-[150px] left-0 w-[250px] h-[365px] md:w-[444px] md:h-[653px] object-cover z-10"
        alt="Decorative garden image"
        src="https://c.animaapp.com/LPpkom9D/img/image-70.png"
        aria-hidden="true"
      />

      <form
        className="relative w-full max-w-[559px] mx-auto bg-[#ffffffcc] rounded-[10px] border border-solid border-green-300 shadow-[0px_4px_4px_#00000040] p-6 mb-[120px] md:mb-[150px] z-20"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6">
          {/* Nama Lengkap */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-base tracking-tight"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-[38px] px-2.5 py-2 bg-[#d4f3df] rounded-[5px] border border-solid border-[#2a9f54] font-['Times_New_Roman'] font-normal text-[#2a9f54] text-xl tracking-tight"
              required
            />
          </div>

          {/* Konfirmasi Kehadiran */}
          <div className="flex flex-col gap-2">
            <span className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-base tracking-tight">
              Konfirmasi Kehadiran
            </span>
            <div className="flex gap-4 md:gap-8">
              <div className="flex items-center gap-2.5">
                <input
                  type="radio"
                  id="hadir"
                  name="attendance"
                  value="hadir"
                  checked={attendance === "hadir"}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="sr-only"
                />
                <label
                  htmlFor="hadir"
                  className="flex items-center gap-2.5 cursor-pointer"
                >
                  <img
                    className="w-4 h-4"
                    alt=""
                    src={
                      attendance === "hadir"
                        ? "https://c.animaapp.com/LPpkom9D/img/checkmark-circle-02-1.svg"
                        : "https://c.animaapp.com/LPpkom9D/img/checkmark-circle-02.svg"
                    }
                  />
                  <span className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-base tracking-tight whitespace-nowrap">
                    Hadir
                  </span>
                </label>
              </div>

              <div className="flex items-center gap-2.5">
                <input
                  type="radio"
                  id="tidakHadir"
                  name="attendance"
                  value="tidak-hadir"
                  checked={attendance === "tidak-hadir"}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="sr-only"
                />
                <label
                  htmlFor="tidakHadir"
                  className="flex items-center gap-2.5 cursor-pointer"
                >
                  <img
                    className="w-4 h-4"
                    alt=""
                    src={
                      attendance === "tidak-hadir"
                        ? "https://c.animaapp.com/LPpkom9D/img/checkmark-circle-02-1.svg"
                        : "https://c.animaapp.com/LPpkom9D/img/checkmark-circle-02.svg"
                    }
                  />
                  <span className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-base tracking-tight whitespace-nowrap">
                    Tidak Hadir
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Jumlah Tamu */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="guestCount"
              className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-base tracking-tight"
            >
              Jumlah tamu
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full h-[38px] px-2.5 py-2 bg-[#d4f3df] rounded-[5px] border border-solid border-[#2a9f54] flex items-center justify-between cursor-pointer"
              >
                <span className="font-['Georgia'] font-normal text-[#2a9f54] text-xl tracking-tight">
                  {guestCount}
                </span>
                <img
                  className="w-[18px] h-2.5"
                  alt=""
                  src="https://c.animaapp.com/LPpkom9D/img/vector.svg"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-[#d4f3df] rounded-[5px] border border-solid border-[#2a9f54] shadow-lg z-10">
                  {guestOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setGuestCount(option);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full p-2.5 text-left font-['Georgia'] font-normal text-[#2a9f54] text-xl tracking-tight hover:bg-[#c0e8d0] transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Pesan */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-base tracking-tight"
            >
              Pesan untuk Mempelai (Opsional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis Pesan anda..."
              className="w-full h-[115px] p-2.5 bg-[#d4f3df] rounded-[5px] border border-solid border-[#2a9f54] font-['Times_New_Roman'] font-normal text-[#2a9f54] text-xl tracking-tight resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[38px] flex items-center justify-center gap-2 px-4 py-2 bg-[#26c25f] rounded-[10px] cursor-pointer hover:bg-[#22a854] transition-colors"
          >
            <img
              className="w-4 h-4"
              alt=""
              src="https://c.animaapp.com/LPpkom9D/img/telegram.svg"
            />
            <span className="font-['Times_New_Roman'] font-normal text-white text-base tracking-tight whitespace-nowrap">
              Kirim RSVP
            </span>
          </button>
        </div>
      </form>

      {/* Bottom Decorative Images */}
      <img
        className="absolute bottom-0 right-[50px] md:right-[400px] w-[270px] h-[165px] md:w-[484px] md:h-[293px] object-cover z-10"
        alt="Decorative garden flowers"
        src="https://c.animaapp.com/LPpkom9D/img/image-69-1@2x.png"
        aria-hidden="true"
      />

      <img
        className="absolute bottom-0 left-[150px] md:left-64 w-[270px] h-[165px] md:w-[484px] md:h-[293px] object-cover z-10"
        alt="Decorative garden flowers"
        src="https://c.animaapp.com/LPpkom9D/img/image-73@2x.png"
        aria-hidden="true"
      />

      <img
        className="absolute bottom-0 left-0 w-[250px] h-[165px] md:w-[445px] md:h-[293px] object-cover z-10"
        alt="Decorative garden flowers"
        src="https://c.animaapp.com/LPpkom9D/img/image-72@2x.png"
        aria-hidden="true"
      />

      <img
        className="absolute bottom-0 right-0 w-[243px] h-[165px] md:w-[436px] md:h-[293px] object-cover z-10"
        alt="Decorative garden flowers"
        src="https://c.animaapp.com/LPpkom9D/img/image-71@2x.png"
        aria-hidden="true"
      />
    </section>
  );
}

// Wish Message Interface
interface WishMessage {
  id: number;
  name: string;
  message: string;
  timestamp: string;
  variant?: "green" | "pink";
}

// Wedding Wishes Section Component
function WishSection() {
  const [guestName, setGuestName] = useState("");
  const [wishMessage, setWishMessage] = useState("");

  const initialWishes: WishMessage[] = [
    {
      id: 1,
      name: "Sarah & David",
      message:
        "Selamat atas pernikahan kalian! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu! 💕",
      timestamp: "2 hari yang lalu",
      variant: "green",
    },
    {
      id: 2,
      name: "Maya",
      message:
        "Finally! Kalian memang couple goals banget. Semoga langgeng sampai kakek nenek ya! 👰🤵",
      timestamp: "1 hari yang lalu",
      variant: "green",
    },
    {
      id: 3,
      name: "Ahmad & Sari",
      message:
        "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. Selamat menempuh hidup baru! 🤲",
      timestamp: "8 jam yang lalu",
      variant: "green",
    },
    {
      id: 4,
      name: "Sarah & David",
      message:
        "Selamat atas pernikahan kalian! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu! 💕",
      timestamp: "2 hari yang lalu",
      variant: "green",
    },
    {
      id: 5,
      name: "Maya",
      message:
        "Finally! Kalian memang couple goals banget. Semoga langgeng sampai kakek nenek ya! 👰🤵",
      timestamp: "1 hari yang lalu",
      variant: "green",
    },
    {
      id: 6,
      name: "Ahmad & Sari",
      message:
        "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. Selamat menempuh hidup baru! 🤲",
      timestamp: "8 jam yang lalu",
      variant: "pink",
    },
  ];

  const [wishes] = useState<WishMessage[]>(initialWishes);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full min-h-[801px] bg-[url(https://c.animaapp.com/3ZNzJT1E/img/image-70.png)] bg-cover bg-center py-16 px-4" data-model-id="158:2749" aria-label="Wedding Wishes">
      <img
        className="absolute w-[200px] h-[192px] md:w-[370px] md:h-[357px] bottom-0 right-0"
        alt=""
        src="https://c.animaapp.com/CYVpAo6B/img/clip-path-group@2x.png"
        aria-hidden="true"
      />

      <img
        className="absolute w-[200px] h-[192px] md:w-[370px] md:h-[357px] bottom-0 left-0"
        alt=""
        src="https://c.animaapp.com/CYVpAo6B/img/clip-path-group-1@2x.png"
        aria-hidden="true"
      />

      <header className="flex flex-col w-full max-w-[606px] mx-auto items-center gap-2 mb-12 relative z-20">
        <h1 className="font-['Playfair_Display'] font-normal text-[#2a9f54] text-4xl md:text-5xl text-center tracking-tight">
          Wedding Wishes
        </h1>

        <p className="w-full font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight">
          Send your love and best wishes for our garden celebration
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-start max-w-6xl mx-auto relative z-20">
        {/* Send Wishes Form */}
        <section
          className="w-full max-w-[383px] bg-white border border-solid border-green-300 shadow-[0px_4px_4px_#00000040] rounded-[10px] p-6"
          aria-label="Send wishes form"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                className="w-4 h-4"
                alt=""
                src="https://c.animaapp.com/CYVpAo6B/img/linear---like---heart-.svg"
                aria-hidden="true"
              />
              <label
                htmlFor="guest-name"
                className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-base tracking-tight"
              >
                Kirim Ucapan
              </label>
            </div>

            <input
              id="guest-name"
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Alif & partner"
              className="w-full h-11 px-2.5 py-2 bg-[#d4f3df] rounded-[5px] border border-solid border-green-300 font-['Times_New_Roman'] font-normal text-[#2a9f54] text-xl text-center tracking-tight placeholder:text-[#2a9f54]"
              aria-label="Your name"
            />

            <textarea
              id="wish-message"
              value={wishMessage}
              onChange={(e) => setWishMessage(e.target.value)}
              placeholder="Tulis ucapan atau doa untuk mempelai..."
              className="w-full h-[171px] p-2.5 bg-[#d4f3df] rounded-[5px] border border-solid border-green-300 font-['Times_New_Roman'] font-normal text-[#2a9f54] text-xl text-center tracking-tight placeholder:text-[#2a9f54] resize-none"
              aria-label="Your wishes"
            />

            <button
              type="submit"
              className="w-full h-11 flex items-center justify-center gap-2 px-4 py-2 bg-[#26c25f] rounded-[10px] cursor-pointer hover:bg-[#22a952] transition-colors"
              aria-label="Submit wishes"
            >
              <img
                className="w-4 h-4"
                alt=""
                src="https://c.animaapp.com/CYVpAo6B/img/linear---like---heart--1.svg"
                aria-hidden="true"
              />
              <span className="font-['Times_New_Roman'] font-normal text-white text-base tracking-tight whitespace-nowrap">
                Kirim Ucapan
              </span>
            </button>
          </form>
        </section>

        {/* Guest Wishes List */}
        <section
          className="w-full max-w-[383px] bg-white border border-solid border-green-300 shadow-[0px_4px_4px_#00000040] rounded-[10px] p-6"
          aria-label="Guest wishes"
        >
          <div className="flex items-center gap-2 mb-4">
            <img
              className="w-4 h-4"
              alt=""
              src="https://c.animaapp.com/CYVpAo6B/img/user-multiple.svg"
              aria-hidden="true"
            />
            <h2 className="font-['Times_New_Roman'] font-normal text-[#2a9f54] text-base tracking-tight">
              Ucapan dari Tamu ({wishes.length})
            </h2>
          </div>

          <div className="flex flex-col gap-3 h-[308px] overflow-y-scroll pr-2">
            {wishes.map((wish) => (
              <article
                key={wish.id}
                className={`flex justify-center ${
                  wish.variant === "pink" ? "bg-[#f3cfe1]" : "bg-[#d4f3df]"
                } rounded-[10px] border-l-4 ${
                  wish.variant === "pink"
                    ? "border-[#f042c5]"
                    : "border-[#26c25f]"
                } shadow-[0px_4px_4px_#00000040] p-2.5`}
              >
                <div className="w-full flex flex-col gap-2 relative">
                  <h3
                    className={`${
                      wish.variant === "pink"
                        ? "text-[#9a4c86]"
                        : "text-[#2a9f54]"
                    } font-['Times_New_Roman'] font-normal text-sm tracking-tight`}
                  >
                    {wish.name}
                  </h3>

                  <p
                    className={`font-['Times_New_Roman'] font-normal ${
                      wish.variant === "pink"
                        ? "text-[#f042c5]"
                        : "text-[#26c25f]"
                    } text-xs tracking-tight leading-normal`}
                  >
                    {wish.message}
                  </p>

                  <time
                    className={`${
                      wish.variant === "pink"
                        ? "text-[#f042c5]"
                        : "text-[#26c25f]"
                    } absolute top-0 right-0 font-['Georgia'] font-normal text-xs tracking-tight`}
                  >
                    {wish.timestamp}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <img
        className="absolute w-[192px] h-[200px] md:w-[357px] md:h-[370px] top-0 left-0"
        alt=""
        src="https://c.animaapp.com/CYVpAo6B/img/clip-path-group-2@2x.png"
        aria-hidden="true"
      />

      <img
        className="absolute w-[192px] h-[200px] md:w-[357px] md:h-[370px] top-0 right-0"
        alt=""
        src="https://c.animaapp.com/CYVpAo6B/img/clip-path-group-3@2x.png"
        aria-hidden="true"
      />
    </section>
  );
}

// Gift Section Tab Options
const TAB_OPTIONS = [
  { id: "digital-transfer", label: "Digital Transfer" },
  { id: "wedding-registry", label: "Wedding Registry" },
  { id: "kirim-kado", label: "Kirim Kado" },
];

// Wedding Gift Section Component
// Combined Wedding Gift + Thank You Section (grouped visually)
function WeddingGiftAndThanks() {
  const [activeTab, setActiveTab] = useState<string>("digital-transfer");

  return (
    <section
      className="relative w-full min-h-[1000px] bg-[url(https://c.animaapp.com/3ZNzJT1E/img/image-70.png)] bg-cover bg-center py-16 px-4"
      data-model-id="158:2859-2952"
      aria-label="Wedding Gifts and Thanks"
    >
      {/* Decorative left side image - full height */}
      <img
        className="absolute left-0 top-0 h-full w-auto object-cover z-0"
        alt="Decorative left side"
        src="/assets/garden/dekorkiri.png"
        aria-hidden="true"
      />

      {/* Decorative right side image - full height */}
      <img
        className="absolute right-0 top-0 h-full w-auto object-cover z-0"
        alt="Decorative right side"
        src="/assets/garden/dekorkanan.png"
        aria-hidden="true"
      />

      {/* Shared decorative background - turunin dikit */}
      <img
        className="absolute w-[400px] h-[260px] md:w-[900px] md:h-[514px] top-[80px] left-1/2 -translate-x-1/2"
        alt="Decorative background"
        src="https://c.animaapp.com/bV6A1k4q/img/group-182.png"
        aria-hidden="true"
      />

      <div className="relative z-20 max-w-6xl mx-auto flex flex-col gap-0">
        {/* Gift area */}
        <div className="relative z-30">
          <header className="flex flex-col items-center gap-2 mb-6 -mt-16">
            <h2 className="font-['Playfair_Display'] font-normal text-[#2a9f54] text-4xl md:text-5xl text-center tracking-tight">
              Wedding Gift
            </h2>
            <p className="w-full max-w-[859px] font-['Times_New_Roman'] text-[#26c25f] text-lg md:text-2xl text-center">
              Your presence is the greatest gift, but if you wish to honor us with something special...
            </p>
          </header>

          <nav
            className="w-full max-w-[602px] mx-auto bg-[#fdffba] rounded-[10px] flex items-center justify-center mb-6"
            role="tablist"
            aria-label="Gift options"
          >
            {TAB_OPTIONS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`${tab.id}-panel`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 h-[39px] px-4 py-2 rounded-[50px] flex items-center justify-center transition-colors ${
                  activeTab === tab.id ? "bg-white" : ""
                }`}
              >
                <span className="font-['Times_New_Roman'] text-black text-sm tracking-tight whitespace-nowrap text-center">
                  {tab.label}
                </span>
              </button>
            ))}
          </nav>

          <div id={`${activeTab}-panel`} role="tabpanel" aria-labelledby={activeTab} className="w-full max-w-[609px] mx-auto">
            <img className="w-full h-auto" alt="Gift information card" src="https://c.animaapp.com/bV6A1k4q/img/card-bank.png" />
          </div>
        </div>

        {/* Thank you area with decorative top image - hilangkan margin top */}
        <div className="relative -mt-12 md:mt-32 -z-10">
          {/* Decorative image above Thank You */}
          <img
            className="absolute w-[400px] h-[126px] md:w-[791px] md:h-[249px] top-0 md:-top-20 left-1/2 -translate-x-1/2 -z-20"
            alt="Decorative floral arrangement"
            src="https://c.animaapp.com/TfNjynGh/img/group-182.png"
            role="img"
            aria-hidden="true"
          />

          <article className="w-full max-w-[901px] mx-auto bg-[#d4f3df] rounded-[10px] border border-solid border-[#72fba3] p-9 mt-[130px] md:mt-20 relative z-10">
          <div className="flex flex-col items-center gap-2">
            <h2 id="thank-you-heading" className="font-['Playfair_Display'] font-normal text-[#2a9f54] text-4xl md:text-5xl text-center tracking-tight">
              Terima Kasih
            </h2>

            <p className="w-full max-w-[744px] font-['Times_New_Roman'] font-normal text-[#26c25f] text-lg md:text-2xl text-center tracking-tight leading-normal">
              Kehadiran Anda di hari bahagia kami adalah hadiah terindah. Namun jika ingin memberikan hadiah, kami akan menerimanya dengan penuh rasa syukur.
            </p>
          </div>
          </article>
        </div>
      </div>
    </section>
  );
}

// QR Code Section Component
function QrCodeSection() {
  return (
    <section
      className="relative w-full min-h-[769px] bg-[#d4f3df] py-16 px-4 overflow-hidden"
      data-model-id="158:3031"
    >
      {/* Background image langit - full cover */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          alt="Background"
          src="https://c.animaapp.com/CztN3vJH/img/clip-path-group.png"
        />
      </div>

      {/* Decorative images */}
      <div className="absolute h-[769px] top-0 left-0 right-0 flex items-center justify-between gap-4 md:gap-[117px] z-10">
        <img
          className="w-[200px] h-[180px] md:w-[488px] md:h-[439px] self-end"
          alt="Clip path group"
          src="https://c.animaapp.com/CztN3vJH/img/clip-path-group-3@2x.png"
        />
      </div>

      {/* Dekorasi kanan atas QR code - pas di ujung kanan atas */}
      <img
        className="absolute w-[60px] md:w-[120px] left-[calc(50.00%+65px)] top-[320px] z-40"
        alt="Decorative top right"
        src="https://c.animaapp.com/CztN3vJH/img/clip-path-group-2@2x.png"
      />

      {/* Dekorasi kiri bawah QR code - pas di kiri bawah */}
      <img
        className="absolute w-[60px] md:w-[120px] left-[calc(50.00%_-_130px)] top-[calc(342px+200px-45px)] md:top-[calc(342px+200px-105px)] z-40"
        alt="Decorative bottom left"
        src="https://c.animaapp.com/CztN3vJH/img/clip-path-group-1@2x.png"
      />

      <div className="w-[382px] top-[66px] left-[calc(50.00%_-_191px)] flex flex-col h-[98px] items-center gap-2.5 p-2.5 absolute z-20">
        <div className="relative w-fit mt-[-6.00px] [font-family:'Playfair_Display',Helvetica] font-normal text-[#2a9f54] text-5xl text-center tracking-[-0.96px] leading-[normal]">
          Guest Check-in
        </div>

        <p className="relative w-[656px] mb-[-20.00px] ml-[-150.00px] mr-[-144.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#2a9f54] text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Scan this QR code when you arrive at our garden celebration
        </p>
      </div>

      <div className="absolute top-[197px] left-[calc(50.00%_-_280px)] w-[559px] h-[546px] bg-[#ffffffcc] rounded-[10px] border border-solid border-[#2a9f54] shadow-[0px_4px_4px_#00000040] z-20" />

      <div className="w-[333px] top-[632px] left-[calc(50.00%_-_167px)] flex flex-col h-[98px] items-center gap-2.5 p-2.5 absolute z-20">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-[#2a9f54] text-xl text-center tracking-[-0.40px] leading-[normal] whitespace-nowrap">
          Tips:
        </div>

        <p className="relative w-[333px] mb-[-2.00px] ml-[-10.00px] mr-[-10.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#26c25f] text-sm tracking-[-0.28px] leading-[normal]">
          Save QR code to your phone
          <br />
          Show to reception team upon arrival
          <br />
          Keep your phone charged
        </p>
      </div>

      <div className="flex w-[333px] h-[38px] items-center justify-center gap-2.5 p-2.5 absolute top-[575px] left-[calc(50.00%_-_167px)] bg-[#26c25f] rounded-[10px] z-20">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" fill="white"/>
        </svg>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
          Generate QR Code
        </div>
      </div>

      <img
        className="absolute w-[200px] h-[200px] left-[calc(50.00%_-_100px)] top-[342px] z-30"
        alt="QR Code"
        src="https://c.animaapp.com/CztN3vJH/img/qr-code-3.svg"
      />
      <div className="w-[382px] top-[197px] left-[calc(50.00%_-_192px)] flex flex-col h-[98px] items-center gap-2.5 p-2.5 absolute z-30">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#2a9f54] text-2xl text-center tracking-[-0.48px] leading-[normal] whitespace-nowrap">
          Welcome,
        </div>

        <div className="relative w-[382px] ml-[-10.00px] mr-[-10.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#26c25f] text-xl text-center tracking-[-0.40px] leading-[normal]">
          Dear Beloved Guest
        </div>

        <div className="relative w-[382px] mb-[-10.00px] ml-[-10.00px] mr-[-10.00px] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#26c25f] text-base text-center tracking-[-0.32px] leading-[normal]">
          Guest ID: G2025-001
        </div>
      </div>

      <img
        className="absolute top-[631px] left-[calc(50.00%_-_167px)] w-[333px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/CztN3vJH/img/line-3.svg"
      />
    </section>
  );
}

// Thank You Section Component
function ThankYouSection() {
  return (
    <section
      className="relative w-full min-h-[600px] bg-[#d4f3df] overflow-hidden flex items-center justify-center pb-20"
      data-model-id="158:3076"
    >
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background"
        src="https://c.animaapp.com/eYbR86tI/img/image-70.png"
      />

      {/* Decorative Clip Path */}
      <img
        className="absolute w-[646px] h-[399px] top-0 left-[calc(50%_-_323px)] z-10"
        alt="Decoration"
        src="https://c.animaapp.com/eYbR86tI/img/clip-path-group.png"
      />

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4">
        {/* Thank You Message */}
        <div className="flex flex-col w-full max-w-[557px] mx-auto items-center gap-2.5 p-2.5 mt-[143px]">
          <div className="relative w-fit [font-family:'Playfair_Display',Helvetica] font-normal text-[#2a9f54] text-5xl text-center tracking-[-0.96px] leading-[normal]">
            Thank You
          </div>

          <p className="relative w-full [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#26c25f] text-2xl text-center tracking-[-0.48px] leading-[normal] mb-10">
            Your presence and wishes mean the world to us. Thank you for being
            part of our beautiful garden celebration.
          </p>
        </div>

        {/* Divider Line */}
        <div className="absolute top-[340px] left-[calc(50%_-_140px)] w-[280px] h-px bg-[#26c25f] z-20"></div>

        {/* Footer Section */}
        <div className="absolute top-[365px] left-[calc(50%_-_290px)] flex flex-col w-[581px] items-center justify-center gap-2.5 p-2.5 z-20">
          {/* Made with Love */}
          <div className="relative w-full flex items-center justify-center gap-2.5 p-2.5">
            <div className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#26c25f] text-2xl text-center tracking-[-0.48px] leading-[normal] whitespace-nowrap">
              Made with
            </div>

            <svg className="w-[25px] h-[25px]" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.5 21.5L10.875 20.025C6 15.65 3 12.95 3 9.625C3 6.925 5.1 4.825 7.8 4.825C9.35 4.825 10.85 5.575 11.875 6.75H13.125C14.15 5.575 15.65 4.825 17.2 4.825C19.9 4.825 22 6.925 22 9.625C22 12.95 19 15.65 14.125 20.025L12.5 21.5Z"
                fill="#26c25f"
              />
            </svg>

            <div className="relative w-fit [font-family:'Times_New_Roman-Regular',Hepatica] font-normal text-[#26c25f] text-2xl text-center tracking-[-0.48px] leading-[normal] whitespace-nowrap">
              for our special day
            </div>
          </div>

          {/* Copyright */}
          <p className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#26c25f] text-2xl text-center tracking-[-0.48px] leading-[normal] whitespace-nowrap">
            © 2025 Prefere Digital Invitation
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="absolute top-[480px] left-[calc(50%_-_50px)] flex gap-5 z-30">
          <a href="#" className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity">
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#26c25f"/>
              <path
                d="M28 13.5C28 12.672 27.328 12 26.5 12H13.5C12.672 12 12 12.672 12 13.5V26.5C12 27.328 12.672 28 13.5 28H26.5C27.328 28 28 27.328 28 26.5V13.5ZM20 24C17.243 24 15 21.757 15 19C15 16.243 17.243 14 20 14C22.757 14 25 16.243 25 19C25 21.757 22.757 24 20 24ZM26 14C25.448 14 25 13.552 25 13C25 12.448 25.448 12 26 12C26.552 12 27 12.448 27 13C27 13.552 26.552 14 26 14Z"
                fill="white"
              />
              <circle cx="20" cy="19" r="3.5" fill="white"/>
            </svg>
          </a>

          <a href="#" className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity">
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#26c25f"/>
              <path
                d="M26.2 13.8C25.1 12.7 23.6 12 22 12C18.7 12 16 14.7 16 18C16 18.9 16.2 19.7 16.6 20.4L16 23L18.7 22.4C19.4 22.8 20.2 23 21 23H22C25.3 23 28 20.3 28 17C28 15.4 27.3 13.9 26.2 13.8ZM24.8 20.2C24.6 20.8 23.7 21.4 23.2 21.5C22.8 21.6 22.3 21.6 21.8 21.4C21.5 21.3 21.1 21.2 20.6 21C19.1 20.4 18.1 18.9 18 18.8C17.9 18.7 17.2 17.8 17.2 16.9C17.2 16 17.7 15.5 17.9 15.3C18.1 15.1 18.3 15 18.5 15H18.9C19.1 15 19.3 15 19.4 15.4C19.6 15.9 20.1 16.8 20.1 16.9C20.2 17 20.2 17.1 20.1 17.2C20 17.4 20 17.5 19.9 17.6C19.8 17.7 19.7 17.8 19.6 17.9C19.5 18 19.4 18.1 19.5 18.3C19.6 18.5 20.1 19.3 20.7 19.8C21.5 20.5 22.2 20.7 22.4 20.8C22.6 20.9 22.7 20.9 22.8 20.7C22.9 20.6 23.4 20 23.5 19.8C23.6 19.6 23.8 19.6 24 19.7L25.3 20.3C25.5 20.4 25.7 20.5 25.8 20.6C25.9 20.8 25.9 21.2 24.8 20.2Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        {/* Decorative Side Images */}
        <img
          className="absolute left-0 top-0 w-[27.47%] h-[67.35%] max-w-[395px] z-10"
          alt="Left Decoration"
          src="https://c.animaapp.com/eYbR86tI/img/group-173@2x.png"
        />

        <img
          className="absolute right-0 top-0 w-[27.47%] h-[67.35%] max-w-[395px] z-10"
          alt="Right Decoration"
          src="https://c.animaapp.com/eYbR86tI/img/group-174@2x.png"
        />
      </div>
    </section>
  );
}

