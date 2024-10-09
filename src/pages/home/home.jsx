import FAQs from '../../components/FAQs';
import Footer from '../../components/Footer';
import MainHeader from '../../components/MainHeader'; // Adjust the path as needed
import Programs from '../../components/Programs';
import Testimonials from '../../components/Testimonials';
import Values from '../../components/Values';
import './home.css'

const Home = () => {
  return (
    <div>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonials/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
