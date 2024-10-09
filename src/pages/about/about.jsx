import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import MissionImage from '../../images/about3.jpg'
import VisionImage from '../../images/about2.jpg';

import './about.css'; // Assuming you will apply styles here later

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus velit ab delectus exercitationem ad! Dolores voluptatum aperiam,
        hic sint distinctio illo consequuntur fugiat.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas quidem ex, 
              voluptatem id sit blanditiis ducimus earum ipsum fuga recusandae quo ipsam illum 
              ratione totam delectus doloribus doloremque adipisci?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas quidem ex, 
              voluptatem id sit blanditiis ducimus earum ipsum fuga recusandae quo ipsam illum 
              ratione totam delectus doloribus doloremque adipisci?
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas quidem ex, 
            voluptatem id sit blanditiis ducimus
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
        <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas quidem ex, 
              voluptatem id sit blanditiis ducimus earum ipsum fuga recusandae quo ipsam illum 
              ratione totam delectus doloribus doloremque adipisci?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas quidem ex, 
              voluptatem id sit blanditiis ducimus earum ipsum fuga recusandae quo ipsam illum 
              ratione totam delectus doloribus doloremque adipisci?
            </p>
          </div>
        </div>
      </section>


      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas quidem ex, 
              voluptatem id sit blanditiis ducimus earum ipsum fuga recusandae quo ipsam illum 
              ratione totam delectus doloribus doloremque adipisci?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas quidem ex, 
              voluptatem id sit blanditiis ducimus earum ipsum fuga recusandae quo ipsam illum 
              ratione totam delectus doloribus doloremque adipisci?
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas quidem ex, 
            voluptatem id sit blanditiis ducimus
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
