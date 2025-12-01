"use client";

import React, { useState } from "react";

export default function RusticTemplate() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
  };

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <main
      className="w-full min-h-screen relative overflow-x-hidden"
      data-model-id="258:6657"
      role="main"
    >
      {/* Hero Section Background - Only for first 917px */}
      <div className="absolute top-0 left-0 w-full h-[917px]">
        {/* Background Image */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Wedding couple background"
          src="/assets/Rustic/mempelai.png"
        />
        
        {/* Dark Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/30"
          aria-hidden="true"
        />
        
        {/* Bottom Shadow for smooth transition */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#5a4a42]"
          aria-hidden="true"
        />
      </div>

      {/* Scroll Button */}
      <button
        className="absolute left-1/2 -translate-x-1/2 bottom-[9377px] w-[21px] h-9 flex justify-center rounded-[10.5px] border border-solid border-white bg-transparent cursor-pointer hover:bg-white/10 transition-colors z-50"
        onClick={handleScrollDown}
        aria-label="Scroll down to view more content"
      >
        <div className="mt-[7px] w-[3px] h-3.5 bg-white rounded-[505px] border border-solid" />
      </button>

      {/* Header Section */}
      <header className="absolute top-[490px] md:top-[470px] left-1/2 -translate-x-1/2 w-full max-w-[320px] md:max-w-[450px] h-[94px] md:h-[85px] flex justify-center bg-white rounded-[50px] border border-solid border-[#4b3d1a] shadow-[0px_5px_10px_#00000040] px-4 z-10">
        <div className="flex w-full h-full relative flex-col items-center justify-center gap-1.5 md:gap-2.5 p-2.5">
          <h1 className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-xl md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
            Dear Beloved Guest,
          </h1>

          <p className="relative w-full max-w-[280px] md:max-w-[440px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-sm md:text-base text-center tracking-[-0.32px] leading-[normal]">
            We cordially invite you to celebrate our timeless<br className="hidden md:block" /> love story
          </p>
        </div>
      </header>

      {/* Open Invitation Button */}
      <button
        className="all-[unset] box-border w-56 h-[45px] absolute top-[595px] left-1/2 -translate-x-1/2 rounded-[50px] bg-[linear-gradient(90deg,rgba(84,68,60,1)_0%,rgba(255,255,255,1)_100%)] flex items-center justify-center gap-2.5 p-2.5 cursor-pointer hover:opacity-90 transition-opacity z-20"
        onClick={handleOpenInvitation}
        aria-label="Open wedding invitation"
      >
        <span className="relative w-fit [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
          Open Invitation
        </span>
      </button>

      {/* Animated Mouse Scroll Icon */}
      <div className="absolute top-[675px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2" aria-hidden="true">
        <div className="w-[28px] h-[45px] rounded-full border-2 border-white flex items-start justify-center p-2 animate-bounce">
          <div className="w-1.5 h-2.5 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Couple Names */}
      <section
        className="flex flex-col w-full max-w-[382px] h-[187px] items-center justify-center px-2.5 py-0 absolute top-[320px] md:top-[260px] left-1/2 -translate-x-1/2 rounded-[10px] z-10"
        aria-label="Couple names"
      >
        <h2 className="w-fit mt-[-18.50px] [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-4xl md:text-[52px] text-center tracking-[-1.28px] whitespace-nowrap relative leading-[normal]">
          Alexander
        </h2>

        <div
          className="inline-flex items-center justify-center gap-2.5 px-2.5 py-0 relative flex-[0_0_auto]"
          aria-hidden="true"
        >
          <div className="flex flex-col w-[124px] items-start gap-2.5 p-2.5 relative">
            <img
              className="mb-[-3.00px] relative self-stretch w-full h-[3px]"
              alt=""
              src="https://c.animaapp.com/FXVdvFcu/img/line-2.svg"
            />
          </div>

          <div className="w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-4xl md:text-[52px] tracking-[-1.28px] whitespace-nowrap relative text-center leading-[normal]">
            &amp;
          </div>

          <div className="flex flex-col w-[124px] items-start gap-2.5 p-2.5 relative">
            <img
              className="mt-[-3.00px] relative self-stretch w-full h-[3px]"
              alt=""
              src="https://c.animaapp.com/FXVdvFcu/img/line-2-1.svg"
            />
          </div>
        </div>

        <h2 className="w-fit mb-[-16.50px] [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-4xl md:text-[52px] text-center tracking-[-1.28px] whitespace-nowrap relative leading-[normal]">
          Isabella
        </h2>
      </section>

      {/* Quotes Section */}
      <QuotesSection />

      {/* Love Story Section */}
      <LoveStorySection />

      {/* Love Journey Section */}
      <LoveJourneySection />

      {/* Counting Down Section */}
      <CountingDownSection />

      {/* When & Where Section */}
      <WhenWhereSection />
    </main>
  );
}

// Quotes Section Component
function QuotesSection() {
  return (
    <section
      className="absolute top-[917px] left-0 w-full h-auto min-h-[737px] px-4 bg-gradient-to-b from-[#5a4a42] to-[#6b5b53]"
      aria-labelledby="quotes-heading"
    >
      <header className="w-full max-w-[545px] h-auto min-h-[131px] items-center absolute top-[106px] left-1/2 -translate-x-1/2 flex flex-col gap-2.5 p-2.5">
        <h2
          id="quotes-heading"
          className="relative w-full max-w-[368px] mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-3xl md:text-5xl text-center tracking-[-1.28px] leading-[normal]"
        >
          Words of Love
        </h2>

        <p className="relative w-full max-w-[554px] [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-white text-lg md:text-2xl text-center tracking-[-0.64px] leading-[normal]">
          Sacred verses that bless our timeless union
        </p>
      </header>

      <div
        className="inline-flex items-center justify-center gap-4 px-2.5 py-0 absolute top-[280px] md:top-[270px] left-1/2 -translate-x-1/2"
        role="presentation"
        aria-hidden="true"
      >
        <div className="w-32 md:w-48 h-[3px] bg-white"></div>
        <div className="w-32 md:w-48 h-[3px] bg-white"></div>
      </div>

      <article className="absolute top-[376px] left-1/2 -translate-x-1/2 w-full max-w-[744px] h-auto min-h-[221px] flex justify-center bg-white rounded-[10px] border border-solid border-[#4b3d1a] px-4">
        <div className="flex w-full h-auto min-h-[221px] relative flex-col items-center justify-center gap-2.5 px-2.5 py-[30px]">
          <blockquote
            className="w-full max-w-[640px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-black text-2xl md:text-4xl tracking-[-0.72px] [direction:rtl] relative text-center leading-[normal]"
            lang="ar"
          >
            ومن ايته ان خلق لكم من انفسكم ازواجا لتسكنوا اليها وجعل بينكم مودة
            ورحمة ان في ذلك لايت لقوم يتفكرون
          </blockquote>

          <p className="relative w-full max-w-[684px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-black text-sm md:text-base text-center tracking-[-0.32px] leading-[normal]">
            Artinya: &quot;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
            menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri
            agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa
            cinta dan kasih sayang. Sesungguhnya pada yang demikian itu
            benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
            berpikir.&quot;
          </p>

          <cite className="relative w-full max-w-[382px] [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-black text-base text-center tracking-[-0.32px] leading-[normal] not-italic">
            -QS. Ar-Rum: 21
          </cite>
        </div>
      </article>

      <img
        className="absolute top-[252px] md:top-[242px] left-1/2 -translate-x-1/2 w-[184px] h-[85px] aspect-[2.17] object-cover z-10"
        alt=""
        src="https://c.animaapp.com/FXVdvFcu/img/asset-1-1@2x.png"
        role="presentation"
      />
    </section>
  );
}

// Love Story Section Component
function LoveStorySection() {
  const coupleData = [
    {
      name: "Alexander William Thompson",
      parents: "William Thompson & Elizabeth Thompson",
      socialHandle: "@alexanderson",
      socialIcon: "https://c.animaapp.com/FXVdvFcu/img/social-icons.svg",
      imageUrl: "https://c.animaapp.com/FXVdvFcu/img/rectangle-17721.svg",
      decorativeImageUrl:
        "https://c.animaapp.com/FXVdvFcu/img/asset-3-2-1@2x.png",
      frameImageUrl: "https://c.animaapp.com/FXVdvFcu/img/asset-1-2-1.png",
    },
    {
      name: "Isabella Grace Martinez",
      parents: "Roberto Martinez & Sofia Martinez",
      socialHandle: "@princess_bella",
      socialIcon: "https://c.animaapp.com/FXVdvFcu/img/social-icons-1.svg",
      imageUrl: "https://c.animaapp.com/FXVdvFcu/img/rectangle-17722.svg",
      decorativeImageUrl:
        "https://c.animaapp.com/FXVdvFcu/img/asset-3-2-1@2x.png",
      frameImageUrl: "https://c.animaapp.com/FXVdvFcu/img/asset-1-2-1.png",
    },
  ];

  return (
    <section className="absolute top-[1637px] left-0 w-full h-auto min-h-[1600px] md:min-h-[900px] px-4 bg-gradient-to-b from-[#6b5b53] to-[#7a6d64]">
      <header className="w-full max-w-[610px] h-auto min-h-[122px] items-center absolute top-[97px] left-1/2 -translate-x-1/2 flex flex-col gap-2.5 p-2.5">
        <h2 className="w-full relative mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-4xl md:text-[64px] text-center tracking-[-1.28px] leading-[normal]">
          Our Love Story
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Two souls destined to become one
        </p>
      </header>

      <div className="absolute top-[247px] left-1/2 -translate-x-1/2 w-full max-w-[1100px] flex flex-col md:flex-row gap-16 md:gap-16 justify-center items-center px-4 pb-20">
        {coupleData.map((person, index) => (
          <PersonCard key={index} {...person} />
        ))}
      </div>
    </section>
  );
}

// Person Card Component
function PersonCard({
  name,
  parents,
  socialHandle,
  socialIcon,
  imageUrl,
  decorativeImageUrl,
  frameImageUrl,
}: {
  name: string;
  parents: string;
  socialHandle: string;
  socialIcon: string;
  imageUrl: string;
  decorativeImageUrl: string;
  frameImageUrl: string;
}) {
  return (
    <article className="w-full max-w-[380px] h-auto min-h-[600px] bg-white rounded-[10px] relative">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[180px] h-[195px]">
        <img
          className="absolute top-0 left-0 w-[180px] h-[180px] object-cover"
          alt={`Portrait of ${name}`}
          src={imageUrl}
        />
        <img
          className="top-[128px] left-[16px] w-[147px] h-[65px] aspect-[2.27] absolute object-cover"
          alt="Decorative element"
          src={decorativeImageUrl}
        />
      </div>

      <div className="w-full h-auto min-h-[100px] items-center justify-center absolute top-[265px] left-0 flex flex-col gap-2 p-2.5 px-4">
        <h3 className="relative w-full text-center [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-[#544523] text-xl md:text-[28px] tracking-[-0.64px] leading-[normal]">
          {name}
        </h3>

        <p className="relative w-full max-w-[306px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-lg md:text-xl text-center tracking-[-0.48px] leading-[normal]">
          Putra/Putri dari:
        </p>

        <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
          <p className="w-full max-w-[306px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-base md:text-lg text-center tracking-[-0.48px] relative leading-[normal]">
            {parents}
          </p>
        </div>
      </div>

      <a
        href={`https://instagram.com/${socialHandle.replace("@", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="all-[unset] box-border w-[180px] h-[38px] absolute top-[430px] left-1/2 -translate-x-1/2 bg-[#4b3d1a] rounded-[10px] flex items-center justify-center gap-2 p-2 cursor-pointer hover:opacity-90 transition-opacity"
        aria-label={`Visit ${name}'s Instagram profile`}
      >
        <img
          className="relative w-[25px] h-[25px] aspect-[1]"
          alt="Instagram icon"
          src={socialIcon}
        />
        <span className="relative w-fit [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
          {socialHandle}
        </span>
      </a>

      <img
        className="absolute top-[-32px] -left-px w-[380px] h-[665px] aspect-[0.6] object-cover pointer-events-none"
        alt="Decorative frame"
        src={frameImageUrl}
      />
    </article>
  );
}

// Love Journey Section Component
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

function LoveJourneySection() {
  const timelineEvents: TimelineEvent[] = [
    {
      year: "2020",
      title: "Once Upon a Time",
      description:
        "We first met at a magical coffee shop where Alex accidentally spilled coffee on Isabella's fairy tale book. Love at first sight (and spill)! ☕💕",
    },
    {
      year: "2021",
      title: "The First Date",
      description:
        "Our first official date was a romantic picnic under the stars. Alex brought his guitar and serenaded Isabella with her favorite song. 🌟🎵",
    },
    {
      year: "2023",
      title: "The Proposal",
      description:
        "Alex proposed in a beautiful garden filled with pink roses, getting down on one knee with a crown-shaped ring box. She said yes! 👑💍",
    },
  ];

  return (
    <section className="absolute top-[3237px] md:top-[2537px] left-0 w-full h-auto min-h-[908px] px-4 pb-20 bg-gradient-to-b from-[#7a6d64] to-[#9a9189]">
      <header className="w-full max-w-[563px] h-auto min-h-[132px] items-center absolute top-[35px] left-1/2 -translate-x-1/2 flex flex-col gap-2.5 p-2.5">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-4xl md:text-[64px] text-center tracking-[-1.28px] leading-[normal]">
          Our Love Journey
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Every love story is beautiful, but ours is timeless
        </p>
      </header>

      <div className="absolute w-full max-w-[644px] h-auto top-[241px] left-1/2 -translate-x-1/2 flex flex-col gap-4 px-4 md:px-4 pl-12">
        {timelineEvents.map((event, index) => (
          <article
            key={event.year}
            className="h-auto min-h-[198px] flex flex-col gap-1 bg-white rounded-[10px] border-2 border-solid border-[#544523] shadow-[0px_4px_4px_#00000040] p-4 relative"
          >
            <div className="flex w-[87px] h-7 items-center justify-center gap-2.5 p-2.5 bg-[#fae5e6] rounded-[50px]">
              <time className="relative w-fit [font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-xl text-center tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                {event.year}
              </time>
            </div>

            <div className="flex flex-col gap-2.5 p-2.5">
              <h3 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-xl tracking-[-0.40px] leading-[normal]">
                {event.title}
              </h3>

              <p className="relative [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-base md:text-xl tracking-[-0.40px] leading-[normal]">
                {event.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Timeline line for mobile */}
      <div className="absolute top-[260px] left-[20px] w-[6px] h-[626px] bg-gradient-to-b from-[#544523] to-[#FFFFFF] md:hidden rounded-full z-0"></div>
      
      {/* Circle markers for mobile timeline - warna mengikuti gradient */}
      <div className="absolute top-[255px] left-[13px] w-6 h-6 rounded-full md:hidden z-10 bg-[#544523]"></div>
      <div className="absolute top-[471px] left-[13px] w-6 h-6 rounded-full md:hidden z-10 bg-[#8a7a6e]"></div>
      <div className="absolute top-[687px] left-[13px] w-6 h-6 rounded-full md:hidden z-10 bg-[#FFFFFF] border-2 border-[#cccccc]"></div>
      
      {/* Timeline line for desktop */}
      <img
        className="hidden md:block absolute top-[260px] left-[calc(50%-384px)] w-[39px] h-[466px] object-cover"
        alt="Timeline connector line"
        src="https://c.animaapp.com/s0gYTAvl/img/group-208@2x.png"
      />
    </section>
  );
}

// Counting Down Section Component
function CountingDownSection() {
  return (
    <section className="absolute top-[4145px] md:top-[3445px] left-0 w-full h-auto bg-[#9a9189] px-4 py-12 md:py-20">
      {/* Header */}
      <div className="flex flex-col w-full max-w-[840px] mx-auto items-center gap-2.5 p-2.5">
        <h2 className="relative self-stretch [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-3xl md:text-5xl text-center tracking-[-0.96px] leading-[normal]">
          Counting Down to Our Reception
        </h2>

        <p className="relative w-full max-w-[530px] [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Until our hearts become one...
        </p>
      </div>

      {/* Countdown Timer - Container dengan relative positioning */}
      <div className="relative w-full max-w-[735px] mx-auto mt-8 md:mt-12 px-4">
        {/* Countdown Boxes */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-[33px]">
          {/* Days */}
          <div className="w-[calc(50%-8px)] md:w-[159px] md:flex-shrink-0 flex justify-center rounded-[10px] border border-solid border-white">
            <div className="flex w-full h-[120px] md:h-[155px] relative flex-col items-center justify-center gap-2.5 p-2.5 rounded-[10px]">
              <div className="relative w-full font-[Consolas] font-normal text-white text-3xl md:text-[40px] text-center tracking-[-0.80px] leading-[normal]">
                00
              </div>
              <div className="relative flex items-end justify-center w-full font-[Consolas] font-normal text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
                DAYS
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="w-[calc(50%-8px)] md:w-[159px] md:flex-shrink-0 flex justify-center rounded-[10px] border border-solid border-white">
            <div className="flex w-full h-[120px] md:h-[155px] relative flex-col items-center justify-center gap-2.5 p-2.5 rounded-[10px]">
              <div className="relative w-full font-[Consolas] font-normal text-white text-3xl md:text-[40px] text-center tracking-[-0.80px] leading-[normal]">
                00
              </div>
              <div className="relative flex items-end justify-center w-full font-[Consolas] font-normal text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
                HOURS
              </div>
            </div>
          </div>

          {/* Minutes */}
          <div className="w-[calc(50%-8px)] md:w-[159px] md:flex-shrink-0 flex justify-center rounded-[10px] border border-solid border-white">
            <div className="flex w-full h-[120px] md:h-[155px] relative flex-col items-center justify-center gap-2.5 p-2.5 rounded-[10px]">
              <div className="relative w-full font-[Consolas] font-normal text-white text-3xl md:text-[40px] text-center tracking-[-0.80px] leading-[normal]">
                00
              </div>
              <div className="relative flex items-end justify-center w-full font-[Consolas] font-normal text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
                MINUTES
              </div>
            </div>
          </div>

          {/* Seconds */}
          <div className="w-[calc(50%-8px)] md:w-[159px] md:flex-shrink-0 flex justify-center rounded-[10px] border border-solid border-white">
            <div className="flex w-full h-[120px] md:h-[155px] relative flex-col items-center justify-center gap-2.5 p-2.5 rounded-[10px]">
              <div className="relative w-full font-[Consolas] font-normal text-white text-3xl md:text-[40px] text-center tracking-[-0.80px] leading-[normal]">
                00
              </div>
              <div className="relative flex items-end justify-center w-full font-[Consolas] font-normal text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
                SECONDS
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Image - Mobile: antara Minutes & Seconds, Desktop: antara Hours & Minutes */}
        <img
          className="absolute w-[200px] md:w-[253px] h-auto aspect-[2.27] object-cover
                     bottom-[-80px] left-1/2 -translate-x-1/2
                     md:bottom-auto md:top-[145px] md:left-[calc(50%+0px)] md:-translate-x-1/2"
          alt="Decorative element"
          src="https://c.animaapp.com/b2OYFLVw/img/asset-3-3@2x.png"
        />
      </div>

      {/* Spacing untuk gambar di mobile */}
      <div className="h-[100px] md:h-0"></div>
    </section>
  );
}

// When & Where Section Component
function WhenWhereSection() {
  return (
    <section className="absolute top-[4741px] md:top-[3900px] left-0 w-full h-auto min-h-[1024px] px-4 py-12 md:py-20 bg-gradient-to-b from-[#9a9189] to-[#b8ada3] md:-z-10">
      {/* Header */}
      <div className="flex flex-col w-full max-w-[382px] mx-auto items-center gap-2.5 p-2.5 mb-8">
        <h2 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-4xl md:text-5xl text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
          When &amp; Where
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Join us in celebrating our timeless love
        </p>
      </div>

      {/* Cards Container */}
      {/* testing */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center md:items-start px-4">
        {/* Holy Matrimony Card */}
        <article className="w-full max-w-[382px] h-auto min-h-[654px] bg-white rounded-[10px] border border-solid border-[#544523] shadow-[0px_4px_5px_#00000040] flex flex-col items-center gap-1.5 relative">
          {/* Event Info */}
          <div className="flex flex-col w-full items-center gap-2.5 p-2.5 pt-6">
            <h3 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-[28px] md:text-[32px] text-center tracking-[-0.64px] leading-[normal]">
              Holy Matrimony
            </h3>

            <div className="relative w-[94px] h-[3px] bg-[#9a8960] rounded-[50px]" />

            <div className="flex flex-col w-full max-w-[325px] items-start justify-center gap-3 mt-4 px-6">
              <div className="inline-flex items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
                  Saturday, March 15, 2025
                </span>
              </div>

              <div className="inline-flex items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#544523" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="#544523" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
                  08:00 AM
                </span>
              </div>

              <div className="inline-flex items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#544523" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="#544523" strokeWidth="2"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
                  Masjid Al-Barokah
                </span>
              </div>
            </div>

            <div className="flex w-full max-w-[324px] items-center px-6 mt-2">
              <p className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#9a8960] text-sm md:text-base tracking-[-0.32px] leading-[normal]">
                Jl. Kebahagiaan No. 123, Jakarta Selatan
              </p>
            </div>
          </div>

          {/* Add to Calendar Button */}
          <button className="flex w-full max-w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 bg-[#9a8960] rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity mt-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="[font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              Add to Calendar
            </span>
          </button>

          {/* Map Image */}
          <img
            className="w-full max-w-[312px] h-[312px] object-cover mt-4"
            alt="Location map"
            src="https://c.animaapp.com/XxJL2ZLV/img/rectangle-17711-1@2x.png"
          />

          {/* View on Maps Button */}
          <button className="flex w-full max-w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 bg-white rounded-[10px] border border-solid border-[#544523] cursor-pointer hover:bg-gray-50 transition-colors mt-4 mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#9a8960" strokeWidth="2"/>
              <circle cx="12" cy="10" r="3" stroke="#9a8960" strokeWidth="2"/>
            </svg>
            <span className="[font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-[#9a8960] text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              View on Maps
            </span>
          </button>
        </article>

        {/* Wedding Reception Card */}
        <article className="w-full max-w-[382px] h-auto min-h-[654px] bg-white rounded-[10px] border border-solid border-[#544523] shadow-[0px_4px_5px_#00000040] flex flex-col items-center gap-1.5 relative">
          {/* Event Info */}
          <div className="flex flex-col w-full items-center gap-2.5 p-2.5 pt-6">
            <h3 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-[28px] md:text-[32px] text-center tracking-[-0.64px] leading-[normal]">
              Wedding Reception
            </h3>

            <div className="relative w-[94px] h-[3px] bg-[#9a8960] rounded-[50px]" />

            <div className="flex flex-col w-full max-w-[325px] items-start justify-center gap-3 mt-4 px-6">
              <div className="inline-flex items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
                  Saturday, March 15, 2025
                </span>
              </div>

              <div className="inline-flex items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#544523" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="#544523" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
                  07:00 PM
                </span>
              </div>

              <div className="inline-flex items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#544523" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="#544523" strokeWidth="2"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
                  The Royal Ballroom
                </span>
              </div>
            </div>

            <div className="flex w-full max-w-[324px] items-center px-6 mt-2">
              <p className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#9a8960] text-sm md:text-base tracking-[-0.32px] leading-[normal]">
                Jl. Cinta Sejati No. 456, Jakarta Selatan
              </p>
            </div>
          </div>

          {/* Add to Calendar Button */}
          <button className="flex w-full max-w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 bg-[#9a8960] rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity mt-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="[font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              Add to Calendar
            </span>
          </button>

          {/* Map Image */}
          <img
            className="w-full max-w-[312px] h-[312px] object-cover mt-4"
            alt="Location map"
            src="https://c.animaapp.com/XxJL2ZLV/img/rectangle-17711-1@2x.png"
          />

          {/* View on Maps Button */}
          <button className="flex w-full max-w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 bg-white rounded-[10px] border border-solid border-[#544523] cursor-pointer hover:bg-gray-50 transition-colors mt-4 mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#9a8960" strokeWidth="2"/>
              <circle cx="12" cy="10" r="3" stroke="#9a8960" strokeWidth="2"/>
            </svg>
            <span className="[font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-[#9a8960] text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              View on Maps
            </span>
          </button>
        </article>
      </div>
    </section>
  );
}
