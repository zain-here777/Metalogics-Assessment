import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Community Section Component
 * Displays key Community of the platform
 */
const Community = () => {
    return (
        <div className="bg-white lg:p-[82px_0] p-[20px] relative has-blueeffect has-effect overflow-hidden">
            <div className="relative has-blueeffect">
                <img class="max-w-[402px] h-[402px] max-lg:hidden object-cover absolute bottom-0 right-0 z-[-1]" alt="" src="/src/assets/images/banner-image.png"></img>
                <div className='xl:container px-[20px] 1lg:gap-[110px] gap-[80px]  m-auto flex max-lg:flex-col'>
                    <div className='flex-1 flex justify-center items-center z-[1] max-xxs:scale-[0.7]'>
                        <div className='relative'>
                            <img className="object-cover tada-animation z-[1] rounded-[10px] left-0 bottom-0 absolute max-lg:w-[250px]" alt="" src="../assets/images/features/img-03.png"></img>
                            <div className='w-[121px] absolute  flex items-center justify-center z-1 top-[50px] right-[-20px] rounded-[50%] bg-white h-[121px]'>
                                <img className="object-cover" alt="" src="../assets/images/features/img-02.png"></img>
                            </div>
                            <div className='rounded-[50%] relative overflow-hidden flex justify-center items-center lg:w-[523px] w-[400px] h-[400px] lg:h-[523px] bg-[radial-gradient(circle,#F7BCA8_0%,#F7BBA7_1%,#E45627_100%)]'>
                                <img className="object-cover max-lg:w-[200px]" alt="" src="../assets/images/features/img-01.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 self-center'>
                        <div className="m-auto w-full max-w-[680px] [&_h1]:lg:text-[40px]! [&_h1]:text-[30px]! [&_h1]:lg:leading-[55px]! [&_h1]:leading-[40px]! [&_p]:text-[20px]! [&_p]:leading-[32px]! max-lg:mb-[30px]">
                            <span className="tagline mb-[20px]">
                                <FontAwesomeIcon icon="fa-solid fa-music" />
                                About Us
                            </span>
                            <div className="banner-tittle">
                                <h1>Inspiring <span>Musicians</span>.<br></br> Building Community.<br></br> Since 2017.</h1>
                                <p className="break-keep">
                                At Freeport Music Studio, we believe in nurturing not just musicians—but confident, creative individuals. Since 2017, we’ve been trusted by local families to deliver quality music education in a supportive, inspiring environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
