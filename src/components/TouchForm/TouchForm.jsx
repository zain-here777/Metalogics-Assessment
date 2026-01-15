import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Touch Form Component
 * Contact form with touch-friendly interface
 */
const TouchForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Handle form submission here
	};

	return (
		<div className="bg-white p-[82px_0] relative has-blueeffect has-effect overflow-hidden">
			<div className="relative has-blueeffect">
				<div className='xl:container px-[20px] m-auto'>
					<div className="m-auto w-full max-w-[680px] [&_h1]:lg:text-[40px]! [&_h1]:text-[30px]! [&_h1]:lg:leading-[55px]! [&_h1]:leading-[40px]! [&_p]:text-[20px]! [&_p]:leading-[32px]! max-lg:mb-[30px]">
						<span className="tagline mb-[20px]">
							<FontAwesomeIcon icon="fa-solid fa-music" />
							Get In Touch
						</span>
						<div className="banner-tittle">
							<h1 className="font-medium text-[40px] leading-[55px] font-eb-garamond text-[#231F20]">
								We'd Love to <span className="text-[#e45627]">Hear From You</span>
							</h1>
							<p className="mt-4 text-gray-600">
								Have questions about our music programs or want to schedule a lesson? Reach out to us and we'll get back to you as soon as possible.
							</p>
						</div>

						<form onSubmit={handleSubmit} className="mt-8 space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
										Your Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
										placeholder="Enter your name"
										required
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
										placeholder="your.email@example.com"
										required
									/>
								</div>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows={4}
									className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
									placeholder="Tell us about your musical interests..."
									required
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TouchForm;
