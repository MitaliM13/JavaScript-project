const Contact = () => {
  return (
    <div className="relative bg-background min-h-screen py-20 px-6 md:px-12">

      <div className="absolute inset-0 bg-[url('')] bg-cover bg-center opacity-20"></div>

      <div className="relative text-center mb-16">
        <h1 className="text-5xl font-extrabold text-heading-primary mb-4">
          Connect With Us – We’re Here for You!
        </h1>
        <p className="text-lg text-gray-800">
          We’d love to hear from you. Whether you have questions, feedback, or need support, reach out to us!
        </p>
      </div>

      {/* Contact Form and Map Section */}
      <div className="relative flex flex-col md:flex-row gap-12 items-start bg-div-bg-secondary rounded-xl shadow-lg p-8">
        {/* Contact Form */}
        <div className="flex-1 md:w-1/2">
          <h2 className="text-3xl font-semibold text-heading-primary mb-6">Get in Touch</h2>
          <form action="https://formspree.io/f/mdknvnnp" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-3 border border-card-border rounded-md focus:ring-2 focus:ring-indigo-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-3 border border-card-border rounded-md focus:ring-2 focus:ring-indigo-300"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 border border-card-border rounded-md focus:ring-2 focus:ring-indigo-300"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-button-bg text-button-text py-3 rounded-md shadow-md hover:bg-hover-link transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex-1 md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl font-semibold text-heading-primary mb-6">Our Location</h2>
          <div className="w-full h-72 bg-gray-200 rounded-md overflow-hidden shadow-md">
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
