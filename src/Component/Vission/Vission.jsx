 
import { FaChartLine, FaHandsHelping, FaLightbulb } from "react-icons/fa";
 

const Vision = () => {
  return (
    <>
      <section id="vision" className="bg-[#f1f8e869] pb-9 pt-14"> 
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#698474] mb-8">Our Vision</h2>
          <p className="text-lg max-w-[680px] mx-auto text-gray-600 mb-12">
            At Brains Media Solutions, our vision is to lead the digital marketing industry with innovative strategies that empower businesses to thrive in the digital age.
          </p>
        </div>
        
        <div className="md:flex max-w-5xl mx-auto items-center justify-center mt-12">
          <div className="w-full px-4 mb-8">
            <div className="bg-[#F1F8E8] rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <FaLightbulb className="h-10 w-12 mx-auto mb-4 text-[#698474]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h4>
              <p className="text-gray-600">We embrace creativity and innovation to drive meaningful change in digital marketing strategies.</p>
            </div>
          </div>

          <div className="w-full px-4 mb-8">
            <div className="bg-[#F1F8E8] rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <FaHandsHelping className="h-10 w-12 mx-auto mb-4 text-[#698474]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Empowerment</h4>
              <p className="text-gray-600">We empower businesses with the tools and strategies to succeed and grow sustainably.</p>
            </div>
          </div>

          <div className="w-full  px-4 mb-8">
            <div className="bg-[#F1F8E8] rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <FaChartLine className="h-10 w-12 mx-auto mb-4 text-[#698474]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Global Impact</h4>
              <p className="text-gray-600">We aim to make a global impact by helping businesses thrive on a global scale.</p>
            </div>
          </div>
        </div>
      </div> 
      </section>
    </>
  );
};

export default Vision;
