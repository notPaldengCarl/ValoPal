import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          VCT x NRG Capsule
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="NRG BUNDLE"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

<div
  className="story-img-container relative flex justify-center items-center perspective-[1200px] overflow-visible"
>
  <div
    className="story-img-mask relative w-full flex justify-center overflow-visible"
    style={{ transformStyle: "preserve-3d" }}
  >
    <div
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseLeave}
      onMouseEnter={handleMouseLeave}
      className="story-img-content relative w-full flex justify-center overflow-visible"
    >
      <img
        src="img/nrg-bundle.webp"
        alt="nrg-bundle"
        className="object-contain w-[95%] md:w-[80%] lg:w-[70%] transition-transform duration-300 drop-shadow-[0_0_25px_rgba(255,215,0,0.3)] will-change-transform"
        style={{ transformOrigin: "center center" }}
      />

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 via-yellow-200/10 to-transparent blur-3xl animate-pulse-slow" />

  
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 blur-lg animate-shimmer" />
    </div>




  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-yellow-400/10 via-transparent to-transparent rounded-3xl blur-3xl" />
</div>

            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
            The VCT x NRG Capsule is a collection of cosmetics in VALORANT as part of VCT Team Capsules 
            showcasing the VCT Americas Team NRG. 
            </p>

<Button
  id="realm-btn"
  title={
    <span className="flex items-center gap-2">
      <img
        src="img/valorant-points.webp"
        alt="vp"
        className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      2,340
    </span>
  }
  containerClass="mt-5 group bg-[#ff4655] hover:bg-[#ff5c6b] text-white font-tungsten tracking-wider px-6 py-3 rounded-lg shadow-[0_0_15px_rgba(255,70,85,0.4)] hover:shadow-[0_0_25px_rgba(255,70,85,0.7)] transition-all duration-300 active:scale-95"
/>


          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
