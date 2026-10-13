
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  ChevronDown,
  Sparkles,
  Flower2,
  Music2,
  VolumeX,
  CalendarDays,
  Clock3,
  Church,
  MapPin,
} from "lucide-react";

const photos = [
  { src: "/images/xhyza-1.jpg", caption: "Our Little Miracle" },
  { src: "/images/xhyza-2new.jpg", caption: "A Gift from Above" },
  { src: "/images/xhyza-3.jpg", caption: "Forever Loved" },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FloatingDecorations() {
  const decorations = [
    { symbol: "✿", left: "8%", top: "15%", delay: 0 },
    { symbol: "✧", left: "82%", top: "12%", delay: 1 },
    { symbol: "❀", left: "75%", top: "72%", delay: 2 },
    { symbol: "✦", left: "15%", top: "78%", delay: 0.5 },
    { symbol: "♡", left: "90%", top: "45%", delay: 1.5 },
  ];

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {decorations.map((item, index) => (
        <motion.span
          key={index}
          className="absolute text-3xl text-[#d7a6a3]/50"
          style={{ left: item.left, top: item.top }}
          animate={{
            y: [0, -18, 0],
            rotate: [-8, 8, -8],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.symbol}
        </motion.span>
      ))}
    </div>
  );
}

function CloudDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -bottom-24 -left-16 h-48 w-72 rounded-full bg-white/80 blur-2xl" />
      <div className="absolute -bottom-20 left-1/4 h-52 w-80 rounded-full bg-white/90 blur-2xl" />
      <div className="absolute -bottom-24 right-0 h-52 w-80 rounded-full bg-white/80 blur-2xl" />
    </div>
  );
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  
const audioRef = useRef<HTMLAudioElement>(null);
const [isPlaying, setIsPlaying] = useState(false);

const openInvitation = () => {
  setOpened(true);

  const audio = audioRef.current;

  if (audio) {
    audio.volume = 0.35;

    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }
};

const toggleMusic = () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (audio.paused) {
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  } else {
    audio.pause();
    setIsPlaying(false);
  }
};

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fffaf8] text-[#765c56]">
      
{/* Background music */}
<audio
  ref={audioRef}
  src="/music/christening-new.mp3"
  loop
  preload="auto"
/>

{/* Floating music control */}
{opened && (
  <motion.button
    type="button"
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    onClick={toggleMusic}
    aria-label={isPlaying ? "Pause music" : "Play music"}
    aria-pressed={isPlaying}
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#e6c5a6] bg-[#fff8f5]/95 text-[#b97f84] shadow-lg backdrop-blur-md"
  >
    {isPlaying ? (
      <Music2 size={23} />
    ) : (
      <VolumeX size={23} />
    )}
  </motion.button>
)}

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.section
            key="envelope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.08, y: -30 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#fff8f6] to-[#fbe4e3] px-6"
          >
            <FloatingDecorations />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 text-center"
            >
              <Flower2
                size={30}
                className="mx-auto mb-6 text-[#cfa0a0]"
              />

              <p className="mb-10 text-xs uppercase tracking-[0.3em] text-[#ae817d]">
                A little blessing awaits you
              </p>
            </motion.div>

            <motion.button
              type="button"
              aria-label="Open Xhyza Maria's invitation"
              onClick={openInvitation}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative z-10 flex h-56 w-80 max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e9b6b5] shadow-[0_25px_70px_rgba(155,91,91,0.25)]"
            >
              <div
                className="absolute inset-0 bg-[#f8d8d4]"
                style={{
                  clipPath: "polygon(0 0, 50% 55%, 100% 0)",
                }}
              />

              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#f5dca5] bg-[#c69b60] shadow-lg">
                <Heart
                  size={24}
                  fill="#fff3e7"
                  color="#fff3e7"
                />
              </div>
            </motion.button>

            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="relative z-10 mt-10 text-xs uppercase tracking-[0.3em]"
            >
              Tap to open
            </motion.p>

            <p className="relative z-10 mt-5 font-serif text-3xl italic text-[#b97f84]">
              Xhyza Maria
            </p>
          </motion.section>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* HERO SECTION */}
            <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#fff2f0] via-[#fffaf7] to-[#f9e5e4] px-6 py-20 text-center">
              <FloatingDecorations />

              <div className="relative z-10 mx-auto w-full max-w-xl">
                <Reveal>
                  <Sparkles
                    size={28}
                    className="mx-auto mb-5 text-[#c99c68]"
                  />

                  <p className="text-xs uppercase tracking-[0.35em] text-[#ae827e]">
                    A little angel sent from above
                  </p>
                </Reveal>

                {/* MAIN PHOTO */}
                <Reveal delay={0.2} className="my-10">
                  <div className="relative mx-auto h-72 w-72 max-w-full sm:h-80 sm:w-80">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 90,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-4 rounded-full border border-dashed border-[#d9b987]"
                    />

                    <div className="relative h-full w-full overflow-hidden rounded-full border-[9px] border-white shadow-[0_15px_55px_rgba(171,113,113,0.25)]">
                      <Image
                        src="/images/xhyza-christening.png"
                        alt="Xhyza Maria"
                        fill
                        priority
                        sizes="(max-width: 640px) 288px, 320px"
                        className="object-cover"
                      />
                    </div>

                    <span className="absolute -bottom-5 -left-5 text-5xl text-[#dba5ac]">
                      ❀
                    </span>
                    <span className="absolute -right-5 top-4 text-4xl text-[#dba5ac]">
                      ✿
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <p className="mb-4 text-xs uppercase tracking-[0.35em]">
                    You are invited to the Holy Baptism of
                  </p>

                  <h1 className="font-serif text-5xl leading-tight text-[#b97f84] sm:text-7xl">
                    Xhyza Maria
                  </h1>

                  <p className="mt-5 font-serif text-2xl italic text-[#9b7770]">
                    A beautiful beginning in faith
                  </p>
                </Reveal>
              </div>

              <CloudDecoration />

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative z-10 mt-16 flex flex-col items-center gap-2 text-[#b58a84]"
              >
                <span className="text-xs uppercase tracking-widest">
                  Scroll to discover
                </span>
                <ChevronDown size={22} />
              </motion.div>
            </section>

            {/* BIBLE VERSE */}
            <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-white px-8 py-24 text-center">
              <FloatingDecorations />

              <Reveal className="relative z-10 max-w-lg">
                <div className="mb-8 text-5xl text-[#d3ac79]">
                  ✝
                </div>

                <blockquote className="font-serif text-2xl italic leading-relaxed text-[#a07877] sm:text-3xl">
                  “Let the little children come to me.”
                </blockquote>

                <p className="mt-7 text-xs uppercase tracking-[0.3em]">
                  Matthew 19:14
                </p>
              </Reveal>
            </section>

            {/* PARENTS' INVITATION */}
            <section className="relative flex min-h-[75vh] items-center justify-center bg-[#fff0ee] px-8 py-24 text-center">
              <Reveal className="max-w-lg">
                <Flower2
                  size={35}
                  className="mx-auto mb-7 text-[#ca9c9c]"
                />

                <p className="text-xs uppercase tracking-[0.3em]">
                  With love and gratitude
                </p>

                <h2 className="mt-6 font-serif text-4xl text-[#b97f84]">
                  Our Little Miracle
                </h2>

                <p className="mt-8 leading-9">
                  With hearts full of joy, we invite you to
                  celebrate the Holy Baptism of our precious
                  daughter, Xhyza Maria.
                  Your presence and prayers will make
                  this blessed occasion even more meaningful.
                </p>

                <p className="mt-12 font-serif text-2xl italic text-[#b97f84]">
                  Virginio &amp; Zyra Jean
                </p>
              </Reveal>
            </section>

            
            {/* CHRISTENING DETAILS */}
            <section className="relative overflow-hidden bg-linear-to-b from-[#fffaf8] to-[#fce9e8] px-6 py-24 text-center">
              <FloatingDecorations />

              <Reveal className="relative z-10 mx-auto max-w-xl">
                <Church
                  size={38}
                  className="mx-auto mb-6 text-[#c99c68]"
                />

                <p className="text-xs uppercase tracking-[0.35em] text-[#b88e88]">
                  Save the Date
                </p>

                <h2 className="mt-5 font-serif text-4xl text-[#b97f84] sm:text-5xl">
                  A Blessed Day
                </h2>

                <p className="mt-5 font-serif text-xl italic">
                  We would love to celebrate with you
                </p>

                <div className="mt-12 rounded-t-[8rem] rounded-b-3xl border border-[#ead3bf] bg-white/80 px-6 pb-12 pt-16 shadow-[0_15px_50px_rgba(155,91,91,0.10)] backdrop-blur-sm">

                  {/* DATE */}
                  <CalendarDays
                    size={26}
                    className="mx-auto text-[#c99c68]"
                  />

                  <p className="mt-4 text-xs uppercase tracking-[0.3em]">
                    Sunday
                  </p>

                  <p className="mt-3 font-serif text-5xl text-[#b97f84]">
                    October 18
                  </p>

                  <p className="mt-2 text-lg tracking-widest">
                    2026
                  </p>

                  <div className="mx-auto my-9 h-px w-32 bg-[#e7c9b9]" />

                  {/* TIME */}
                  <Clock3
                    size={26}
                    className="mx-auto text-[#c99c68]"
                  />

                  <h3 className="mt-4 font-serif text-2xl text-[#b97f84]">
                    Holy Mass
                  </h3>

                  <p className="mt-2 text-xl font-medium">
                    7:00 AM
                  </p>

                  <p className="mt-4 font-serif text-lg italic">
                    Christening immediately after Mass
                  </p>

                  <div className="mx-auto my-9 h-px w-32 bg-[#e7c9b9]" />

                  {/* VENUE */}
                  <MapPin
                    size={26}
                    className="mx-auto text-[#c99c68]"
                  />

                  <h3 className="mt-4 font-serif text-2xl text-[#b97f84]">
                    Blessed Virgin Mary Chapel
                  </h3>

                  <p className="mt-3 leading-7">
                    Mindanao State University
                  </p>

                  <div className="mx-auto my-9 h-px w-32 bg-[#e7c9b9]" />

                  {/* RECEPTION */}
                  <Flower2
                    size={26}
                    className="mx-auto text-[#c99c68]"
                  />

                  <h3 className="mt-4 font-serif text-2xl text-[#b97f84]">
                    Reception
                  </h3>

                  <p className="mt-3 leading-7">
                    Following the christening
                    <br />
                    at the same venue
                  </p>

                  <p className="mt-10 font-serif text-xl italic text-[#b97f84]">
                    Your presence is our greatest blessing.
                  </p>
                </div>
              </Reveal>
            </section>


            {/* PHOTO GALLERY */}
            <section className="bg-[#fffaf8] px-6 py-24 text-center">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-[#b88e88]">
                  Precious little moments
                </p>

                <h2 className="mt-5 font-serif text-4xl text-[#b97f84] sm:text-5xl">
                  Heaven Sent
                </h2>

                <p className="mx-auto mt-5 max-w-md leading-8">
                  Every smile, every little moment,
                  a beautiful blessing to treasure.
                </p>
              </Reveal>

              <div className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-3">
                {photos.map((photo, index) => (
                  <Reveal key={photo.src} delay={index * 0.12}>
                    <div className="rounded-t-full rounded-b-2xl bg-white p-3 pb-7 shadow-[0_15px_45px_rgba(155,91,91,0.12)]">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-lg">
                        <Image
                          src={photo.src}
                          alt={photo.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>

                      <p className="mt-6 font-serif text-xl italic text-[#b97f84]">
                        {photo.caption}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* CLOSING */}
            <footer className="bg-gradient-to-b from-[#fff0ee] to-[#f8dedd] px-6 py-20 text-center">
              <Reveal>
                <Heart
                  size={26}
                  className="mx-auto mb-6 text-[#c99595]"
                />

                <p className="font-serif text-3xl italic text-[#b97f84]">
                  Made with love
                </p>

                <p className="mt-4 text-sm tracking-widest">
                  FOR XHYZA MARIA
                </p>

                <p className="mt-8 text-xs text-[#a88a83]">
                  A little blessing, a lifetime of love.
                </p>
              </Reveal>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
