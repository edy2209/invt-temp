"use client";

import React, { useState } from "react";

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
  const coupleData = [
    {
      name: "Alexander William Thompson",
      parentLabel: "Putra dari:",
      parents: "William Thompson & Elizabeth Thompson",
      instagram: "@alexanderson",
      instagramIcon: "https://c.animaapp.com/oq9FutZO/img/social-icons.svg",
      image: "https://c.animaapp.com/oq9FutZO/img/rectangle-17721@2x.png",
      imageAlt: "Alexander William Thompson",
    },
    {
      name: "Isabella Grace Martinez",
      parentLabel: "Putri dari:",
      parents: "Roberto Martinez & Sofia Martinez",
      instagram: "@princess_bella",
      instagramIcon: "https://c.animaapp.com/oq9FutZO/img/social-icons-1.svg",
      image: "https://c.animaapp.com/oq9FutZO/img/rectangle-17720@2x.png",
      imageAlt: "Isabella Grace Martinez",
    },
  ];

  return (
    <section className="relative w-full min-h-[900px] py-16 px-4 md:px-8 bg-white overflow-hidden">
      {/* Header */}
      <header className="flex flex-col w-full max-w-[610px] mx-auto items-center gap-2.5 mb-12 md:mb-16">
        <h1 className="font-times font-normal text-black text-4xl md:text-5xl lg:text-[64px] text-center tracking-[-0.80px] md:tracking-[-1.28px] leading-[normal]">
          Our Love Story
        </h1>
        <p className="font-times italic text-[#838383] text-lg md:text-xl lg:text-2xl text-center tracking-[-0.40px] md:tracking-[-0.48px] leading-[normal]">
          Two souls destined to become one
        </p>
      </header>

      {/* Couple Profiles Container */}
      <div className="relative w-full max-w-[1258px] mx-auto">
        {/* First Person - Groom (Photo Left, Text Right on Desktop) */}
        <article className="relative mb-12 md:mb-20">
          {/* Golden Background Gradient - Desktop */}
          <div
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-[245px] rounded-[20px] bg-[linear-gradient(90deg,rgba(213,182,88,1)_0%,rgba(255,255,255,0)_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
            {/* Photo */}
            <div className="w-[280px] h-[280px] md:w-[300px] md:h-[300px] lg:w-[325px] lg:h-[325px] flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded-lg lg:rounded-none"
                alt={coupleData[0].imageAlt}
                src={coupleData[0].image}
              />
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col items-center justify-center gap-3 lg:gap-2 lg:mt-[111px] max-w-[547px]">
              <h2 className="font-times italic text-black text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.48px] md:tracking-[-0.72px] leading-[normal]">
                {coupleData[0].name}
              </h2>

              <p className="font-times font-normal text-black text-xl md:text-2xl lg:text-[32px] text-center tracking-[-0.40px] md:tracking-[-0.64px] leading-[normal]">
                {coupleData[0].parentLabel}
              </p>

              <p className="font-times font-normal text-black text-xl md:text-2xl lg:text-[32px] text-center tracking-[-0.40px] md:tracking-[-0.64px] leading-[normal]">
                {coupleData[0].parents}
              </p>

              {/* Instagram Button */}
              <a
                href={`https://instagram.com/${coupleData[0].instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2.5 px-6 py-2.5 bg-white rounded-[10px] border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label={`Visit ${coupleData[0].name}'s Instagram profile`}
              >
                <img
                  className="w-[25px] h-[25px]"
                  alt="Instagram icon"
                  src={coupleData[0].instagramIcon}
                />
                <span className="font-times font-bold text-black text-base tracking-[-0.32px] leading-[normal]">
                  {coupleData[0].instagram}
                </span>
              </a>
            </div>
          </div>
        </article>

        {/* Second Person - Bride (Photo Right, Text Left on Desktop) */}
        <article className="relative">
          {/* Golden Background Gradient - Desktop (Rotated) */}
          <div
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-[245px] rounded-[20px] rotate-180 bg-[linear-gradient(90deg,rgba(213,182,88,1)_0%,rgba(255,255,255,0)_100%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6 lg:gap-8">
            {/* Photo */}
            <div className="w-[280px] h-[280px] md:w-[300px] md:h-[300px] lg:w-[325px] lg:h-[325px] flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded-lg lg:rounded-none"
                alt={coupleData[1].imageAlt}
                src={coupleData[1].image}
              />
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col items-center justify-center gap-3 lg:gap-2 lg:mt-[116px] max-w-[547px]">
              <h2 className="font-times italic text-black text-2xl md:text-3xl lg:text-4xl text-center tracking-[-0.48px] md:tracking-[-0.72px] leading-[normal]">
                {coupleData[1].name}
              </h2>

              <p className="font-times font-normal text-black text-xl md:text-2xl lg:text-[32px] text-center tracking-[-0.40px] md:tracking-[-0.64px] leading-[normal]">
                {coupleData[1].parentLabel}
              </p>

              <p className="font-times font-normal text-black text-xl md:text-2xl lg:text-[32px] text-center tracking-[-0.40px] md:tracking-[-0.64px] leading-[normal]">
                {coupleData[1].parents}
              </p>

              {/* Instagram Button */}
              <a
                href={`https://instagram.com/${coupleData[1].instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2.5 px-6 py-2.5 bg-white rounded-[10px] border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-label={`Visit ${coupleData[1].name}'s Instagram profile`}
              >
                <img
                  className="w-[25px] h-[25px]"
                  alt="Instagram icon"
                  src={coupleData[1].instagramIcon}
                />
                <span className="font-times font-bold text-black text-base tracking-[-0.32px] leading-[normal]">
                  {coupleData[1].instagram}
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
