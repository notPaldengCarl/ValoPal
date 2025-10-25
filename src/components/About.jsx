import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
      <p className="font-tungsten text-sm sm:text-base md:text-2xl uppercase tracking-widest text">
        NEW MAP
      </p>


        <AnimatedTitle
          title="CORRODE"
          containerClass="mt-5 !text-white text-center font-valorant"
        />

<div className="about-subtext mt-10 sm:mt-16 md:mt-24">
  <p className="text-gray-500 text-center sm:text-left text-base sm:text-lg leading-relaxed">
      A French castle town turned radianite salt mining facility. Siege your way through medieval streets, exploiting repurposed industrial machinery to battle across layered defenses in this traditional three lane map.
  </p>
          
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
