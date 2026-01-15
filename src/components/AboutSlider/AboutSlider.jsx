import React, { useState, useEffect, useRef } from 'react';

/**
 * AboutSlider Component
 * Horizontal image slider with custom navigation buttons
 */
const slides = [
  {
    id: 1,
    src: '/assets/images/features/about-1.png',
    alt: 'Students at the piano',
  },
  {
    id: 2,
    src: '/assets/images/features/about-2.png',
    alt: 'Student performing for a group',
  },
  {
    id: 3,
    src: '/assets/images/features/about-3.png',
    alt: 'Students practicing together',
  },
  {
    id: 4,
    src: '/assets/images/features/about-2.png',
    alt: 'Student performing for a group (alternate)',
  },
  {
    id: 5,
    src: '/assets/images/features/about-3.png',
    alt: 'Students practicing together (alternate)',
  },
  {
    id: 6,
    src: '/assets/images/features/about-1.png',
    alt: 'Students at the piano (alternate)',
  },
];

const AboutSlider = () => {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateSlidesPerView = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      const screenWidth = window.innerWidth;
      
      // Match the Tailwind breakpoints and slide widths
      if (screenWidth >= 1024) {
        // lg: slide width is 360px + 40px gap
        setSlidesPerView(Math.floor(containerWidth / 400));
      } else if (screenWidth >= 768) {
        // md: slide width is 320px + 40px gap
        setSlidesPerView(Math.floor(containerWidth / 360));
      } else {
        // mobile: full width
        setSlidesPerView(1);
      }
    };

    calculateSlidesPerView();
    window.addEventListener('resize', calculateSlidesPerView);
    return () => window.removeEventListener('resize', calculateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, slides.length - slidesPerView);

  const goNext = () => {
    setCurrent((prev) => {
      if (prev >= maxIndex) return prev;
      return prev + 1;
    });
  };

  const goPrev = () => {
    setCurrent((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  };

  return (
    <section className="bg-gradient-to-r from-[#E3FBFF] via-white to-[#FFEFF0] py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Slider viewport */}
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex gap-6 md:gap-10 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="min-w-full md:min-w-[320px] lg:min-w-[360px] rounded-[32px] overflow-hidden bg-white/40 backdrop-blur-sm"
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Left arrow */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            disabled={current === 0}
            className={`hidden md:flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#ECF8FF] transition-opacity absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 ${
              current === 0 ? 'opacity-40 cursor-not-allowed' : ''
            }`}
          >
            <span className="flex items-center justify-center w-[52px] h-[52px] rounded-full border border-[#F09500] bg-white">
              <img
                src="/assets/images/features/about-left-icon.svg"
                alt="Previous"
                className="w-5 h-5"
              />
            </span>
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            disabled={current >= maxIndex}
            className={`hidden md:flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#ECF8FF] transition-opacity absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 ${
              current >= maxIndex ? 'opacity-40 cursor-not-allowed' : ''
            }`}
          >
            <span className="flex items-center justify-center w-[52px] h-[52px] rounded-full border border-[#F09500] bg-white">
              <img
                src="/assets/images/features/about-right-icon.svg"
                alt="Next"
                className="w-5 h-5"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSlider;

