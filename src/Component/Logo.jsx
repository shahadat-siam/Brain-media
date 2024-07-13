 
const  Logo = () => {
  return (
  <div className="flex justify-center items-center">
     <div className="  justify-center items-center">
       <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
          .text { font-family: 'Arial', sans-serif; font-size: 24px; fill: #468585; font-weight: bold; }
          .brain { fill: #698474; }
        `}
      </style>
      <g transform="translate(10, 10)">
        <path className="brain" d="M20,30c0,11-9,20-20,20S-20,41-20,30s9-20,20-20S20,19,20,30z M-16,30c0,8.3,6.7,15,15,15s15-6.7,15-15
          s-6.7-15-15-15S-16,21.7-16,30z"/>
        <path className="brain" d="M40,30c0,11-9,20-20,20S0,41,0,30s9-20,20-20S40,19,40,30z M4,30c0,8.3,6.7,15,15,15s15-6.7,15-15
          s-6.7-15-15-15S4,21.7,4,30z"/>
      </g> 
    </svg>
  </div>
  <div className="-ml-10 text-[#698474] font-semibold mt-4">Brain Media</div>
  </div>
  );
}

export default  Logo;
