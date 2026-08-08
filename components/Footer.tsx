import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative w-full overflow-visible">
      <div className="pointer-events-none absolute inset-x-0 -bottom-16 h-[24rem] w-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full object-cover opacity-50"
        />
      </div>

      <footer className="relative z-10 w-full scroll-mt-28 pt-20 pb-10" id="contact">
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center">
            Ready to take <span className="text-purple-300">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-slate-300 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:royd3366@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="relative z-10 mt-16 flex md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light mb-5 md:mb-0 md:ml-5 ">
            Copyright © {new Date().getFullYear()} Dhiraj Roy.
          </p>

          <div className="flex items-center md:gap-3 gap-6 md:mr-5">
            {socialMedia.map((info) => (
              <Link href={info.link} target="_blank"
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;