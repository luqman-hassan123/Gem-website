import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';

import './gallery.css';

const Gallery = () => {

  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) { // Start at 1 if you have gallery1.jpg to gallery15.jpg
    images.push(require(`../../images/gallery${i}.jpg`)); // Corrected here
  }

 

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti laudantium ad nihil tempora 
        ipsa voluptatum fugiat debitis eius nobis fuga deserunt.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) =>{
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section> 
    </>
  );
}

export default Gallery;
