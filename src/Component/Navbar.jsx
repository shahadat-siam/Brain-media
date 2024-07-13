import { IoMdClose } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import "./Navbar.css";  
import Logo from "./Logo";
const Navbar = () => {
  const hundleMenuBar = () => {
    const nav = document.getElementById("navbar");
    nav.classList.add("active");
  };
  const removeMenu = () => {
    const nav = document.getElementById("navbar");
    nav.classList.remove("active");
  };

  return (
    <>
     <section id="header" >
        <a href="#" className="text-4xl font-semibold"><Logo/></a>
        <div>
            <ul id="navbar">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#mission">Mission</a></li>
                <li><a href="#vision">Vision</a></li>
                <li><a href="#service">service</a></li> 
                <a href="#" id="close"><i onClick={removeMenu} >< IoMdClose/></i></a>
            </ul>
        </div>
        <div id="mobile"> 
            <i id="bar" onClick={hundleMenuBar} ><RiMenu2Line/></i> 
        </div>
     </section>
    </>
  );
};

export default Navbar;
