 import Menu from '../src/Component/Navbar'
import AboutUs from './Component/About/AboutUs';
import Carosoul from './Component/Carousole/Carosoul';
import Footer from './Component/Footer/Footer';
import Mission from './Component/Mission/Mission';
import Services from './Component/Vission/Service';
import Vision from './Component/Vission/Vission';
 
 const App = () => {
  return (
    <div className='max-w-7xl w-full mx-auto'> 
      <Menu/> 
      <Carosoul/>
      <AboutUs/>
      <Mission/>
      <Vision/>
      <Services/>
      <Footer/>
    </div>
  );
 };
 
 export default App;