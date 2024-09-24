import FAQs from '../../components/FAQs';
import MainHeader from '../../components/MainHeader'; // Adjust the path as needed
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import './home.css'

const Home = () => {
  return (
    <div>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQs/>
    </div>
  )
}

export default Home
