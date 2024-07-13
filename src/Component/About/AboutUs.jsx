import React from 'react';
import AboutUsImage from './AboutUsImage';

const AboutUs = () => {
  return (
    <section id='aboutus' className="bg-[#F8F8F8]  py-5 px-[30px] md:px-[50px]">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-[#698474] mb-4">Welcome to Brain Media Solutions</h2>
            <p className="text-lg text-gray-600 mb-6">We specialize in creating innovative solutions that empower businesses and individuals.</p>
            <button className="bg-[#698474] hover:bg-[#7B9B8A] text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <AboutUsImage />
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="container mx-auto mt-16">
        <h3 className="text-3xl font-bold text-[#698474] mb-8 text-center">Why Choose Us?</h3>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-[#F1F8E8] cursor-pointer   rounded-lg shadow-lg p-6  transition duration-300">
              <h4 className="text-xl font-semibold  mb-4">Innovative Solutions</h4>
              <p className="text-gray-600">We focus on delivering cutting-edge solutions tailored to meet your unique needs.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4  mb-8">
            <div className="bg-[#FDFFE2] rounded-lg shadow-lg p-6  cursor-pointer  transition duration-300">
              <h4 className="text-xl font-semibold   mb-4">Expert Team</h4>
              <p className="text-gray-600">Our team consists of skilled professionals dedicated to achieving excellence in every project.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-[#DAD3BE] rounded-lg shadow-lg p-6   cursor-pointer  ansition duration-300">
              <h4 className="text-xl font-semibold  mb-4">Customer Satisfaction</h4>
              <p className="text-gray-600">We prioritize customer satisfaction by ensuring prompt support and effective communication.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-[#EEEEEE] rounded-lg shadow-lg p-6  cursor-pointer   transition duration-300">
              <h4 className="text-xl font-semibold mb-4">Global Presence</h4>
              <p className="text-gray-600">With a global presence, we serve clients worldwide and deliver solutions that make a difference.</p>
            </div>
          </div>
      </div>
      </div>
    </section>
  );
}

export default AboutUs;
