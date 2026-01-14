import React from 'react';
import { SectionContent } from '../global';

/**
 * About Section Component
 * Displays information about the company
 */
const Banner = () => {
  const bannerContent = {
    tagline: "Freeport Music Studio",
    taglineIcon: "music",
    heading: "Modern Tools, Classical ",
    headingHighlight: "Training,",
    belowHighlight: "Lifelong Skills",
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
    <div className='bg-white relative has-blueeffect has-effect overflow-hidden pt-[178px] mt-[-144px]'>
      <div className='relative has-blueeffect'>
        <div className='lg:p-[30px] p-[20px]  z-50 xl:container m-auto gap-[70px] flex justify-between'>
            <div className='max-w-[548px] [&>span]:mb-[20px]'>
              <SectionContent {...bannerContent} />
            </div>
            <div className='flex items-center justify-center w-full'>
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
