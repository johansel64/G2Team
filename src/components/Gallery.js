import React from 'react';
import Modal from './modal';
import projImg1 from "../assets/img/veterinaria/veterinaria1.png";
import projImg2 from "../assets/img/salon/salon1.png";
import projImg3 from "../assets/img/gastos/gastos1.png";
import img1_1 from "../assets/img/veterinaria/veterinaria2.png";
import img1_2 from "../assets/img/salon/salon2.png";
import img1_3 from "../assets/img/gastos/gastos2.png";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selectedImage: null
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(image) {
    this.setState({
      modalIsOpen: true,
      selectedImage: image
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedImage: null
    });
  }
 
  render() {
    const images = [
      { src: projImg1, alt: 'Image 1', link: 'https://johansel64.github.io/CitasVeterinario/'},
      { src: img1_1, alt: 'Image 1', link: 'https://johansel64.github.io/CitasVeterinario/'},
      { src: projImg2, alt: 'Image 2', link: 'https://johansel64.github.io/Bazar/'},
      { src: img1_2, alt: 'Image 2', link: 'https://johansel64.github.io/Bazar/'},
      { src: projImg3, alt: 'Image 3', link: 'https://johansel64.github.io/Gastos/'},
      { src: img1_3, alt: 'Image 3', link: 'https://johansel64.github.io/Gastos/'},
    ];
    
    const filteredImages = images.filter(image => this.props.showImages.includes(image.alt));

    return (
      <div>

        <h1>Gallery</h1>
        <div className="image-grid">
          {filteredImages.map(image =>
            <div key={image.src} className="image-wrapper">
                <a href={image.link}><img src={image.src} alt={image.alt} onClick={() => this.openModal(image)} /></a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Gallery;
