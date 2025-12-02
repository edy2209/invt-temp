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
      className="w-full min-h-screen relative overflow-x-hidden bg-[#c9bfb5]"
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

      {/* Dress Code Section */}
      <DressCodeSection />

      {/* Our Moments Section */}
      <OurMomentsSection />

      {/* RSVP Section */}
      <RsvpSection />

      {/* Wedding Wishes Section */}
      <WeddingWishesSection />

      {/* Wedding Gift Section */}
      <WeddingGiftSection />

      {/* Guest Check-in QR Code Section */}
      <GuestCheckinSection />

      {/* Thank You Section */}
      <ThankYouSection />
    </main>
  );
}

// Quotes Section Component
function QuotesSection() {
  return (
    <section
      className="relative w-full h-auto min-h-[737px] px-4 py-8 md:py-16 bg-gradient-to-b from-[#5a4a42] to-[#6b5b53] mt-[917px] z-50"
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
    <section className="relative w-full h-auto min-h-[1600px] md:min-h-[900px] px-4 py-8 md:py-24 bg-gradient-to-b from-[#6b5b53] to-[#7a6d64] -mt-8 md:-mt-16 z-40">
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
    <section className="relative w-full h-auto min-h-[908px] px-4 py-8 md:py-24 pb-20 bg-gradient-to-b from-[#7a6d64] to-[#9a9189] -mt-8 md:-mt-4 z-30">
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
    <section className="relative w-full h-auto bg-[#9a9189] px-4 py-12 md:py-32 -mt-8 md:-mt-16 z-20">
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
    <section className="relative w-full h-auto min-h-[1024px] px-4 py-12 md:py-32 bg-gradient-to-b from-[#9a9189] to-[#b8ada3] -mt-8 md:-mt-16 z-10">
      {/* Header */}
      <div className="flex flex-col w-full max-w-[382px] mx-auto items-center gap-2.5 p-2.5 mb-8">
        <h2 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-4xl md:text-5xl text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
          When &amp; Where
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal] md:whitespace-nowrap">
          Join us in celebrating our timeless love
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 md:gap-8 justify-center items-center md:items-stretch px-2 md:px-4">
        {/* Holy Matrimony Card */}
        <article className="w-full max-w-[380px] md:w-[380px] bg-white rounded-[10px] border border-solid border-[#544523] shadow-[0px_4px_5px_#00000040] flex flex-col items-center pb-4 mx-4 md:mx-0">
          {/* Event Info */}
          <div className="flex flex-col w-full items-center gap-2.5 p-4 pt-6">
            <h3 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-[28px] md:text-[32px] text-center tracking-[-0.64px] leading-[normal]">
              Holy Matrimony
            </h3>

            <div className="relative w-[94px] h-[3px] bg-[#9a8960] rounded-[50px]" />

            <div className="flex flex-col w-full items-start justify-center gap-3 mt-4 px-2">
              <div className="inline-flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-sm md:text-base tracking-[-0.32px] leading-[normal]">
                  Saturday, March 15, 2025
                </span>
              </div>

              <div className="inline-flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" stroke="#544523" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="#544523" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-sm md:text-base tracking-[-0.32px] leading-[normal]">
                  08:00 AM
                </span>
              </div>

              <div className="inline-flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#544523" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="#544523" strokeWidth="2"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-sm md:text-base tracking-[-0.32px] leading-[normal]">
                  Masjid Al-Barokah
                </span>
              </div>
            </div>

            <div className="flex w-full items-center px-2 mt-2">
              <p className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#9a8960] text-xs md:text-sm tracking-[-0.32px] leading-[normal]">
                Jl. Kebahagiaan No. 123, Jakarta Selatan
              </p>
            </div>
          </div>

          {/* Add to Calendar Button */}
          <button className="flex w-[calc(100%-32px)] max-w-[313px] h-[35px] items-center justify-center gap-2.5 p-2.5 bg-[#9a8960] rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="[font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-sm md:text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              Add to Calendar
            </span>
          </button>

          {/* Google Maps Embed */}
          <div className="w-[calc(100%-32px)] max-w-[312px] h-[250px] rounded-lg overflow-hidden mb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1753924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* View on Maps Button */}
          <a 
            href="https://maps.google.com/?q=-6.1753924,106.8195613"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[calc(100%-32px)] max-w-[313px] h-[35px] items-center justify-center gap-2.5 p-2.5 bg-white rounded-[10px] border border-solid border-[#544523] cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#9a8960" strokeWidth="2"/>
              <circle cx="12" cy="10" r="3" stroke="#9a8960" strokeWidth="2"/>
            </svg>
            <span className="[font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-[#9a8960] text-sm md:text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              View on Maps
            </span>
          </a>
        </article>

        {/* Wedding Reception Card */}
        <article className="w-full max-w-[380px] md:w-[380px] bg-white rounded-[10px] border border-solid border-[#544523] shadow-[0px_4px_5px_#00000040] flex flex-col items-center pb-4 mx-4 md:mx-0">
          {/* Event Info */}
          <div className="flex flex-col w-full items-center gap-2.5 p-4 pt-6">
            <h3 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-[28px] md:text-[32px] text-center tracking-[-0.64px] leading-[normal]">
              Wedding Reception
            </h3>

            <div className="relative w-[94px] h-[3px] bg-[#9a8960] rounded-[50px]" />

            <div className="flex flex-col w-full items-start justify-center gap-3 mt-4 px-2">
              <div className="inline-flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-sm md:text-base tracking-[-0.32px] leading-[normal]">
                  Saturday, March 15, 2025
                </span>
              </div>

              <div className="inline-flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="9" stroke="#544523" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="#544523" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-sm md:text-base tracking-[-0.32px] leading-[normal]">
                  07:00 PM
                </span>
              </div>

              <div className="inline-flex items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#544523" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="#544523" strokeWidth="2"/>
                </svg>
                <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-sm md:text-base tracking-[-0.32px] leading-[normal]">
                  The Royal Ballroom
                </span>
              </div>
            </div>

            <div className="flex w-full items-center px-2 mt-2">
              <p className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#9a8960] text-xs md:text-sm tracking-[-0.32px] leading-[normal]">
                Jl. Cinta Sejati No. 456, Jakarta Selatan
              </p>
            </div>
          </div>

          {/* Add to Calendar Button */}
          <button className="flex w-[calc(100%-32px)] max-w-[313px] h-[35px] items-center justify-center gap-2.5 p-2.5 bg-[#9a8960] rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="[font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-sm md:text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              Add to Calendar
            </span>
          </button>

          {/* Google Maps Embed */}
          <div className="w-[calc(100%-32px)] max-w-[312px] h-[250px] rounded-lg overflow-hidden mb-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666453933747!2d106.8229637!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e9e51e7b6f%3A0x4a2b7a5b1e5a9e5c!2sGrand%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* View on Maps Button */}
          <a 
            href="https://maps.google.com/?q=-6.2087634,106.8229637"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[calc(100%-32px)] max-w-[313px] h-[35px] items-center justify-center gap-2.5 p-2.5 bg-white rounded-[10px] border border-solid border-[#544523] cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#9a8960" strokeWidth="2"/>
              <circle cx="12" cy="10" r="3" stroke="#9a8960" strokeWidth="2"/>
            </svg>
            <span className="[font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-[#9a8960] text-sm md:text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              View on Maps
            </span>
          </a>
        </article>
      </div>
    </section>
  );
}

// Our Moments Section Component
function OurMomentsSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyHashtag = () => {
    navigator.clipboard.writeText("#ClassicWedding2025");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full h-auto min-h-[900px] px-4 py-8 md:py-20 pb-6 md:pb-20 bg-[#c9bfb5] -mt-4 md:-mt-12 z-0">
      {/* Header */}
      <div className="w-full max-w-[669px] mx-auto flex flex-col items-center gap-2.5 p-2.5 mb-8 md:mb-12">
        <h2 className="relative w-full [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-3xl md:text-5xl text-center tracking-[-0.96px] leading-[normal]">
          Our Moments
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-[#9a8960] text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          A glimpse of our timeless love story
        </p>
      </div>

      {/* Main Photo */}
      <div className="w-full max-w-[489px] mx-auto h-[250px] md:h-[298px] bg-gray-300 rounded-[10px] overflow-hidden mb-8 md:mb-12">
        <img
          className="w-full h-full object-cover"
          alt="Wedding moment"
          src="https://c.animaapp.com/DW6TwMy8/img/rectangle-18.svg"
        />
      </div>

      {/* Photo Gallery Carousel */}
      <div className="w-full max-w-[712px] mx-auto h-[126px] mb-8 md:mb-12 overflow-x-auto overflow-y-hidden">
        <div className="flex items-center gap-2 md:gap-[9px] min-w-max px-4 md:px-0">
          <img
            className="w-[138px] h-28 object-cover rounded-[5px]"
            alt="Wedding gallery photo 1"
            src="https://c.animaapp.com/DW6TwMy8/img/rectangle-19.svg"
          />
          <img
            className="w-[170px] h-[126px] object-cover rounded-[5px]"
            alt="Wedding gallery photo 2"
            src="https://c.animaapp.com/DW6TwMy8/img/rectangle-20.svg"
          />
          <img
            className="w-[138px] h-28 object-cover rounded-[5px]"
            alt="Wedding gallery photo 3"
            src="https://c.animaapp.com/DW6TwMy8/img/rectangle-21.svg"
          />
          <img
            className="w-[138px] h-28 object-cover rounded-[5px]"
            alt="Wedding gallery photo 4"
            src="https://c.animaapp.com/DW6TwMy8/img/rectangle-22.svg"
          />
          <img
            className="w-[138px] h-28 object-cover rounded-[5px]"
            alt="Wedding gallery photo 5"
            src="https://c.animaapp.com/DW6TwMy8/img/rectangle-23.svg"
          />
        </div>
      </div>

      {/* Share Your Moments Card */}
      <div className="w-full max-w-[552px] mx-auto bg-[#e6d7c4] rounded-[10px] border border-solid border-[#cfbb9a] p-6 md:p-8">
        <div className="flex flex-col items-center gap-4 md:gap-[17px]">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-2.5 p-2.5">
            <h3 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-2xl md:text-[32px] text-center tracking-[-0.64px] leading-[normal] whitespace-nowrap">
              Share Your Moments
            </h3>

            <p className="relative w-full max-w-[260px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-sm md:text-base text-center tracking-[-0.32px] leading-[normal]">
              Tag us in your photos and videos from our special day using
            </p>
          </div>

          {/* Hashtag Copy Button */}
          <button
            onClick={handleCopyHashtag}
            className="flex w-full max-w-[323.69px] h-[50px] items-center justify-center gap-2.5 p-2.5 bg-white rounded-[10px] border border-solid border-[#cfbb9a] cursor-pointer hover:bg-gray-50 transition-colors"
            aria-label="Copy wedding hashtag"
          >
            <span className="relative w-fit [font-family:'Consolas-Regular',Helvetica] font-normal text-[#544523] text-sm md:text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              {copied ? "Copied! ✓" : "#ClassicWedding2025"}
            </span>

            {!copied && (
              <svg
                className="relative w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z"
                  fill="#544523"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Decorative Images - Responsive on all screen sizes */}
      <img
        className="absolute bottom-0 md:bottom-0 left-0 w-[280px] h-[206px] md:w-[558px] md:h-[412px] aspect-[1.4] object-cover pointer-events-none opacity-70 md:opacity-80"
        alt="Decorative element"
        src="https://c.animaapp.com/DW6TwMy8/img/asset-2-17.png"
      />

      <img
        className="absolute top-0 right-0 w-[267px] h-[268px] md:w-[534px] md:h-[536px] aspect-[1.14] object-cover pointer-events-none opacity-70 md:opacity-80"
        alt="Decorative element"
        src="https://c.animaapp.com/DW6TwMy8/img/asset-1-12.png"
      />
    </section>
  );
}

// RSVP Section Component
function RsvpSection() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    guests: "1",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("RSVP submitted:", formData);
  };

  return (
    <section className="relative w-full h-auto min-h-[739px] px-4 py-8 md:py-12 bg-gradient-to-b from-[#c9bfb5] to-[#d4cbc1] -mt-4 md:-mt-12 z-0">
      {/* Header */}
      <div className="w-full max-w-[598px] mx-auto flex flex-col items-center gap-2.5 p-2.5 mb-8">
        <h2 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-4xl md:text-5xl text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
          RSVP
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-[#9a8960] text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Please confirm your attendance to our classic celebration
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-[559px] mx-auto bg-white rounded-[10px] border border-solid border-[#9a8960] shadow-[0px_4px_4px_#00000040] p-6 md:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Nama Lengkap */}
          <div className="flex flex-col gap-2">
            <label className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Alif & partner"
              className="w-full h-[38px] px-2.5 bg-[#f5ede4] rounded-[5px] border border-solid border-[#9a8960] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl tracking-[-0.40px] placeholder:text-[#9a8960]"
            />
          </div>

          {/* Konfirmasi Kehadiran */}
          <div className="flex flex-col gap-2">
            <label className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
              Konfirmasi Kehadiran
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="hadir"
                  checked={formData.attendance === "hadir"}
                  onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                  className="w-5 h-5 accent-[#544523]"
                />
                <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px]">
                  Hadir
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="tidak-hadir"
                  checked={formData.attendance === "tidak-hadir"}
                  onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                  className="w-5 h-5 accent-[#544523]"
                />
                <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px]">
                  Tidak Hadir
                </span>
              </label>
            </div>
          </div>

          {/* Jumlah Tamu */}
          <div className="flex flex-col gap-2">
            <label className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
              Jumlah tamu
            </label>
            <div className="relative">
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full h-[38px] px-2.5 bg-[#f5ede4] rounded-[5px] border border-solid border-[#9a8960] [font-family:'Georgia-Regular',Helvetica] font-normal text-[#9a8960] text-xl tracking-[-0.40px] appearance-none cursor-pointer"
              >
                <option value="1">1 orang</option>
                <option value="2">2 orang</option>
                <option value="3">3 orang</option>
                <option value="4">4 orang</option>
                <option value="5">5 orang</option>
              </select>
              <svg
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[18px] h-2.5 pointer-events-none"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L9 9L17 1" stroke="#9a8960" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Pesan untuk Mempelai */}
          <div className="flex flex-col gap-2">
            <label className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
              Pesan untuk Mempelai (Opsional)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tulis Pesan anda..."
              rows={4}
              className="w-full px-2.5 py-2.5 bg-[#f5ede4] rounded-[5px] border border-solid border-[#9a8960] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl tracking-[-0.40px] placeholder:text-[#9a8960] resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[38px] flex items-center justify-center gap-2.5 px-2.5 bg-[#544523] rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              Kirim RSVP
            </span>
          </button>
        </form>
      </div>

      {/* Decorative Images */}
      <img
        className="absolute top-0 left-0 w-[280px] h-[38px] md:w-[558px] md:h-[75px] aspect-[1.4] object-cover pointer-events-none opacity-70 md:opacity-80"
        alt="Decorative element"
        src="https://c.animaapp.com/VSJerYud/img/asset-2-17.png"
      />

      <img
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[220px] h-[380px] md:top-0 md:translate-y-0 md:w-[385px] md:h-[670px] aspect-[0.58] object-cover pointer-events-none opacity-70 md:opacity-80"
        alt="Decorative element"
        src="https://c.animaapp.com/VSJerYud/img/asset-3-8.png"
      />
    </section>
  );
}

// Wedding Wishes Section Component
function WeddingWishesSection() {
  const [wishForm, setWishForm] = useState({
    name: "",
    message: ""
  });

  const handleWishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Wish submitted:", wishForm);
  };

  const wishes = [
    {
      name: "Sarah & David",
      message: "Selamat atas pernikahan kalian! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu! 💕",
      time: "2 hari yang lalu"
    },
    {
      name: "Maya",
      message: "Finally! Kalian memang couple goals banget. Semoga langgeng sampai kakek nenek ya! 👰🤵",
      time: "1 hari yang lalu"
    },
    {
      name: "Ahmad & Sari",
      message: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. Selamat menempuh hidup baru! 🤲",
      time: "8 jam yang lalu"
    }
  ];

  return (
    <section className="relative w-full h-auto min-h-[801px] px-4 py-8 md:py-12 bg-gradient-to-b from-[#d4cbc1] to-[#e8e4df] -mt-4 md:-mt-12 z-0">
      {/* Header */}
      <div className="w-full max-w-[866px] mx-auto flex flex-col items-center gap-2.5 p-2.5 mb-8 md:mb-12">
        <h2 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-4xl md:text-5xl text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
          Wedding Wishes
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-[#9a8960] text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Send your love and best wishes for our classic celebration
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="w-full max-w-[888px] mx-auto flex flex-col md:flex-row gap-8 md:gap-[120px] justify-center">
        {/* Left Column - Send Wish Form */}
        <div className="w-full max-w-[385px] mx-auto md:mx-0 bg-white rounded-[10px] border border-solid border-[#9a8960] shadow-[0px_4px_4px_#00000040] p-6 md:p-7 h-fit">
          <form onSubmit={handleWishSubmit} className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7564 5.72718 21.351 5.12084 20.84 4.61Z" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
                Kirim Ucapan
              </span>
            </div>

            {/* Name Input */}
            <input
              type="text"
              value={wishForm.name}
              onChange={(e) => setWishForm({ ...wishForm, name: e.target.value })}
              placeholder="Alif & partner"
              className="w-full h-11 px-2.5 bg-[#f5eee5] rounded-[5px] border border-solid border-[#9a8960] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl tracking-[-0.40px] placeholder:text-[#9a8960]"
            />

            {/* Message Textarea */}
            <textarea
              value={wishForm.message}
              onChange={(e) => setWishForm({ ...wishForm, message: e.target.value })}
              placeholder="Tulis ucapan atau doa untuk mempelai..."
              rows={6}
              className="w-full px-2.5 py-2.5 bg-[#f5eee5] rounded-[5px] border border-solid border-[#9a8960] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl tracking-[-0.40px] placeholder:text-[#9a8960] resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-11 flex items-center justify-center gap-2.5 px-2.5 bg-[#544523] rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7564 5.72718 21.351 5.12084 20.84 4.61Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
                Kirim Ucapan
              </span>
            </button>
          </form>
        </div>

        {/* Right Column - Wishes List */}
        <div className="w-full max-w-[385px] mx-auto md:mx-0 bg-white rounded-[10px] border border-solid border-[#9a8960] shadow-[0px_4px_4px_#00000040] p-6 md:p-7 h-fit">
          {/* Header */}
          <div className="flex items-center gap-2.5 mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#544523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal]">
              Ucapan dari Tamu ({wishes.length})
            </span>
          </div>

          {/* Wishes List with Scrollbar */}
          <div className="relative">
            <div className="h-[308px] overflow-y-scroll pr-3 flex flex-col gap-3">
              {wishes.map((wish, index) => (
                <div
                  key={index}
                  className="w-full bg-[#f5eee5] rounded-[10px] border-l-4 border-solid border-[#544523] shadow-[0px_4px_4px_#00000040] p-2.5"
                >
                  <div className="flex flex-col gap-2.5">
                    <div className="flex justify-between items-start">
                      <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-sm tracking-[-0.28px] leading-[normal]">
                        {wish.name}
                      </span>
                      <span className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-xs tracking-[-0.24px] leading-[normal]">
                        {wish.time}
                      </span>
                    </div>
                    <p className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xs tracking-[-0.24px] leading-[normal]">
                      {wish.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Scrollbar Track */}
            <div className="absolute top-0 right-0 w-1 h-[308px] bg-[#d9d9d9] rounded-[10px]" />
            {/* Custom Scrollbar Thumb */}
            <div className="absolute top-0 right-0 w-1 h-[50px] bg-[#544523] rounded-[10px]" />
          </div>
        </div>
      </div>

      {/* Decorative Images - Visible on all screen sizes */}
      <img
        className="absolute top-0 left-0 w-[283px] h-[228px] md:w-[565px] md:h-[455px] aspect-[1.24] object-cover pointer-events-none opacity-70 md:opacity-80"
        alt="Decorative element"
        src="https://c.animaapp.com/3kjcaiZf/img/asset-2-18.png"
      />

      <img
        className="absolute bottom-0 right-0 w-[261px] h-[251px] md:w-[521px] md:h-[502px] aspect-[1.04] object-cover pointer-events-none opacity-70 md:opacity-80"
        alt="Decorative element"
        src="https://c.animaapp.com/3kjcaiZf/img/asset-1-12.png"
      />
    </section>
  );
}

// Wedding Gift Section Component
function WeddingGiftSection() {
  const [activeTab, setActiveTab] = useState<"transfer" | "registry" | "kado">("transfer");

  return (
    <section className="relative w-full h-auto min-h-[652px] px-4 py-8 md:py-12 bg-gradient-to-b from-[#e8e4df] to-[#f5f3f1] -mt-4 md:-mt-12 z-0">
      {/* Header */}
      <div className="w-full max-w-[859px] mx-auto flex flex-col items-center gap-2.5 p-2.5 mb-8">
        <h2 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-4xl md:text-5xl text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
          Wedding Gift
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-[#9a8960] text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Your presence is the greatest gift, but if you wish to honor us with something special...
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="w-full max-w-[602px] mx-auto bg-[#f5eee5] rounded-[10px] flex items-center justify-center p-1 mb-6">
        <button
          onClick={() => setActiveTab("transfer")}
          className={`w-full max-w-[200px] h-[19px] px-2.5 py-2.5 rounded-[50px] flex items-center justify-center transition-colors ${
            activeTab === "transfer" ? "bg-white" : "bg-transparent"
          }`}
        >
          <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-xs tracking-[-0.24px] leading-[normal] whitespace-nowrap">
            Digital Transfer
          </span>
        </button>

        <button
          onClick={() => setActiveTab("registry")}
          className={`w-full max-w-[200px] h-[19px] px-2.5 py-2.5 rounded-[50px] flex items-center justify-center transition-colors ${
            activeTab === "registry" ? "bg-white" : "bg-transparent"
          }`}
        >
          <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-xs tracking-[-0.24px] leading-[normal] whitespace-nowrap">
            Wedding Registry
          </span>
        </button>

        <button
          onClick={() => setActiveTab("kado")}
          className={`w-full max-w-[199px] h-[19px] px-2.5 py-2.5 rounded-[50px] flex items-center justify-center transition-colors ${
            activeTab === "kado" ? "bg-white" : "bg-transparent"
          }`}
        >
          <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-xs tracking-[-0.24px] leading-[normal] whitespace-nowrap">
            Kirim Kado
          </span>
        </button>
      </div>

      {/* Content Area - Bank Card Image */}
      <div className="w-full max-w-[609px] mx-auto">
        {activeTab === "transfer" && (
          <img
            className="w-full h-auto aspect-[1.7] object-contain"
            alt="Bank card for digital transfer"
            src="https://c.animaapp.com/danlDGzY/img/card-bank.png"
          />
        )}
        {activeTab === "registry" && (
          <div className="w-full h-[359px] bg-white rounded-[10px] border border-solid border-[#9a8960] shadow-[0px_4px_4px_#00000040] flex items-center justify-center p-8">
            <p className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl text-center tracking-[-0.40px] leading-[normal]">
              Wedding Registry information will be displayed here
            </p>
          </div>
        )}
        {activeTab === "kado" && (
          <div className="w-full h-[359px] bg-white rounded-[10px] border border-solid border-[#9a8960] shadow-[0px_4px_4px_#00000040] flex items-center justify-center p-8">
            <p className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl text-center tracking-[-0.40px] leading-[normal]">
              Kirim Kado information will be displayed here
            </p>
          </div>
        )}
      </div>

      {/* Decorative Image - Visible on all screen sizes */}
      <img
        className="absolute top-[59px] left-0 w-[159px] h-[283px] md:w-[318px] md:h-[565px] aspect-[0.56] object-cover pointer-events-none opacity-70 md:opacity-80"
        alt="Decorative element"
        src="https://c.animaapp.com/danlDGzY/img/asset-3-8.png"
      />
    </section>
  );
}

// Guest Check-in QR Code Section Component
function GuestCheckinSection() {
  const [qrGenerated, setQrGenerated] = useState(false);

  const handleGenerateQR = () => {
    setQrGenerated(true);
  };

  return (
    <section className="relative w-full h-auto min-h-[769px] px-4 py-8 md:py-12 pb-16 md:pb-24 bg-gradient-to-b from-[#f5f3f1] to-white overflow-hidden -mt-4 md:-mt-12 z-0">
      {/* Background Decorative Images - Top */}
      <img
        className="absolute top-0 left-0 w-[200px] h-[159px] md:w-[691px] md:h-[549px] aspect-[1.26] object-cover opacity-70 md:opacity-80 pointer-events-none"
        alt="Decorative element"
        src="https://c.animaapp.com/ZOMVvBat/img/asset-1-13.png"
      />
      <img
        className="absolute top-0 right-0 w-[200px] h-[159px] md:w-[691px] md:h-[549px] aspect-[1.26] object-cover opacity-70 md:opacity-80 pointer-events-none"
        alt="Decorative element"
        src="https://c.animaapp.com/ZOMVvBat/img/asset-1-12.png"
      />

      {/* Header */}
      <div className="relative w-full max-w-[1046px] mx-auto flex flex-col items-center gap-2.5 p-2.5 mb-8 z-10">
        <h2 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-4xl md:text-5xl text-center tracking-[-0.96px] leading-[normal] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
          Guest Check-in
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-[#9a8960] text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
          Scan this QR code when you arrive at our classic celebration
        </p>
      </div>

      {/* QR Card Container */}
      <div className="relative w-full max-w-[559px] mx-auto bg-white/50 backdrop-blur-sm rounded-[10px] border border-solid border-[#9a8960] shadow-[0px_4px_4px_#00000040] p-6 md:p-8 z-10">
        {/* Welcome Section */}
        <div className="flex flex-col items-center gap-2.5 mb-8">
          <h3 className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-2xl text-center tracking-[-0.48px] leading-[normal]">
            Welcome,
          </h3>
          <p className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl text-center tracking-[-0.40px] leading-[normal]">
            Dear Beloved Guest
          </p>
          <p className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#9a8960] text-base text-center tracking-[-0.32px] leading-[normal]">
            Guest ID: G2025-001
          </p>
        </div>

        {/* QR Code Display */}
        <div className="flex justify-center mb-8">
          {qrGenerated ? (
            <img
              className="w-[200px] h-[200px]"
              alt="QR Code for check-in"
              src="https://c.animaapp.com/ZOMVvBat/img/qr-code-2.svg"
            />
          ) : (
            <div className="w-[200px] h-[200px] bg-[#f5eee5] rounded-[10px] border border-dashed border-[#9a8960] flex items-center justify-center">
              <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-sm text-center">
                QR Code will appear here
              </span>
            </div>
          )}
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerateQR}
          className="w-full max-w-[333px] mx-auto h-[38px] flex items-center justify-center gap-2.5 px-2.5 bg-[#544523] rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity mb-6"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="8" height="8" stroke="white" strokeWidth="2"/>
            <rect x="13" y="3" width="8" height="8" stroke="white" strokeWidth="2"/>
            <rect x="3" y="13" width="8" height="8" stroke="white" strokeWidth="2"/>
            <rect x="13" y="13" width="8" height="8" stroke="white" strokeWidth="2"/>
          </svg>
          <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
            Generate QR Code
          </span>
        </button>

        {/* Divider */}
        <div className="w-full max-w-[333px] mx-auto h-px bg-[#9a8960] mb-6" />

        {/* Tips Section */}
        <div className="flex flex-col items-center gap-2.5">
          <h4 className="[font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-[#544523] text-xl text-center tracking-[-0.40px] leading-[normal]">
            Tips:
          </h4>
          <p className="max-w-[333px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-sm text-center tracking-[-0.28px] leading-[normal]">
            Save QR code to your phone<br />
            Show to reception team upon arrival<br />
            Keep your phone charged
          </p>
        </div>
      </div>

      {/* Bottom Decorative Images - Visible on all screen sizes */}
      <img
        className="absolute bottom-0 left-0 w-[220px] h-[150px] md:w-[440px] md:h-[299px] aspect-[1.47] object-cover pointer-events-none opacity-70 md:opacity-80 z-20"
        alt="Decorative element"
        src="https://c.animaapp.com/ZOMVvBat/img/asset-2-17@2x.png"
      />

      <img
        className="absolute bottom-0 right-0 w-[221px] h-[150px] md:w-[441px] md:h-[299px] aspect-[1.47] object-cover pointer-events-none opacity-70 md:opacity-80 z-20"
        alt="Decorative element"
        src="https://c.animaapp.com/ZOMVvBat/img/asset-2-18@2x.png"
      />
    </section>
  );
}

// Thank You Section Component
function ThankYouSection() {
  return (
    <section className="relative w-full h-auto min-h-[479px] px-4 py-12 md:py-16 bg-[#e6d7c4] overflow-hidden -mt-4 md:-mt-12 z-0">
      {/* Background Decorative Images */}
      <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
        <img
          className="absolute left-0 bottom-0 w-[551px] h-[240px] md:w-[1101px] md:h-[479px] aspect-[2.3] object-cover object-bottom opacity-70 md:opacity-80"
          alt="Decorative element"
          src="https://c.animaapp.com/sv2yZFuH/img/asset-2-17.png"
        />
        <img
          className="absolute right-0 bottom-0 w-[551px] h-[240px] md:w-[1101px] md:h-[479px] aspect-[2.3] object-cover object-bottom opacity-70 md:opacity-80"
          alt="Decorative element"
          src="https://c.animaapp.com/sv2yZFuH/img/asset-2-18.png"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-[557px] mx-auto">
        {/* Thank You Header */}
        <div className="flex flex-col items-center gap-2.5 p-2.5">
          <h2 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-4xl md:text-5xl text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
            Thank You
          </h2>

          <p className="relative w-full [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
            Your presence and wishes mean the world to us. Thank you for being part of our timeless love story.
          </p>
        </div>

        {/* Divider */}
        <div className="w-[280px] h-px bg-[#9a8960]" />

        {/* Made with Love */}
        <div className="flex flex-col items-center gap-2.5 p-2.5">
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
              Made with
            </span>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39464C21.7564 5.72718 21.351 5.12084 20.84 4.61Z" fill="#9a8960"/>
            </svg>
            <span className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
              for our special day
            </span>
          </div>

          <p className="[font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal] whitespace-nowrap">
            © 2025 Prefere Digital Invitation
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-5 mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="#544523" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="#544523" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="#544523"/>
            </svg>
          </a>

          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="WhatsApp"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 9.97 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" fill="#544523"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Dress Code Section Component
function DressCodeSection() {
  return (
    <section className="relative w-full h-auto min-h-[573px] px-4 py-12 md:py-20 bg-gradient-to-b from-[#b8ada3] to-[#c9bfb5] -mt-4 md:-mt-12 z-0">
      {/* Content Container dengan background kuning */}
      <div className="w-full max-w-[800px] mx-auto bg-[#e6d7c4] rounded-[10px] border border-solid border-[#cfbb9a] p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col w-full max-w-[382px] mx-auto items-center gap-2 p-2.5 mb-8">
          <h2 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-4xl md:text-5xl text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
            Dress Code
          </h2>

          <p className="relative w-full [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
            Coquette Theme
          </p>
        </div>

        {/* Color Cards Container */}
        <div className="w-full max-w-[744px] mx-auto mb-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
            {/* Dark Olive Card */}
            <div className="w-full max-w-[243px] bg-white rounded-[10px] border-[0.5px] border-solid border-[#0000001a] flex flex-col items-center justify-center gap-2.5 p-6">
              <div className="w-[70px] h-[70px] bg-[#544523] rounded-full" />
              <div className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-xl md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
                Dark Olive
              </div>
            </div>

            {/* Antique Brass Card */}
            <div className="w-full max-w-[243px] bg-white rounded-[10px] border-[0.5px] border-solid border-[#0000001a] flex flex-col items-center justify-center gap-2.5 p-6">
              <div className="w-[70px] h-[70px] bg-[#9a8960] rounded-full" />
              <div className="[font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-xl md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
                Antique Brass
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="w-full max-w-[616px] mx-auto [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal] px-4">
          We kindly request our guests to wear classic rose colors and soft pink
        </p>
      </div>
    </section>
  );
}