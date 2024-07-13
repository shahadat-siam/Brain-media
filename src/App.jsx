 import Menu from '../src/Component/Navbar'
import AboutUs from './Component/About/AboutUs';
import Carosoul from './Component/Carousole/Carosoul';
import Footer from './Component/Footer/Footer';
 
 const App = () => {
  return (
    <div className='max-w-7xl w-full mx-auto'> 
      <Menu/> 
      <Carosoul/>
      <AboutUs/>
      <Footer/>
    </div>
  );
 };
 
 export default App;