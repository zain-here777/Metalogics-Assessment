import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Community Section Component
 * Displays key Community of the platform
 */
const Community = () => {
    return (
        <div class="bg-white p-[82px_0] relative has-blueeffect has-effect overflow-hidden">
            <div class="relative has-blueeffect">
                <div className='xl:container px-[20px] m-auto flex'>
                    <div className='flex-1'>1</div>
                    <div className='flex-1'>
                        <div className="m-auto w-full max-w-[680px] [&_h1]:text-[40px]! [&_h1]:leading-[55px]! [&_p]:text-[20px]! [&_p]:leading-[32px]!">
                            <span className="tagline mb-[20px]">
                                <FontAwesomeIcon icon="fa-solid fa-music" />
                                What Sets Us Apart
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
