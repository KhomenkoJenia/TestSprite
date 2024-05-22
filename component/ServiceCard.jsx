import * as React from "react";
import "./ServiceCard.module.css";

function ServiceCard() {
  return (
    <div className="flex flex-col flex-wrap content-start">
      <div className="px-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-6 text-2xl leading-9 rounded border-2 border-green-600 border-solid text-zinc-800 max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/84e8d36813c9f04edbe29c9c8b72aa1621b5a04884b9ff3f91c23ba0bfb11a6b?apiKey=d3787cd48a20414ca76b636b5d2f807e&"
                className="self-end aspect-[0.94] w-[94px]"
              />
              <div className="mt-6 text-4xl font-semibold leading-10 text-slate-900">
                Plumbing
              </div>
              <div className="mt-6">Install / Replace a Toilet</div>
              <div className="mt-3">Install / Replace a Faucet</div>
              <div className="mt-3">Fix a Leaking</div>
              <div className="mt-3">Install / Replace a Sink</div>
              <div className="mt-3">Repair Under Sink Plumbing</div>
              <div className="self-end mt-6 underline">View more</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-6 text-2xl leading-9 rounded border-2 border-sky-600 border-solid text-zinc-800 max-md:mt-6 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7333c8733a5be9c3b447c8a5a48a40ecf5af6789d1e22c98e46bcd51d8c4596c?apiKey=d3787cd48a20414ca76b636b5d2f807e&"
                className="self-end mr-6 aspect-[0.91] w-[91px] max-md:mr-2.5"
              />
              <div className="flex flex-col px-6 mt-6 max-md:px-5 max-md:max-w-full">
                <div className="text-4xl font-semibold leading-10 text-slate-900">
                  Drywall & painting
                </div>
                <div className="mt-6">Install Drywall</div>
                <div className="mt-3">Patch and Paint Drywall</div>
                <div className="mt-3">Paint a Wall / Trim</div>
                <div className="mt-3">Paint or Stain A Fence</div>
                <div className="mt-3">Paint a Cabinet Door</div>
                <div className="self-end mt-6 underline">View more</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-6 text-2xl leading-9 rounded border-2 border-amber-400 border-solid text-zinc-800 max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0c30e21ea08dca7ed27b8856d648c2d5980b4ce5d9781657730036790780fd?apiKey=d3787cd48a20414ca76b636b5d2f807e&"
                className="self-end max-w-full aspect-[1.23] w-[123px]"
              />
              <div className="mt-6 text-4xl font-semibold leading-10 text-slate-900">
                Furniture assembly
              </div>
              <div className="mt-6">Assemble Fitness Equipment</div>
              <div className="mt-3">Assemble - Custom Request</div>
              <div className="mt-3">Assemble a TV Stand</div>
              <div className="mt-3">Assemble Pet Furniture</div>
              <div className="mt-3">Assemble a Bar Cabinet</div>
              <div className="self-end mt-6 underline">View more</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-5 text-2xl leading-9 rounded border-2 border-red-600 border-solid text-zinc-800 max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3eff8f76cea32cc033ead60be2138cb9ea83de936815636ea6afe66e4116ba2?apiKey=d3787cd48a20414ca76b636b5d2f807e&"
                className="self-end max-w-full aspect-[1.11] w-[111px]"
              />
              <div className="mt-6 text-4xl font-semibold leading-10 text-slate-900">
                Electrical
              </div>
              <div className="mt-6">Install / Replace a Ceiling Fan</div>
              <div className="mt-3 leading-9">
                Replace Switch & Outlet Faceplate
              </div>
              <div className="mt-3">Upgrade to a Video Doorbell</div>
              <div className="mt-3 leading-9">
                Install / Replace an Bathroom Exhaust Fan
              </div>
              <div className="self-end mt-6 underline">View more</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-5 text-2xl leading-9 rounded border-2 border-green-600 border-solid text-zinc-800 max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d7d2753a968cb2d8e16537f84a1ab4ebbcba8a71c03c042218f699df14946e1?apiKey=d3787cd48a20414ca76b636b5d2f807e&"
                className="self-end max-w-full aspect-[1.1] w-[110px]"
              />
              <div className="mt-6 text-4xl font-semibold leading-10 text-slate-900">
                Doors & windows
              </div>
              <div className="mt-6">Install / Replace New Door</div>
              <div className="mt-3 leading-9">
                Install / Replace a Screen Door
              </div>
              <div className="mt-3 leading-9">
                Install / Replace a Window Screen
              </div>
              <div className="mt-3">Repair a Door Frame</div>
              <div className="self-end mt-6 underline">View more</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-5 text-2xl leading-9 rounded border-2 border-sky-600 border-solid text-zinc-800 max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/afa565a417b2d0176c6d7715c793aa0453fab4a3a386c83a7f034ea6d62e5218?apiKey=d3787cd48a20414ca76b636b5d2f807e&"
                className="self-end max-w-full aspect-[1.18] w-[117px]"
              />
              <div className="mt-6 text-4xl font-semibold leading-10 text-slate-900">
                Hanging & mounting
              </div>
              <div className="mt-6">Mount a TV</div>
              <div className="mt-3 leading-9">Remove a TV Mount from Wall</div>
              <div className="mt-3 leading-9">
                Mount and Hang a Projector Screen
              </div>
              <div className="mt-3">Hang a Bathroom Fixture</div>
              <div className="self-end mt-6 underline">View more</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-6 text-2xl leading-9 rounded border-2 border-amber-400 border-solid text-zinc-800 max-md:mt-6 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c7e28536ed2ddcb7fd7dd5c2876158e8b1931b57974f4c4201847996f1f38e4?apiKey=d3787cd48a20414ca76b636b5d2f807e&"
                className="self-end mr-6 aspect-[0.98] w-[98px] max-md:mr-2.5"
              />
              <div className="flex flex-col px-6 mt-6 max-md:px-5 max-md:max-w-full">
                <div className="text-4xl font-semibold leading-10 text-slate-900">
                  Appliance installation
                </div>
                <div className="mt-6">Replace an Existing Dishwasher</div>
                <div className="mt-3">Replace an Existing Microwave</div>
                <div className="mt-3 leading-[150%]">
                  Replace an Existing Oven{" "}
                </div>
                <div className="self-end mt-28 underline leading-[150%] max-md:mt-10">
                  View more
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-6 text-2xl leading-9 rounded border-2 border-red-600 border-solid text-zinc-800 max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f7cf886cd7ca486b95d8c9ff707414170d487dc35a3199de3e782b0d94b54d2?apiKey=d3787cd48a20414ca76b636b5d2f807e&"
                className="self-end max-w-full aspect-[1.16] w-[116px]"
              />
              <div className="mt-6 text-4xl font-semibold leading-10 text-slate-900">
                Smart home
              </div>
              <div className="mt-6 leading-[150%]">Install a Smart Lock</div>
              <div className="mt-3">Install a Smart Home Security Camera</div>
              <div className="mt-3">
                Mount a Baby Monitor Camera on the Wall
              </div>
              <div className="mt-3">
                Install an Under Sink Water Filtration System{" "}
              </div>
              <div className="self-end mt-6 underline leading-[150%]">
                View more
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-6 text-2xl leading-9 rounded border-2 border-green-600 border-solid text-zinc-800 max-md:mt-6 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d8c8edeb79db349a513f3a12f5563ece5c818a7adb2c3d5cdaf16798dc6a25f?apiKey=d3787cd48a20414ca76b636b5d2f807e&"
                className="self-end mr-6 aspect-[0.94] w-[94px] max-md:mr-2.5"
              />
              <div className="flex flex-col px-6 mt-6 max-md:px-5 max-md:max-w-full">
                <div className="text-4xl font-semibold leading-10 text-slate-900">
                  Outdoor
                </div>
                <div className="mt-6 leading-9">
                  {" "}
                  Assemble an Outdoor Trampoline
                </div>
                <div className="mt-3">Hang a Garage Shelving Unit</div>
                <div className="mt-3 leading-9">
                  Install Outdoor Decorative Exterior Window Shutters
                </div>
                <div className="mt-3">Install a Storm Door </div>
                <div className="self-end mt-16 underline max-md:mt-10">
                  View more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
