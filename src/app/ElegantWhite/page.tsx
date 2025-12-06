"use client";

import React, { useState, useEffect } from "react";

export default function ElegantWhiteTemplate() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    // Smooth scroll to next section
    const nextSection = document.getElementById('main-content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('main-content');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Cover Opening Section */}
      <section className="relative w-full h-screen bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)] flex items-center justify-center overflow-hidden">
        {/* Background Image - Desktop & Mobile */}
        <div className="absolute inset-0 w-full h-full">
          {/* Desktop Image - right side */}
          <img
            className="hidden md:block absolute top-0 right-0 w-[65%] h-full object-cover"
            alt="Wedding couple elegant"
            src="https://c.animaapp.com/34LA58Pp/img/mask-group.png"
          />
          
          {/* Mobile Image - full width with lighter overlay */}
          <div className="md:hidden absolute inset-0 w-full h-full">
            <img
              className="w-full h-full object-cover"
              alt="Wedding couple elegant"
              src="https://c.animaapp.com/34LA58Pp/img/mask-group.png"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/70" />
          </div>
        </div>

        {/* Scroll Button - Rectangle shape with golden accent */}
        <button
          className="absolute left-1/2 -translate-x-1/2 bottom-[25px] md:bottom-[25px] w-[21px] h-9 flex justify-center rounded-[10.5px] border border-solid border-[#838383] bg-transparent cursor-pointer hover:bg-gray-100 transition-colors z-20"
          onClick={handleScrollDown}
          aria-label="Scroll down to view invitation"
        >
          <div className="mt-[7px] w-[3px] h-3.5 rounded-[505px] bg-[linear-gradient(90deg,rgba(229,178,60,1)_0%,rgba(202,143,54,1)_100%)]" />
        </button>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 h-full">
          {/* Couple Names - Left Side for Desktop, Center for Mobile */}
          <div className="absolute top-[35%] md:top-1/2 -translate-y-1/2 left-1/2 md:left-[calc(50%-200px)] lg:left-[calc(17.5%-279px)] -translate-x-1/2 lg:translate-x-0 w-full lg:w-[558px] flex flex-col justify-center items-center gap-4 lg:gap-2 px-4">
            {/* Groom Name */}
            <h1 className="relative w-fit font-times font-normal text-black text-4xl lg:text-[64px] text-center tracking-[-0.80px] lg:tracking-[-1.28px] leading-[normal]">
              Alexander
            </h1>

            {/* Divider with & */}
            <div className="inline-flex justify-center items-center gap-2.5 w-full max-w-[350px] lg:max-w-full px-2.5">
              {/* Left Line */}
              <div className="flex-1 h-px bg-black" />

              {/* Ampersand with golden color */}
              <div className="relative w-fit font-times font-normal text-[#ffbe63] text-4xl lg:text-[64px] text-center tracking-[-0.80px] lg:tracking-[-1.28px] leading-[normal] whitespace-nowrap px-2">
                &amp;
              </div>

              {/* Right Line */}
              <div className="flex-1 h-px bg-black" />
            </div>

            {/* Bride Name */}
            <h1 className="relative w-fit font-times font-normal text-black text-4xl lg:text-[64px] text-center tracking-[-0.80px] lg:tracking-[-1.28px] leading-[normal]">
              Isabella
            </h1>
          </div>

          {/* Greeting Box & Button - Center Bottom */}
          <div className="absolute bottom-[90px] md:bottom-[80px] lg:bottom-[100px] left-1/2 -translate-x-1/2 w-full max-w-[382px] flex flex-col items-center gap-4 px-4">
            {/* Greeting Box */}
            <div className="w-full bg-transparent rounded-[10px] border border-solid border-[#b1b1b1] shadow-[0px_5px_10px_#00000040] py-4 px-6">
              <div className="flex flex-col items-center gap-2.5">
                <p className="font-times font-normal text-black text-xl md:text-2xl text-center tracking-[-0.48px] leading-[normal] whitespace-nowrap">
                  Dear Dear Beloved Guest,
                </p>
                <p className="font-times font-normal text-[#838383] text-sm md:text-base text-center tracking-[-0.32px] leading-[normal] max-w-[306px]">
                  We cordially invite you to celebrate our elegant love story
                </p>
              </div>
            </div>

            {/* Open Invitation Button - Golden Gradient */}
            <button
              onClick={handleOpenInvitation}
              className="w-56 h-[45px] flex items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,rgba(229,178,60,1)_0%,rgba(202,143,54,1)_100%)] hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span className="font-times font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                Open Invitation
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Words of Love Section */}
      <WordsOfLoveSection />

      {/* Our Love Story Section */}
      <OurLoveStorySection />

      {/* Our Love Journey Section */}
      <OurLoveJourneySection />

      {/* Counting Down Section */}
      <CountingDownSection />

      {/* When & Where Section */}
      <WhenWhereSection />
    
    </div>
  );
}

function WordsOfLoveSection() {
  return (
    <section
      className="relative w-full min-h-[737px] py-16 px-4 md:px-8 overflow-hidden bg-white"
      aria-labelledby="quotes-heading"
    >
      {/* Decorative Images - Visible on all devices */}
      <img
        className="absolute left-0 bottom-0 w-[120px] md:w-[250px] lg:w-[322px] h-auto object-cover"
        alt="Decorative floral illustration on the left"
        src="https://c.animaapp.com/xPJqVROK/img/image-83@2x.png"
      />

      <img
        className="absolute right-0 bottom-0 w-[120px] md:w-[250px] lg:w-[322px] h-auto object-cover"
        alt="Decorative floral illustration on the right"
        src="https://c.animaapp.com/xPJqVROK/img/image-85@2x.png"
      />

      {/* Header */}
      <header className="flex flex-col w-full max-w-[545px] mx-auto items-center gap-2.5 mb-12 md:mb-16 relative z-10">
        <h1
          id="quotes-heading"
          className="font-times font-normal text-black text-4xl md:text-5xl lg:text-[64px] text-center tracking-[-0.80px] md:tracking-[-1.28px] leading-[normal]"
        >
          Words of Love
        </h1>

        <p className="font-times italic text-[#838383] text-xl md:text-2xl lg:text-[32px] text-center tracking-[-0.40px] md:tracking-[-0.64px] leading-[normal] px-4">
          Sacred verses that bless our elegant union
        </p>
      </header>

      {/* Quote Container with Golden Border */}
      <div className="relative w-full max-w-[766px] mx-auto">
        {/* Golden Border Frame */}
        <div
          className="absolute inset-0 border-4 md:border-[7px] border-solid border-transparent rounded-[10px] pointer-events-none"
          style={{
            borderImage: 'linear-gradient(180deg, rgba(209,173,70,1) 0%, rgba(215,161,47,1) 100%) 1'
          }}
          aria-hidden="true"
        />

        {/* Quote Content */}
        <article className="relative w-full bg-[#ffffff80] rounded-[10px] py-8 md:py-10 px-6 md:px-10 flex flex-col items-center justify-center gap-4">
          {/* Arabic Text */}
          <blockquote
            className="font-times font-normal text-black text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.48px] md:tracking-[-0.72px] leading-[normal] w-full max-w-[640px]"
            lang="ar"
            dir="rtl"
          >
            ومن ايته ان خلق لكم من انفسكم ازواجا لتسكنوا اليها وجعل بينكم مودة
            ورحمة ان في ذلك لايت لقوم يتفكرون
          </blockquote>

          {/* Translation */}
          <p className="font-times font-normal text-[#838383] text-sm md:text-base text-center tracking-[-0.28px] md:tracking-[-0.32px] leading-[normal] w-full max-w-[684px]">
            Artinya: &quot;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
            menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri
            agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa
            cinta dan kasih sayang. Sesungguhnya pada yang demikian itu
            benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
            berpikir.&quot;
          </p>

          {/* Source Citation */}
          <cite className="font-times font-normal text-black text-sm md:text-base text-center tracking-[-0.28px] md:tracking-[-0.32px] leading-[normal] not-italic">
            -QS. Ar-Rum: 21
          </cite>
        </article>
      </div>
    </section>
  );
}

function OurLoveStorySection() {
  return (
    <section className="relative w-full min-h-[1600px] lg:h-[1050px] bg-white px-4 lg:px-0 py-8 lg:py-0">
      {/* Gradient Decorations - Show on Mobile & Desktop */}
      <div className="absolute top-[380px] md:top-[380px] lg:top-[380px] left-[20px] md:left-[82px] lg:left-[82px] w-[calc(100%-40px)] md:w-[1258px] lg:w-[1258px] h-[180px] md:h-[245px] lg:h-[245px] bg-[linear-gradient(90deg,rgba(213,182,88,1)_0%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute top-[780px] md:top-[900px] lg:top-[780px] left-[20px] md:left-[82px] lg:left-[82px] w-[calc(100%-40px)] md:w-[1258px] lg:w-[1258px] h-[180px] md:h-[245px] lg:h-[245px] rotate-180 bg-[linear-gradient(90deg,rgba(213,182,88,1)_0%,rgba(255,255,255,0)_100%)]" />

      {/* Header */}
      <div className="flex flex-col w-full md:w-[610px] h-auto md:h-[122px] items-center gap-2.5 p-2.5 absolute top-[60px] md:top-[97px] left-1/2 -translate-x-1/2">
        <div className="w-full flex items-center justify-center relative">
          <p className="relative mt-[-1.00px] font-times font-normal text-black text-3xl md:text-[64px] text-center tracking-[-0.82px] md:tracking-[-1.28px] leading-[normal] whitespace-nowrap">
            Our Love Story
          </p>
        </div>

        <p className="relative mb-[-9.00px] font-times font-normal text-[#838383] text-lg md:text-2xl text-center tracking-[-0.36px] md:tracking-[-0.48px] leading-[normal]">
          Two souls destined to become one
        </p>
      </div>

      {/* Groom Section */}
      <div className="absolute w-full lg:w-[875px] h-auto lg:h-[325px] top-[220px] md:top-[380px] lg:top-[259px] left-1/2 lg:left-[97px] -translate-x-1/2 lg:translate-x-0 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-[3px] px-4 lg:px-0">
        <div className="w-full max-w-[325px] lg:w-[325px] h-[325px] flex flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            alt="Alexander William Thompson"
            src="https://c.animaapp.com/oq9FutZO/img/rectangle-17721@2x.png"
          />
        </div>

        <div className="w-full lg:w-[547px] h-auto lg:h-[209px] relative mt-0 lg:mt-[146px] lg:pl-16">
          <div className="flex flex-col w-full lg:w-[547px] h-auto lg:h-[179px] items-center justify-center gap-2.5 p-2.5">
            <div className="relative w-fit max-w-full font-times font-normal italic text-black text-xl lg:text-[32px] text-center tracking-[-0.40px] lg:tracking-[-0.64px] leading-[normal] whitespace-normal lg:whitespace-nowrap">
              Alexander William Thompson
            </div>

            <div className="relative w-fit font-times font-normal text-black text-base lg:text-[32px] text-center tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal]">
              Putra dari:
            </div>

            <div className="flex-col w-full lg:w-[547px] flex items-center justify-center relative flex-[0_0_auto]">
              <div className="relative w-full lg:w-[594px] mt-[-1.00px] font-times font-normal text-black text-base lg:text-[32px] text-center tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal] px-2 lg:px-0 lg:whitespace-nowrap">
                William Thompson&nbsp;&nbsp;&amp; Elizabeth Thompson
              </div>
            </div>
          </div>

          <div className="flex w-[209px] h-[43px] items-center justify-center gap-2.5 mx-auto mt-4 lg:mt-0 lg:absolute lg:top-[calc(50.00%_+_62px)] lg:left-[calc(50.00%_-_50px)] bg-white rounded-[10px] border border-gray-200">
            <svg className="w-[25px] h-[25px]" viewBox="0 0 25 25" fill="none">
              <path d="M12.5 8.5C10.29 8.5 8.5 10.29 8.5 12.5C8.5 14.71 10.29 16.5 12.5 16.5C14.71 16.5 16.5 14.71 16.5 12.5C16.5 10.29 14.71 8.5 12.5 8.5ZM12.5 15C11.12 15 10 13.88 10 12.5C10 11.12 11.12 10 12.5 10C13.88 10 15 11.12 15 12.5C15 13.88 13.88 15 12.5 15Z" fill="black"/>
              <path d="M16.5 2.5H8.5C5.19 2.5 2.5 5.19 2.5 8.5V16.5C2.5 19.81 5.19 22.5 8.5 22.5H16.5C19.81 22.5 22.5 19.81 22.5 16.5V8.5C22.5 5.19 19.81 2.5 16.5 2.5ZM21 16.5C21 18.99 18.99 21 16.5 21H8.5C6.01 21 4 18.99 4 16.5V8.5C4 6.01 6.01 4 8.5 4H16.5C18.99 4 21 6.01 21 8.5V16.5Z" fill="black"/>
              <circle cx="17.5" cy="7.5" r="1" fill="black"/>
            </svg>
            <div className="font-times font-bold text-black text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              @alexanderson
            </div>
          </div>
        </div>
      </div>

      {/* Bride Section */}
      <div className="absolute w-full lg:w-[872px] top-[850px] md:top-[950px] lg:top-[650px] left-1/2 lg:left-[468px] -translate-x-1/2 lg:translate-x-0 h-auto lg:h-[325px] flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6 lg:gap-0 px-4 lg:px-0">
        <div className="w-full lg:w-[547px] h-auto lg:h-52 relative mt-0 lg:mt-[146px] lg:-ml-8">
          <div className="flex flex-col w-full lg:w-[547px] h-auto lg:h-[179px] items-center justify-center gap-2.5 p-2.5">
            <div className="relative w-fit max-w-full font-times font-normal italic text-black text-xl lg:text-[32px] text-center tracking-[-0.40px] lg:tracking-[-0.64px] leading-[normal] whitespace-normal lg:whitespace-nowrap">
              Isabella Grace Martinez
            </div>

            <div className="relative w-fit font-times font-normal text-black text-base lg:text-[32px] text-center tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal]">
              Putri dari:
            </div>

            <div className="flex-col w-full lg:w-fit flex items-center justify-center relative flex-[0_0_auto]">
              <p className="relative w-full lg:w-fit mt-[-1.00px] font-times font-normal text-black text-base lg:text-[32px] text-center tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal] px-2 lg:px-0 lg:whitespace-nowrap">
                Roberto Martinez &amp; Sofia Martinez
              </p>
            </div>
          </div>

          <div className="flex w-[209px] h-[42px] items-center justify-center gap-2.5 p-2.5 mx-auto mt-4 lg:mt-0 lg:absolute lg:top-[calc(50.00%_+_62px)] lg:left-[calc(50.00%_-_104px)] bg-white rounded-[10px] border border-gray-200">
            <svg className="w-[25px] h-[25px]" viewBox="0 0 25 25" fill="none">
              <path d="M12.5 8.5C10.29 8.5 8.5 10.29 8.5 12.5C8.5 14.71 10.29 16.5 12.5 16.5C14.71 16.5 16.5 14.71 16.5 12.5C16.5 10.29 14.71 8.5 12.5 8.5ZM12.5 15C11.12 15 10 13.88 10 12.5C10 11.12 11.12 10 12.5 10C13.88 10 15 11.12 15 12.5C15 13.88 13.88 15 12.5 15Z" fill="black"/>
              <path d="M16.5 2.5H8.5C5.19 2.5 2.5 5.19 2.5 8.5V16.5C2.5 19.81 5.19 22.5 8.5 22.5H16.5C19.81 22.5 22.5 19.81 22.5 16.5V8.5C22.5 5.19 19.81 2.5 16.5 2.5ZM21 16.5C21 18.99 18.99 21 16.5 21H8.5C6.01 21 4 18.99 4 16.5V8.5C4 6.01 6.01 4 8.5 4H16.5C18.99 4 21 6.01 21 8.5V16.5Z" fill="black"/>
              <circle cx="17.5" cy="7.5" r="1" fill="black"/>
            </svg>
            <div className="relative w-fit font-times font-bold text-black text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              @princess_bella
            </div>
          </div>
        </div>

        <img
          className="w-full max-w-[325px] lg:w-[326px] h-[325px] lg:h-[326px] lg:absolute lg:top-0 lg:left-[546px] object-cover"
          alt="Isabella Grace Martinez"
          src="https://c.animaapp.com/oq9FutZO/img/rectangle-17720@2x.png"
        />
      </div>
    </section>
  );
}

// Our Love Journey Section Component
function OurLoveJourneySection() {
  const timelineEvents = [
    {
      year: "2020",
      title: "Once Upon a Time",
      description:
        "We first met at a magical coffee shop where Alex accidentally spilled coffee on Isabella's fairy tale book. Love at first sight (and spill)! ☕💕",
      image: "https://c.animaapp.com/Zq9ll2Wl/img/image-238@2x.png",
    },
    {
      year: "2021",
      title: "The First Date",
      description:
        "Our first official date was a romantic picnic under the stars. Alex brought his guitar and serenaded Isabella with her favorite song. 🌟🎵",
      image: "https://c.animaapp.com/Zq9ll2Wl/img/image-239@2x.png",
    },
    {
      year: "2023",
      title: "The Proposal",
      description:
        "Alex proposed in a beautiful garden filled with pink roses, getting down on one knee with a crown-shaped ring box. She said yes! 👑💍",
      image: "https://c.animaapp.com/Zq9ll2Wl/img/image-240@2x.png",
    },
  ];

  return (
    <section className="relative w-full min-h-[1650px] md:min-h-[1200px] lg:h-[1363px] bg-white px-4 py-2 md:py-8 lg:px-0 lg:py-0">
      {/* Header */}
      <header className="flex flex-col w-full max-w-[563px] mx-auto items-center gap-2.5 p-2.5 mb-4 md:mb-16 lg:mb-32 lg:absolute lg:top-0 lg:left-[calc(50%-282px)]">
        <h1 className="relative w-fit font-times font-normal text-black text-3xl md:text-5xl lg:text-[64px] text-center tracking-[-0.82px] md:tracking-[-1.28px] leading-[normal] lg:whitespace-nowrap">
          Our Love Journey
        </h1>

        <p className="relative font-times font-normal italic text-[#838383] text-lg md:text-xl lg:text-2xl text-center tracking-[-0.36px] md:tracking-[-0.48px] leading-[normal] lg:whitespace-nowrap">
          Every love story is beautiful, but ours is timeless
        </p>
      </header>

      {/* Timeline Cards Container */}
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Connecting Lines - Responsive */}
        <img
          className="absolute top-[470px] left-1/2 -translate-x-1/2 w-[300px] h-[180px] md:w-[320px] md:h-[180px] md:top-[250px] md:left-[320px] md:translate-x-0 lg:w-[544px] lg:h-[314px] lg:top-[307px] lg:left-[551px]"
          alt=""
          src="https://c.animaapp.com/Zq9ll2Wl/img/vector-4.svg"
          aria-hidden="true"
        />

        <img
          className="absolute top-[950px] left-1/2 -translate-x-1/2 w-[300px] h-[100px] md:w-[390px] md:h-[120px] md:top-[510px] md:left-[245px] md:translate-x-0 lg:w-[556px] lg:h-[171px] lg:top-[706px] lg:left-[356px]"
          alt=""
          src="https://c.animaapp.com/Zq9ll2Wl/img/vector-5.svg"
          aria-hidden="true"
        />

        {/* Card 1 - Once Upon a Time (2020) */}
        <article className="relative mb-12 md:mb-0 md:absolute md:w-[280px] md:h-[390px] md:top-[130px] md:left-[60px] lg:w-[408px] lg:h-[457px] lg:top-[183px] lg:left-[168px]">
          <div className="flex flex-col gap-5 md:gap-4 lg:gap-[21px]">
            {/* Polaroid Image */}
            <div className="relative w-full max-w-[378.73px] h-[254.95px] mx-auto md:max-w-[260px] md:h-[175px] md:mx-0 lg:max-w-[378.73px] lg:h-[254.95px] lg:ml-[10px]">
              <div className="absolute top-[11px] left-[7px] w-[365px] h-[233px] md:w-[250px] md:h-[160px] lg:w-[365px] lg:h-[233px] bg-white shadow-[0px_0px_10.66px_5.8px_#00000040]" />

              <div className="absolute top-[11px] left-[7px] w-[365px] h-[233px] md:w-[250px] md:h-[160px] lg:w-[365px] lg:h-[233px] flex justify-center bg-white rotate-[3.52deg] shadow-[0px_0px_10.66px_5.8px_#00000040]">
                <div className="mt-[10.4px] w-[340.78px] h-[213.28px] md:w-[233px] md:h-[146px] lg:w-[340.78px] lg:h-[213.28px] ml-[-0.9px] flex bg-black overflow-hidden">
                  <img
                    className="mt-[-10.3px] w-[353.23px] h-[233.79px] md:w-[242px] md:h-[160px] lg:w-[353.23px] lg:h-[233.79px] ml-[-6.2px] rotate-[-3.52deg] aspect-[1.83] object-cover"
                    alt="Alex and Isabella meeting at a coffee shop in 2020"
                    src={timelineEvents[0].image}
                  />
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-1 md:gap-[3px] lg:gap-[4.7px] shadow-[0px_4px_4px_#00000040]">
              <div className="flex w-[65.37px] h-[32.91px] md:w-[55px] md:h-[28px] lg:w-[65.37px] lg:h-[32.91px] items-center justify-center gap-2.5 p-2.5 bg-[#fff0ac] rounded-[5px] ml-2 md:ml-[6.8px]">
                <time className="font-georgia font-normal text-[#796300] text-lg md:text-base lg:text-xl text-center tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                  {timelineEvents[0].year}
                </time>
              </div>

              <div className="flex flex-col items-start gap-2.5 p-2.5 w-full max-w-[408px] md:max-w-[280px] lg:max-w-[408px]">
                <h2 className="relative w-fit font-times font-normal text-black text-lg md:text-base lg:text-xl tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                  {timelineEvents[0].title}
                </h2>

                <p className="relative font-times font-normal text-black text-base md:text-sm lg:text-xl tracking-[-0.32px] md:tracking-[-0.28px] lg:tracking-[-0.40px] leading-[normal]">
                  {timelineEvents[0].description}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Card 2 - The First Date (2021) */}
        <article className="relative mb-12 md:mb-0 md:absolute md:w-[280px] md:h-[410px] md:top-[430px] md:right-[60px] lg:w-[406px] lg:h-[478px] lg:top-[601px] lg:left-[893px]">
          <div className="flex flex-col gap-5 md:gap-4 lg:gap-[31px]">
            {/* Polaroid Image */}
            <div className="relative w-full max-w-[378.73px] h-[254.95px] mx-auto md:max-w-[260px] md:h-[175px] md:mx-0 lg:max-w-[378.73px] lg:h-[254.95px] lg:ml-[14px]">
              <div className="absolute top-[11px] left-[7px] w-[365px] h-[233px] md:w-[250px] md:h-[160px] lg:w-[365px] lg:h-[233px] bg-white shadow-[0px_0px_10.66px_5.8px_#00000040]" />

              <div className="absolute top-[11px] left-[7px] w-[365px] h-[233px] md:w-[250px] md:h-[160px] lg:w-[365px] lg:h-[233px] flex justify-center bg-white rotate-[3.52deg] shadow-[0px_0px_10.66px_5.8px_#00000040]">
                <div className="mt-[10.4px] w-[340.78px] h-[213.28px] md:w-[233px] md:h-[146px] lg:w-[340.78px] lg:h-[213.28px] ml-[-0.9px] flex bg-black overflow-hidden">
                  <img
                    className="mt-[-10.3px] w-[353.23px] h-[233.79px] md:w-[242px] md:h-[160px] lg:w-[353.23px] lg:h-[233.79px] ml-[-6.2px] rotate-[-3.52deg] aspect-[1.83] object-cover"
                    alt="Alex and Isabella on their first date picnic in 2021"
                    src={timelineEvents[1].image}
                  />
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-1 md:gap-[3px] lg:gap-[5px] shadow-[0px_4px_4px_#00000040]">
              <div className="flex w-[65.05px] h-[34.91px] md:w-[55px] md:h-[28px] lg:w-[65.05px] lg:h-[34.91px] items-center justify-center gap-2.5 p-2.5 bg-[#fff0ac] rounded-[5px] ml-2 md:ml-[6.7px]">
                <time className="font-georgia font-normal text-[#796300] text-lg md:text-base lg:text-xl text-center tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                  {timelineEvents[1].year}
                </time>
              </div>

              <div className="flex flex-col items-start gap-2.5 p-2.5 w-full max-w-[406px] md:max-w-[280px] lg:max-w-[406px]">
                <h2 className="relative w-fit font-times font-normal text-black text-lg md:text-base lg:text-xl tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                  {timelineEvents[1].title}
                </h2>

                <p className="relative font-times font-normal text-black text-base md:text-sm lg:text-xl tracking-[-0.32px] md:tracking-[-0.28px] lg:tracking-[-0.40px] leading-[normal]">
                  {timelineEvents[1].description}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Card 3 - The Proposal (2023) */}
        <article className="relative md:absolute md:w-[280px] md:h-[380px] md:top-[620px] md:left-[60px] lg:w-[408px] lg:h-[446px] lg:top-[856px] lg:left-[168px]">
          <div className="flex flex-col gap-5 md:gap-4 lg:gap-3.5">
            {/* Polaroid Image */}
            <div className="relative w-full max-w-[378.73px] h-[254.95px] mx-auto md:max-w-[260px] md:h-[175px] md:mx-0 lg:max-w-[378.73px] lg:h-[254.95px] lg:ml-[15px]">
              <div className="absolute top-[11px] left-[7px] w-[365px] h-[233px] md:w-[250px] md:h-[160px] lg:w-[365px] lg:h-[233px] bg-white shadow-[0px_0px_10.66px_5.8px_#00000040]" />

              <div className="absolute top-[11px] left-[7px] w-[365px] h-[233px] md:w-[250px] md:h-[160px] lg:w-[365px] lg:h-[233px] flex justify-center bg-white rotate-[3.52deg] shadow-[0px_0px_10.66px_5.8px_#00000040]">
                <div className="mt-[10.4px] w-[340.78px] h-[213.28px] md:w-[233px] md:h-[146px] lg:w-[340.78px] lg:h-[213.28px] ml-[-0.9px] flex bg-black overflow-hidden">
                  <img
                    className="mt-[-10.3px] w-[353.23px] h-[233.79px] md:w-[242px] md:h-[160px] lg:w-[353.23px] lg:h-[233.79px] ml-[-6.2px] rotate-[-3.52deg] aspect-[1.83] object-cover"
                    alt="Alex proposing to Isabella in a rose garden in 2023"
                    src={timelineEvents[2].image}
                  />
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-1 md:gap-[3px] lg:gap-[4.6px] shadow-[0px_4px_4px_#00000040]">
              <div className="flex w-[65.37px] h-[32.18px] md:w-[55px] md:h-[28px] lg:w-[65.37px] lg:h-[32.18px] items-center justify-center gap-2.5 p-2.5 bg-[#fff0ac] rounded-[5px] ml-2 md:ml-[6.8px]">
                <time className="font-georgia font-normal text-[#796300] text-lg md:text-base lg:text-xl text-center tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                  {timelineEvents[2].year}
                </time>
              </div>

              <div className="flex flex-col items-start gap-2.5 p-2.5 w-full max-w-[408px] md:max-w-[280px] lg:max-w-[408px]">
                <h2 className="relative w-fit font-times font-normal text-black text-lg md:text-base lg:text-xl tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                  {timelineEvents[2].title}
                </h2>

                <p className="relative font-times font-normal text-black text-base md:text-sm lg:text-xl tracking-[-0.32px] md:tracking-[-0.28px] lg:tracking-[-0.40px] leading-[normal]">
                  {timelineEvents[2].description}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

// Counting Down Section Component
function CountingDownSection() {
  const [timeRemaining, setTimeRemaining] = useState([
    { value: 0, label: "DAYS" },
    { value: 0, label: "HOURS" },
    { value: 0, label: "MINUTES" },
    { value: 0, label: "SECONDS" },
  ]);

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining([
          { value: days, label: "DAYS" },
          { value: hours, label: "HOURS" },
          { value: minutes, label: "MINUTES" },
          { value: seconds, label: "SECONDS" },
        ]);
      } else {
        setTimeRemaining([
          { value: 0, label: "DAYS" },
          { value: 0, label: "HOURS" },
          { value: 0, label: "MINUTES" },
          { value: 0, label: "SECONDS" },
        ]);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatValue = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[500px] lg:h-[537px] bg-white px-4 py-2 md:py-16 lg:px-0 lg:py-0">
      {/* Header */}
      <header className="flex flex-col w-full max-w-[840px] mx-auto items-center gap-2.5 p-2.5 mb-4 md:mb-12 lg:mb-0 lg:absolute lg:top-[30px] lg:left-[calc(50%-420px)]">
        <h1 className="relative font-times font-normal text-black text-3xl md:text-4xl lg:text-5xl text-center tracking-[-0.72px] md:tracking-[-0.82px] lg:tracking-[-0.96px] leading-[normal]">
          Counting Down to Our Reception
        </h1>

        <p className="relative w-full max-w-[530px] font-times font-normal italic text-[#838383] text-lg md:text-xl lg:text-2xl text-center tracking-[-0.36px] md:tracking-[-0.40px] lg:tracking-[-0.48px] leading-[normal]">
          Until our hearts become one...
        </p>
      </header>

      {/* Countdown Timer - Mobile 3-1 Layout */}
      <div className="relative w-full max-w-[696px] mx-auto lg:absolute lg:top-[calc(50%-54px)] lg:left-[calc(50%-348px)]">
        {/* Mobile: 3-1 Formation (3 top, 1 bottom) */}
        <div className="md:hidden flex flex-col items-center gap-6" role="timer" aria-live="polite">
          {/* Top Row - 3 boxes */}
          <div className="grid grid-cols-3 gap-3 w-full">
            {timeRemaining.slice(0, 3).map((unit, index) => (
              <div
                key={index}
                className="relative w-full aspect-square rounded-[10px] bg-[linear-gradient(360deg,rgba(255,255,255,1)_27%,rgba(255,210,77,1)_100%)] shadow-[0px_4px_8px_rgba(0,0,0,0.1)]"
              >
                <div className="flex flex-col w-full h-full items-center justify-center gap-1 p-2 rounded-[10px] border-2 border-solid border-[#838383] bg-[linear-gradient(360deg,rgba(255,255,255,1)_27%,rgba(255,210,77,1)_100%)]">
                  <time
                    className="font-[Consolas] font-bold text-black text-3xl tracking-[-0.60px] leading-[normal]"
                    aria-label={`${unit.value} ${unit.label.toLowerCase()}`}
                  >
                    {formatValue(unit.value)}
                  </time>
                  <div className="font-georgia font-normal text-[#838383] text-xs tracking-[-0.24px] leading-[normal] uppercase">
                    {unit.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 1 box (centered) */}
          <div className="w-full max-w-[110px]">
            <div
              className="relative w-full aspect-square rounded-[10px] bg-[linear-gradient(360deg,rgba(255,255,255,1)_27%,rgba(255,210,77,1)_100%)] shadow-[0px_4px_8px_rgba(0,0,0,0.1)]"
            >
              <div className="flex flex-col w-full h-full items-center justify-center gap-1 p-2 rounded-[10px] border-2 border-solid border-[#838383] bg-[linear-gradient(360deg,rgba(255,255,255,1)_27%,rgba(255,210,77,1)_100%)]">
                <time
                  className="font-[Consolas] font-bold text-black text-3xl tracking-[-0.60px] leading-[normal]"
                  aria-label={`${timeRemaining[3].value} ${timeRemaining[3].label.toLowerCase()}`}
                >
                  {formatValue(timeRemaining[3].value)}
                </time>
                <div className="font-georgia font-normal text-[#838383] text-xs tracking-[-0.24px] leading-[normal] uppercase">
                  {timeRemaining[3].label}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* iPad & Desktop: Horizontal grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-5" role="timer" aria-live="polite">
          {timeRemaining.map((unit, index) => (
            <div
              key={index}
              className="relative w-full md:h-[140px] lg:w-[159px] lg:h-[155px] rounded-[10px] bg-[linear-gradient(360deg,rgba(255,255,255,1)_27%,rgba(255,210,77,1)_100%)]"
            >
              <div className="flex flex-col w-full h-full items-center justify-center gap-2.5 p-2.5 rounded-[10px] border border-solid border-[#838383] bg-[linear-gradient(360deg,rgba(255,255,255,1)_27%,rgba(255,210,77,1)_100%)]">
                <time
                  className="font-[Consolas] font-normal text-black text-4xl lg:text-[40px] text-center tracking-[-0.72px] lg:tracking-[-0.80px] leading-[normal]"
                  aria-label={`${unit.value} ${unit.label.toLowerCase()}`}
                >
                  {formatValue(unit.value)}
                </time>

                <div className="font-georgia font-normal text-[#838383] text-lg lg:text-2xl text-center tracking-[-0.40px] lg:tracking-[-0.48px] leading-[normal]">
                  {unit.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhenWhereSection() {
  return (
    <section className="relative min-h-[1800px] md:min-h-[1000px] lg:h-[1024px] py-2 md:py-12 lg:py-0 px-4 md:px-8 lg:px-0 flex flex-col bg-white overflow-hidden">
      {/* Title - Mobile/Tablet */}
      <div className="w-full text-center mb-8 md:mb-12 lg:hidden">
        <h2 className="font-times-new-roman font-normal text-[32px] md:text-[40px] text-center text-black tracking-[-0.96px] leading-[normal] mb-4">
          When & Where
        </h2>
        <p className="font-times-new-roman font-normal italic text-base md:text-lg text-center text-[#838383] tracking-[-0.40px] md:tracking-[-0.48px] leading-[normal]">
          Join us in celebrating our timeless love
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-col lg:h-28 lg:w-[382px] lg:self-center lg:relative lg:mt-[140px] lg:mb-[60px] lg:items-center lg:gap-2.5 lg:p-2.5">
        <div className="relative w-fit mt-[-1.00px] font-times-new-roman font-normal text-black text-[48px] text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
          When &amp; Where
        </div>

        <p className="relative font-times-new-roman font-normal italic text-[#838383] text-2xl text-center tracking-[-0.48px] leading-[normal] whitespace-nowrap">
          Join us in celebrating our timeless love
        </p>
      </div>

      {/* Holy Matrimony Card - Mobile/Tablet */}
      <div className="flex flex-col mb-8 md:mb-12 lg:hidden bg-[#fcfcf6e6] rounded-[10px] shadow-[0px_4px_4px_#a0a0a0cc,0px_-4px_4px_#a0a0a0cc,-4px_0px_4px_#a0a0a0cc,4px_0px_4px_#a0a0a0cc] p-6">
        <div className="flex flex-col items-center gap-2.5 mb-6">
          <div className="font-times-new-roman font-normal text-[#735e00] text-[28px] md:text-[32px] text-center tracking-[-0.64px] leading-[normal]">
            Holy Matrimony
          </div>
          <div className="w-[94px] h-[3px] bg-[#ceb04e] rounded-[50px]" />
        </div>

        <div className="flex flex-col gap-[11px] mb-6">
          <div className="flex items-center gap-2.5">
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="6" width="24" height="22" rx="2" stroke="#ceb04e" strokeWidth="2"/>
              <line x1="4" y1="12" x2="28" y2="12" stroke="#ceb04e" strokeWidth="2"/>
              <line x1="10" y1="3" x2="10" y2="9" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="3" x2="22" y2="9" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="font-georgia font-normal text-black text-base tracking-[-0.32px] leading-[normal]">
              Saturday, March 15, 2025
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" stroke="#ceb04e" strokeWidth="2"/>
              <path d="M16 8V16L21 19" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="font-georgia font-normal text-black text-base tracking-[-0.32px] leading-[normal]">
              08:00 PM
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <svg className="w-6 h-6 flex-shrink-0 mt-0.5" viewBox="0 0 32 32" fill="none">
              <path d="M16 4C11.589 4 8 7.589 8 12C8 18 16 28 16 28C16 28 24 18 24 12C24 7.589 20.411 4 16 4Z" stroke="#ceb04e" strokeWidth="2"/>
              <circle cx="16" cy="12" r="3" stroke="#ceb04e" strokeWidth="2"/>
            </svg>
            <div className="flex flex-col">
              <div className="font-georgia font-normal text-black text-base tracking-[-0.32px] leading-[normal]">
                Masjid Al-Barokah
              </div>
              <p className="font-georgia font-normal text-[#838383] text-base tracking-[-0.32px] leading-[normal] mt-1">
                Jl. Kebahagiaan No. 123, Jakarta Selatan
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full h-[209px] mb-4 rounded-[10px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4663428826667!2d106.82293931476891!3d-6.236704395469842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14e4ea2c247%3A0xd97c15aedfe7878!2sMonas!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center gap-2.5 px-6 py-2 bg-[#ceb04e] rounded-[10px] font-times-new-roman font-bold text-white text-base tracking-[-0.32px] leading-[normal]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Add to Calendar
          </button>
          <button className="flex items-center justify-center gap-2.5 px-6 py-2 bg-white rounded-[10px] border border-solid border-[#c1c1c1] font-times-new-roman font-bold text-[#ceb04e] text-base tracking-[-0.32px] leading-[normal]">
            <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none">
              <path d="M16 4C11.589 4 8 7.589 8 12C8 18 16 28 16 28C16 28 24 18 24 12C24 7.589 20.411 4 16 4Z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
            View on Maps
          </button>
        </div>
      </div>

      {/* Holy Matrimony Card - Desktop (Left Top) */}
      <div className="hidden lg:flex lg:ml-[50px] lg:w-[669px] lg:h-[281px] lg:relative lg:mt-10 lg:flex-wrap lg:items-center lg:gap-[21px_18px] lg:p-2.5 lg:bg-[#fcfcf6e6] lg:rounded-[10px] lg:shadow-[0px_4px_4px_#a0a0a0cc,0px_-4px_4px_#a0a0a0cc,-4px_0px_4px_#a0a0a0cc,4px_0px_4px_#a0a0a0cc]">
        <div className="flex flex-col w-[369px] h-[209px] items-center gap-2.5 p-2.5 relative">
          <div className="relative w-fit mt-[-1.00px] font-times-new-roman font-normal text-[#735e00] text-[32px] text-center tracking-[-0.64px] leading-[normal] whitespace-nowrap">
            Holy Matrimony
          </div>

          <div className="relative w-[94px] h-[3px] bg-[#ceb04e] rounded-[50px]" />

          <div className="flex flex-col w-[325px] items-start justify-center gap-[11px] absolute top-[88px] left-6">
            <div className="inline-flex h-[27px] items-center justify-center gap-2.5 p-2.5 relative">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="6" width="24" height="22" rx="2" stroke="#ceb04e" strokeWidth="2"/>
                <line x1="4" y1="12" x2="28" y2="12" stroke="#ceb04e" strokeWidth="2"/>
                <line x1="10" y1="3" x2="10" y2="9" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
                <line x1="22" y1="3" x2="22" y2="9" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                Saturday, March 15, 2025
              </div>
            </div>

            <div className="inline-flex h-[27px] items-center justify-center gap-2.5 p-2.5 relative">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" stroke="#ceb04e" strokeWidth="2"/>
                <path d="M16 8V16L21 19" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                08:00 PM
              </div>
            </div>

            <div className="inline-flex h-[27px] items-center justify-center gap-2.5 p-2.5 relative">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <path d="M16 4C11.589 4 8 7.589 8 12C8 18 16 28 16 28C16 28 24 18 24 12C24 7.589 20.411 4 16 4Z" stroke="#ceb04e" strokeWidth="2"/>
                <circle cx="16" cy="12" r="3" stroke="#ceb04e" strokeWidth="2"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                Masjid Al-Barokah
              </div>
            </div>
          </div>

          <div className="flex w-[324px] items-center gap-2.5 p-2.5 absolute top-[189px] left-6">
            <p className="relative w-full font-georgia font-normal text-[#838383] text-base tracking-[-0.32px] leading-[normal]">
              Jl. Kebahagiaan No. 123, Jakarta Selatan
            </p>
          </div>
        </div>

        <div className="relative w-[209px] h-[209px] rounded-[10px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4663428826667!2d106.82293931476891!3d-6.236704395469842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14e4ea2c247%3A0xd97c15aedfe7878!2sMonas!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 relative bg-[#ceb04e] rounded-[10px]">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
          </svg>
          <div className="relative w-fit font-times-new-roman font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
            Add to Calendar
          </div>
        </div>

        <div className="flex w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 relative bg-white rounded-[10px] border border-solid border-[#c1c1c1]">
          <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none">
            <path d="M16 4C11.589 4 8 7.589 8 12C8 18 16 28 16 28C16 28 24 18 24 12C24 7.589 20.411 4 16 4Z" stroke="#ceb04e" strokeWidth="2"/>
            <circle cx="16" cy="12" r="3" stroke="#ceb04e" strokeWidth="2"/>
          </svg>
          <div className="relative w-fit font-times-new-roman font-bold text-[#ceb04e] text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
            View on Maps
          </div>
        </div>
      </div>

      {/* Wedding Reception Card - Mobile/Tablet */}
      <div className="flex flex-col lg:hidden bg-[#fcfcf6e6] rounded-[10px] shadow-[0px_4px_4px_#a0a0a0cc,0px_-4px_4px_#a0a0a0cc,-4px_0px_4px_#a0a0a0cc,4px_0px_4px_#a0a0a0cc] p-6">
        <div className="flex flex-col items-center gap-2.5 mb-6">
          <div className="font-times-new-roman font-normal text-[#735e00] text-[28px] md:text-[32px] text-center tracking-[-0.64px] leading-[normal]">
            Wedding Reception
          </div>
          <div className="w-[94px] h-[3px] bg-[#ceb04e] rounded-[50px]" />
        </div>

        <div className="flex flex-col gap-[11px] mb-6">
          <div className="flex items-center gap-2.5">
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="6" width="24" height="22" rx="2" stroke="#ceb04e" strokeWidth="2"/>
              <line x1="4" y1="12" x2="28" y2="12" stroke="#ceb04e" strokeWidth="2"/>
              <line x1="10" y1="3" x2="10" y2="9" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="3" x2="22" y2="9" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="font-georgia font-normal text-black text-base tracking-[-0.32px] leading-[normal]">
              Saturday, March 15, 2025
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" stroke="#ceb04e" strokeWidth="2"/>
              <path d="M16 8V16L21 19" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="font-georgia font-normal text-black text-base tracking-[-0.32px] leading-[normal]">
              07:00 PM
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <svg className="w-6 h-6 flex-shrink-0 mt-0.5" viewBox="0 0 32 32" fill="none">
              <path d="M16 4C11.589 4 8 7.589 8 12C8 18 16 28 16 28C16 28 24 18 24 12C24 7.589 20.411 4 16 4Z" stroke="#ceb04e" strokeWidth="2"/>
              <circle cx="16" cy="12" r="3" stroke="#ceb04e" strokeWidth="2"/>
            </svg>
            <div className="flex flex-col">
              <div className="font-georgia font-normal text-black text-base tracking-[-0.32px] leading-[normal]">
                The Royal Ballroom
              </div>
              <p className="font-georgia font-normal text-[#838383] text-[13px] tracking-[-0.26px] leading-[normal] mt-1">
                Jl. Cinta Sejati No. 456, Jakarta Selatan
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full h-[209px] mb-4 rounded-[10px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666193428826!2d106.78313341476891!3d-6.194707395469842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14e4ea2c247%3A0xd97c15aedfe7878!2sGrand%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center gap-2.5 px-6 py-2 bg-[#ceb04e] rounded-[10px] font-times-new-roman font-bold text-white text-base tracking-[-0.32px] leading-[normal]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Add to Calendar
          </button>
          <button className="flex items-center justify-center gap-2.5 px-6 py-2 bg-white rounded-[10px] border border-solid border-[#c1c1c1] font-times-new-roman font-bold text-[#ceb04e] text-base tracking-[-0.32px] leading-[normal]">
            <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none">
              <path d="M16 4C11.589 4 8 7.589 8 12C8 18 16 28 16 28C16 28 24 18 24 12C24 7.589 20.411 4 16 4Z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
            View on Maps
          </button>
        </div>
      </div>

      {/* Wedding Reception Card - Desktop (Right Bottom) */}
      <div className="hidden lg:flex lg:self-end lg:mr-[60px] lg:w-[669px] lg:h-[281px] lg:relative lg:mt-[75px] lg:flex-wrap lg:items-center lg:gap-[21px_18px] lg:p-2.5 lg:bg-[#fcfcf6e6] lg:rounded-[10px] lg:shadow-[0px_4px_4px_#a0a0a0cc,0px_-4px_4px_#a0a0a0cc,-4px_0px_4px_#a0a0a0cc,4px_0px_4px_#a0a0a0cc]">
        <div className="flex flex-col w-[369px] h-[209px] items-center gap-2.5 p-2.5 relative">
          <div className="relative w-fit mt-[-1.00px] font-times-new-roman font-normal text-[#735e00] text-[32px] text-center tracking-[-0.64px] leading-[normal] whitespace-nowrap">
            Wedding Reception
          </div>

          <div className="relative w-[94px] h-[3px] bg-[#ceb04e] rounded-[50px]" />

          <div className="flex flex-col w-[325px] items-start justify-center gap-[11px] absolute top-[88px] left-6">
            <div className="inline-flex h-[27px] items-center justify-center gap-2.5 p-2.5 relative">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="6" width="24" height="22" rx="2" stroke="#ceb04e" strokeWidth="2"/>
                <line x1="4" y1="12" x2="28" y2="12" stroke="#ceb04e" strokeWidth="2"/>
                <line x1="10" y1="3" x2="10" y2="9" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
                <line x1="22" y1="3" x2="22" y2="9" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                Saturday, March 15, 2025
              </div>
            </div>

            <div className="inline-flex h-[27px] items-center justify-center gap-2.5 p-2.5 relative">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" stroke="#ceb04e" strokeWidth="2"/>
                <path d="M16 8V16L21 19" stroke="#ceb04e" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                07:00 PM
              </div>
            </div>

            <div className="inline-flex h-[27px] items-center justify-center gap-2.5 p-2.5 relative">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                <path d="M16 4C11.589 4 8 7.589 8 12C8 18 16 28 16 28C16 28 24 18 24 12C24 7.589 20.411 4 16 4Z" stroke="#ceb04e" strokeWidth="2"/>
                <circle cx="16" cy="12" r="3" stroke="#ceb04e" strokeWidth="2"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                The Royal Ballroom
              </div>
            </div>
          </div>

          <div className="flex w-[324px] h-5 items-center gap-2.5 p-2.5 absolute top-[189px] left-[58px]">
            <p className="relative w-[282px] font-georgia font-normal text-[#838383] text-[13px] tracking-[-0.26px] leading-[normal]">
              Jl. Cinta Sejati No. 456, Jakarta Selatan
            </p>
          </div>
        </div>

        <div className="relative w-[209px] h-[209px] rounded-[10px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666193428826!2d106.78313341476891!3d-6.194707395469842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14e4ea2c247%3A0xd97c15aedfe7878!2sGrand%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 relative bg-[#ceb04e] rounded-[10px]">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
          </svg>
          <div className="relative w-fit font-times-new-roman font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
            Add to Calendar
          </div>
        </div>

        <div className="flex w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 relative bg-white rounded-[10px] border border-solid border-[#c1c1c1]">
          <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none">
            <path d="M16 4C11.589 4 8 7.589 8 12C8 18 16 28 16 28C16 28 24 18 24 12C24 7.589 20.411 4 16 4Z" stroke="#ceb04e" strokeWidth="2"/>
            <circle cx="16" cy="12" r="3" stroke="#ceb04e" strokeWidth="2"/>
          </svg>
          <div className="relative w-fit font-times-new-roman font-bold text-[#ceb04e] text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
            View on Maps
          </div>
        </div>
      </div>
    </section>
  );
}

