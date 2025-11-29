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

      {/* Bottom Sections Background - Brown */}
      <div className="absolute top-[917px] left-0 w-full h-[calc(100%-917px)] min-h-[8000px] bg-gradient-to-b from-[#5a4a42] to-[#6b5b53]" />

      {/* Scroll Button */}
      <button
        className="absolute left-1/2 -translate-x-1/2 bottom-[9377px] w-[21px] h-9 flex justify-center rounded-[10.5px] border border-solid border-white bg-transparent cursor-pointer hover:bg-white/10 transition-colors z-50"
        onClick={handleScrollDown}
        aria-label="Scroll down to view more content"
      >
        <div className="mt-[7px] w-[3px] h-3.5 bg-white rounded-[505px] border border-solid" />
      </button>

      {/* Header Section */}
      <header className="absolute top-[642px] left-1/2 -translate-x-1/2 w-full max-w-[382px] h-[94px] flex justify-center bg-white rounded-[50px] border border-solid border-[#4b3d1a] shadow-[0px_5px_10px_#00000040] px-4 z-10">
        <div className="flex w-full h-[94px] relative flex-col items-center gap-2.5 p-2.5">
          <h1 className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-xl md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
            Dear Beloved Guest,
          </h1>

          <p className="relative w-full max-w-[306px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-sm md:text-base text-center tracking-[-0.32px] leading-[normal]">
            We cordially invite you to celebrate our timeless love story
          </p>
        </div>
      </header>

      {/* Open Invitation Button */}
      <button
        className="all-[unset] box-border w-56 h-[45px] absolute top-[776px] left-1/2 -translate-x-1/2 rounded-[50px] bg-[linear-gradient(90deg,rgba(84,68,60,1)_0%,rgba(255,255,255,1)_100%)] flex items-center justify-center gap-2.5 p-2.5 cursor-pointer hover:opacity-90 transition-opacity z-20"
        onClick={handleOpenInvitation}
        aria-label="Open wedding invitation"
      >
        <span className="relative w-fit [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
          Open Invitation
        </span>
      </button>

      {/* Couple Names */}
      <section
        className="flex flex-col w-full max-w-[382px] h-[187px] items-center justify-center px-2.5 py-0 absolute top-[370px] left-1/2 -translate-x-1/2 rounded-[10px] z-10"
        aria-label="Couple names"
      >
        <h2 className="w-fit mt-[-18.50px] [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-4xl md:text-[64px] text-center tracking-[-1.28px] whitespace-nowrap relative leading-[normal]">
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

          <div className="w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-4xl md:text-[64px] tracking-[-1.28px] whitespace-nowrap relative text-center leading-[normal]">
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

        <h2 className="w-fit mb-[-16.50px] [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-4xl md:text-[64px] text-center tracking-[-1.28px] whitespace-nowrap relative leading-[normal]">
          Isabella
        </h2>
      </section>

      {/* Quotes Section */}
      <QuotesSection />

      {/* Love Story Section */}
      <LoveStorySection />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Countdown Section */}
      <section className="absolute top-[3578px] left-0 w-full h-[537px]">
        <img
          className="w-full h-full object-cover"
          alt="Counting down to the wedding day"
          src="https://c.animaapp.com/FXVdvFcu/img/counting-down-desktop.png"
        />
      </section>

      {/* When & Where Section */}
      <EventDetailsSection />

      {/* Dress Code Section */}
      <section className="absolute top-[5139px] left-0 w-full h-[573px] overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-[116px] w-full max-w-[744px] h-[404px] bg-[#E6D7C4] rounded-[10px] border border-solid border-[#CFBB9A]">
          {/* Header */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[18px] w-full max-w-[382px] h-[75px] px-2.5 py-0 flex flex-col justify-start items-center">
            <h2 className="text-center text-[#544523] text-5xl [font-family:'Times_New_Roman-Regular',Helvetica] font-normal">
              Dress Code
            </h2>
            <p className="w-full max-w-[382px] text-center text-[#9A8960] text-2xl [font-family:'Times_New_Roman-Regular',Helvetica] font-normal">
              Coqutte Theme
            </p>
          </div>

          {/* Color Cards Container */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[158px] flex gap-4 justify-center">
            {/* Dark Olive Card */}
            <div className="w-[243px] h-[154px] bg-white rounded-[10px] border-[0.5px] border-solid border-black/10 p-2.5 flex flex-col justify-center items-center gap-2.5">
              <div className="w-[70px] h-[70px] bg-[#544523] rounded-full"></div>
              <div className="w-[159px] text-center text-[#544523] text-2xl [font-family:'Georgia-Regular',Helvetica] font-normal">
                Dark Olive
              </div>
            </div>

            {/* Antique Brass Card */}
            <div className="w-[243px] h-[154px] bg-white rounded-[10px] border-[0.5px] border-solid border-black/10 p-2.5 flex flex-col justify-center items-center gap-2.5">
              <div className="w-[70px] h-[70px] bg-[#9A8960] rounded-full"></div>
              <div className="w-[159px] text-center text-[#544523] text-2xl [font-family:'Georgia-Regular',Helvetica] font-normal">
                Antique Brass
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[331px] w-full max-w-[616px] text-center text-[#9A8960] text-2xl [font-family:'Times_New_Roman-Regular',Helvetica] font-normal px-4">
            We kindly request our guests to wear classic rose colors and soft pink
          </div>
        </div>
      </section>

      {/* Shared Moments Section */}
      <SharedMomentsSection />

      {/* RSVP Section */}
      <RsvpSection />

      {/* Wishes Section */}
      <WishesSection />
    </main>
  );
}

// Quotes Section Component
function QuotesSection() {
  return (
    <section
      className="absolute top-[917px] left-0 w-full h-auto min-h-[737px] px-4"
      aria-labelledby="quotes-heading"
    >
      <header className="w-full max-w-[545px] h-auto min-h-[131px] items-center absolute top-[106px] left-1/2 -translate-x-1/2 flex flex-col gap-2.5 p-2.5">
        <h2
          id="quotes-heading"
          className="relative w-full max-w-[368px] mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-4xl md:text-[64px] text-center tracking-[-1.28px] leading-[normal]"
        >
          Words of Love
        </h2>

        <p className="relative w-full max-w-[554px] [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-white text-xl md:text-[32px] text-center tracking-[-0.64px] leading-[normal]">
          Sacred verses that bless our timeless union
        </p>
      </header>

      <div
        className="inline-flex items-center justify-center gap-2.5 px-2.5 py-0 absolute top-[298px] left-1/2 -translate-x-1/2"
        role="presentation"
        aria-hidden="true"
      >
        <div className="flex flex-col w-32 md:w-48 items-start gap-2.5 p-2.5 relative">
          <img
            className="relative w-full h-[3px]"
            alt=""
            src="https://c.animaapp.com/FXVdvFcu/img/line-2-3.svg"
          />
        </div>

        <div className="flex flex-col w-32 md:w-48 items-start gap-2.5 p-2.5 relative">
          <img
            className="relative w-full h-[3px]"
            alt=""
            src="https://c.animaapp.com/FXVdvFcu/img/line-2-3.svg"
          />
        </div>
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

      <div
        className="absolute w-full max-w-[875px] h-[146px] top-[591px] left-1/2 -translate-x-1/2 hidden md:block"
        role="presentation"
        aria-hidden="true"
      >
        <img
          className="absolute w-[438px] h-[146px] top-0 left-0"
          alt=""
          src="https://c.animaapp.com/FXVdvFcu/img/clip-path-group-1@2x.png"
        />

        <img
          className="absolute w-[438px] h-[146px] top-0 left-[438px]"
          alt=""
          src="https://c.animaapp.com/FXVdvFcu/img/clip-path-group-1@2x.png"
        />
      </div>

      <img
        className="absolute top-[266px] left-1/2 -translate-x-1/2 w-[184px] h-[85px] aspect-[2.17] object-cover"
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
    <section className="absolute top-[1637px] left-0 w-full h-auto min-h-[1033px] px-4">
      <header className="w-full max-w-[610px] h-auto min-h-[122px] items-center absolute top-[97px] left-1/2 -translate-x-1/2 flex flex-col gap-2.5 p-2.5">
        <h2 className="w-full relative mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-4xl md:text-[64px] text-center tracking-[-1.28px] leading-[normal]">
          Our Love Story
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Two souls destined to become one
        </p>
      </header>

      <div className="absolute top-[247px] left-1/2 -translate-x-1/2 w-full max-w-[1100px] flex flex-col md:flex-row gap-8 md:gap-4 justify-center items-center px-4">
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
    <article className="w-full max-w-[491px] h-auto min-h-[727px] bg-white rounded-[10px] relative">
      <div className="absolute top-11 left-1/2 -translate-x-1/2 w-[229px] h-[246px]">
        <img
          className="absolute top-0 left-0 w-[229px] h-[229px] object-cover"
          alt={`Portrait of ${name}`}
          src={imageUrl}
        />
        <img
          className="top-[163px] left-[21px] w-[187px] h-[83px] aspect-[2.27] absolute object-cover"
          alt="Decorative element"
          src={decorativeImageUrl}
        />
      </div>

      <div className="w-full h-auto min-h-[126px] items-center justify-center absolute top-[335px] left-0 flex flex-col gap-2.5 p-2.5 px-4">
        <h3 className="relative w-full text-center [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-[#544523] text-2xl md:text-[32px] tracking-[-0.64px] leading-[normal]">
          {name}
        </h3>

        <p className="relative w-full max-w-[306px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Putra/Putri dari:
        </p>

        <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
          <p className="w-full max-w-[306px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-lg md:text-2xl text-center tracking-[-0.48px] relative leading-[normal]">
            {parents}
          </p>
        </div>
      </div>

      <a
        href={`https://instagram.com/${socialHandle.replace("@", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="all-[unset] box-border w-[209px] h-[42px] absolute top-[519px] left-1/2 -translate-x-1/2 bg-[#4b3d1a] rounded-[10px] aspect-[4.98] flex items-center justify-center gap-2.5 p-2.5 cursor-pointer hover:opacity-90 transition-opacity"
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
        className="absolute top-[-41px] -left-px w-[491px] h-[817px] aspect-[0.6] object-cover pointer-events-none"
        alt="Decorative frame"
        src={frameImageUrl}
      />
    </article>
  );
}

// Our Story Section Component
function OurStorySection() {
  const timelineEvents = [
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
    <section className="absolute top-[2670px] left-0 w-full h-auto min-h-[908px] px-4">
      <header className="w-full max-w-[563px] h-auto min-h-[132px] items-center absolute top-[35px] left-1/2 -translate-x-1/2 flex flex-col gap-2.5 p-2.5">
        <h2 className="w-full [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-4xl md:text-[64px] text-center tracking-[-1.28px] leading-[normal]">
          Our Love Journey
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Every love story is beautiful, but ours is timeless
        </p>
      </header>

      <div className="absolute w-full max-w-[644px] h-auto top-[241px] left-1/2 -translate-x-1/2 flex flex-col gap-4 px-4">
        {timelineEvents.map((event, index) => (
          <article
            key={event.year}
            className="h-auto min-h-[198px] flex flex-col gap-1 bg-white rounded-[10px] border-2 border-solid border-[#544523] shadow-[0px_4px_4px_#00000040] p-4"
          >
            <div className="flex w-[87px] h-7 items-center justify-center gap-2.5 p-2.5 bg-[#fae5e6] rounded-[50px]">
              <time className="relative w-fit [font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-xl text-center tracking-[-0.40px] leading-[normal] whitespace-nowrap">
                {event.year}
              </time>
            </div>

            <div className="w-full h-auto flex flex-col gap-2.5 p-2.5">
              <h3 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-xl tracking-[-0.40px] leading-[normal]">
                {event.title}
              </h3>

              <p className="relative w-full [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-lg md:text-xl tracking-[-0.40px] leading-[normal]">
                {event.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <img
        className="absolute top-[241px] left-[calc(50%-400px)] w-[39px] h-[466px] hidden lg:block"
        alt="Timeline connector"
        src="https://c.animaapp.com/FXVdvFcu/img/group-208@2x.png"
      />
    </section>
  );
}

// Event Details Section Component
function EventDetailsSection() {
  const eventCards = [
    {
      title: "Holy Matrimony",
      details: [
        {
          icon: "https://c.animaapp.com/FXVdvFcu/img/calendar-03-1.svg",
          text: "Saturday, March 15, 2025",
          alt: "Calendar",
        },
        {
          icon: "https://c.animaapp.com/FXVdvFcu/img/clock-01-1.svg",
          text: "08:00 AM",
          alt: "Clock",
        },
        {
          icon: "https://c.animaapp.com/FXVdvFcu/img/location-09-2.svg",
          text: "Masjid Al-Barokah",
          alt: "Location",
        },
      ],
      address: "Jl. Kebahagiaan No. 123, Jakarta Selatan",
      image: "https://c.animaapp.com/FXVdvFcu/img/rectangle-17711-1@2x.png",
    },
    {
      title: "Wedding Reception",
      details: [
        {
          icon: "https://c.animaapp.com/FXVdvFcu/img/calendar-03-1.svg",
          text: "Saturday, March 15, 2025",
          alt: "Calendar",
        },
        {
          icon: "https://c.animaapp.com/FXVdvFcu/img/clock-01-1.svg",
          text: "07:00 PM",
          alt: "Clock",
        },
        {
          icon: "https://c.animaapp.com/FXVdvFcu/img/location-09-2.svg",
          text: "The Royal Ballroom",
          alt: "Location",
        },
      ],
      address: "Jl. Cinta Sejati No. 456, Jakarta Selatan",
      image: "https://c.animaapp.com/FXVdvFcu/img/rectangle-17711-1@2x.png",
    },
  ];

  return (
    <section className="absolute top-[4115px] left-0 w-full h-auto min-h-[1024px] px-4">
      <header className="w-full max-w-[382px] h-auto min-h-28 items-center absolute top-[140px] left-1/2 -translate-x-1/2 flex flex-col gap-2.5 p-2.5">
        <h2 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-4xl md:text-5xl text-center tracking-[-0.96px] leading-[normal]">
          When &amp; Where
        </h2>

        <p className="relative w-full [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-white text-lg md:text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Join us in celebrating our timeless love
        </p>
      </header>

      <div className="absolute top-[280px] left-1/2 -translate-x-1/2 w-full max-w-[1100px] flex flex-col md:flex-row gap-8 md:gap-8 justify-center items-center px-4">
        {eventCards.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
}

// Event Card Component
function EventCard({
  title,
  details,
  address,
  image,
}: {
  title: string;
  details: Array<{ icon: string; text: string; alt: string }>;
  address: string;
  image: string;
}) {
  return (
    <article className="flex flex-col w-full max-w-[382px] h-auto min-h-[654px] items-center gap-1.5 bg-white rounded-[10px] border border-solid border-[#544523] shadow-[0px_4px_5px_#00000040] p-4">
      <div className="w-full h-auto items-center relative flex flex-col gap-2.5 p-2.5">
        <h3 className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-2xl md:text-[32px] text-center tracking-[-0.64px] leading-[normal]">
          {title}
        </h3>

        <div className="relative w-[94px] h-[3px] bg-[#9a8960] rounded-[50px]" />

        <dl className="flex flex-col w-full items-start justify-center gap-[11px] mt-4">
          {details.map((detail, index) => (
            <div
              key={index}
              className="inline-flex h-auto items-center justify-start gap-2.5 p-2.5 relative"
            >
              <img
                className="relative w-6 h-6"
                alt={detail.alt}
                src={detail.icon}
              />

              <dd className="relative w-fit [font-family:'Georgia-Regular',Helvetica] font-normal text-[#544523] text-base text-center tracking-[-0.32px] leading-[normal]">
                {detail.text}
              </dd>
            </div>
          ))}
        </dl>

        <address className="flex w-full items-center gap-2.5 p-2.5 mt-2 not-italic">
          <p className="relative w-full [font-family:'Georgia-Regular',Helvetica] font-normal text-[#9a8960] text-sm md:text-base tracking-[-0.32px] leading-[normal] text-center">
            {address}
          </p>
        </address>
      </div>

      <button
        type="button"
        className="all-[unset] box-border flex w-full max-w-[313px] h-[31px] items-center justify-center gap-2.5 p-2.5 relative bg-[#9a8960] rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity"
        aria-label={`Add ${title} to Calendar`}
      >
        <img
          className="relative w-4 h-4 aspect-[1]"
          alt=""
          src="https://c.animaapp.com/FXVdvFcu/img/plus-sign-1.svg"
        />

        <span className="relative w-fit [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-white text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
          Add to Calendar
        </span>
      </button>

      <img
        className="w-full max-w-[312px] h-[312px] object-cover my-4"
        alt={`${title} venue`}
        src={image}
      />

      <button
        type="button"
        className="all-[unset] box-border w-full max-w-[313px] h-[31px] bg-white rounded-[10px] border border-solid border-[#544523] flex items-center justify-center gap-2.5 p-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
        aria-label={`View ${title} location on Maps`}
      >
        <img
          className="relative w-4 h-4 aspect-[1]"
          alt=""
          src="https://c.animaapp.com/FXVdvFcu/img/location-09-3.svg"
        />

        <span className="relative w-fit [font-family:'Times_New_Roman-Bold',Helvetica] font-bold text-[#9a8960] text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
          View on Maps
        </span>
      </button>
    </article>
  );
}

// Shared Moments Section Component
function SharedMomentsSection() {
  const [copied, setCopied] = useState(false);

  const galleryImages = [
    {
      src: "https://c.animaapp.com/FXVdvFcu/img/rectangle-19.svg",
      alt: "Wedding moment 1",
      width: "138px",
      height: "112px",
      className: "relative w-[138px] h-28 object-cover",
    },
    {
      src: "https://c.animaapp.com/FXVdvFcu/img/rectangle-20.svg",
      alt: "Wedding moment 2",
      width: "170px",
      height: "126px",
      className: "relative w-[170px] h-[126px]",
    },
    {
      src: "https://c.animaapp.com/FXVdvFcu/img/rectangle-21.svg",
      alt: "Wedding moment 3",
      width: "138px",
      height: "112px",
      className: "relative w-[138px] h-28 object-cover",
    },
    {
      src: "https://c.animaapp.com/FXVdvFcu/img/rectangle-22.svg",
      alt: "Wedding moment 4",
      width: "138px",
      height: "112px",
      className: "relative w-[138px] h-28 object-cover",
    },
    {
      src: "https://c.animaapp.com/FXVdvFcu/img/rectangle-23.svg",
      alt: "Wedding moment 5",
      width: "138px",
      height: "112px",
      className: "relative w-[138px] h-28 object-cover",
    },
  ];

  const handleCopyHashtag = async () => {
    try {
      await navigator.clipboard.writeText("#ClassicWedding2025");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section
      className="absolute top-[5712px] left-0 w-[1440px] h-[1118px]"
      aria-labelledby="shared-moments-heading"
    >
      <div className="absolute top-[821px] left-[444px] w-[552px] h-[215px] flex flex-col items-center gap-[17px] bg-[#e6d7c4] rounded-[10px] border border-solid border-[#cfbb9a]">
        <div className="h-28 w-[552px] relative items-center flex flex-col gap-2.5 p-2.5">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-[32px] text-center tracking-[-0.64px] leading-[normal] whitespace-nowrap">
            Share Your Moments
          </h3>

          <p className="relative w-[260px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-base text-center tracking-[-0.32px] leading-[normal]">
            Tag us in your photos and videos from our special day using
          </p>
        </div>

        <button
          className="all-[unset] box-border ml-0 h-[50px] w-[323.69px] relative bg-white rounded-[10px] border border-solid border-[#cfbb9a] flex items-center justify-center gap-2.5 p-2.5 cursor-pointer hover:bg-[#f9f9f9] transition-colors"
          onClick={handleCopyHashtag}
          aria-label="Copy wedding hashtag #ClassicWedding2025"
          type="button"
        >
          <span className="relative w-fit [font-family:'Consolas-Regular',Helvetica] font-normal text-[#544523] text-base tracking-[-0.32px] leading-[normal] whitespace-nowrap">
            {copied ? "Copied!" : "#ClassicWedding2025"}
          </span>

          <img
            className="relative w-6 h-[23px]"
            alt=""
            src="https://c.animaapp.com/FXVdvFcu/img/copy-01.svg"
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        className="absolute top-[305px] left-[calc(50.00%_-_245px)] w-[489px] h-[298px] bg-[url(https://c.animaapp.com/FXVdvFcu/img/rectangle-18.svg)] bg-cover bg-[50%_50%]"
        role="img"
        aria-label="Featured wedding moment"
      />

      <div
        className="flex w-[712px] h-[126px] items-center gap-[9px] absolute top-[649px] left-[calc(50.00%_-_356px)] overflow-hidden overflow-x-scroll"
        role="region"
        aria-label="Wedding photo gallery"
      >
        {galleryImages.map((image, index) => (
          <img
            key={index}
            className={image.className}
            alt={image.alt}
            src={image.src}
          />
        ))}
      </div>

      <header className="w-[669px] h-28 items-center absolute top-[103px] left-[calc(50.00%_-_335px)] flex flex-col gap-2.5 p-2.5">
        <h2
          id="shared-moments-heading"
          className="relative self-stretch mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-5xl text-center tracking-[-0.96px] leading-[normal]"
        >
          Our Moments
        </h2>

        <p className="relative self-stretch [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-[#9a8960] text-2xl text-center tracking-[-0.48px] leading-[normal]">
          A glimpse of our timeless love story
        </p>
      </header>

      <img
        className="top-[706px] w-[558px] h-[412px] absolute left-0 aspect-[1.4] object-cover"
        alt="Decorative wedding asset"
        src="https://c.animaapp.com/FXVdvFcu/img/asset-2-17.png"
      />

      <img
        className="absolute top-0 left-[906px] w-[534px] h-[536px] aspect-[1.14] object-cover"
        alt="Decorative wedding asset"
        src="https://c.animaapp.com/FXVdvFcu/img/asset-1-12.png"
      />
    </section>
  );
}

// RSVP Section Component
function RsvpSection() {
  const [formData, setFormData] = useState({
    fullName: "Alif & partner",
    attendance: "hadir",
    guestCount: "1 orang",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const guestOptions = ["1 orang", "2 orang", "3 orang", "4 orang", "5 orang"];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("RSVP Submitted:", formData);
  };

  return (
    <section className="absolute top-[6830px] left-[calc(50.00%_-_720px)] w-[1440px] h-[739px]">
      <header className="w-96 h-28 items-center absolute top-[27px] left-[528px] flex flex-col gap-2.5 p-2.5">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-5xl text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
          RSVP
        </h2>

        <p className="relative w-[598px] ml-[-117.00px] mr-[-117.00px] [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-[#9a8960] text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Please confirm your attendance to our classic celebration
        </p>
      </header>

      <form className="absolute top-[139px] left-[calc(50.00%_-_275px)] w-[559px] h-[423px] bg-white rounded-[10px] border border-solid border-[#9a8960] shadow-[0px_4px_4px_#00000040]">
        <div className="flex w-[494px] h-6 items-center gap-2.5 pl-0 pr-2.5 py-2.5 absolute top-6 left-[calc(50.00%_-_248px)]">
          <label
            htmlFor="fullName"
            className="relative w-fit mt-[-8.00px] mb-[-6.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap"
          >
            Nama Lengkap
          </label>
        </div>

        <div className="flex w-[494px] h-6 items-center gap-2.5 pl-0 pr-2.5 py-2.5 absolute top-[101px] left-[calc(50.00%_-_248px)]">
          <span className="relative w-fit mt-[-8.00px] mb-[-6.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
            Konfirmasi Kehadiran
          </span>
        </div>

        <div className="flex w-[494px] h-6 items-center gap-2.5 pl-0 pr-2.5 py-2.5 absolute top-[154px] left-[calc(50.00%_-_248px)]">
          <label
            htmlFor="guestCount"
            className="relative w-fit mt-[-8.00px] mb-[-6.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap"
          >
            Jumlah tamu
          </label>
        </div>

        <div className="flex w-[494px] h-[38px] items-center gap-2.5 p-2.5 absolute top-12 left-[calc(50.00%_-_248px)] bg-[#f5ede4] rounded-[5px] border border-solid border-[#9a8960]">
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className="relative w-full mt-[-3.50px] mb-[-1.50px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl text-center tracking-[-0.40px] leading-[normal] bg-transparent"
            aria-label="Nama Lengkap"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="flex w-[494px] h-[38px] items-center justify-center gap-2.5 p-2.5 absolute top-[369px] left-[calc(50.00%_-_248px)] bg-[#544523] rounded-[10px] cursor-pointer hover:bg-[#6a5629] transition-colors"
          aria-label="Kirim RSVP"
        >
          <img
            className="relative w-4 h-4 aspect-[1]"
            alt=""
            src="https://c.animaapp.com/FXVdvFcu/img/telegram.svg"
          />

          <span className="mt-[-1.00px] text-white text-base tracking-[-0.32px] relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-center leading-[normal] whitespace-nowrap">
            Kirim RSVP
          </span>
        </button>

        <div className="flex w-[494px] h-6 items-center gap-2.5 pl-0 pr-2.5 py-2.5 absolute top-[215px] left-[calc(50.00%_-_248px)]">
          <label
            htmlFor="message"
            className="relative w-fit mt-[-8.00px] mb-[-6.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap"
          >
            Pesan untuk Mempelai (Opsional)
          </label>
        </div>

        <div className="flex w-[494px] h-[115px] items-start gap-2.5 p-2.5 absolute top-[239px] left-[calc(50.00%_-_248px)] bg-[#f5ede4] rounded-[5px] border border-solid border-[#9a8960]">
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Tulis Pesan anda..."
            className="relative w-full h-full mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl text-center tracking-[-0.40px] leading-[normal] bg-transparent resize-none placeholder:text-[#9a8960]"
            aria-label="Pesan untuk Mempelai"
          />
        </div>

        <div className="flex w-[246px] h-6 items-center gap-2.5 pl-0 pr-2.5 py-2.5 absolute top-[125px] left-[280px]">
          <input
            type="radio"
            id="tidakHadir"
            name="attendance"
            value="tidakHadir"
            checked={formData.attendance === "tidakHadir"}
            onChange={(e) => handleInputChange("attendance", e.target.value)}
            className="sr-only"
          />
          <label
            htmlFor="tidakHadir"
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <img
              className="relative w-4 h-4 mt-[-6.00px] mb-[-6.00px] aspect-[1]"
              alt=""
              src={
                formData.attendance === "tidakHadir"
                  ? "https://c.animaapp.com/FXVdvFcu/img/checkmark-circle-02-1.svg"
                  : "https://c.animaapp.com/FXVdvFcu/img/checkmark-circle-02.svg"
              }
            />

            <span className="relative w-fit mt-[-8.00px] mb-[-6.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              Tidak Hadir
            </span>
          </label>
        </div>

        <div className="flex w-[248px] h-6 items-center gap-2.5 pl-0 pr-2.5 py-2.5 absolute top-[125px] left-8">
          <input
            type="radio"
            id="hadir"
            name="attendance"
            value="hadir"
            checked={formData.attendance === "hadir"}
            onChange={(e) => handleInputChange("attendance", e.target.value)}
            className="sr-only"
          />
          <label
            htmlFor="hadir"
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <img
              className="relative w-4 h-4 mt-[-6.00px] mb-[-6.00px] aspect-[1]"
              alt=""
              src={
                formData.attendance === "hadir"
                  ? "https://c.animaapp.com/FXVdvFcu/img/checkmark-circle-02-1.svg"
                  : "https://c.animaapp.com/FXVdvFcu/img/checkmark-circle-02.svg"
              }
            />

            <span className="relative w-fit mt-[-8.00px] mb-[-6.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              Hadir
            </span>
          </label>
        </div>

        {/* Dropdown Jumlah Tamu */}
        <div className="absolute top-[178px] left-[calc(50.00%_-_248px)] w-[494px]">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-full h-[38px] items-center gap-2.5 p-2.5 bg-[#f5ede4] rounded-[5px] border border-solid border-[#9a8960] cursor-pointer relative"
            aria-label="Pilih jumlah tamu"
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
          >
            <span className="relative w-fit mt-[-7.30px] mb-[-5.30px] text-[#9a8960] text-xl tracking-[-0.40px] whitespace-nowrap [font-family:'Georgia-Regular',Helvetica] font-normal text-center leading-[normal]">
              {formData.guestCount}
            </span>

            <img
              className="absolute top-2.5 right-2.5 w-[18px] h-2.5"
              alt=""
              src="https://c.animaapp.com/FXVdvFcu/img/vector.svg"
            />
          </button>

          {isDropdownOpen && (
            <ul
              role="listbox"
              className="absolute top-[42px] left-0 w-full bg-[#f5ede4] rounded-[5px] border border-solid border-[#9a8960] shadow-[0px_4px_4px_#00000040] z-10"
            >
              {guestOptions.map((option, index) => (
                <li
                  key={index}
                  role="option"
                  aria-selected={formData.guestCount === option}
                  onClick={() => {
                    handleInputChange("guestCount", option);
                    setIsDropdownOpen(false);
                  }}
                  className="p-2.5 text-[#9a8960] text-xl tracking-[-0.40px] [font-family:'Georgia-Regular',Helvetica] font-normal text-center leading-[normal] cursor-pointer hover:bg-[#e8dfd0] transition-colors"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>

      <img
        className="top-[35px] left-[1055px] w-[385px] h-[670px] aspect-[0.74] absolute object-cover"
        alt=""
        src="https://c.animaapp.com/FXVdvFcu/img/asset-3-8.png"
      />

      <img
        className="top-0 left-0 w-[558px] h-[75px] absolute aspect-[1.4] object-cover"
        alt=""
        src="https://c.animaapp.com/FXVdvFcu/img/asset-2-17-1.png"
      />
    </section>
  );
}

// Wishes Section Component
interface WishMessage {
  id: number;
  name: string;
  message: string;
  timeAgo: string;
  bgColor: string;
  borderColor: string;
  nameColor: string;
  messageColor: string;
  timeColor: string;
}

function WishesSection() {
  const [guestName, setGuestName] = useState("");
  const [wishMessage, setWishMessage] = useState("");

  const wishMessages: WishMessage[] = [
    {
      id: 1,
      name: "Sarah & David",
      message:
        "Selamat atas pernikahan kalian! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu! 💕",
      timeAgo: "2 hari yang lalu",
      bgColor: "bg-[#f5eee5]",
      borderColor: "border-[#544523]",
      nameColor: "text-[#544523]",
      messageColor: "text-[#9a8960]",
      timeColor: "text-[#544523]",
    },
    {
      id: 2,
      name: "Maya",
      message:
        "Finally! Kalian memang couple goals banget. Semoga langgeng sampai kakek nenek ya! 👰🤵",
      timeAgo: "1 hari yang lalu",
      bgColor: "bg-[#f5eee5]",
      borderColor: "border-[#544523]",
      nameColor: "text-[#544523]",
      messageColor: "text-[#9a8960]",
      timeColor: "text-[#544523]",
    },
    {
      id: 3,
      name: "Ahmad & Sari",
      message:
        "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. Selamat menempuh hidup baru! 🤲",
      timeAgo: "8 jam yang lalu",
      bgColor: "bg-[#f5eee5]",
      borderColor: "border-[#544523]",
      nameColor: "text-[#544523]",
      messageColor: "text-[#9a8960]",
      timeColor: "text-[#544523]",
    },
    {
      id: 4,
      name: "Sarah & David",
      message:
        "Selamat atas pernikahan kalian! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu! 💕",
      timeAgo: "2 hari yang lalu",
      bgColor: "bg-[#f5eee5]",
      borderColor: "border-[#544523]",
      nameColor: "text-[#544523]",
      messageColor: "text-[#e25575]",
      timeColor: "text-[#544523]",
    },
    {
      id: 5,
      name: "Maya",
      message:
        "Finally! Kalian memang couple goals banget. Semoga langgeng sampai kakek nenek ya! 👰🤵",
      timeAgo: "1 hari yang lalu",
      bgColor: "bg-[#d4f3df]",
      borderColor: "border-[#eb3d5b]",
      nameColor: "text-[#bb2245]",
      messageColor: "text-[#f042c5]",
      timeColor: "text-[#26c25f]",
    },
    {
      id: 6,
      name: "Ahmad & Sari",
      message:
        "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. Selamat menempuh hidup baru! 🤲",
      timeAgo: "8 jam yang lalu",
      bgColor: "bg-[#f3cfe1]",
      borderColor: "border-[#f042c5]",
      nameColor: "text-[#9a4c86]",
      messageColor: "text-[#f042c5]",
      timeColor: "text-[#f042c5]",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Guest Name:", guestName);
    console.log("Wish Message:", wishMessage);
  };

  return (
    <div className="absolute top-[7569px] left-0 w-[1440px] h-[801px]" data-model-id="258:6914">
      <img
        className="absolute top-[calc(50.00%_-_400px)] left-0 w-[565px] h-[455px] aspect-[1.4] object-cover"
        alt="Asset"
        src="https://c.animaapp.com/L9tihUFV/img/asset-2-18.png"
      />

      <img
        className="absolute top-[299px] left-[919px] w-[521px] h-[502px] aspect-[1.14] object-cover"
        alt="Asset"
        src="https://c.animaapp.com/L9tihUFV/img/asset-1-12.png"
      />

      <header className="w-[382px] h-28 items-center absolute top-[172px] left-[calc(50.00%_-_191px)] flex flex-col gap-2.5 p-2.5">
        <h1 className="relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-5xl text-center tracking-[-0.96px] leading-[normal] whitespace-nowrap">
          Wedding Wishes
        </h1>

        <p className="relative w-[866px] ml-[-252.00px] mr-[-252.00px] [font-family:'Times_New_Roman-Italic',Helvetica] font-normal italic text-[#9a8960] text-2xl text-center tracking-[-0.48px] leading-[normal]">
          Send your love and best wishes for our classic celebration
        </p>
      </header>

      <section
        className="absolute top-[345px] left-[276px] w-[383px] h-96"
        aria-label="Send wishes form"
      >
        <div className="-top-px -left-px w-[385px] h-[386px] bg-white border border-solid border-[#9a8960] shadow-[0px_4px_4px_#00000040] absolute rounded-[10px]" />

        <form onSubmit={handleSubmit} className="relative">
          <div className="w-[333px] h-7 items-center gap-2.5 pl-0 pr-2.5 py-2.5 top-7 left-[calc(50.00%_-_166px)] flex absolute">
            <img
              className="relative w-4 h-4 mt-[-4.04px] mb-[-4.03px] aspect-[1]"
              alt=""
              src="https://c.animaapp.com/L9tihUFV/img/linear---like---heart-.svg"
              aria-hidden="true"
            />

            <label
              htmlFor="guest-name"
              className="relative w-fit mt-[-6.04px] mb-[-4.04px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap"
            >
              Kirim Ucapan
            </label>
          </div>

          <div className="w-[333px] h-11 items-center gap-2.5 p-2.5 top-14 left-[calc(50.00%_-_166px)] bg-[#f5eee5] rounded-[5px] border border-solid border-[#9a8960] flex absolute">
            <input
              type="text"
              id="guest-name"
              name="guest-name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Alif & partner"
              className="relative w-full mt-[-0.39px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl text-center tracking-[-0.40px] leading-[normal] bg-transparent placeholder:text-[#9a8960]"
              aria-label="Guest name"
            />
          </div>

          <button
            type="submit"
            className="w-[333px] h-11 items-center justify-center gap-2.5 p-2.5 top-[308px] left-[calc(50.00%_-_166px)] bg-[#544523] rounded-[10px] flex absolute hover:bg-[#6a5629] transition-colors cursor-pointer"
            aria-label="Submit wish"
          >
            <img
              className="relative w-4 h-4 aspect-[1]"
              alt=""
              src="https://c.animaapp.com/L9tihUFV/img/linear---like---heart--1.svg"
              aria-hidden="true"
            />

            <span className="relative w-fit [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-white text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              Kirim Ucapan
            </span>
          </button>

          <div className="w-[333px] h-[171px] items-start gap-2.5 p-2.5 top-[119px] left-[calc(50.00%_-_166px)] bg-[#f5eee5] rounded-[5px] border border-solid border-[#9a8960] flex absolute">
            <textarea
              id="wish-message"
              name="wish-message"
              value={wishMessage}
              onChange={(e) => setWishMessage(e.target.value)}
              placeholder="Tulis ucapan atau doa untuk mempelai..."
              className="relative w-full h-full mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#9a8960] text-xl tracking-[-0.40px] leading-[normal] bg-transparent placeholder:text-[#9a8960] resize-none"
              aria-label="Wish message"
            />
          </div>
        </form>
      </section>

      <section
        className="absolute top-[345px] left-[779px] w-[383px] h-96"
        aria-label="Guest wishes"
      >
        <div className="-top-px -left-px w-[385px] h-[386px] bg-white border border-solid border-[#9a8960] shadow-[0px_4px_4px_#00000040] absolute rounded-[10px]" />

        <div className="w-[332px] h-6 items-center gap-2.5 pl-0 pr-2.5 py-2.5 top-[26px] left-[calc(50.00%_-_166px)] flex absolute">
          <img
            className="relative w-4 h-4 mt-[-6.00px] mb-[-6.00px] aspect-[1]"
            alt=""
            src="https://c.animaapp.com/L9tihUFV/img/user-multiple.svg"
            aria-hidden="true"
          />

          <h2 className="relative w-fit mt-[-7.50px] mb-[-6.50px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-[#544523] text-base text-center tracking-[-0.32px] leading-[normal] whitespace-nowrap">
            Ucapan dari Tamu (3)
          </h2>
        </div>

        <div className="top-[60px] left-[26px] w-[334px] h-[308px] flex-col gap-[11px] overflow-hidden overflow-y-scroll flex absolute">
          {wishMessages.map((wish) => (
            <article
              key={wish.id}
              className={`w-[333px] flex justify-center ${wish.bgColor} rounded-[10px] border-l-4 [border-left-style:solid] ${wish.borderColor} shadow-[0px_4px_4px_#00000040]`}
            >
              <div className="w-[329px] h-[83px] ml-1 relative items-start flex flex-col gap-2.5 p-2.5">
                <h3
                  className={`${wish.nameColor} relative w-fit mt-[-1.00px] [font-family:'Times_New_Roman-Regular',Helvetica] font-normal text-sm tracking-[-0.28px] leading-[normal] whitespace-nowrap`}
                >
                  {wish.name}
                </h3>

                <p
                  className={`relative self-stretch [font-family:'Times_New_Roman-Regular',Helvetica] font-normal ${wish.messageColor} text-xs tracking-[-0.24px] leading-[normal]`}
                >
                  {wish.message}
                </p>

                <time
                  className={`${wish.timeColor} absolute top-[11px] left-[241px] w-[82px] [font-family:'Georgia-Regular',Helvetica] font-normal text-xs text-center tracking-[-0.24px] leading-[normal]`}
                >
                  {wish.timeAgo}
                </time>
              </div>
            </article>
          ))}
        </div>

        <div
          className="top-[60px] left-[365px] w-1 h-[307px] bg-[#d9d9d9] absolute rounded-[10px]"
          aria-hidden="true"
        />

        <div
          className="top-[60px] left-[365px] w-1 h-[50px] bg-[#544523] absolute rounded-[10px]"
          role="scrollbar"
          aria-hidden="true"
        />
      </section>
    </div>
  );
}
