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
        
        {/* When & Where Section */}
        <WhenWhereSection />
        
        {/* Dress Code Section */}
        <DressCodeSection />
        
        {/* Our Moments Section */}
        <OurMomentsSection />
        
        {/* RSVP Section */}
        <RSVPSection />
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
            We first met at a magical coffee shop where Alex accidentally spilled coffee on Isabella&apos;s fairy tale book. Love at first sight (and spill)! ☕💕
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
    <section className="relative w-full min-h-[600px] md:min-h-[500px] lg:h-[537px] bg-black px-4 py-8 pb-20 md:py-12 md:px-8 lg:px-0 lg:py-0">
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

// When & Where Section Component
function WhenWhereSection() {
  return (
    <section className="relative w-full min-h-[1800px] md:min-h-[1100px] lg:h-[1024px] bg-[#ecedec] px-4 py-12 md:px-0 md:py-0 lg:px-0 lg:py-0 md:mt-0 lg:mt-0">
      {/* Header */}
      <div className="flex flex-col w-full md:w-[382px] lg:w-[563px] h-auto lg:h-[132px] items-center gap-2.5 p-2.5 relative md:absolute lg:absolute top-0 md:top-10 lg:top-[140px] left-1/2 -translate-x-1/2 mb-12 md:mb-0 lg:mb-0">
        <p className="relative w-fit font-times font-normal text-4xl md:text-4xl lg:text-5xl text-center tracking-[-0.82px] md:tracking-[-0.82px] lg:tracking-[-0.96px] leading-[normal] whitespace-nowrap">
          <span className="text-black tracking-[-0.46px]">When &amp;</span>
          <span className="text-white tracking-[-0.46px]">&nbsp;</span>
          <span className="text-black tracking-[-0.46px]">Where</span>
        </p>

        <p className="relative w-full font-times font-normal text-black text-lg md:text-xl lg:text-2xl text-center tracking-[-0.36px] md:tracking-[-0.40px] lg:tracking-[-0.48px] leading-[normal] whitespace-nowrap mt-4">
          Join us in celebrating our elegant union
        </p>
      </div>

      {/* Holy Matrimony Section */}
      <div className="relative md:absolute lg:absolute md:top-[180px] lg:top-[292px] md:left-[50px] lg:left-[50px] w-full md:w-[320px] lg:w-[695px] h-auto lg:h-[261px] mb-12 md:mb-0 lg:mb-0">
        {/* Content Card */}
        <div className="flex flex-col w-full md:w-[280px] lg:w-[382px] h-auto lg:h-[209px] items-center gap-2.5 p-2.5 relative md:absolute lg:absolute top-0 left-0 mx-auto md:mx-0 lg:mx-0">
          <div className="relative w-fit font-times font-normal text-black text-2xl md:text-[26px] lg:text-[32px] text-center tracking-[-0.48px] md:tracking-[-0.52px] lg:tracking-[-0.64px] leading-[normal] whitespace-nowrap">
            Holy Matrimony
          </div>

          <div className="relative w-[94px] md:w-[80px] lg:w-[94px] h-[3px] bg-black rounded-[50px]" />

          {/* Event Details */}
          <div className="flex flex-col w-full max-w-[280px] md:max-w-[280px] lg:max-w-[325px] items-start justify-center gap-[11px] mt-6 md:mt-0 lg:mt-0 md:absolute lg:absolute md:top-[74px] lg:top-[88px] md:left-5 lg:left-6">
            <div className="inline-flex h-[27px] items-center justify-start gap-2.5 p-2.5 relative w-full">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                <path d="M12.6667 2.66667H12V1.33333H10.6667V2.66667H5.33333V1.33333H4V2.66667H3.33333C2.59333 2.66667 2.00667 3.26667 2.00667 4L2 13.3333C2 14.0667 2.59333 14.6667 3.33333 14.6667H12.6667C13.4 14.6667 14 14.0667 14 13.3333V4C14 3.26667 13.4 2.66667 12.6667 2.66667ZM12.6667 13.3333H3.33333V6.66667H12.6667V13.3333Z" fill="black"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-sm md:text-sm lg:text-base text-center tracking-[-0.28px] md:tracking-[-0.28px] lg:tracking-[-0.32px] leading-[normal]">
                Saturday, March 15, 2025
              </div>
            </div>

            <div className="inline-flex h-[27px] items-center justify-start gap-2.5 p-2.5 relative w-full">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                <path d="M7.99335 1.33333C4.31335 1.33333 1.33335 4.32 1.33335 8C1.33335 11.68 4.31335 14.6667 7.99335 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33333 7.99335 1.33333ZM8.00002 13.3333C5.06002 13.3333 2.66669 10.94 2.66669 8C2.66669 5.06 5.06002 2.66667 8.00002 2.66667C10.94 2.66667 13.3334 5.06 13.3334 8C13.3334 10.94 10.94 13.3333 8.00002 13.3333Z" fill="black"/>
                <path d="M8.33335 4.66667H7.33335V8.66667L10.8334 10.7333L11.3334 9.94667L8.33335 8.16667V4.66667Z" fill="black"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-sm md:text-sm lg:text-base text-center tracking-[-0.28px] md:tracking-[-0.28px] lg:tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                08:00 AM
              </div>
            </div>

            <div className="inline-flex h-[27px] items-center justify-start gap-2.5 p-2.5 relative w-full">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.33333C5.42 1.33333 3.33333 3.42 3.33333 6C3.33333 9.5 8 14.6667 8 14.6667C8 14.6667 12.6667 9.5 12.6667 6C12.6667 3.42 10.58 1.33333 8 1.33333ZM8 7.66667C7.08 7.66667 6.33333 6.92 6.33333 6C6.33333 5.08 7.08 4.33333 8 4.33333C8.92 4.33333 9.66667 5.08 9.66667 6C9.66667 6.92 8.92 7.66667 8 7.66667Z" fill="black"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-sm md:text-sm lg:text-base text-center tracking-[-0.28px] md:tracking-[-0.28px] lg:tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                Masjid Al-Barokah
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex w-full max-w-[280px] md:max-w-[280px] lg:max-w-[324px] h-auto items-center gap-2.5 p-2.5 mt-4 md:mt-0 lg:mt-0 md:absolute lg:absolute md:top-[160px] lg:top-[189px] md:left-[48px] lg:left-[58px]">
            <p className="relative w-full font-georgia font-normal text-black text-sm md:text-sm lg:text-base tracking-[-0.28px] md:tracking-[-0.28px] lg:tracking-[-0.32px] leading-[normal]">
              Jl. Kebahagiaan No. 123, Jakarta Selatan
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-auto mt-6 md:mt-0 lg:mt-0">
          <button className="flex w-full md:w-[220px] lg:w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 relative md:absolute lg:absolute md:top-[195px] lg:top-[230px] md:left-[15px] lg:left-[34px] bg-black mx-auto md:mx-0">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M8 1V15M1 8H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="relative w-fit font-times font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              Add to Calendar
            </div>
          </button>

          <button className="flex w-full md:w-[220px] lg:w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 relative md:absolute lg:absolute md:top-[195px] lg:top-[230px] md:left-[245px] lg:left-[382px] border border-solid border-black mx-auto md:mx-0">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.33333C5.42 1.33333 3.33333 3.42 3.33333 6C3.33333 9.5 8 14.6667 8 14.6667C8 14.6667 12.6667 9.5 12.6667 6C12.6667 3.42 10.58 1.33333 8 1.33333ZM8 7.66667C7.08 7.66667 6.33333 6.92 6.33333 6C6.33333 5.08 7.08 4.33333 8 4.33333C8.92 4.33333 9.66667 5.08 9.66667 6C9.66667 6.92 8.92 7.66667 8 7.66667Z" fill="black"/>
            </svg>
            <div className="relative w-fit font-times font-bold text-black text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              View on Maps
            </div>
          </button>
        </div>

        {/* Google Maps Embed - Holy Matrimony */}
        <div className="w-full md:w-[150px] lg:w-[209px] h-[200px] md:h-[150px] lg:h-[209px] mt-6 md:mt-0 lg:mt-0 relative md:absolute lg:absolute md:top-[40px] lg:top-0 md:left-[320px] lg:left-[434px] mx-auto md:mx-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e0!3m2!1sen!2sid!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          />
        </div>
      </div>

      {/* Wedding Reception Section */}
      <div className="relative md:absolute lg:absolute md:top-[480px] lg:top-[648px] md:left-[50px] lg:left-[711px] w-full md:w-[320px] lg:w-[695px] h-auto lg:h-[261px] mb-12 md:mb-0 lg:mb-0">
        {/* Content Card */}
        <div className="flex flex-col w-full md:w-[280px] lg:w-[382px] h-auto lg:h-[209px] items-center gap-2.5 p-2.5 relative md:absolute lg:absolute top-0 left-0 mx-auto md:mx-0 lg:mx-0">
          <div className="relative w-fit font-times font-normal text-black text-2xl md:text-[26px] lg:text-[32px] text-center tracking-[-0.48px] md:tracking-[-0.52px] lg:tracking-[-0.64px] leading-[normal] whitespace-nowrap">
            Wedding Reception
          </div>

          <div className="relative w-[94px] h-[3px] bg-black rounded-[50px]" />

          {/* Event Details */}
          <div className="flex flex-col w-full max-w-[280px] md:max-w-[280px] lg:max-w-[325px] items-start justify-center gap-[11px] mt-6 md:mt-0 lg:mt-0 md:absolute lg:absolute md:top-[74px] lg:top-[88px] md:left-5 lg:left-6">
            <div className="inline-flex h-[27px] items-center justify-start gap-2.5 p-2.5 relative w-full">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                <path d="M12.6667 2.66667H12V1.33333H10.6667V2.66667H5.33333V1.33333H4V2.66667H3.33333C2.59333 2.66667 2.00667 3.26667 2.00667 4L2 13.3333C2 14.0667 2.59333 14.6667 3.33333 14.6667H12.6667C13.4 14.6667 14 14.0667 14 13.3333V4C14 3.26667 13.4 2.66667 12.6667 2.66667ZM12.6667 13.3333H3.33333V6.66667H12.6667V13.3333Z" fill="black"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-sm md:text-sm lg:text-base text-center tracking-[-0.28px] md:tracking-[-0.28px] lg:tracking-[-0.32px] leading-[normal]">
                Saturday, March 15, 2025
              </div>
            </div>

            <div className="inline-flex h-[27px] items-center justify-start gap-2.5 p-2.5 relative w-full">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                <path d="M7.99335 1.33333C4.31335 1.33333 1.33335 4.32 1.33335 8C1.33335 11.68 4.31335 14.6667 7.99335 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33333 7.99335 1.33333ZM8.00002 13.3333C5.06002 13.3333 2.66669 10.94 2.66669 8C2.66669 5.06 5.06002 2.66667 8.00002 2.66667C10.94 2.66667 13.3334 5.06 13.3334 8C13.3334 10.94 10.94 13.3333 8.00002 13.3333Z" fill="black"/>
                <path d="M8.33335 4.66667H7.33335V8.66667L10.8334 10.7333L11.3334 9.94667L8.33335 8.16667V4.66667Z" fill="black"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-sm md:text-sm lg:text-base text-center tracking-[-0.28px] md:tracking-[-0.28px] lg:tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                07:00 PM
              </div>
            </div>

            <div className="inline-flex h-[27px] items-center justify-start gap-2.5 p-2.5 relative w-full">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.33333C5.42 1.33333 3.33333 3.42 3.33333 6C3.33333 9.5 8 14.6667 8 14.6667C8 14.6667 12.6667 9.5 12.6667 6C12.6667 3.42 10.58 1.33333 8 1.33333ZM8 7.66667C7.08 7.66667 6.33333 6.92 6.33333 6C6.33333 5.08 7.08 4.33333 8 4.33333C8.92 4.33333 9.66667 5.08 9.66667 6C9.66667 6.92 8.92 7.66667 8 7.66667Z" fill="black"/>
              </svg>
              <div className="relative w-fit font-georgia font-normal text-black text-sm md:text-sm lg:text-base text-center tracking-[-0.28px] md:tracking-[-0.28px] lg:tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                The Royal Ballroom
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex w-full max-w-[280px] md:max-w-[280px] lg:max-w-[324px] h-auto items-center gap-2.5 p-2.5 mt-4 md:mt-0 lg:mt-0 md:absolute lg:absolute md:top-[160px] lg:top-[189px] md:left-[48px] lg:left-[58px]">
            <p className="relative w-full font-georgia font-normal text-black text-sm md:text-sm lg:text-base tracking-[-0.28px] md:tracking-[-0.28px] lg:tracking-[-0.32px] leading-[normal]">
              Jl. Cinta Sejati No. 456, Jakarta Selatan
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-auto mt-6 md:mt-0 lg:mt-0">
          <button className="flex w-full md:w-[220px] lg:w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 relative md:absolute lg:absolute md:top-[195px] lg:top-[230px] md:left-[15px] lg:left-[34px] bg-black mx-auto md:mx-0">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M8 1V15M1 8H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="relative w-fit font-times font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              Add to Calendar
            </div>
          </button>

          <button className="flex w-full md:w-[220px] lg:w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 relative md:absolute lg:absolute md:top-[195px] lg:top-[230px] md:left-[245px] lg:left-[382px] border border-solid border-black mx-auto md:mx-0">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.33333C5.42 1.33333 3.33333 3.42 3.33333 6C3.33333 9.5 8 14.6667 8 14.6667C8 14.6667 12.6667 9.5 12.6667 6C12.6667 3.42 10.58 1.33333 8 1.33333ZM8 7.66667C7.08 7.66667 6.33333 6.92 6.33333 6C6.33333 5.08 7.08 4.33333 8 4.33333C8.92 4.33333 9.66667 5.08 9.66667 6C9.66667 6.92 8.92 7.66667 8 7.66667Z" fill="black"/>
            </svg>
            <div className="relative w-fit font-times font-bold text-black text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              View on Maps
            </div>
          </button>
        </div>

        {/* Google Maps Embed - Wedding Reception */}
        <div className="w-full md:w-[150px] lg:w-[209px] h-[200px] md:h-[150px] lg:h-[209px] mt-6 md:mt-0 lg:mt-0 relative md:absolute lg:absolute md:top-[40px] lg:top-0 md:left-[320px] lg:left-[434px] mx-auto md:mx-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4658049662083!2d106.82493931476888!3d-6.208763995502154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f436b8c94b07%3A0x6ea6d5398b7c82f6!2sPlaza%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          />
        </div>
      </div>

      {/* Decorative Images - Desktop & iPad */}
      <img
        className="hidden md:block absolute md:top-[180px] lg:top-[243px] md:right-0 lg:left-[970px] md:w-[280px] lg:w-[350px] md:h-[277px] lg:h-[348px] object-cover"
        alt="Decoration 1"
        src="https://c.animaapp.com/8gp6MKWa/img/image-101@2x.png"
      />

      <img
        className="hidden md:block absolute md:top-[480px] lg:top-[627px] md:right-0 lg:left-[205px] md:w-[280px] lg:w-[350px] md:h-[277px] lg:h-[348px] object-cover"
        alt="Decoration 2"
        src="https://c.animaapp.com/8gp6MKWa/img/image-102@2x.png"
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

// Dress Code Section Component
function DressCodeSection() {
  return (
    <section className="relative w-full min-h-[700px] md:min-h-[600px] lg:h-[573px] bg-[#ecedec] px-4 py-12 md:px-8 md:py-16 lg:px-0 lg:py-0">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 p-2.5 mb-8 md:mb-12 lg:absolute lg:top-[94px] lg:left-[529px] lg:w-[382px] lg:h-[75px] lg:p-2.5 lg:mb-0">
        <div className="relative w-fit font-times font-normal text-black text-4xl md:text-5xl lg:text-5xl text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
          Dress Code
        </div>
        <div className="relative w-full lg:w-[382px] font-times font-normal text-black text-xl md:text-2xl lg:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Coqutte Theme
        </div>
      </div>

      {/* Color Boxes Container */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-0 items-center justify-center mb-8 md:mb-12 lg:mb-0">
        {/* Elegant Gold Box */}
        <div className="relative w-full max-w-[280px] md:w-[243px] lg:w-[243.09px] h-[154px] border-2 border-solid border-black lg:absolute lg:top-[234px] lg:left-[468.91px]">
          <div className="flex flex-col w-full h-full items-center justify-center gap-2.5 p-2.5">
            <div className="relative w-[70px] h-[70px] bg-[#d4af37]" />
            <div className="relative w-[159px] font-georgia font-normal text-black text-2xl text-center tracking-[-0.48px] leading-[normal] flex flex-col justify-end">
              Elegant Gold
            </div>
          </div>
          <div className="absolute top-[24px] left-[calc(50%-34.5px)] w-[69px] h-[69px] border-2 border-solid border-black" />
        </div>

        {/* Classic Black Box */}
        <div className="relative w-full max-w-[280px] md:w-[243px] lg:w-[243.09px] h-[154px] border-2 border-solid border-black lg:absolute lg:top-[234px] lg:left-[728px]">
          <div className="flex flex-col w-full h-full items-center justify-center gap-2.5 p-2.5">
            <div className="relative w-[70px] h-[70px] bg-[#12152d]" />
            <div className="relative w-[159px] font-georgia font-normal text-black text-2xl text-center tracking-[-0.48px] leading-[normal] flex flex-col justify-end">
              Classic Black
            </div>
          </div>
          <div className="absolute top-[24px] left-[calc(50%-34.5px)] w-[69px] h-[69px] border-2 border-solid border-black" />
        </div>
      </div>

      {/* Description Text */}
      <p className="relative w-full max-w-[616px] mx-auto font-times font-normal text-black text-lg md:text-xl lg:text-2xl text-center tracking-[-0.48px] leading-[normal] lg:absolute lg:top-[407px] lg:left-[412px] lg:w-[616px]">
        We kindly request our guests to wear Elegant Gold colors and Classic Black
      </p>
    </section>
  );
}

// Our Moments Section Component
function OurMomentsSection() {
  return (
    <section className="relative w-full min-h-[1400px] md:min-h-[1200px] lg:h-[1118px] bg-black px-4 py-12 md:px-8 md:py-16 lg:px-0 lg:py-0">
      {/* Top Decorative Image */}
      <img
        className="absolute top-0 left-0 w-full h-[115px] object-cover"
        alt="Download removebg"
        src="https://c.animaapp.com/Y4gGWDQH/img/download-removebg-preview-1.png"
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[rgba(236,237,236,0.15)] to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col w-full max-w-[669px] h-auto lg:h-28 items-center gap-2.5 p-2.5 mx-auto mb-8 md:mb-12 lg:absolute lg:top-[183px] lg:left-[calc(50%-335px)] lg:mb-0">
        <p className="relative w-full font-times font-normal text-4xl md:text-5xl lg:text-5xl text-center tracking-[-0.96px] leading-[normal]">
          <span className="text-white tracking-[-0.46px]">Our</span>
          <span className="text-[#bb2245] tracking-[-0.46px]">&nbsp;</span>
          <span className="text-white tracking-[-0.46px]">Moments</span>
        </p>
        <p className="relative w-full font-times font-normal text-[#d1d1d1] text-xl md:text-2xl lg:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          A glimpse of our elegant love story
        </p>
      </div>

      {/* Photo Grid - Left Side */}
      <div className="flex flex-wrap w-full max-w-[436px] items-start gap-[13px] mx-auto mb-8 md:mb-12 lg:absolute lg:top-[calc(50%-250px)] lg:left-[150px] lg:mx-0 lg:mb-0">
        <img
          className="w-[calc(50%-6.5px)] md:w-[211px] aspect-square object-cover"
          alt="Rectangle"
          src="https://c.animaapp.com/Y4gGWDQH/img/rectangle-17771.svg"
        />
        <img
          className="w-[calc(50%-6.5px)] md:w-[212px] aspect-square object-cover"
          alt="Rectangle"
          src="https://c.animaapp.com/Y4gGWDQH/img/rectangle-17772.svg"
        />
        <img
          className="w-[calc(50%-6.5px)] md:w-[211px] aspect-square object-cover"
          alt="Rectangle"
          src="https://c.animaapp.com/Y4gGWDQH/img/rectangle-17773.svg"
        />
        <img
          className="w-[calc(50%-6.5px)] md:w-[212px] aspect-square object-cover"
          alt="Rectangle"
          src="https://c.animaapp.com/Y4gGWDQH/img/rectangle-17774.svg"
        />
        <img
          className="w-[calc(50%-6.5px)] md:w-[211px] aspect-square object-cover"
          alt="Rectangle"
          src="https://c.animaapp.com/Y4gGWDQH/img/rectangle-17775.svg"
        />
        <img
          className="w-[calc(50%-6.5px)] md:w-[212px] aspect-square object-cover"
          alt="Rectangle"
          src="https://c.animaapp.com/Y4gGWDQH/img/rectangle-17776.svg"
        />
      </div>

      {/* Share Section - Right Side */}
      <div className="flex flex-col items-center gap-6 md:gap-8 px-4 lg:px-0">
        <div className="w-full max-w-[534px] mx-auto lg:absolute lg:top-[464px] lg:left-[784px] lg:w-auto">
          <div className="font-times font-normal text-white text-3xl md:text-5xl lg:text-[64px] text-center tracking-[-1.28px] leading-[normal] whitespace-nowrap mb-6 md:mb-8 lg:mb-0">
            Share Your Moments
          </div>
        </div>

        <p className="w-full max-w-[534px] mx-auto font-times font-normal text-[#d1d1d1] text-2xl md:text-3xl lg:text-[40px] text-center tracking-[-0.80px] leading-[normal] lg:absolute lg:top-[553px] lg:left-[777px] lg:w-[534px]">
          Tag us in your photos and videos from our special day using
        </p>

        <div className="inline-flex items-center justify-center gap-2.5 p-2.5 lg:absolute lg:top-[727px] lg:left-[803px]">
          <div className="relative w-fit font-[Consolas] font-normal text-white text-2xl md:text-3xl lg:text-[40px] tracking-[-0.80px] leading-[normal] whitespace-nowrap">
            #ElegantWedding2025
          </div>
          <img
            className="relative w-[35px] h-[35px] md:w-[49px] md:h-12 lg:w-[49px] lg:h-12"
            alt="Copy"
            src="https://c.animaapp.com/Y4gGWDQH/img/copy-01.svg"
          />
        </div>
      </div>
    </section>
  );
}

// RSVP Section Component
function RSVPSection() {
  return (
    <section className="relative w-full min-h-[1000px] md:min-h-[900px] lg:h-[600px] bg-gradient-to-b from-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.85)] px-4 py-12 md:px-8 md:py-16 lg:px-0 lg:py-0">

      {/* Header */}
      <div className="relative z-10 flex flex-col w-full max-w-[582px] items-center gap-4 p-2.5 mx-auto mb-8 md:mb-12 lg:mb-16">
        <div className="relative w-fit font-times font-normal text-white text-4xl md:text-5xl lg:text-5xl text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
          RSVP
        </div>
        <p className="relative w-full font-times font-normal text-[#d1d1d1] text-xl md:text-2xl lg:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Please confirm your attendance to our elegant celebration
        </p>
      </div>

      {/* RSVP Form Container */}
      <div className="relative z-10 w-full max-w-[559px] mx-auto border border-solid border-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6 md:p-8 lg:p-0 lg:pt-6 lg:pb-6">
        <div className="relative lg:px-8">
          {/* Nama Lengkap Label */}
          <div className="mb-2">
            <label className="font-times font-normal text-white text-base tracking-[-0.32px] leading-[normal]">
              Nama Lengkap
            </label>
          </div>

          {/* Nama Lengkap Input */}
          <input
            type="text"
            placeholder="Alif & partner"
            className="w-full p-2.5 mb-6 border border-solid border-white bg-transparent text-white font-times text-xl tracking-[-0.40px] leading-[normal] placeholder:text-white h-[38px] focus:outline-none focus:ring-1 focus:ring-white"
          />

          {/* Konfirmasi Kehadiran Label */}
          <div className="mb-2">
            <label className="font-times font-normal text-white text-base tracking-[-0.32px] leading-[normal]">
              Konfirmasi Kehadiran
            </label>
          </div>

          {/* Radio Buttons - Hadir & Tidak Hadir */}
          <div className="flex gap-6 mb-6">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="radio" name="attendance" value="hadir" className="sr-only peer" defaultChecked />
              <div className="w-4 h-4 border-[1.5px] border-white rounded-full relative peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:top-1/2 peer-checked:after:left-1/2 peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:w-2 peer-checked:after:h-2 peer-checked:after:bg-white peer-checked:after:rounded-full"></div>
              <span className="font-times font-normal text-white text-base tracking-[-0.32px] leading-[normal]">
                Hadir
              </span>
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="radio" name="attendance" value="tidak-hadir" className="sr-only peer" />
              <div className="w-4 h-4 border-[1.5px] border-white rounded-full relative peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:top-1/2 peer-checked:after:left-1/2 peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:w-2 peer-checked:after:h-2 peer-checked:after:bg-white peer-checked:after:rounded-full"></div>
              <span className="font-times font-normal text-white text-base tracking-[-0.32px] leading-[normal]">
                Tidak Hadir
              </span>
            </label>
          </div>

          {/* Jumlah Tamu Label */}
          <div className="mb-2">
            <label className="font-times font-normal text-white text-base tracking-[-0.32px] leading-[normal]">
              Jumlah tamu
            </label>
          </div>

          {/* Jumlah Tamu Dropdown */}
          <div className="relative mb-6">
            <select className="w-full px-2.5 py-1.5 border border-solid border-white bg-transparent text-white font-georgia text-base tracking-[-0.32px] leading-[normal] appearance-none h-[38px] focus:outline-none focus:ring-1 focus:ring-white cursor-pointer flex items-center">
              <option value="1" className="bg-black">1 orang</option>
              <option value="2" className="bg-black">2 orang</option>
              <option value="3" className="bg-black">3 orang</option>
              <option value="4" className="bg-black">4 orang</option>
              <option value="5" className="bg-black">5 orang</option>
            </select>
            <svg className="absolute top-1/2 -translate-y-1/2 right-2.5 w-[18px] h-2.5 pointer-events-none" viewBox="0 0 18 10" fill="white">
              <path d="M1 1L9 9L17 1" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          {/* Pesan Label */}
          <div className="mb-2">
            <label className="font-times font-normal text-white text-base tracking-[-0.32px] leading-[normal]">
              Pesan untuk Mempelai (Opsional)
            </label>
          </div>

          {/* Pesan Textarea */}
          <textarea
            placeholder="Tulis Pesan anda..."
            className="w-full p-2.5 mb-6 border border-solid border-white bg-transparent text-white font-times text-xl tracking-[-0.40px] leading-[normal] placeholder:text-white h-[115px] resize-none focus:outline-none focus:ring-1 focus:ring-white"
          />

          {/* Submit Button */}
          <button className="w-full flex items-center justify-center gap-2.5 p-2.5 bg-white hover:bg-gray-100 transition-colors h-[38px]">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M14.6667 1.33337L7.33337 8.66671M14.6667 1.33337L10 14.6667L7.33337 8.66671M14.6667 1.33337L1.33337 6.00004L7.33337 8.66671" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-times font-normal text-black text-base tracking-[-0.32px] leading-[normal]">
              Kirim RSVP
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
