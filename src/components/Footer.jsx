import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] border-t border-neutral-800 py-10 text-neutral-400">
      <div className="container mx-auto flex flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-md text-xs leading-relaxed">
          © 2020–2025 Riot Games, Inc. RIOT GAMES, VALORANT and any associated logos are trademarks,
          service marks, and/or registered trademarks of Riot Games, Inc.
        </div>


        <div className="mt-8 flex justify-center gap-5 text-lg">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 text-xs md:items-end">
          <a
            href="#privacy-policy"
            className="transition-colors duration-300 hover:text-white hover:underline"
          >
            Privacy Notice
          </a>
          <a
            href="#terms-of-service"
            className="transition-colors duration-300 hover:text-white hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#company-information"
            className="transition-colors duration-300 hover:text-white hover:underline"
          >
            Company Information
          </a>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-5 opacity-60">
        <img src="img/pegi.jpg" alt="PEGI 16" className="h-12" />
        <img src="img/violence.png" alt="Violence" className="h-12" />
        <img src="img/in-game.png" alt="In-game Purchases" className="h-12" />
      </div>
    </footer>
  );
};

export default Footer;
