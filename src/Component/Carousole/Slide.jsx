const Slide = ({image, text}) => {
    return (
      <div
        className='w-full  bg-center bg-cover h-[36rem]'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className='flex items-center  justify-center w-full h-full bg-gray-900/70'>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold max-w-2xl mx-auto text-[#addbdb] lg:text-4xl'>
                {text}
              {/* Build your new <span className='text-blue-400'>Saas</span> Project */}
            </h1>
            <br /> 
          </div>
        </div>
      </div>
    )
  }
  
  export default Slide
  