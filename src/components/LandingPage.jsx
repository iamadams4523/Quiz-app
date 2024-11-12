import React from 'react';
import Palette from '../assets/palette.svg';
import Biology from '../assets/activity-heart.svg';
import Chemistry from '../assets/atom-02.svg';
import Geography from '../assets/globe-05.svg';
import Physics from '../assets/compass.svg';
import English from '../assets/translate-01.svg';
import Microscope from '../assets/microscope.svg';

const LandingPage = () => {
  return (
    <>
      <div className="bg-image h-screen bg-cover">
        <header className="w-[90%] h-[10%] mx-auto pt-4 flex justify-between items-center">
          <div className="text-white text-[35px] font-bold font-['Inter'] leading-10">
            Quizopolis
          </div>
          <div className=" w-[45%] flex justify-between items-center">
            <div className="p-2 rounded-[100px] border border-white text-white text-[14px] font-['Inter'] leading-normal hover:bg-blue-400 button">
              Take a test
            </div>
            <div className="p-2 rounded-[100px] border border-white text-white text-[14px] font-['Inter'] leading-normal hover:bg-blue-400 button">
              Create a test
            </div>
            <div className="p-2 rounded-[100px] border border-white text-white text-[14px] font-['Inter'] leading-normal hover:bg-blue-400 button">
              Join a test
            </div>
          </div>
        </header>
        <body className="w-[90%] h-[308px] mx-auto mt-[6rem] flex justify-between items-center">
          <div className="w-[45%] flex-col justify-start items-start flex">
            <h1 className="text-white text-6xl font-semibold font-['Inter'] leading-[78px] tracking-wide small">
              Unleash Your Inner Wizard of Wisdom
            </h1>
            <p className="text-white text-xl font-normal font-['Inter'] leading-relaxed tracking-tight fs">
              Embark on a Journey of Knowledge. Exploration with Our Extensive
              Collection of Interactive Quizzes.
            </p>
          </div>

          <div className="w-[45%] flex-col justify-start items-start flex">
            <h2 className="text-white text-xl font-normal font-['Inter'] uppercase leading-relaxed tracking-tight">
              Hi, what topic are you interested in?
            </h2>

            <div className="w-full flex  items-center justify-between">
              <div className="w-[23%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center box-size">
                <img src={Palette} className="image" alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight font">
                  Art
                </p>
              </div>
              <div className="w-[23%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center box-size">
                <img src={Physics} className="image" alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight font">
                  Maths
                </p>
              </div>
              <div className="w-[23%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center  box-size">
                <img src={Geography} className="image" alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight font">
                  Geography
                </p>
              </div>
              <div className="w-[23%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center box-size">
                <img src={Biology} className="image" alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight font">
                  Biology
                </p>
              </div>
            </div>

            <div className="w-[80%] mt-2  mx-auto flex items-center justify-between">
              <div className="w-[30%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center box-size">
                <img src={Chemistry} className="image" alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight font">
                  Chemistry
                </p>
              </div>
              <div className="w-[30%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center box-size">
                <img src={English} className="image" alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight font">
                  English
                </p>
              </div>
              <div className="w-[30%] h-[100px] bg-white/30 rounded-2xl border border-[#dfdbe9] backdrop-blur-[20px] flex flex-col justify-center items-center box-size">
                <img src={Microscope} className="image" alt="" />
                <p className="text-center text-white text-base font-semibold font-['Inter'] leading-tight tracking-tight font">
                  Physics
                </p>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default LandingPage;
