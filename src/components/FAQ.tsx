import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I get started on my home renovation project?",
    answer: "To begin, contact us to schedule a free consultation. During this meeting, we'll discuss your vision, needs, and budget. From there, we'll create a preliminary plan and estimate to guide you through the next steps."
  },
  {
    question: "Do I need a permit for my renovation?",
    answer: "Permits are required for most structural changes, electrical work, plumbing modifications, or major renovations. Don't worry—we handle the permitting process for you to ensure compliance with local regulations."
  },
  {
    question: "How do you ensure my project stays on budget?",
    answer: "We provide a detailed estimate upfront and maintain transparent communication throughout the project. Any changes or unforeseen costs will be discussed and approved by you before proceeding."
  },
  {
    question: "Can I live in my home during the renovation?",
    answer: "In most cases, yes! However, depending on the extent of the work (e.g., kitchen or bathroom remodels), there may be temporary inconveniences. We'll work with you to minimize disruptions and maintain a clean workspace."
  },
  {
    question: "What happens if unexpected issues arise during construction?",
    answer: "Sometimes hidden issues (e.g., outdated wiring or structural damage) are discovered during renovations. If this happens, we'll inform you immediately, present solutions, and adjust the plan with your approval."
  },
  {
    question: "Do you offer design services?",
    answer: "Yes! Our team includes experienced designers who will help you choose layouts, materials, colors, and finishes that match your style and budget."
  },
  {
    question: "How do I communicate with your team during the project?",
    answer: "You'll have a dedicated project manager who will serve as your main point of contact. They'll provide regular updates and be available to address any questions or concerns."
  },
  {
    question: "Can I make changes once construction has started?",
    answer: "Yes, but changes may affect the timeline and budget. We'll discuss any adjustments with you before implementing them to avoid surprises."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">
            Find answers to common questions about our renovation services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-900/50 hover:bg-gray-900 transition-colors duration-200"
              >
                <span className="text-left text-lg font-medium text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#ff0022]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 py-4 bg-gray-900/30">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ff0022] hover:bg-[#cc001b] text-white px-8 py-4 rounded-md text-lg font-semibold 
              transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,34,0.3)]"
          >
            <Link to="/contact">
            CONTACT US
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 