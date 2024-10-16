import React from 'react';
import "../style/home.css";
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from './../shared/Subtitle'; 
import worldImg from "./../assets/images/world.png";
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList';
import experienceImg from "../assets/images/experience.png"
import MasonryImageGallery from '../components/Image-gallery/MasonryImageGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';




const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero__subtitle d-flex align-items-center">

                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "} 
                  <span className="highlight">Memories</span>
                </h1>
                <p>
                  Traveling is a way to collect beautiful memories and experiences that last a lifetime. Every destination offers new adventures, from breathtaking landscapes to vibrant cultures. 
                  Meeting new people and embracing different traditions broadens your world view. 
                  Exploring unfamiliar places opens your heart to endless possibilities. 
                  Each journey becomes a story, filled with moments you'll cherish forever.
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt=""/>              
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls/>              
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt=""/>              
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>



      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={'Explore'}/>
              <h2 className="featured__tour-title"> Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />

                <h2>With our extensive experience, <br /> we will serve you with excellence</h2>
                  <p>Your satisfaction is our top priority. We are committed to delivering exceptional service and creating unforgettable experiences for all your travel needs.</p>      
              </div>
              <br />   
              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className='counter__box'>
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className='counter__box'>
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className='counter__box'>
                  <span>15</span>
                  <h6>Years exprience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt=''/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" >
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery__title'>
                Visit our Customer tour gallery
              </h2>
            </Col>
            <Col lg='12'>
            <MasonryImageGallery /> 
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={"Fans Love"}/>
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
}

export default Home;
