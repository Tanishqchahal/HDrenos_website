import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

interface ServiceDetails {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  process: ServiceProcess[];
  features: string[];
}

const servicesData: { [key: string]: ServiceDetails } = {
  kitchen: {
    id: "kitchen",
    title: "Kitchen Renovations",
    description: "Transform your kitchen into a modern, functional space",
    longDescription: `Our kitchen renovation service transforms your cooking space into a stunning, functional area that becomes the heart of your home. We combine innovative design with premium materials and expert craftsmanship to create kitchens that are both beautiful and practical.`,
    images: [
      "/services/kitchen/kitchen-2.jpeg",
      "/services/kitchen/kitchen-3.jpg",
      "/services/kitchen/kitchen-4.jpeg",
      "/services/kitchen/kitchen-1.jpg",
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We meet to discuss your vision, needs, and budget. Our team assesses your space and provides initial recommendations.",
      },
      {
        step: 2,
        title: "Material Selection",
        description:
          "We help you select high-quality materials, appliances, and finishes that match your style and budget.",
      },
      {
        step: 3,
        title: "Construction",
        description:
          "Our expert team executes the renovation with precision, keeping you updated throughout the process.",
      },
      {
        step: 4,
        title: "Final Inspection",
        description:
          "We conduct a thorough inspection and walkthrough to ensure everything meets our high standards.",
      },
    ],
    features: [
      "Custom cabinetry and storage solutions",
      "Premium countertop installations",
      "Modern appliance integration",
      "Lighting design and installation",
      "Plumbing and electrical upgrades",
      "Flooring installation",
      "Backsplash and tile work",
      "Island design and installation",
    ],
  },
  bathroom: {
    id: "bathroom",
    title: "Bathroom Renovations",
    description:
      "Luxury bathroom upgrades that combine style with functionality",
    longDescription: `Transform your bathroom into a personal spa-like retreat. Our bathroom renovation services combine luxury finishes with practical design to create a space that enhances your daily routine and adds value to your home.`,
    images: [
      "/services/bathroom/bathroom-4.jpeg",
      "/services/bathroom/bathroom-1.jpg",
      "/services/bathroom/bathroom-2.jpeg",
      "/services/bathroom/bathroom-3.jpeg",
    ],
    process: [
      {
        step: 1,
        title: "Design Consultation",
        description:
          "We discuss your vision, preferences, and requirements while assessing your space and plumbing needs.",
      },
      {
        step: 2,
        title: "Material Selection",
        description:
          "Choose from our curated selection of tiles, fixtures, vanities, and accessories that match your style.",
      },
      {
        step: 3,
        title: "Installation",
        description:
          "Expert installation of all components with careful attention to waterproofing and ventilation.",
      },
      {
        step: 4,
        title: "Final Review",
        description:
          "Thorough inspection and testing of all fixtures and features to ensure everything works perfectly.",
      },
    ],
    features: [
      "Custom shower and tub installations",
      "Luxury tile work",
      "Modern fixtures and faucets",
      "Vanity and storage solutions",
      "Proper ventilation systems",
      "LED lighting design",
      "Heated flooring options",
      "Water-efficient fixtures",
    ],
  },
  basement: {
    id: "basement",
    title: "Basement Renovations",
    description:
      "Transforming your basement into a functional and stylish space",
    longDescription: `Our basement renovation services turn your underutilized space into a beautiful and functional area. Whether you want a cozy family room, a home office, or an entertainment area, we handle every detail to ensure your basement meets your needs and exceeds your expectations.`,
    images: [
      "/services/basement/basement-4.jpeg",
      "/services/basement/basement-1.jpeg",
      "/services/basement/basement-2.jpeg",
      "/services/basement/basement-3.jpeg",
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description:
          "Discuss your vision for the basement, including desired features and budget.",
      },
      {
        step: 2,
        title: "Permitting",
        description:
          "Obtain necessary permits and ensure compliance with local building codes.",
      },
      {
        step: 3,
        title: "Renovation", 
        description:
          "Execute the renovation with skilled craftsmanship and regular updates.",
      },
      {
        step: 4,
        title: "Final Walkthrough",
        description:
          "Conduct a final walkthrough to ensure everything meets your expectations.",
      },
    ],
    features: [
      "Custom layout designs",
      "High-quality materials",
      "Egress windows",
      "Smart home integration",
      "Stylish finishes",
      "Entertainment areas",
      "Home office setups",
      "Storage solutions",
    ],
  },
  remodeling: {
    id: "remodeling",
    title: "Remodeling",
    description: "Transforming your living space with style",
    longDescription: `Transform your living space with our expertly planned and executed remodeling services. We ensure seamless integration with your existing home while enhancing functionality and aesthetics to create a space that reflects your style and needs.`,
    images: [
      "/services/remodeling/remodeling-1.jpg",
      "/services/remodeling/remodeling-2.jpg",
      "/services/remodeling/remodeling-3.jpg",
      "/services/remodeling/remodeling-4.jpeg",
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "Discuss your vision, requirements, and budget for your remodeling project.",
      },
      {
        step: 2,
        title: "Permit Management",
        description:
          "Managing all necessary permits and ensuring compliance with local regulations.",
      },
      {
        step: 3,
        title: "Execution",
        description:
          "Careful execution of the remodeling project while minimizing disruption to your daily life.",
      },
      {
        step: 4,
        title: "Final Touches",
        description:
          "Complete interior and exterior finishing to ensure a polished look that matches your home.",
      },
    ],
    features: [
      "Custom design solutions",
      "High-quality materials",
      "Decking and fencing solutions ",
      "Energy-efficient upgrades",
      "Smart home features",
      "Storage solutions",
      "Aesthetic improvements",
      "Epoxy flooring",
    ],
  },
  commercial: {
    id: "commercial",
    title: "Commercial Renovations",
    description: "Professional space transformations",
    longDescription: `We specialize in commercial renovations that enhance functionality and aesthetics while minimizing business disruption. Our team understands the unique requirements of commercial spaces and delivers results that improve both employee productivity and client experience.`,
    images: [
      "/services/commercial.jpg",
      "/services/commercial-2.jpg",
      "/services/commercial-3.jpg",
      "/services/commercial-4.jpg",
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We discuss your business needs and vision to ensure the design enhances workflow and customer experience.",
      },
      {
        step: 2,
        title: "Project Timeline",
        description:
          "Creating a schedule that minimizes business interruption during renovation.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "Executing renovations with strict adherence to commercial building codes.",
      },
      {
        step: 5,
        title: "Handover",
        description:
          "Final inspection and documentation of all improvements and systems.",
      },
    ],
    features: [
      "Office space optimization",
      "Retail store renovations",
      "Restaurant buildouts",
      "Industrial upgrades",
      "ADA compliance",
      "Commercial lighting",
      "HVAC modernization",
      "Security integration",
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const service = servicesData[serviceId || ""];

  if (!service) {
    return <div>Service not found</div>;
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % service.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + service.images.length) % service.images.length
    );
  };

  return (
    <div className="pt-28 px-4 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {service.longDescription}
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden group">
            <motion.img
              key={currentImage}
              src={service.images[currentImage]}
              alt={`${service.title} showcase ${currentImage + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full 
                text-white transition-all opacity-0 group-hover:opacity-100 duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full 
                text-white transition-all opacity-0 group-hover:opacity-100 duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {service.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${
                      index === currentImage
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.step * 0.1 }}
                className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800"
              >
                <div className="text-[#ff0022] text-4xl font-bold mb-4">
                  {step.step.toString().padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Features & Inclusions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800"
              >
                <p className="text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us today for a free consultation and estimate.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ff0022] hover:bg-[#cc001b] text-white px-8 py-4 rounded-md text-lg font-semibold 
              transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,34,0.3)]"
          >
            <Link to="/contact" className="text-white">
              Get Started
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
