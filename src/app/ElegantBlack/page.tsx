"use client";

import React, { useState } from "react";

export default function ElegantBlackTemplate() {
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
      <section className="relative w-full h-screen bg-[#ecedec] flex items-center justify-center overflow-hidden">
        {/* Background Image - Desktop & Mobile */}
        <div className="absolute inset-0 w-full h-full">
          {/* Desktop Image - right side */}
          <img
            className="hidden md:block absolute top-0 right-0 w-[65%] h-full object-cover"
            alt="Wedding couple elegant"
            src="https://c.animaapp.com/ZGKL5Jue/img/mask-group.png"
          />
          
          {/* Mobile Image - full width with lighter overlay */}
          <div className="md:hidden absolute inset-0 w-full h-full">
            <img
              className="w-full h-full object-cover"
              alt="Wedding couple elegant"
              src="https://c.animaapp.com/ZGKL5Jue/img/mask-group.png"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#ecedec]/60 via-transparent to-[#ecedec]/70" />
          </div>
        </div>

        {/* Scroll Button - Rectangle shape */}
        <button
          className="absolute left-1/2 -translate-x-1/2 bottom-[25px] w-[21px] h-9 flex justify-center border border-solid border-black bg-transparent cursor-pointer hover:bg-black/10 transition-colors z-20"
          onClick={handleScrollDown}
          aria-label="Scroll down to view invitation"
        >
          <div className="mt-[7px] w-[3px] h-3.5 bg-black" />
        </button>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 h-full">
          {/* Couple Names - Left Side for Desktop */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 md:left-[calc(17.5%-279px)] -translate-x-1/2 md:translate-x-0 w-full md:w-[558px] flex flex-col justify-center items-center gap-4 md:gap-2 px-4">
            {/* Groom Name */}
            <h1 className="relative w-fit font-jakarta font-normal text-black text-4xl md:text-[64px] text-center tracking-[-0.80px] md:tracking-[-1.28px] leading-[normal]">
              Alexander
            </h1>

            {/* Divider with & */}
            <div className="inline-flex justify-center items-center gap-2.5 w-full max-w-[350px] md:max-w-full">
              {/* Left Line */}
              <div className="flex-1 h-px bg-black" />

              {/* Ampersand */}
              <div className="relative w-fit font-times font-normal text-black text-4xl md:text-[64px] text-center tracking-[-0.80px] md:tracking-[-1.28px] leading-[normal] whitespace-nowrap px-2">
                &amp;
              </div>

              {/* Right Line */}
              <div className="flex-1 h-px bg-black" />
            </div>

            {/* Bride Name */}
            <h1 className="relative w-fit font-jakarta font-normal text-black text-4xl md:text-[64px] text-center tracking-[-0.80px] md:tracking-[-1.28px] leading-[normal]">
              Isabella
            </h1>
          </div>

          {/* Greeting Text & Button - Center Bottom */}
          <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 w-full max-w-[382px] flex flex-col items-center gap-2.5 px-4">
            <p className="relative w-fit font-times font-normal text-black text-lg md:text-xl text-center tracking-[-0.32px] md:tracking-[-0.40px] leading-[normal]">
              <span className="text-black">Dear </span>
              <span className="text-black font-bold">Distinguished Guest,</span>
            </p>

            <p className="relative w-full max-w-[306px] font-times font-normal text-black text-sm md:text-sm text-center tracking-[-0.28px] md:tracking-[-0.32px] leading-[normal]">
              <span className="md:whitespace-nowrap">We cordially invite you to celebrate our elegant</span> union
            </p>

            {/* Open Invitation Button */}
            <button
              onClick={handleOpenInvitation}
              className="mt-4 w-56 h-[45px] flex items-center justify-center bg-black hover:bg-black/90 transition-colors cursor-pointer"
            >
              <span className="font-times font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                Open Invitation
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content - Placeholder for next sections */}
      <section id="main-content" className="relative w-full min-h-screen bg-white">
        {/* Words of Love Section */}
        <WordsOfLoveSection />
        
        {/* Our Love Story Section */}
        <OurLoveStorySection />
      </section>
    </div>
  );
}

// Words of Love Section Component
function WordsOfLoveSection() {
  return (
    <section className="relative w-full min-h-[737px] flex flex-col items-center bg-black px-4 py-12 md:py-24">
      {/* Header */}
      <div className="flex flex-col h-auto w-full items-center gap-2.5 p-2.5 mt-4 md:mt-12">
        <h2 className="relative w-fit font-times font-normal text-white text-4xl md:text-[64px] text-center tracking-[-0.80px] md:tracking-[-1.28px] leading-[normal]">
          Words of Love
        </h2>

        <div className="w-full flex justify-center">
          <p className="font-times font-normal text-[#d1d1d1] text-xl md:text-[32px] text-center tracking-[-0.48px] md:tracking-[-0.64px] leading-[normal] md:whitespace-nowrap">
            Sacred verses that bless our elegant union
          </p>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="inline-flex w-full max-w-[414px] items-center justify-center gap-2.5 md:gap-8 px-2.5 mt-8 md:mt-16">
        <div className="flex-1 h-[2px] bg-white" />
        <div className="flex-1 h-[2px] bg-white" />
      </div>

      {/* Quranic Verse */}
      <div className="w-full max-w-[744px] mt-8 md:mt-12 flex justify-center">
        <div className="w-full flex flex-col items-center justify-center px-4 md:px-2.5 py-6 md:py-[30px] gap-4 md:gap-2.5">
          {/* Arabic Text */}
          <p className="relative w-full max-w-[640px] font-times font-normal text-white text-2xl md:text-4xl text-center tracking-[-0.48px] md:tracking-[-0.72px] leading-[normal] [direction:rtl]">
            ومن ايته ان خلق لكم من انفسكم ازواجا لتسكنوا اليها وجعل بينكم مودة
            ورحمة ان في ذلك لايت لقوم يتفكرون
          </p>

          {/* Translation */}
          <p className="relative w-full max-w-[684px] font-times font-normal text-white text-sm md:text-base text-center tracking-[-0.28px] md:tracking-[-0.32px] leading-[normal] mt-4">
            Artinya: &quot;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
            menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri
            agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa
            cinta dan kasih sayang. Sesungguhnya pada yang demikian itu
            benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
            berpikir.&quot;
          </p>

          {/* Source */}
          <cite className="relative w-full max-w-[382px] font-times font-bold text-white text-base text-center tracking-[-0.32px] leading-[normal] not-italic mt-2">
            -QS. Ar-Rum: 21
          </cite>
        </div>
      </div>
    </section>
  );
}

// Our Love Story Section Component
function OurLoveStorySection() {
  return (
    <section className="relative w-full min-h-[1100px] md:h-[1050px] bg-[#ecedec] px-4 md:px-0 py-8 md:py-0">
      {/* Gradient Decorations - Show on Mobile & Desktop */}
      <div className="absolute top-[380px] md:top-[380px] left-[20px] md:left-[82px] w-[calc(100%-40px)] md:w-[1258px] h-[180px] md:h-[245px] bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute top-[780px] md:top-[780px] left-[20px] md:left-[82px] w-[calc(100%-40px)] md:w-[1258px] h-[180px] md:h-[245px] rotate-180 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,0)_100%)]" />

      {/* Header */}
      <div className="flex flex-col w-full md:w-[610px] h-auto md:h-[122px] items-center gap-2.5 p-2.5 absolute top-[60px] md:top-[97px] left-1/2 -translate-x-1/2">
        <div className="w-full flex items-center justify-center relative">
          <p className="relative mt-[-1.00px] font-times font-normal text-black text-3xl md:text-[64px] text-center tracking-[-0.82px] md:tracking-[-1.28px] leading-[normal] whitespace-nowrap">
            Our Love Story
          </p>
        </div>

        <p className="relative mb-[-9.00px] font-times font-normal text-black text-lg md:text-2xl text-center tracking-[-0.36px] md:tracking-[-0.48px] leading-[normal]">
          Two souls destined to become one
        </p>
      </div>

      {/* Groom Section */}
      <div className="absolute w-full md:w-[875px] h-auto md:h-[325px] top-[220px] md:top-[259px] left-1/2 md:left-[97px] -translate-x-1/2 md:translate-x-0 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-[3px] px-4 md:px-0">
        <div className="w-full max-w-[325px] md:w-[325px] h-[325px] flex flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            alt="Alexander William Thompson"
            src="https://c.animaapp.com/EnvIStjZ/img/rectangle-17721.svg"
          />
        </div>

        <div className="w-full md:w-[547px] h-auto md:h-[209px] relative mt-0 md:mt-[80px]">
          <div className="flex flex-col w-full md:w-[547px] h-auto md:h-[179px] items-center justify-center gap-2.5 p-2.5">
            <div className="relative w-fit font-times font-normal italic text-black text-2xl md:text-4xl text-center tracking-[-0.48px] md:tracking-[-0.72px] leading-[normal] whitespace-nowrap">
              Alexander William Thompson
            </div>

            <div className="relative self-stretch font-times font-normal text-black md:text-white text-xl md:text-[32px] text-center tracking-[-0.40px] md:tracking-[-0.64px] leading-[normal]">
              Putra/Putri dari:
            </div>

            <div className="flex-col w-full md:w-[547px] flex items-center justify-center relative flex-[0_0_auto]">
              <div className="relative w-full md:w-[594px] mt-[-1.00px] font-times font-normal text-black md:text-white text-xl md:text-[32px] text-center tracking-[-0.40px] md:tracking-[-0.64px] leading-[normal] whitespace-nowrap">
                William Thompson&nbsp;&nbsp;&amp; Elizabeth Thompson
              </div>
            </div>
          </div>

          <div className="flex w-[209px] h-[43px] items-center justify-center gap-2.5 mx-auto mt-4 md:mt-0 md:absolute md:top-[calc(50.00%_+_62px)] md:left-[calc(50.00%_-_104px)] bg-white rounded-[10px]">
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
      <div className="absolute w-full md:w-[872px] top-[850px] md:top-[650px] left-1/2 md:left-[468px] -translate-x-1/2 md:translate-x-0 h-auto md:h-[325px] flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-0 px-4 md:px-0">
        <div className="w-full md:w-[547px] h-auto md:h-52 relative mt-0 md:mt-[50px]">
          <div className="flex flex-col w-full md:w-[547px] h-auto md:h-[179px] items-center justify-center gap-2.5 p-2.5">
            <div className="relative w-fit font-times font-normal italic text-black text-2xl md:text-4xl text-center tracking-[-0.48px] md:tracking-[-0.72px] leading-[normal] whitespace-nowrap">
              Isabella Grace Martinez
            </div>

            <div className="relative self-stretch font-times font-normal text-black md:text-white text-xl md:text-[32px] text-center tracking-[-0.40px] md:tracking-[-0.64px] leading-[normal]">
              Putra/Putri dari:
            </div>

            <div className="flex-col w-full md:w-[547px] flex items-center justify-center relative flex-[0_0_auto]">
              <p className="relative w-full md:w-[594px] mt-[-1.00px] font-times font-normal text-black md:text-white text-xl md:text-[32px] text-center tracking-[-0.40px] md:tracking-[-0.64px] leading-[normal] whitespace-nowrap">
                Roberto Martinez &amp; Sofia Martinez
              </p>
            </div>
          </div>

          <div className="flex w-[209px] h-[42px] items-center justify-center gap-2.5 p-2.5 mx-auto mt-4 md:mt-0 md:absolute md:top-[calc(50.00%_+_62px)] md:left-[calc(50.00%_-_104px)] bg-white rounded-[10px]">
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
          className="w-full max-w-[325px] md:w-[326px] h-[325px] md:h-[326px] md:absolute md:top-0 md:left-[546px] object-cover"
          alt="Isabella Grace Martinez"
          src="https://c.animaapp.com/EnvIStjZ/img/rectangle-17720.svg"
        />
      </div>
    </section>
  );
}
