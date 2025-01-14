import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface Testimonial {
  id: number;
  rating: number;
  title: string;
  content: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    title: "Very professional and delivered a great product",
    content: "The team was great to work with. They were very professional and delivered a great product. The renovation completely transformed our space.",
    author: "Jeff B.",
    position: "Small Business Owner"
  },
  {
    id: 2,
    rating: 5,
    title: "I would highly recommend them to anyone",
    content: "I'm so happy with the way our renovation turned out. The team was a pleasure to work with and I would highly recommend them to anyone.",
    author: "Keagan M.",
    position: "Homeowner"
  },
  {
    id: 3,
    rating: 5,
    title: "Your team really did an amazing job",
    content: "Thank you guys so much for all your hard work and attention to detail. Your team really did an amazing job.",
    author: "Anthony B.",
    position: "Founder of Big Guppy Media"
  },
  {
    id: 4,
    rating: 5,
    title: "They have really made my business turn into something great",
    content: "The team really hit 5 plus stars when it comes to what they do! Great customer service and pay excellent attention to detail.",
    author: "Jesse B.",
    position: "West Cove Pools"
  },
  {
    id: 5,
    rating: 5,
    title: "Great company!",
    content: "Great company! I knew I needed a renovation but had no idea how to go about designing it. They stepped in and took the charge. Would definitely recommend to anyone looking for quality work.",
    author: "Vish P.",
    position: "Founder of Vihaga"
  },
  {
    id: 6,
    rating: 5,
    title: "They made the whole process easy and enjoyable",
    content: "The team was great from start to finish. I'm not too tech savvy but they made the whole process easy and enjoyable.",
    author: "George W.",
    position: "Market Development Manager"
  },
  {
    id: 7,
    rating: 5,
    title: "Exceeded all expectations",
    content: "From design to completion, they exceeded all expectations. Their craftsmanship and attention to detail is unmatched.",
    author: "Rachel K.",
    position: "Interior Designer"
  },
  {
    id: 8,
    rating: 5,
    title: "Outstanding renovation experience",
    content: "The entire renovation process was seamless. Their team's expertise and professionalism made our dream home a reality.",
    author: "Mark S.",
    position: "Burlington Resident"
  },
  {
    id: 9,
    rating: 5,
    title: "Incredible transformation",
    content: "They completely transformed our outdated space into something modern and beautiful. The attention to detail was impressive.",
    author: "Linda M.",
    position: "Home Owner"
  },
  {
    id: 10,
    rating: 5,
    title: "Highly recommend their services",
    content: "Professional, punctual, and perfect execution. Would highly recommend their services to anyone looking for quality renovations.",
    author: "Thomas R.",
    position: "Property Manager"
  }
];

const TestimonialsPage = () => {
  const [position, setPosition] = useState(-300);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        if (Math.abs(prev) > 10000) {
          return -300;
        }
        return prev - 0.5;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const columns = [
    [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)],
    [...testimonials.slice(4, 7), ...testimonials.slice(4, 7)],
    [...testimonials.slice(7, 10), ...testimonials.slice(7, 10)]
  ];

  return (
    <div className="pt-28 px-4 bg-black min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Don't Take Our Word for it
          </h1>
          <p className="text-xl text-gray-400">
            See what our clients have to say about us.
          </p>
        </motion.div>

        <div className="relative h-[600px]" ref={containerRef}>
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="relative overflow-hidden h-full">
                <div
                  className="absolute w-full transition-transform duration-[2000ms] ease-linear"
                  style={{
                    transform: `translateY(${position * (columnIndex % 2 === 0 ? 1 : 1.2)}px)`,
                  }}
                >
                  {column.map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.id}-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800 mb-6"
                    >
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#ff0022] text-[#ff0022]"
                          />
                        ))}
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3">
                        "{testimonial.title}"
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                        {testimonial.content}
                      </p>

                      <div>
                        <p className="text-white font-semibold text-sm">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage; 