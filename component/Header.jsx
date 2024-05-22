"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logoImg from "@/assets/img/logo1.svg";
import Button from "./UI/Button";
import "./Header.css";
import DarckMode from "./UI/DarckMode.jsx";

const navigation = [
  {
    name: "About Me",
    href: "https://www.canva.com/design/DAFc0sDfrCg/YF_MuM57f0007UGdbNyotA/view?utm_content=DAFc0sDfrCg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
  },
  {
    name: "My Projects",
    href: "https://github.com/KhomenkoJenia?tab=repositories",
  },
  {
    name: "Sprite example",
    href: "https://khomenkojenia.github.io/Jenia_Khomenko/animation_new.html",
  },
  { name: "Contacts", href: "#contact" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <div className="logo text-sm font-bold leading-6 text-gray-900">
              JeniaKhomenko
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 nav-menu justify-start">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
          <div>
            <DarckMode />
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="Jeniaaajeniaaa@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <Button>Contact Me</Button>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
                <DarckMode />
              </div>
              <div className="py-6">
                <a
                  href="mailto:info@decvolt.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Contact Us</Button>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;
