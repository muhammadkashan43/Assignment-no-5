import Image from "next/image";
import {
  nunitoSans,
  libreBodoni,
  rye,
  playfairDisplay,
  lato,
  oswald,
} from "../utils/fonts/fonts";
export default function Home() {
  return (
    <>
      <section>
        <header>
          <div className="bg-[#A29875] flex w-full h-[65px] items-center xl:h-[90px]  ">
            <div className="ml-8 cursor-pointer w-[140px] ">
              <Image
                src={"/Group 14222.png"}
                alt="logo"
                width={400}
                height={200}
              />
            </div>

            <div className="flex items-center relative ">
              <input
                className={`${nunitoSans.className} text-black text-sm w-[600px] p-[8px] pl-6 ml-44 rounded-lg focus:outline-none pr-9`}
                type="text"
                placeholder="Search for Gold Jewellery, Diamond and more..."
              />
              <a
                href="#"
                className="absolute fill-black w-5 left-[755px] hover:scale-110 transition-transform duration-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  width="1.25em"
                >
                  <path d="m16.9994165 16.2923098 3.8541369 3.8541368c.1952621.1952622.1952621.5118446 0 .7071068-.1952622.1952621-.5118446.1952621-.7071068 0l-3.8541368-3.8541369c-1.4103486 1.2450743-3.2630999 2.0005835-5.2923098 2.0005835-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8c0 2.0292099-.7555092 3.8819612-2.0005835 5.2923098zm-5.9994165 1.7076902c3.8659932 0 7-3.1340068 7-7 0-3.86599325-3.1340068-7-7-7-3.86599325 0-7 3.13400675-7 7 0 3.8659932 3.13400675 7 7 7z" />
                </svg>
              </a>
            </div>
            <div className="flex fill-black relative items-center">
              <a
                href="#"
                className="absolute fill-white text-lg w-7 h-10 left-[157px] -bottom-[20px]"
              >
                <svg
                  className="w-[40px] h-[40px] text-gray-800 dark:text-white hover:scale-110 transition-transform duration-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="0.7"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </a>
            </div>
            <div className="flex items-center relative">
              <a
                href="#"
                className="absolute fill-white text-lg w-7 h-7 left-[90px] -bottom-[9px] "
              >
                <svg
                  className="w-[38px] h-[38px] text-gray-800 dark:text-white hover:scale-110 transition-transform duration-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.6"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
              </a>
            </div>
            <div className="flex justify-center relative">
              <a
                href="#"
                className="absolute fill-white text-lg w-7 h-7 left-[222px] -bottom-[7px]"
              >
                <svg
                  className="w-[38px] h-[38px] text-gray-800 dark:text-white  hover:scale-110 transition-transform duration-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0.6"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
              </a>
            </div>
          </div>
        </header>
      </section>
      <section>
        <main>
          <div className="absolute left-20 top-28 w-[1060px] h-[400px] flex">
            <div>
              <h1
                className={`${libreBodoni.className} absolute font-bold w-[400.97px] leading-relaxed text-3xl h-[162.53px] tracking-wide top-9`}
              >
                IMPECCABLE CRAFTSMANSHIP AND FINESSE
              </h1>
              <p
                className={`${libreBodoni.className} absolute text-[#787054] top-[210px] w-[630px] text-[22px] leading-8 tracking-wide `}
              >
                An example of intricate workmanship and detail, elegant
                neckleces and long and short chains from a part of our desirable
                collection.
              </p>
              <button
                className={`${libreBodoni.className} bg-[#A29875] text-white absolute px-9 py-[5px] rounded-lg top-[338px] text-l hover:scale-110 transition-transform duration-400 border-`}
              >
                Explore Now
              </button>
            </div>
            <div className="absolute left-[700px] rounded-tl-[150px] rounded-br-[150px] w-[500px] ">
                <Image
                  src={"/mainmodal.jpeg"}
                  alt="Modal wearing neckless"
                  width={300}
                  height={400}
                  style={{
                    borderTopLeftRadius: "95px",
                    borderBottomRightRadius: "95px",
                    border: "6px solid black",
                    borderWidth: "1px", // Added this line to fix the 'border-spacing' error
                  }}
                />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
