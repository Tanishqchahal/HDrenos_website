import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      value: "(647) 773-0963",
      link: "tel:+11234567890",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "homeofdetailedrenovations@gmail.com",
      link: "mailto:homeofdetailedrenovations@gmail.com",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const services = [
    { name: "Remodeling", path: "/services/remodeling" },
    { name: "Kitchen Renovations", path: "/services/kitchen" },
    { name: "Bathroom Renovations", path: "/services/bathroom" },
    { name: "Basement", path: "/services/basement" },
    { name: "Custom Home Renovations", path: "/services/custom-home" },
    { name: "Commercial Renovations", path: "/services/commercial" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Follow us on Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      label: "Follow us on Instagram",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com",
      label: "Follow us on Instagram",
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800" id="contact">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-6">
            <Link to="/">
              <img
                src="/logo.png"
                alt="House of Detailed Renovations Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Transforming houses into dream homes with quality craftsmanship
              and attention to detail.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center 
                    hover:bg-[#ff0022] transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#ff0022] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Our Services
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-[#ff0022] transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="group flex items-start space-x-3 text-gray-400 hover:text-[#ff0022] transition-colors duration-200"
                    target={item.icon.type === MapPin ? "_blank" : undefined}
                    rel={
                      item.icon.type === MapPin
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span className="mt-1 group-hover:text-[#ff0022] transition-colors duration-200">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-medium text-white group-hover:text-[#ff0022] transition-colors duration-200">
                        {item.label}
                      </p>
                      <p className="mt-1">{item.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} House of Detailed Renovations. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
