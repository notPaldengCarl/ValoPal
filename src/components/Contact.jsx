import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/valorant-story.png"
            clipClass="contact-clip-path-1"
          />
        </div>

                <div className="absolute -top-20 left-10 w-64 sm:top-1/3 md:right-10 md:left-auto lg:top-10 lg:w-80">
          <ImageClipBox
            src="/img/contact-1.jpg"
            clipClass="contact-clip-base md:scale-110"
          />
          <ImageClipBox
            src="/img/contact-1.jpg"
            clipClass="contact-clip-overlay md:scale-110"
          />
        </div>


        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Contact Us!
          </p>

          <AnimatedTitle
            title="Carl<br>Paldeng"
            className="special-font !md:text-[6.2rem] w-full font-valorant !text-5xl !font-black !leading-[.9]"
          />

          <Button title="Click here!" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
