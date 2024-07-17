import Image from "next/image";
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marquee from "./components/Marquee";
import About from "./components/About"
import Eye from "./components/Eye";
import Featured from "./components/Featured";
import Reviews from "./components/Reviews";
import ClientReview from "./components/ClientReview";
import Aboutteam from "./components/Aboutteam";
import Cards from "./components/Cards";
import { Projects } from "./components/Projects";
import Footer from "./components/Footer";



function App() {
  return (

    <div>
      <header  className=" w-full h-screen text-white ">
      <NavBar/>
      <LandingPage />
      </header>
      <Marquee />
      <About />
      <Eye/>
      <Featured/>
      <Reviews/>
      <ClientReview/>
      <Aboutteam/>
      <Cards/>
      <Projects/>
      <Footer/>
    
    </div>


  );


}

export default App;




