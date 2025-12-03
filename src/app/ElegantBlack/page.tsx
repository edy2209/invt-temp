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
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 md:left-[calc(50%-200px)] lg:left-[calc(17.5%-279px)] -translate-x-1/2 lg:translate-x-0 w-full lg:w-[558px] flex flex-col justify-center items-center gap-4 lg:gap-2 px-4">
            {/* Groom Name */}
            <h1 className="relative w-fit font-jakarta font-normal text-black text-4xl lg:text-[64px] text-center tracking-[-0.80px] lg:tracking-[-1.28px] leading-[normal]">
              Alexander
            </h1>

            {/* Divider with & */}
            <div className="inline-flex justify-center items-center gap-2.5 w-full max-w-[350px] lg:max-w-full">
              {/* Left Line */}
              <div className="flex-1 h-px bg-black" />

              {/* Ampersand */}
              <div className="relative w-fit font-times font-normal text-black text-4xl lg:text-[64px] text-center tracking-[-0.80px] lg:tracking-[-1.28px] leading-[normal] whitespace-nowrap px-2">
                &amp;
              </div>

              {/* Right Line */}
              <div className="flex-1 h-px bg-black" />
            </div>

            {/* Bride Name */}
            <h1 className="relative w-fit font-jakarta font-normal text-black text-4xl lg:text-[64px] text-center tracking-[-0.80px] lg:tracking-[-1.28px] leading-[normal]">
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
        
        {/* Our Love Journey Section */}
        <OurLoveJourneySection />
        
        {/* Counting Down Section */}
        <CountingDownSection />
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

// Our Love Journey Section Component
function OurLoveJourneySection() {
  return (
    <section className="relative w-full min-h-[1500px] md:min-h-[1200px] lg:h-[1024px] bg-black px-4 py-12 lg:px-0 lg:py-0 lg:-mt-20">
      {/* Header */}
      <div className="flex flex-col w-full lg:w-[563px] h-auto lg:h-[132px] items-center gap-2.5 p-2.5 relative md:absolute lg:absolute top-0 md:top-10 lg:top-10 left-1/2 -translate-x-1/2 mb-12 md:mb-0 lg:mb-0">
        <p className="relative w-fit mt-[-1.00px] font-times font-normal text-white text-4xl lg:text-[64px] text-center tracking-[-0.82px] lg:tracking-[-1.28px] leading-[normal] whitespace-nowrap">
          <span className="text-white">Our</span>
          <span className="text-[#bb2245]">&nbsp;</span>
          <span className="text-white">Love Journey</span>
        </p>

        <p className="relative w-full font-times font-normal text-[#d1d1d1] text-lg lg:text-2xl text-center tracking-[-0.36px] lg:tracking-[-0.48px] leading-[normal] whitespace-nowrap">
          Every love story is beautiful, but ours is elegant
        </p>
      </div>

      {/* Timeline Cards Container */}
      <div className="relative w-full md:w-[768px] lg:w-[1440px] md:h-[1100px] lg:h-[1024px] mx-auto pt-8 md:pt-0 lg:pt-0">
        {/* Connecting Lines - Mobile Only with Curved Design */}
        <svg className="md:hidden absolute left-1/2 -translate-x-1/2 top-[280px] h-[calc(100%-320px)]" width="40" viewBox="0 0 40 1000" fill="none" preserveAspectRatio="none">
          <path 
            d="M20 0 Q30 100 20 200 Q10 300 20 400 Q30 500 20 600 Q10 700 20 800 Q30 900 20 1000" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="2" 
            fill="none"
          />
        </svg>
        
        {/* Card 1 - Once Upon a Time (2020) - Top Left on Desktop, Left on iPad */}
        <div className="relative md:absolute md:top-[180px] md:left-[30px] lg:top-[192px] lg:left-[246px] w-full md:w-[380px] lg:w-[505px] h-auto lg:h-[302px] mb-16 md:mb-0">
          <img
            className="w-full md:w-[380px] lg:w-[501px] h-[250px] md:h-[280px] lg:h-[302px] object-cover"
            alt="Once Upon a Time"
            src="https://c.animaapp.com/Q9CTuJmG/img/download--1--1-2.png"
          />

          {/* Timeline Dot - Mobile Only */}
          <div className="md:hidden absolute -left-[calc(50%-10px)] top-[125px] w-5 h-5 bg-white rounded-full border-4 border-black z-10" />

          <div className="absolute top-16 md:top-16 lg:top-20 left-4 md:left-8 lg:left-[53px] flex w-[87px] h-7 items-center justify-center gap-2.5 p-2.5 bg-white">
            <div className="relative w-fit font-georgia font-normal text-black text-xl text-center tracking-[-0.40px] leading-[normal] whitespace-nowrap">
              2020
            </div>
          </div>

          <div className="absolute top-[100px] md:top-[100px] lg:top-[120px] left-4 md:left-8 lg:left-[53px] font-times font-normal text-black text-xl tracking-[-0.40px] leading-[normal] whitespace-nowrap">
            Once Upon a Time
          </div>

          <p className="absolute top-[130px] md:top-[130px] lg:top-[150px] left-4 md:left-8 lg:left-[53px] w-[calc(100%-2rem)] md:w-[300px] lg:w-[377px] font-times font-normal text-black text-base md:text-lg lg:text-xl tracking-[-0.32px] lg:tracking-[-0.40px] leading-[normal]">
            We first met at a magical coffee shop where Alex accidentally spilled coffee on Isabella's fairy tale book. Love at first sight (and spill)! ☕💕
          </p>
        </div>

        {/* Card 2 - The First Date (2021) - Top Right on Desktop, Right on iPad */}
        <div className="relative md:absolute md:top-[500px] md:left-[358px] lg:top-[377px] lg:left-[837px] w-full md:w-[380px] lg:w-[505px] h-auto lg:h-[302px] mb-16 md:mb-0">
          <img
            className="w-full md:w-[380px] lg:w-[501px] h-[250px] md:h-[280px] lg:h-[302px] object-cover"
            alt="The First Date"
            src="https://c.animaapp.com/Q9CTuJmG/img/download--1--1-2.png"
          />

          {/* Timeline Dot - Mobile Only */}
          <div className="md:hidden absolute -left-[calc(50%-10px)] top-[125px] w-5 h-5 bg-white rounded-full border-4 border-black z-10" />

          <div className="absolute top-16 md:top-16 lg:top-20 left-4 md:left-8 lg:left-[53px] flex w-[87px] h-7 items-center justify-center gap-2.5 p-2.5 bg-white">
            <div className="relative w-fit font-georgia font-normal text-black text-xl text-center tracking-[-0.40px] leading-[normal] whitespace-nowrap">
              2021
            </div>
          </div>

          <div className="absolute top-[100px] md:top-[100px] lg:top-[120px] left-4 md:left-8 lg:left-[53px] font-times font-normal text-black text-xl tracking-[-0.40px] leading-[normal] whitespace-nowrap">
            The First Date
          </div>

          <p className="absolute top-[130px] md:top-[130px] lg:top-[150px] left-4 md:left-8 lg:left-[53px] w-[calc(100%-2rem)] md:w-[300px] lg:w-[377px] font-times font-normal text-black text-base md:text-lg lg:text-xl tracking-[-0.32px] lg:tracking-[-0.40px] leading-[normal]">
            Our first official date was a romantic picnic under the stars. Alex brought his guitar and serenaded Isabella with her favorite song. 🌟🎵
          </p>
        </div>

        {/* Card 3 - The Proposal (2023) - Bottom Left on Desktop, Left on iPad */}
        <div className="relative md:absolute md:top-[820px] md:left-[30px] lg:top-[631px] lg:left-80 w-full md:w-[380px] lg:w-[505px] h-auto lg:h-[302px] mb-8 md:mb-0">
          <img
            className="w-full md:w-[380px] lg:w-[501px] h-[250px] md:h-[280px] lg:h-[302px] object-cover"
            alt="The Proposal"
            src="https://c.animaapp.com/Q9CTuJmG/img/download--1--1-2.png"
          />

          {/* Timeline Dot - Mobile Only */}
          <div className="md:hidden absolute -left-[calc(50%-10px)] top-[125px] w-5 h-5 bg-white rounded-full border-4 border-black z-10" />

          <div className="absolute top-16 md:top-16 lg:top-20 left-4 md:left-8 lg:left-[53px] flex w-[87px] h-7 items-center justify-center gap-2.5 p-2.5 bg-white">
            <div className="relative w-fit font-georgia font-normal text-black text-xl text-center tracking-[-0.40px] leading-[normal] whitespace-nowrap">
              2023
            </div>
          </div>

          <div className="absolute top-[100px] md:top-[100px] lg:top-[120px] left-4 md:left-8 lg:left-[53px] font-times font-normal text-black text-xl tracking-[-0.40px] leading-[normal] whitespace-nowrap">
            The Proposal
          </div>

          <p className="absolute top-[130px] md:top-[130px] lg:top-[150px] left-4 md:left-8 lg:left-[53px] w-[calc(100%-2rem)] md:w-[300px] lg:w-[377px] font-times font-normal text-black text-base md:text-lg lg:text-xl tracking-[-0.32px] lg:tracking-[-0.40px] leading-[normal]">
            Alex proposed in a beautiful garden filled with pink roses, getting down on one knee with a crown-shaped ring box. She said yes! 👑💍
          </p>
        </div>
      </div>
    </section>
  );
}

// Counting Down Section Component
function CountingDownSection() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[500px] lg:h-[537px] bg-black px-4 py-8 md:py-12 md:px-8 lg:px-0 lg:py-0">
      {/* Header */}
      <div className="flex flex-col w-full lg:w-[840px] h-auto lg:h-[131px] items-center gap-2.5 p-2.5 relative md:absolute lg:absolute top-0 md:top-[30px] lg:top-[30px] left-1/2 md:left-[calc(50%-420px)] lg:left-[calc(50%-420px)] -translate-x-1/2 md:translate-x-0 lg:translate-x-0 mb-8 md:mb-0 lg:mb-0">
        <p className="relative w-full font-times font-normal text-4xl lg:text-5xl text-center tracking-[-0.82px] lg:tracking-[-0.96px] leading-[normal]">
          <span className="text-white tracking-[-0.46px]">Counting Down to</span>
          <span className="text-[#bb2245] tracking-[-0.46px]">&nbsp;</span>
          <span className="text-white tracking-[-0.46px]">Our Reception</span>
        </p>

        <p className="relative w-full lg:w-[530px] font-times font-normal text-[#d1d1d1] text-lg lg:text-2xl text-center tracking-[-0.36px] lg:tracking-[-0.48px] leading-[normal]">
          Until our hearts become one elegant union...
        </p>
      </div>

      {/* Decorative Image - Mobile Only (Above Countdown) */}
      <img
        className="block md:hidden mx-auto w-[280px] h-[278px] object-cover mb-8"
        alt="Elegant decoration"
        src="https://c.animaapp.com/IDVqyAUC/img/mask-group@2x.png"
      />

      {/* Countdown Timer Container */}
      <div className="relative md:absolute lg:absolute w-full md:w-[280px] lg:w-[338px] h-auto lg:h-[330px] top-8 md:top-[154px] lg:top-[154px] left-1/2 md:left-[80px] lg:left-[210px] -translate-x-1/2 md:translate-x-0 lg:translate-x-0 mt-0 md:mt-0 lg:mt-0">
        {/* Grid Layout for Mobile, Absolute for iPad/Desktop */}
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:block lg:block">
          {/* Days - Top Left */}
          <div className="relative md:absolute lg:absolute md:top-0 lg:top-0 md:left-0 lg:left-0 w-full md:w-[130px] lg:w-[159px] h-[140px] md:h-[130px] lg:h-[155px] border border-solid border-white mx-auto md:mx-0">
            <img
              className="absolute -top-0.5 -left-0.5 w-full h-full md:w-[133px] lg:w-[162px] md:h-[133px] lg:h-[158px]"
              alt="Rectangle"
              src="https://c.animaapp.com/IDVqyAUC/img/rectangle-17722-3.svg"
            />

            <div className="flex flex-col w-full h-full items-center justify-center gap-2.5 p-2.5 relative border border-solid border-white">
              <div className="relative w-full font-georgia font-normal text-white text-3xl md:text-[34px] lg:text-[40px] text-center tracking-[-0.60px] lg:tracking-[-0.80px] leading-[normal]">
                00
              </div>

              <div className="relative w-full font-georgia font-normal text-[#aeaeb0] text-lg md:text-xl lg:text-2xl text-center tracking-[-0.36px] lg:tracking-[-0.48px] leading-[normal]">
                DAYS
              </div>
            </div>
          </div>

          {/* Hours - Top Right */}
          <div className="relative md:absolute lg:absolute md:top-0 lg:top-0 md:left-[150px] lg:left-[179px] w-full md:w-[130px] lg:w-[159px] h-[140px] md:h-[130px] lg:h-[155px] border border-solid border-white mx-auto md:mx-0">
            <img
              className="absolute -top-0.5 -left-0.5 w-full h-full md:w-[133px] lg:w-[162px] md:h-[133px] lg:h-[158px]"
              alt="Rectangle"
              src="https://c.animaapp.com/IDVqyAUC/img/rectangle-17722-3.svg"
            />

            <div className="flex flex-col w-full h-full items-center justify-center gap-2.5 p-2.5 relative border border-solid border-white">
              <div className="relative w-full font-georgia font-normal text-white text-3xl md:text-[34px] lg:text-[40px] text-center tracking-[-0.60px] lg:tracking-[-0.80px] leading-[normal]">
                00
              </div>

              <div className="relative w-full font-georgia font-normal text-[#aeaeb0] text-lg md:text-xl lg:text-2xl text-center tracking-[-0.36px] lg:tracking-[-0.48px] leading-[normal]">
                HOURS
              </div>
            </div>
          </div>

          {/* Minutes - Bottom Left */}
          <div className="relative md:absolute lg:absolute md:top-[150px] lg:top-[175px] md:left-0 lg:left-0 w-full md:w-[130px] lg:w-[159px] h-[140px] md:h-[130px] lg:h-[155px] border border-solid border-white mx-auto md:mx-0">
            <img
              className="absolute -top-0.5 -left-0.5 w-full h-full md:w-[133px] lg:w-[162px] md:h-[133px] lg:h-[158px]"
              alt="Rectangle"
              src="https://c.animaapp.com/IDVqyAUC/img/rectangle-17722-3.svg"
            />

            <div className="flex flex-col w-full h-full items-center justify-center gap-2.5 p-2.5 relative border border-solid border-white">
              <div className="relative w-full font-georgia font-normal text-white text-3xl md:text-[34px] lg:text-[40px] text-center tracking-[-0.60px] lg:tracking-[-0.80px] leading-[normal]">
                00
              </div>

              <div className="relative w-full font-georgia font-normal text-[#aeaeb0] text-lg md:text-xl lg:text-2xl text-center tracking-[-0.36px] lg:tracking-[-0.48px] leading-[normal]">
                MINUTES
              </div>
            </div>
          </div>

          {/* Seconds - Bottom Right */}
          <div className="relative md:absolute lg:absolute md:top-[150px] lg:top-[175px] md:left-[150px] lg:left-[179px] w-full md:w-[130px] lg:w-[159px] h-[140px] md:h-[130px] lg:h-[155px] border border-solid border-white mx-auto md:mx-0">
            <img
              className="absolute -top-0.5 -left-0.5 w-full h-full md:w-[133px] lg:w-[162px] md:h-[133px] lg:h-[158px]"
              alt="Rectangle"
              src="https://c.animaapp.com/IDVqyAUC/img/rectangle-17722-3.svg"
            />

            <div className="flex flex-col w-full h-full items-center justify-center gap-2.5 p-2.5 relative border border-solid border-white">
              <div className="relative w-full font-georgia font-normal text-white text-3xl md:text-[34px] lg:text-[40px] text-center tracking-[-0.60px] lg:tracking-[-0.80px] leading-[normal]">
                00
              </div>

              <div className="relative w-full font-georgia font-normal text-[#aeaeb0] text-lg md:text-xl lg:text-2xl text-center tracking-[-0.36px] lg:tracking-[-0.48px] leading-[normal]">
                SECONDS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Image - iPad & Desktop */}
      <img
        className="hidden md:block absolute md:top-[119px] lg:top-[119px] md:right-[50px] lg:left-[810px] md:w-[340px] lg:w-[411px] md:h-[338px] lg:h-[408px] object-cover"
        alt="Elegant decoration"
        src="https://c.animaapp.com/IDVqyAUC/img/mask-group@2x.png"
      />
    </section>
  );
}

// Our Love Story Section Component
function OurLoveStorySection() {
  return (
    <section className="relative w-full min-h-[1600px] lg:h-[1050px] bg-[#ecedec] px-4 lg:px-0 py-8 lg:py-0">
      {/* Gradient Decorations - Show on Mobile & Desktop */}
      <div className="absolute top-[380px] md:top-[380px] lg:top-[380px] left-[20px] md:left-[82px] lg:left-[82px] w-[calc(100%-40px)] md:w-[1258px] lg:w-[1258px] h-[180px] md:h-[245px] lg:h-[245px] bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute top-[780px] md:top-[900px] lg:top-[780px] left-[20px] md:left-[82px] lg:left-[82px] w-[calc(100%-40px)] md:w-[1258px] lg:w-[1258px] h-[180px] md:h-[245px] lg:h-[245px] rotate-180 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(255,255,255,0)_100%)]" />

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
      <div className="absolute w-full lg:w-[875px] h-auto lg:h-[325px] top-[220px] md:top-[380px] lg:top-[259px] left-1/2 lg:left-[97px] -translate-x-1/2 lg:translate-x-0 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-[3px] px-4 lg:px-0">
        <div className="w-full max-w-[325px] lg:w-[325px] h-[325px] flex flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            alt="Alexander William Thompson"
            src="https://c.animaapp.com/EnvIStjZ/img/rectangle-17721.svg"
          />
        </div>

        <div className="w-full lg:w-[547px] h-auto lg:h-[209px] relative mt-0 lg:mt-[146px] lg:pl-16">
          <div className="flex flex-col w-full lg:w-[547px] h-auto lg:h-[179px] items-center justify-center gap-2.5 p-2.5">
            <div className="relative w-fit max-w-full font-times font-normal italic text-black text-xl lg:text-[32px] text-center tracking-[-0.40px] lg:tracking-[-0.64px] leading-[normal] whitespace-normal lg:whitespace-nowrap">
              Alexander William Thompson
            </div>

            <div className="relative w-fit font-times font-normal text-black lg:text-white text-base lg:text-[32px] text-center tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal]">
              Putra/Putri dari:
            </div>

            <div className="flex-col w-full lg:w-[547px] flex items-center justify-center relative flex-[0_0_auto]">
              <div className="relative w-full lg:w-[594px] mt-[-1.00px] font-times font-normal text-black lg:text-white text-base lg:text-[32px] text-center tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal] px-2 lg:px-0 lg:whitespace-nowrap">
                William Thompson&nbsp;&nbsp;&amp; Elizabeth Thompson
              </div>
            </div>
          </div>

          <div className="flex w-[209px] h-[43px] items-center justify-center gap-2.5 mx-auto mt-4 lg:mt-0 lg:absolute lg:top-[calc(50.00%_+_62px)] lg:left-[calc(50.00%_-_50px)] bg-white rounded-[10px]">
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

            <div className="relative w-fit font-times font-normal text-black lg:text-white text-base lg:text-[32px] text-center tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal]">
              Putra/Putri dari:
            </div>

            <div className="flex-col w-full lg:w-fit flex items-center justify-center relative flex-[0_0_auto]">
              <p className="relative w-full lg:w-fit mt-[-1.00px] font-times font-normal text-black lg:text-white text-base lg:text-[32px] text-center tracking-[-0.32px] lg:tracking-[-0.64px] leading-[normal] px-2 lg:px-0 lg:whitespace-nowrap">
                Roberto Martinez &amp; Sofia Martinez
              </p>
            </div>
          </div>

          <div className="flex w-[209px] h-[42px] items-center justify-center gap-2.5 p-2.5 mx-auto mt-4 lg:mt-0 lg:absolute lg:top-[calc(50.00%_+_62px)] lg:left-[calc(50.00%_-_104px)] bg-white rounded-[10px]">
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
          src="https://c.animaapp.com/EnvIStjZ/img/rectangle-17720.svg"
        />
      </div>
    </section>
  );
}
