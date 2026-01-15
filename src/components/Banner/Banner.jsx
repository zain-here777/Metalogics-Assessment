import React from 'react';
import { SectionContent } from '../global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/**
 * About Section Component
 * Displays information about the company
 */
const Banner = () => {
  const bannerContent = {
    tagline: "Freeport Music Studio",
    taglineIcon: "music",
    heading: "Modern Tools, Classical ",
    headingHighlight: "Training",
    belowHighlight: ",Lifelong Skills",
    description: "Personalized music education that inspires creativity, discipline, and joy—whether you're a beginner or advancing your craft",
    buttons: [
      {
        href: "#",
        icon: "arrow-right",
        iconPosition: "left",
        variant: "primary",
        children: "Register for Lessons"
      },
      {
        href: "#",
        variant: "secondary",
        children: "Contact Us"
      }
    ]
  };

  return (
    <div className='bg-white relative has-blueeffect has-effect overflow-hidden lg:pt-[178px] pt-[150px] mt-[-144px]'>
      <div className='relative has-blueeffect'>
        <div className='lg:p-[30px] p-[20px]  z-50 xl:container m-auto gap-[70px] flex justify-between max-lg:flex-col'>
           <div className="lg:max-w-[548px] flex-none w-full [&_>span]:mb-[20px]">
              <div className="w-full">
                <span className="tagline mb-[20px] flex items-center gap-2">
                  <FontAwesomeIcon icon="fa-solid fa-music" />
                  Freeport Music Studio
                </span>

                <div className="banner-tittle banner-pattern">
                  <h1>
                    Modern Tools, Classical <span className="text-[#E86034]">Training</span>, Lifelong Skills
                  </h1>
                  <p className="mt-4 text-gray-600">
                    Personalized music education that inspires creativity, discipline, and joy—whether you're a beginner or advancing your craft.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <a href="#" className="btn-primary flex items-center gap-2 bg-[#E86034] text-white px-6 py-3 rounded-md hover:bg-[#d4552d] transition-colors">
                      Register for Lessons
                      <svg data-prefix="fas" data-icon="arrow-right" className="w-4 h-4" role="img" viewBox="0 0 512 512" aria-hidden="true">
                        <path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                      </svg>
                    </a>
                    <a href="#" className="btn-secondary border-2 border-[#E86034] text-[#E86034] bg-white px-6 py-3 rounded-md hover:bg-orange-50 transition-colors">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:flex hidden items-center justify-center w-full'>
                <div className='relative flex items-center'>
                    <img className='max-w-[596px] h-[512px] object-cover z-[1] float-animation' src="/src/assets/images/banner-image.png" alt="" />
                    <img className='absolute left-0 top-0 max-w-[690px] h-[438px] object-cover float-animation-reverse' src="/src/assets/images/banner-vector.png" alt="" />
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
