import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../global';

/**
 * Touch Form Component
 * Contact form with touch-friendly interface
 */
const TouchForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <section className="bg-[#f0f9fb] py-20 overflow-hidden relative">
            {/* Background Decorative Blur (Teal) */}
            <div className="absolute w-[400px] h-[400px] top-[-100px] left-[-100px] bg-[#57bfd033] blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="mx-auto max-w-[680px] text-center [&_h1]:text-[30px]! [&_h1]:leading-[40px]! [&_h1]:lg:text-[40px]! [&_h1]:lg:leading-[55px]! [&_h1]:leading-[40px]! [&_p]:text-[20px]! [&_p]:leading-[32px]!">

                    <span className="tagline mb-[20px] flex items-center justify-center gap-2">
                       <FontAwesomeIcon icon="fa-solid fa-music" />
                        Contact Us
                    </span>

                    <div className="banner-tittle">
                        <h1 className="font-eb-garamond text-[#231F20] font-medium">
                            What our <span className="text-[#e45627]">Students</span> Say
                        </h1>
                        <p className="break-keep">We'd love to connect! Whether you're curious about lessons or ready to enroll, we're here to help.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Image with Decorative Note */}
                    <div className="relative">
                        <div className="absolute top-[-20px] left-[-20px] bg-[#f0f9fb] p-4 rounded-3xl shadow-sm z-20">
                            <FontAwesomeIcon icon="fa-solid fa-music" className="text-[#e45627] text-3xl" />
                        </div>
                        <img
                            src="your-image-path.jpg"
                            alt="Students"
                            className="rounded-[40px] shadow-xl w-full object-cover aspect-[4/5]"
                        />
                    </div>

                    {/* Right Side: Form with Underline Inputs */}
                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="relative">
                                <input type="text" name="firstName" onChange={handleChange} required
                                    className="w-full bg-transparent border-b-2 border-gray-400 focus:border-[#e45627] outline-none py-2 transition-all peer" placeholder=" " />
                                <label className="absolute left-0 top-2 text-gray-700 transition-all peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-xs">First Name*</label>
                            </div>
                            <div className="relative">
                                <input type="text" name="lastName" onChange={handleChange} required
                                    className="w-full bg-transparent border-b-2 border-gray-400 focus:border-[#e45627] outline-none py-2 transition-all peer" placeholder=" " />
                                <label className="absolute left-0 top-2 text-gray-700 transition-all peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-xs">Last Name*</label>
                            </div>
                        </div>

                        <div className="relative">
                            <input type="email" name="email" onChange={handleChange} required
                                className="w-full bg-transparent border-b-2 border-gray-400 focus:border-[#e45627] outline-none py-2 transition-all peer" placeholder=" " />
                            <label className="absolute left-0 top-2 text-gray-700 transition-all peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-xs">E-mail*</label>
                        </div>

                        <div className="relative">
                            <input type="tel" name="phone" onChange={handleChange} required
                                className="w-full bg-transparent border-b-2 border-gray-400 focus:border-[#e45627] outline-none py-2 transition-all peer" placeholder=" " />
                            <label className="absolute left-0 top-2 text-gray-700 transition-all peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-xs">Phone Number*</label>
                        </div>

                        <div className="relative">
                            <input type="text" name="message" onChange={handleChange} required
                                className="w-full bg-transparent border-b-2 border-gray-400 focus:border-[#e45627] outline-none py-2 transition-all peer" placeholder=" " />
                            <label className="absolute left-0 top-2 text-gray-700 transition-all peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-xs">Enter Message*</label>
                        </div>

                        <div className="flex justify-end pt-4">
                            <Button
                                variant="primary"
                                className="w-full"
                                icon="fa-solid fa-paper-plane"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default TouchForm;