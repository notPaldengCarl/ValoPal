import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";


export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (window.innerWidth < 640) return; 
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => setTransformStyle("");

  return (
    <div
      ref={itemRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};


export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="relative size-full rounded-xl overflow-hidden">
      <img
        src={src}
        loop
        muted
        autoPlay
        playsInline
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex flex-col justify-between size-full p-4 sm:p-5 md:p-6 text-blue-50">
        <div>
          <h1 className="bento-title special-font text-2xl sm:text-3xl md:text-5xl leading-none">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs sm:text-sm md:text-base opacity-80">
              {description}
            </p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHoverOpacity(1)}
            onMouseLeave={() => setHoverOpacity(0)}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase text-white/40"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20 text-[10px] sm:text-sm" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};


const Features = () => (
  <section className="bg-black pb-16 sm:pb-28 md:pb-52">
    <div className="container mx-auto px-3 sm:px-6 md:px-10">

      <div className="px-2 sm:px-5 py-12 sm:py-20 md:py-32 space-y-4 text-center md:text-left">
        <p className="font-tungsten text-2xl xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight text-blue-50">
          Corrode is a traditional two-site three-lane map. 
        </p>
        <p className="mx-auto md:mx-0 max-w-md sm:max-w-xl font-circular-web text-xs sm:text-base md:text-lg text-blue-50 opacity-70">
          It is the second standard map to be released that does not contain any dynamic elements or mechanical hooks for gameplay.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-6 sm:mb-10 h-[30vh] sm:h-[45vh] md:h-[60vh] w-full overflow-hidden rounded-xl">
        <BentoCard
          src="img/feature-4.gif"
          title="YOUR AGENTS"
          description="More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-[200px] sm:auto-rows-[300px] md:auto-rows-[40vh]">

        <BentoTilt className="col-span-1 md:row-span-2 h-full">
          <BentoCard src="img/feature-2.gif" title="YOUR MAPS" description="Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come." isComingSoon />
        </BentoTilt>

        <BentoTilt className="col-span-1 h-full">
          <BentoCard src="img/feature-3.gif" title="AGENT STORIES" description="Behind every mask is a purpose. Explore the backstories, rivalries, and bonds that power each agent." isComingSoon />
        </BentoTilt>

        <BentoTilt className="col-span-1 md:row-span-2 h-full">
          <BentoCard src="img/feature-6.webp" title="CHAMPIONSHIP" description="Witness the best clash for glory. From local circuits to the global stage — this is where legends rise, and history is written." isComingSoon />
        </BentoTilt>

         <BentoTilt className="col-span-1 md:row-span-1 h-full">
          <BentoCard src="img/feature-5.gif" title="THE FUTURE" description="Valorant’s world keeps expanding — new agents, new maps, new stories. The fight has just begun." isComingSoon />
        </BentoTilt>

      </div>


      <div className="mt-8 sm:mt-12 md:mt-16">
        <BentoTilt className="rounded-xl overflow-hidden h-[25vh] sm:h-[35vh] md:h-[45vh]">
          <img
            src="img/feature-1.gif"
            loop
            muted
            autoPlay
            playsInline
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
