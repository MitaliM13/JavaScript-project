import React from 'react';

const Contact = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 min-h-screen mt-16 py-12 px-4 md:px-8">

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center opacity-40"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row gap-12 items-start">
        <div className="mt-32 text-center mb-12 md:mb-0 md:w-1/2">
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Let's Connect & Create Magic!
          </h1>
          <p className="text-lg text-gray-700 md:px-6">
            Have questions, suggestions, or just want to say hi? We're all ears.
            Drop us a line or find us on the map below!
          </p>
        </div>

        <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-xl flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Form</h2>
          <form
            action='https://formspree.io/f/mdknvnnp'
            method='POST'
          >
            <div className="mb-5">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name:
              </label>
              <input
                type="text"
                name="Username"
                id="name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email:
              </label>
              <input
                type="email"
                name= "Email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message:
              </label>
              <textarea
                id="message"
                name='Message'
                rows="4"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative mt-12 flex-1">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Find Us Here
        </h2>
        <div className="w-full h-72 bg-gray-200 rounded-xl overflow-hidden shadow-md">
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
  );
};

export default Contact;
