import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id: 1,
        image: require('../assets/images/img-hero1.jpg'),
        title: 'The perfect design for your website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ultricies dui, sed euismod turpis varius a. In quis efficitur urna, id vehicula purus. Aliquam consequat, felis a tristique blandit',
        link: 'http.//www.google.com'
    },
    {
        id: 2,
        image: require('../assets/images/img-hero2.jpg'),
        title: 'Start Your Future Financia Plan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ultricies dui, sed euismod turpis varius a. In quis efficitur urna, id vehicula purus. Aliquam consequat, felis a tristique blandit',
        link: 'http.//www.facebook.com'
    },
    {
        id: 3,
        image: require('../assets/images/img-hero3.jpg'),
        title: 'Enjoy the Difference',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ultricies dui, sed euismod turpis varius a. In quis efficitur urna, id vehicula purus. Aliquam consequat, felis a tristique blandit',
        link: 'http.//www.twitter.com'
    },

]

function AppHero() {
    return (
        <section id='home' className='hero-block'>
            <Carousel>
                {
                    heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id}>
                                <img className="d-block w-100"
                                    src={hero.image} alt={"Slide" + hero.id} />
                                <Carousel.Caption>
                                    <h3>{hero.title}</h3>
                                    <p>{hero.description}</p>
                                    <a className='btn btn-primary' href={hero.link}>Leran More <i class="fas fa-chevron-right"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>
        </section>
    )
}


export default AppHero;