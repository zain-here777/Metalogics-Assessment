import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css';

/**
 * Testimonial Section Component
 * Displays customer testimonial and reviews - Splide Slider Style
 */
const Testimonial = () => {
	const splideRef = useRef(null);
	const splideInstance = useRef(null);
	
	const testimonial = [
		{
			name: "Sophia M",
			role: "New York",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
			rating: 5,
			date: "9/23/16",
			avatar: "../assets/images/testimonial/image.png"
		},
		{
			name: "Sophia M",
			role: "New York",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
			rating: 5,
			date: "9/23/16",
			avatar: "../assets/images/testimonial/image.png"
		},
		{
			name: "Sophia M",
			role: "New York",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
			rating: 5,
			date: "9/23/16",
			avatar: "../assets/images/testimonial/image.png"
		},
		{
			name: "Sophia M",
			role: "New York",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
			rating: 5,
			date: "9/23/16",
			avatar: "../assets/images/testimonial/image.png"
		},
		{
			name: "Sophia M",
			role: "New York",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
			rating: 5,
			date: "9/23/16",
			avatar: "../assets/images/testimonial/image.png"
		}
	];

	const renderStars = (rating) => {
		return Array.from({ length: 5 }, (_, index) => (
			<FontAwesomeIcon
				key={index}
				icon={index < rating ? "fa-solid fa-star" : "fa-regular fa-star"}
				className="text-orange-500 text-[16px]"
			/>
		));
	};

	useEffect(() => {
		if (splideRef.current) {
			splideInstance.current = new Splide(splideRef.current, {
				type: 'loop',
				perPage: 3,
				perMove: 1,
				gap: '20px',
				autoplay: true,
				interval: 5000,
				pauseOnHover: true,
				resetProgress: false,
				pagination: false,
				arrows: false,
				breakpoints: {
					640: {
						perPage: 1,
					},
					767: {
						perPage: 2,
					},
					1280: {
						perPage: 3,
						gap: '35px',
					},
				},
			}).mount();
		}
	}, []);

	const handlePrev = () => {
		if (splideInstance.current) {
			splideInstance.current.go('<');
		}
	};

	const handleNext = () => {
		if (splideInstance.current) {
			splideInstance.current.go('>');
		}
	};

	return (
		<div className="bg-white lg:p-[82px_0] p-[20px] relative has-blueeffect has-effect overflow-hidden">
			<div className="xl:container lg:lg:px-[20px] mx-auto">
				<div className="text-center max-w-[680px] mx-auto [&_h1]:lg:text-[40px]! [&_h1]:text-[30px]! [&_h1]:lg:leading-[55px]! [&_h1]:leading-[40px]! [&_p]:text-[20px]! [&_p]:leading-[32px]!">
					<span className="tagline mb-[20px]">
						<FontAwesomeIcon icon="fa-solid fa-music" />
						Testimonial
					</span>
					<div className="banner-tittle">
						<h1 className="font-medium text-[40px] leading-[55px] font-eb-garamond text-[#231F20]">
							What our <span className="text-[#e45627]">Students</span> Say
						</h1>
					</div>
				</div>

				<div className="relative testimonial-splide max-w-[1053px] mx-auto">
					<div id="testimonial-slider" className="splide" ref={splideRef}>
						<div className="splide__track px-[10px]! lg:py-[50px] py-[20px]">
							<ul className="splide__list">
								{testimonial.map((item, index) => (
									<li key={index} className="splide__slide">
										<div className="bg-white shadow-card rounded-[16px] p-[45px_20px] shadow-md hover:shadow-lg transition-all duration-300 h-full relative glowing group">
											<div className="relative z-10">
												<div className="flex mb-[12px]">
													{renderStars(item.rating)}
												</div>

												<p className="font-normal text-[18px] mb-[22px] leading-[27px] text-[#2c2c2c]">
													{item.content}
												</p>

												<div className="flex items-center justify-between">
													<div className="flex items-center gap-[20px] w-full">
														<div className='flex-1'>
															<h4 className="font-bold text-[20px] leading-[26px] text-[#2c2c2c]">{item.name}</h4>
															<span className="font-bold text-[18px] leading-[27px] text-[#808080]">{item.date}</span>
														</div>
														<img
															src={item.avatar}
															alt={item.name}
															className="w-[56px] h-[56px] rounded-full ml-[12px] object-cover"
														/>
													</div>
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Custom Arrow Buttons */}
					<div className="flex justify-center items-center gap-[20px]">
						<button
							onClick={handlePrev}
							className="w-[50px] h-[50px] rounded-full bg-[#E45627]/18 group flex items-center justify-center hover:bg-[#e45627] transition-colors"
						>
							<FontAwesomeIcon icon="fa-solid fa-arrow-left" className="text-[#3C3C3C] text-[16px] group-hover:text-[#fff]" />
						</button>
						<button
							onClick={handleNext}
							className="w-[50px] h-[50px] rounded-full bg-[#E45627]/18 group flex items-center justify-center hover:bg-[#e45627] transition-colors"
						>
							<FontAwesomeIcon icon="fa-solid fa-arrow-right" className="text-[#3C3C3C] text-[16px] group-hover:text-[#fff]" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
