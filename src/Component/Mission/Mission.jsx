import React from 'react';

const Mission = () => {
  return (
    <section id='mission' className="bg-[#f1f8e869] pb-8 pt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#698474] mb-8">Our Mission</h2>
          <p className="text-lg max-w-[680px] mx-auto text-gray-600 mb-12">
            At Brains Media Solutions, our mission is to empower businesses of all sizes to thrive in the digital age. We achieve this by delivering innovative digital marketing solutions that enhance online presence, elevate customer engagement, and drive measurable results in conversions and revenue.
          </p>
        </div>
        
        <div className="md:flex max-w-5xl mx-auto gap-5 items-center justify-center mt-12">
          {/* Mission Point 1 */}
          <div className="w-full   px-4 mb-8">
            <div className="bg-[#F1F8E8] rounded-lg shadow-md p-6 transform hover:-translate-y-1 transition duration-300">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-698474" viewBox="0 0 20 20" fill="#698474">
                  <path fillRule="evenodd" d="M9 13a1 1 0 0 0 2 0H9zm-2.293-3.707A1 1 0 0 0 7.707 8.293L10 10.586 12.293 8.293a1 1 0 1 0 1.414-1.414L11.414 7l2.293-2.293a1 1 0 1 0-1.414-1.414L10 5.586 7.707 3.293a1 1 0 0 0-1.414 1.414L8.586 7l-2.293 2.293zM3 2a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Enhanced Online Pre.</h4>
              <p className="text-gray-600">We help businesses establish a strong digital footprint to reach their target audience effectively.</p>
            </div>
          </div>

          {/* Mission Point 2 */}
          <div className="w-full  px-4 mb-8">
            <div className="bg-[#F1F8E8] rounded-lg shadow-md p-6 transform hover:-translate-y-1 transition duration-300">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-698474" viewBox="0 0 20 20" fill="#698474">
                  <path fillRule="evenodd" d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm1 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm.707 2.707a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 1.414-1.414l3 3z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Customer Engagement</h4>
              <p className="text-gray-600">We create engaging experiences that foster strong connections with your audience.</p>
            </div>
          </div>

          {/* Mission Point 3 */}
          <div className="w-full px-4 mb-8">
            <div className="bg-[#F1F8E8] rounded-lg shadow-md p-6 transform hover:-translate-y-1 transition duration-300">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-698474" viewBox="0 0 20 20" fill="#698474">
                  <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v3.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 7.586V4a1 1 0 0 1 1-1zm-7 8a1 1 0 0 1 1 1v3.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L3 12.586V9a1 1 0 0 1 1-1zm14 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-7-5a1 1 0 0 1 1 1v3.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 7.586V4a1 1 0 0 1 1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Revenue Growth</h4>
              <p className="text-gray-600">Our strategies are designed to drive conversions and maximize your return on investment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
