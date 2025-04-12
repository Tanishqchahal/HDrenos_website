import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface Testimonial {
  id: number;
  rating: number;
  title: string;
  content: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    title: "Kitchen",
    content: "Great team work on time quality work , Highly recommend home of details Renovation. Nice work done in my kitchen",
    author: "Manjinder Hari"
  },
  {
    id: 2,
    rating: 5,
    title: "Bathroom renovation",
    content: "Hamza and his team are great they renovated my washroom upstairs and Im beyond happy with the results and quality of work and the companys professionalism was amazing.",
    author: "HomeOwner"
  },
  {
    id: 3,
    rating: 5,
    title: "Full home reno",
    content: "I had a great experience with this company they did a full remodel for my house all 3 levels, they completely changed the entire house and through out the renovations communication was always great.",
    author: "Omar Ibrahim"
  },
  {
    id: 4,
    rating: 5,
    title: "Deck Build",
    content: "Amazing service from Hamza and his team. Offered a more than fair price and was clean, quick and hardworking with his team.",
    author: "Raahim Jalil"
  },
  {
    id: 5,
    rating: 5,
    title: "Basement Finishing",
    content: "Dealing with Hamza was an absolute pleasure! Not only was the work completed in a timely manner, he was upfront regarding any potential issues and took care of the property start to finish.",
    author: "Customer"
  },
  {
    id: 6,
    rating: 5,
    title: "Basement Renovation",
    content: "They transformed our basement beyond our wildest dream.They exhibit utmost professionalism, punctuality and dedication to deliver amazing result.",
    author: "XOXO PRODUCTION"
  },
  {
    id: 7,
    rating: 5,
    title: "Basement renovation",
    content: "We got a legal basement done from Hamza and his team, their customer service, quality, and transparency were all perfect. The project was done in timely manner.",
    author: "HomeOwner"
  },
  {
    id: 8,
    rating: 5,
    title: "Basement renovation",
    content: "Great work, very professionally done. Would communicate well, and take the time to explain everything. Very effective.",
    author: "Customer"
  },
  {
    id: 9,
    rating: 5,
    title: "Bedroom remodel",
    content: "The renovation was great! So organized and well managed! Got the job done perfectly. Perfectly done!",
    author: "HomeOwner"
  },
  {
    id: 10,
    rating: 5,
    title: "Washroom renovation",
    content: "Hamza and his team renovated by washroom. Installed and rebuild the shower and water system. The work was clean . No messes nor junk was made or left behind after work.",
    author: "Customer"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800"
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
    </div>
  </motion.div>
);

const TestimonialsPage = () => {
  const [position, setPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const columnHeights = useRef<number[]>([0, 0, 0]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the column heights once testimonials are rendered
  useEffect(() => {
    if (isMobile) return;

    // Small delay to ensure DOM is populated
    const timer = setTimeout(() => {
      const columns = document.querySelectorAll('.testimonial-column');
      columns.forEach((column, index) => {
        const columnContent = column.querySelector('.column-content');
        if (columnContent) {
          columnHeights.current[index] = columnContent.scrollHeight / 2;
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Infinite scroll effect
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setPosition(prev => {
        const newPosition = prev - 0.5;
        // Creating infinite loop effect by resetting position when it exceeds half the content height
        if (Math.abs(newPosition) >= Math.max(...columnHeights.current)) {
          return 0;
        }
        return newPosition;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [isMobile]);

  const prepareColumns = () => {
    return [
      // Duplicate all testimonials to create a seamless loop
      [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)],
      [...testimonials.slice(4, 7), ...testimonials.slice(4, 7), ...testimonials.slice(4, 7)],
      [...testimonials.slice(7, 10), ...testimonials.slice(7, 10), ...testimonials.slice(7, 10)]
    ];
  };

  const columns = prepareColumns();

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

        {isMobile ? (
          // Static grid for mobile
          <div className="grid grid-cols-1 gap-6 pb-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          // Animated columns for desktop
          <div className="relative h-[600px]">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="relative overflow-hidden h-full testimonial-column">
                  <div
                    className="absolute w-full column-content"
                    style={{
                      transform: `translateY(${position * (columnIndex % 2 === 0 ? 1 : 1.2)}px)`,
                      transition: position === 0 ? 'none' : 'transform linear',
                      willChange: 'transform'
                    }}
                  >
                    {column.map((testimonial, index) => (
                      <div key={`${testimonial.id}-${index}`} className="mb-6">
                        <TestimonialCard testimonial={testimonial} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsPage; 