import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../global';

/**
 * Pricing Section Component
 * Displays lesson offerings and information
 */
const Pricing = () => {
  const pricingFeatures = [
    {
      icon: "../assets/images/features/img-04.png",
      text: "30–45 minute private lessons each week"
    },
     {
      icon: "../assets/images/features/img-04.png",
      text: "Fun and educational group classes"
    },
     {
      icon: "../assets/images/features/img-04.png",
      text: "Participation in seasonal recitals and events"
    }
  ];

  return (
    <div className="bg-white lg:p-[82px_0] p-[20px] relative overflow-hidden">
            <div className="relative">
                 <div className='xl:container lg:px-[20px] 1lg:gap-[110px] gap-[80px]  m-auto flex max-lg:flex-col'>
                    <div className='flex-1 self-center'>
                        <div className="m-auto w-full max-w-[680px] [&_h1]:lg:text-[40px]! [&_h1]:text-[30px]! [&_h1]:lg:leading-[55px]! [&_h1]:leading-[40px]! [&_p]:text-[20px]! [&_p]:leading-[32px]! max-lg:mb-[30px]">
                            <span className="tagline mb-[20px]">
                                <FontAwesomeIcon icon="fa-solid fa-music" />
                                Pricing
                            </span>
                            <div className="banner-tittle">
                                <h1>Private  <span>Music Lessons</span><br></br> Starting at Just $99/<br></br>Month</h1>
                                <p className="break-keep">
                               We believe high-quality music education should be accessible and enriching. Our monthly tuition covers everything your child needs to grow as a musician—all in one affordable package.
                                </p>
                            </div>
                        </div>
                        <h6 className='mt-[18px] font-bold text-[20px] leading-[32px] text-black'>What Includes:</h6>
                        <ul className='flex flex-col gap-[16px] mt-[18px]'>
                          {pricingFeatures.map((feature, index) => (
                            <li key={index} className='flex items-center gap-[14px] font-normal text-[18px] leading-[27px] text-[#49494b]'>
                              <img src={feature.icon} className='w-[21px]' alt="" />
                              <h6 className='font-normal text-[18px] leading-[27px] text-[#49494b]'>{feature.text}</h6>
                            </li>
                          ))}
                        </ul>
                        <div className='mt-[20px] flex items-center flex-wrap gap-[20px]'>
                            <Button  icon="fa-solid fa-arrow-right" iconPosition="left">
                                Register for Lessons
                            </Button>
                            <Button variant='secondary'>
                                Contact Us
                            </Button>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center items-center z-[1]'>
                        <div className='relative'>
                            <div className='relative overflow-hidden flex justify-center items-center'>
                                <img className="object-cover" alt="" src="../assets/images/features/img-05.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Pricing;
