import footerImg from "@/assets/img/logoFooter.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center mt-4">
      <div className="footerImage flex flex-col md:flex-row gap-5 justify-between py-4 md:pr-20 md:pl-10 w-full text-xs text-black md:max-w-full mx-auto">
        <div className="my-auto max-w-full aspect-[2.7] w-[119px] "></div>
        <div className="flex flex-grow flex-col justify-center items-center px-5 md:px-16 py-4 backdrop-blur-[32.75px] rounded-[43px] md:justify-between">
          <div className="footerImage flex gap-4  justify-between max-w-full w-[458px] md:max-w-none flex-col md:flex-row">
            <a href="#vision">
              <div>About</div>
            </a>
            <a href="#product">
              <div>Contat</div>
            </a>
            <a href="#about">
              <div>My Work</div>
            </a>
            <a href="#contact">
              <div>Info</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
