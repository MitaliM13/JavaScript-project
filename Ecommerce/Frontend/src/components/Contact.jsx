import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-12 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600">We'd love to hear from you. Fill out the form below or visit us on the map.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message:</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h2>
          <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
            {/* Replace the iframe source with your actual map URL */}
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.5350830956744!2d-122.08424968469178!3d37.42199977982536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba009847e175%3A0x4d05b8e1fc107d3!2sGoogleplex!5e0!3m2!1sen!2sus!4v1638941440354!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
