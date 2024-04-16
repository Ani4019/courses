import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


var testimonialsData = [
    {
        id: 1,
        name: 'John Wills',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ultricies dui, sed euismod turpis varius a. In quis efficitur urna, id vehicula purus Aliquam consequat, felis a tristique blandit, orci augue dictum lectus, eget posuere felis.',
        designation: 'Manager',
    },
    {
        id: 2,
        name: 'Jasmine Perry',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ultricies dui, sed euismod turpis varius a. In quis efficitur urna, id vehicula purus Aliquam consequat, felis a tristique blandit, orci augue dictum lectus, eget posuere felis.',
        designation: 'Acccoutant',
    },
    {
        id: 3,
        name: 'Rocky Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ultricies dui, sed euismod turpis varius a. In quis efficitur urna, id vehicula purus Aliquam consequat, felis a tristique blandit, orci augue dictum lectus, eget posuere felis.',
        designation: 'CEO',
    },


]
function AppTestimonials() {
    return (
        <section id='testimonials' className='testimonials-block' >
            <Container fluid>
                <div className='title-holder'>
                    <h2> Client testimonials</h2>
                    <div className='subtitle'> what client says about us</div>
                </div>
                <Carousel>
                    {
                        testimonialsData.map(testimonials => {
                            return (
                                <Carousel.Item key={testimonials.id}>
                                    <blockquote>
                                        <p>{testimonials.description}</p>
                                        <cite>
                                            <span className='name'>{testimonials.name}</span>
                                            <span className='designation'>{testimonials.designation}</span>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            )
                        })
                    }


                </Carousel>
            </Container>
        </section>
    )
}

export default AppTestimonials;