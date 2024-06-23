import logo from './logo.svg';
import './App.css';
import NavBar from '../src/component/navbar';
import HeroSection from '../src/component/hero';
import ListingSection from '../src/component/listing'
import AddYourWork from '../src/component/addYour'
import Testimonials from '../src/component/testimonials'
import Footer from '../src/component/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <ListingSection/>
      <AddYourWork/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
