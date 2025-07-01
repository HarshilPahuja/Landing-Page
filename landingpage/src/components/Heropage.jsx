import hero from '../assets/hero-img.png';
import Navbar from './Navbar';
import Herocontent from './Herocontent';

export default function Heropage() {
  return (

    <div id="heropage"
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${hero})` }}
    >

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        

        <div className="relative z-10 text-white">
        <Navbar/>
        <Herocontent/>
        </div>
    </div>
  );
}