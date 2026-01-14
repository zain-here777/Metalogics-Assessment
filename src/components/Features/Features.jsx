import React from 'react';
import { SectionContent } from '../global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/**
 * Features Section Component
 * Displays key features of the platform
 */
const Features = () => {
    return (
        <div className='relative'>
            <img className='object-cover z-1 w-full h-[418px] absolute' src="../assets/images/features/waves.png" alt="" />
            <div className='relative flex-col lg:p-[100px_30px] p-[20px] z-50 xl:container m-auto lg:flex block w-full gap-[45px] justify-between'>
                <div className='relative'>
                    <img className='object-contain z-1 float-animation bottom-30 w-auto absolute' src="../assets/images/features/Vector-1.png" alt="" />
                    <img className='object-contain z-1 float-animation left-[20%] top-30 w-auto absolute' src="../assets/images/features/Vector-2.png" alt="" />
                    <img className='object-contain z-1 float-animation right-[20%] top-30 w-auto absolute' src="../assets/images/features/Vector-3.png" alt="" />
                    <img className='object-contain z-1 float-animation right-[0%] bottom-30 w-auto absolute' src="../assets/images/features/Vector-4.png" alt="" />
                    <div className="m-auto w-full max-w-[680px] text-center [&_h1]:text-[40px]! [&_h1]:leading-[55px]! [&_p]:text-[20px]! [&_p]:leading-[32px]!">
                        <span className="tagline mb-[20px]">
                            <FontAwesomeIcon icon="fa-solid fa-music" />
                            What Sets Us Apart
                        </span>
                        <div className="banner-tittle">
                            <h1>Why Families Choose <br></br> <span>Freeport</span> Music Studio</h1>
                            <p className="break-keep">
                                Since 2017, we've been committed to nurturing confident musicians through:
                            </p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-[20px]'>
                    <div className='rounded-[20px] overflow-hidden'>
                        <div className='p-[46px_10px] h-[364px]  flex items-center justify-center  bg-[radial-gradient(circle,#F7BCA8_0%,#F7BBA7_1%,#E45627_100%)]'>
                            <img className='w-full object-cover max-h-[276px]' src="../assets/images/features/blo2-01.png" alt="" />
                        </div>
                        <div className='bg-[#f2fafc] p-[16px_28px]'>
                            <h2 className='font-semibold text-2xl text-center text-dark'>Highly Trained Teachers</h2>
                            <p className='mt-[7px] font-normal text-[16px] leading-[22px] text-center text-dark'>
                                Our passionate instructors bring years of experience, encouraging both teacher-guided and student-led learning.
                            </p>
                        </div>
                    </div>
                     <div className='rounded-[20px] overflow-hidden'>
                        <div className='p-[0_10px] overflow-hidden h-[364px]  flex items-center justify-center  bg-[radial-gradient(circle,#55B5EC_0%,#BBF6FF_100%)]'>
                            <img className='w-full object-scale-down object-scale-down' src="../assets/images/features/blo2-1.png" alt="" />
                        </div>
                        <div className='bg-[#f2fafc] p-[16px_28px]'>
                            <h2 className='font-semibold text-2xl text-center text-dark'>Performance Opportunities</h2>
                            <p className='mt-[7px] font-normal text-[16px] leading-[22px] text-center text-dark'>
                                From recitals to festivals and outreach events, students gain confidence and stage experience throughout the year.
                            </p>
                        </div>
                    </div>
                     <div className='rounded-[20px] overflow-hidden'>
                        <div className='p-[0_10px] overflow-hidden h-[364px] flex items-center justify-center bg-gradient-to-r from-[#FFA789] to-[#E45627]'>
                            <img className='w-[281px] h-[277px] object-cover ' src="../assets/images/features/blo2-3.png" alt="" />
                        </div>
                        <div className='bg-[#f2fafc] p-[16px_28px]'>
                            <h2 className='font-semibold text-2xl text-center text-dark'>Performance Opportunities</h2>
                            <p className='mt-[7px] font-normal text-[16px] leading-[22px] text-center text-dark'>
                                From recitals to festivals and outreach events, students gain confidence and stage experience throughout the year.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
