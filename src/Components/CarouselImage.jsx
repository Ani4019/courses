import Carousel from 'react-bootstrap/Carousel';

function carouselImage() {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img className="d-block w-100" style={{height:"350px"}} src={require("../Book.jpg")} alt="Image One" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{height:"350px"}} src={require("../Laptop.jpg")} alt="Image Two" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{height:"350px"}} src={require("../Symbol.jpg")} alt="Image Three" />
      </Carousel.Item>
    </Carousel>
  );
}

export default carouselImage;