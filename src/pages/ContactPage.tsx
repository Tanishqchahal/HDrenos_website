import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ContactPage = () => {
  const projectTypes = [
    "Kitchen Renovation",
    "Bathroom Renovation",
    "Basement Renovation",
    "Home Addition",
    "Custom Home Build",
    "Commercial Renovation",
    "Interior Design",
    "Exterior Renovation"
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000 - $500,000",
    "$500,000 - $1,000,000",
    "Over $1,000,000"
  ];

  const referralSources = [
    "Google Search",
    "Social Media",
    "Friend/Family Referral",
    "Home Show",
    "Print Advertisement",
    "Online Advertisement",
    "Houzz",
    "Previous Client",
    "Other"
  ];

  return (
    <div className="pt-28 px-4 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* First Image */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative group">
              <img
                src="/services/custom-home.jpg"
                alt="Luxury home renovation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold">Luxury Home Renovations</h3>
                  <p className="text-gray-200 mt-2">Transforming homes with exceptional craftsmanship</p>
                </div>
              </div>
            </div>

            {/* Second Image */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative group">
              <img
                src="/services/kitchen.jpg"
                alt="Modern kitchen design"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold">Award-Winning Designs</h3>
                  <p className="text-gray-200 mt-2">Creating spaces that inspire and delight</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gray-900/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
              <ul className="space-y-4 text-gray-400">
                <li>✓ Free Initial Consultation</li>
                <li>✓ Expert Design Team</li>
                <li>✓ Quality Craftsmanship</li>
                <li>✓ Project Management Excellence</li>
                <li>✓ Transparent Pricing</li>
              </ul>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6 bg-gray-900/50 p-8 rounded-lg">
              {/* Date Input */}
              <div>
                <label htmlFor="date" className="block text-white mb-2">Today's Date</label>
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white"
                  placeholder="(123) 456-7890"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white"
                  placeholder="john@example.com"
                />
              </div>

              {/* Project Address */}
              <div>
                <label htmlFor="address" className="block text-white mb-2">Project Address</label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white"
                  placeholder="123 Main St, City, Province"
                />
              </div>

              {/* Project Type Checkboxes */}
              <div>
                <label className="block text-white mb-3">Project Type</label>
                <div className="grid grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <label key={type} className="flex items-center space-x-2 text-gray-400">
                      <input
                        type="checkbox"
                        name="project-type"
                        value={type}
                        className="form-checkbox text-[#ff0022] rounded border-gray-800 bg-black"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="details" className="block text-white mb-2">Project Details</label>
                <textarea
                  id="details"
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white"
                  placeholder="Please describe your project..."
                ></textarea>
              </div>

              {/* Project Pictures */}
              <div>
                <label htmlFor="pictures" className="block text-white mb-2">Project Pictures</label>
                <input
                  type="file"
                  id="pictures"
                  multiple
                  accept="image/*"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white file:mr-4 
                    file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-[#ff0022]
                    hover:file:bg-[#cc001b]"
                />
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budget" className="block text-white mb-2">Budget Range</label>
                <select
                  id="budget"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white"
                >
                  <option value="">Select a budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Referral Source */}
              <div>
                <label htmlFor="referral" className="block text-white mb-2">How did you hear about us?</label>
                <select
                  id="referral"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white"
                >
                  <option value="">Select an option</option>
                  {referralSources.map((source) => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-[#ff0022] hover:bg-[#cc001b] text-white px-8 py-4 rounded-md text-lg font-semibold 
                  transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,34,0.3)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 