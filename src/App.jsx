import React from 'react';
import Palette from './assets/palette.svg';

const App = () => {
  return (
    <>
      <div className="bg-image h-screen bg-cover">
        <header className="w-[90%] h-[10%] mx-auto pt-4 flex justify-between items-center">
          <div className="text-white text-[35px] font-bold font-['Inter'] leading-10">
            Quizopolis
          </div>
          <div className=" w-[45%] flex justify-between items-center">
            <div className="p-2 rounded-[100px] border border-white text-white text-[14px] font-['Inter'] leading-normal hover:bg-blue-400">
              Take a test
            </div>
            <div className="p-2 rounded-[100px] border border-white text-white text-[14px] font-['Inter'] leading-normal hover:bg-blue-400">
              Create a test
            </div>
            <div className="p-2 rounded-[100px] border border-white text-white text-[14px] font-['Inter'] leading-normal hover:bg-blue-400">
              Join a test
            </div>
          </div>
          <div className="p-2 rounded-[100px] border border-white text-white text-[16px] font-['Inter'] leading-normal hover:bg-purple-600">
            Sign up
          </div>
        </header>
        <body className="w-[90%] h-[308px] mx-auto mt-[6rem] flex justify-between items-center">
          <div className="w-[45%] flex-col justify-start items-start flex">
            <h1 className="text-white text-6xl font-semibold font-['Inter'] leading-[78px] tracking-wide">
              Unleash Your Inner Wizard of Wisdom
            </h1>
            <p className="text-white text-xl font-normal font-['Inter'] leading-relaxed tracking-tight">
              Embark on a Journey of Knowledge. Exploration with Our Extensive
              Collection of Interactive Quizzes.
            </p>
          </div>

          <div className="w-[45%] flex-col justify-start items-start flex">
            <h2 className="text-center text-white text-xl font-normal font-['Inter'] uppercase leading-relaxed tracking-tight">
              Hi Andrew! what topic are you interested in?
            </h2>

            <div className="w-full flex  items-center justify-between">
              <div className="w-[23%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center ">
                <img src={Palette} alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                  Science
                </p>
              </div>
              <div className="w-[23%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center ">
                <img src={Palette} alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                  Science
                </p>
              </div>
              <div className="w-[23%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center ">
                <img src={Palette} alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                  Science
                </p>
              </div>
              <div className="w-[23%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center ">
                <img src={Palette} alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                  Science
                </p>
              </div>
            </div>

            <div className="w-[80%] mt-2  mx-auto flex items-center justify-between">
              <div className="w-[30%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center ">
                <img src={Palette} alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                  Science
                </p>
              </div>
              <div className="w-[30%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center ">
                <img src={Palette} alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                  Science
                </p>
              </div>
              <div className="w-[30%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center ">
                <img src={Palette} alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                  Science
                </p>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default App;

{
  /* <div className="w-[441px] text-center text-white text-xl font-normal font-['Inter'] uppercase leading-relaxed tracking-tight">
              Hi Andrew! what topic are you interested in?
            </div>
            <div className="flex-col justify-start items-center gap-4 flex">
              <div className="w-[644px] justify-between items-start inline-flex">
                <div className="w-[115px] h-[121px] relative">
                  <div className="w-[115px] h-[121px] left-0 top-0 absolute bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px]" />
                  <div className="left-[38px] top-[24px] absolute flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-10 h-10 relative" />
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                      Art
                    </div>
                  </div>
                </div>
                <div className="w-[115px] h-[121px] relative">
                  <div className="w-[115px] h-[121px] left-0 top-0 absolute bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px]" />
                  <div className="left-[26px] top-[24px] absolute flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-10 h-10 relative" />
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                      Science
                    </div>
                  </div>
                </div>
                <div className="w-[115px] h-[121px] relative">
                  <div className="w-[115px] h-[121px] left-0 top-0 absolute bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px]" />
                  <div className="left-[24px] top-[24px] absolute flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-10 h-10 relative" />
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                      Weather
                    </div>
                  </div>
                </div>
                <div className="w-[115px] h-[121px] relative">
                  <div className="w-[115px] h-[121px] left-0 top-0 absolute bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px]" />
                  <div className="left-[27px] top-[24px] absolute flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-10 h-10 relative" />
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                      Physics
                    </div>
                  </div>
                </div>
                <div className="w-[115px] h-[121px] relative">
                  <div className="w-[115px] h-[121px] left-0 top-0 absolute bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px]" />
                  <div className="left-[14px] top-[24px] absolute flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-10 h-10 relative" />
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                      Geography
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-[17px] inline-flex">
                <div className="w-[115px] h-[121px] relative">
                  <div className="w-[115px] h-[121px] left-0 top-0 absolute bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px]" />
                  <div className="left-[37.50px] top-[24px] absolute flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-10 h-10 relative" />
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                      Math
                    </div>
                  </div>
                </div>
                <div className="w-[115px] h-[121px] relative">
                  <div className="w-[115px] h-[121px] left-0 top-0 absolute bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px]" />
                  <div className="left-[18.50px] top-[24px] absolute flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-10 h-10 relative" />
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                      Language
                    </div>
                  </div>
                </div>
                <div className="w-[115px] h-[121px] relative">
                  <div className="w-[115px] h-[121px] left-0 top-0 absolute bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px]" />
                  <div className="left-[14.50px] top-[24px] absolute flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-10 h-10 relative" />
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                      Astronomy
                    </div>
                  </div>
                </div>
                <div className="w-[115px] h-[121px] relative">
                  <div className="w-[115px] h-[121px] left-0 top-0 absolute bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px]" />
                  <div className="left-[31.50px] top-[24px] absolute flex-col justify-start items-center gap-3 inline-flex">
                    <div className="w-10 h-10 relative" />
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight">
                      Health
                    </div>
                  </div>
                </div>
              </div>
            </div> */
}
