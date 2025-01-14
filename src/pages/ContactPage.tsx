import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    referralSource: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_42x4klq',
        'template_f0428gl',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          budget: formData.budget,
          referral_source: formData.referralSource,
          message: formData.message,
        },
        '-6LM7w9z4Btu6zv-C'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        referralSource: '',
        message: '',
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md 
                    text-white focus:outline-none focus:ring-2 focus:ring-[#ff0022]"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md 
                    text-white focus:outline-none focus:ring-2 focus:ring-[#ff0022]"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-white mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md 
                    text-white focus:outline-none focus:ring-2 focus:ring-[#ff0022]"
                />
              </div>

              {/* Project Type Select */}
              <div>
                <label htmlFor="projectType" className="block text-white mb-2">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md 
                    text-white focus:outline-none focus:ring-2 focus:ring-[#ff0022]"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Budget Select */}
              <div>
                <label htmlFor="budget" className="block text-white mb-2">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md 
                    text-white focus:outline-none focus:ring-2 focus:ring-[#ff0022]"
                >
                  <option value="">Select a budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Referral Source Select */}
              <div>
                <label htmlFor="referralSource" className="block text-white mb-2">How did you hear about us?</label>
                <select
                  id="referralSource"
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md 
                    text-white focus:outline-none focus:ring-2 focus:ring-[#ff0022]"
                >
                  <option value="">Select a referral source</option>
                  {referralSources.map((source) => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md 
                    text-white focus:outline-none focus:ring-2 focus:ring-[#ff0022]"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ff0022] hover:bg-[#cc001b] text-white px-8 py-4 rounded-md 
                  text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,34,0.3)]
                  disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-center mt-4"
                >
                  Thank you! We'll get back to you soon.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-center mt-4"
                >
                  Something went wrong. Please try again later.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 