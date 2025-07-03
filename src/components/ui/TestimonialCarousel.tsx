"use client";

import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type Testimonial = {
  name: string;
  title: string;
  message: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Anuj Thakur",
    title: "Data Analyst at Scaler",
    message:
      "Adamas gave me more than a degree — it gave me confidence and clarity. The real-world projects were game changers.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    title: "Software Engineer at Google",
    message:
      "Thanks to Adamas, I learned how to think like an engineer. Their hands-on approach prepared me for global tech challenges.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ritik Basu",
    title: "AI Research Intern at Microsoft",
    message:
      "The faculty at Adamas inspired me to dig deep into AI. I owe my research mindset to their constant support.",
    image:
      "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Sanya Roy",
    title: "Product Designer at Adobe",
    message:
      "Adamas nurtured my creative side while grounding me in tech. I found my passion for UX design here.",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Kunal Mehta",
    title: "DevOps Engineer at Atlassian",
    message:
      "The project-based learning model made me industry-ready from day one. It’s the best decision I ever made.",
    image:
      "https://randomuser.me/api/portraits/men/73.jpg",
  },
  {
    name: "Ishita Ghosh",
    title: "Cybersecurity Analyst at Cisco",
    message:
      "What set Adamas apart was their dedication to keeping the curriculum current. I felt ahead of the curve.",
    image:
      "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    name: "Arnav Kapoor",
    title: "Full Stack Developer at TCS",
    message:
      "Collaborating on projects with talented peers shaped me into a strong team player and problem solver.",
    image:
      "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Megha Jain",
    title: "Data Scientist at Paytm",
    message:
      "The exposure to real datasets and analytical tools gave me a head start in the data science world.",
    image:
      "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Neel Bhattacharya",
    title: "Cloud Engineer at IBM",
    message:
      "Cloud computing was just a buzzword until Adamas made it real for me through their lab-based approach.",
    image:
      "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    name: "Rhea Sen",
    title: "Blockchain Developer at Polygon",
    message:
      "Adamas introduced me to blockchain before it was mainstream. That edge helped me land my current job.",
    image:
      "https://randomuser.me/api/portraits/women/85.jpg",
  },
  {
    name: "Vikram Saha",
    title: "Frontend Engineer at Zomato",
    message:
      "Design systems, performance optimization, and user-first thinking — I learned it all thanks to Adamas.",
    image:
      "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Tanya Malhotra",
    title: "Machine Learning Engineer at NVIDIA",
    message:
      "The hands-on ML workshops and capstone project at Adamas directly helped me get my role at NVIDIA.",
    image:
      "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-[#f3f2f2] rounded-xl p-4 min-h-[220px] shadow-sm ">
    <div className="flex items-center gap-4 mb-3">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold">{testimonial.name}</h3>
        <p className="text-sm text-gray-500">{testimonial.title}</p>
      </div>
    </div>
    <p className="text-gray-700">{testimonial.message}</p>
  </div>
);

const TestimonialCarousel: React.FC = () => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const mouseOver = useRef(false);
  const easingEaseOut = (t: number) => 1 - Math.pow(1 - t, 3); // cubic ease-out
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.08,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 500px)": {
        slides: { perView: 1.3, spacing: 16 },
      },
      "(min-width: 600px)": {
        slides: { perView: 1.5, spacing: 16 },
      },
      "(min-width: 640px)": {
        slides: { perView: 1.6, spacing: 16 },
      },
      "(min-width: 700px)": {
        slides: { perView: 1.75, spacing: 16 },
      },
      "(min-width: 800px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 900px)": {
        slides: { perView: 2.5, spacing: 24 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 2.8, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
    // animation: {
    //   duration: 6000,
    //   easing: easingEaseOut,
    // },
    

    // dragStarted() {
    //   stopAutoSlide();
    // },
    // dragEnded() {
    //   startAutoSlide();
    // },
    // mouseEntered() {
    //   mouseOver.current = true;
    //   stopAutoSlide();
    // },
    // mouseLeft() {
    //   mouseOver.current = false;
    //   startAutoSlide();
    // },

  });
  

  const startAutoSlide = () => {
    stopAutoSlide();
    timer.current = setInterval(() => {
      if (!mouseOver.current && slider.current) {
        slider.current.next();
      }
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (timer.current) clearInterval(timer.current);
  };

  useEffect(() => {
    if (slider.current) {
      startAutoSlide();
    }
    return () => stopAutoSlide();
  }, [slider.current]);

  return (
    <section className="px-4 py-10 ">
      <div className="max-w-[1200px] mx-auto ">
        <h2 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">What our Student Says</h2>
        <p className="text-zinc-400 text-sm leading-none font-medium p-5 mb-4">
          Discover the voices of Adamas University. Our students share how
          academic rigor, mentorship, and real-world exposure helped shape their
          personal and professional journeys. Their stories reflect the vibrant
          learning environment and transformative impact of being part of Adamas.
          Explore their experiences and envision your future with us.
        </p>
        {/* 👉 Mobile/Tablet: Keen Slider */}
        <div className="lg:hidden" ref={sliderRef}>
          <div className="keen-slider">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-[#f3f2f2] rounded-xl p-4 min-h-[220px]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.title}</p>
                  </div>
                </div>
                <p className=" text-gray-700">{t.message}</p>
              </div>
            ))}
          </div>
        </div>
        {/* 👉 Desktop: 3-column vertical scroll with overlays */}
        <div className="relative hidden lg:block lg:px-8">
          {/* Top gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white via-white/70 to-transparent z-10 pointer-events-none" />
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/70 to-transparent z-10 pointer-events-none" />
          {/* The grid container */}
          <div className="grid grid-cols-3 gap-6">
            <div className="overflow-hidden h-[750px]">
              <div className="space-y-4 animate-scroll-up">
                {[...testimonials.slice(0, 4), ...testimonials.slice(0, 4)].map((t, i) => (
                  <TestimonialCard key={`col1-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
            <div className="overflow-hidden h-[750px]">
              <div className="space-y-4 animate-scroll-down">
                {[...testimonials.slice(4, 8), ...testimonials.slice(4, 8)].map((t, i) => (
                  <TestimonialCard key={`col2-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
            <div className="overflow-hidden h-[750px]">
              <div className="space-y-4 animate-scroll-up">
                {[...testimonials.slice(8, 12), ...testimonials.slice(8, 12)].map((t, i) => (
                  <TestimonialCard key={`col3-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
