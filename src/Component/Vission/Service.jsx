import { FaSearch, FaFacebookF, FaPencilAlt, FaEnvelope } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Search Engine Optimization",
      icon: <FaSearch className="h-12 w-12 mx-auto mb-4 text-[#698474]" />,
      description: "Boost your website's visibility in search engine results pages.",
      link: "/seo",
    },
    {
      title: "Social Media Marketing",
      icon: <FaFacebookF className="h-12 w-12 mx-auto mb-4 text-[#698474]" />,
      description: "Engage and grow your audience across social media platforms.",
      link: "/social-media",
    },
    {
      title: "Content Marketing",
      icon: <FaPencilAlt className="h-12 w-12 mx-auto mb-4 text-[#698474]" />,
      description: "Create valuable and relevant content to attract and retain customers.",
      link: "/content-marketing",
    },
    {
      title: "Email Marketing",
      icon: <FaEnvelope className="h-12 w-12 mx-auto mb-4 text-[#698474]" />,
      description: "Build relationships with your audience through personalized email campaigns.",
      link: "/email-marketing",
    },
  ];

  return (
    <section id="service" className="mt-14">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-semibold text-[#698474] text-center mb-12">Services</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a 
              key={index}
              href={service.link}
              className="group  border-[1px] border-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="p-6 text-center">
                <div className="flex justify-center items-center h-20 w-20 mx-auto mb-4 text-[#698474]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-block bg-[#698474] text-white font-bold py-2 px-6 rounded-lg transition duration-300 hover:bg-[#4C6E4A]">
                  Learn More
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
