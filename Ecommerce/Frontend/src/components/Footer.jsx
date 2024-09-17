import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-button-text py-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        {/* About Section */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4 text-highlight-text">About Us</h2>
          <p className="text-sm text-gray-300">
            We offer the best products at unbeatable prices. Shop with us for a delightful and hassle-free experience. We ensure the quality and authenticity of every item.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4 text-highlight-text">Quick Links</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4 text-highlight-text">Contact Us</h2>
          <p className="text-sm text-gray-300">123 E-commerce St, Shop City, SC 12345</p>
          <p className="text-sm text-gray-300">Phone: +1 234 567 890</p>
          <p className="text-sm text-gray-300">Email: support@ecommerce.com</p>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4 text-highlight-text">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-500 transition-colors"
            >
              <FaFacebookF className="text-xl text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-500 transition-colors"
            >
              <FaTwitter className="text-xl text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-500 transition-colors"
            >
              <FaInstagram className="text-xl text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-500 transition-colors"
            >
              <FaLinkedinIn className="text-xl text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm text-gray-400">
        <p>© 2024 E-commerce Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
