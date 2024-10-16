import React, { useEffect, useRef, useState } from 'react';
import '../style/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from './../utils/avgRating';
import avatar from "../assets/images/avatar.jpg";
import Booking from '../components/Booking/Booking';
import Newsletter from "../shared/Newsletter";
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const   TourDetails = () => {
  const { tourId } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
 
  const { data: tour, error, loading } = useFetch(`${BASE_URL}/tours/${tourId}`);

  if (error) {
    return <div>Error fetching tour data: {error.message}</div>;
  }
  if (!tour) {
    return <div>Loading...</div>; 
  }

  const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    alert(`${reviewText}, ${tourRating}`);
  };

  // useEffect(() => {
  //   window.scrollTo(0,0)
  // },[tour])

  return (
    <>
      <section>
        <Container>
          {
            loading && <h4 className='text-center pt-5'>Loading..............</h4>
          }
          {
            error && <h4 className='text-center pt-5'>{error}</h4>
          }
          {
            !loading && !error &&<Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt='' />
                <div className='tour__info'>
                  <h2>{title}</h2>
                  <div className='d-flex align-items-center gap-5'>
                    <span className='tour__rating d-flex align-items-center'>
                      <i className="ri-star-fill" style={{ 'color': "var(--secondary-color)" }}></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? ('Not rated') : (<span>({reviews?.length})</span>)}
                    </span>
                    <span>
                      <i className="ri-map-pin-user-fill"></i>{address}
                    </span>
                  </div>
                  <div className='tour__extra-details'>
                    <span><i className="ri-map-pin-2-line"></i>{city}</span>
                    <span><i className="ri-money-rupee-circle-line"></i> Rs{price} /per person</span>
                    <span><i className="ri-pin-distance-line"></i> {distance} k/m</span>
                    <span><i className="ri-group-line"></i>{maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                <div className='tour__reviews mt-4'>
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <span key={rating} onClick={() => setTourRating(rating)}>
                          {rating}<i className="ri-star-fill"></i>
                        </span>
                      ))}
                    </div>
                    <div className="review__input">
                      <input type='text' ref={reviewMsgRef} placeholder='Share your thoughts' required />
                      <button className='btn primary__btn text-white' type='submit'>Submit</button>
                    </div>
                  </Form>
                  <ListGroup className="user__reviews">
                    {reviews?.map((review, index) => (
                      <div key={index} className='review__item'>
                        <img src={avatar} alt='' />
                        <div className="w-100">
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>{review.username || 'User'}</h5>
                              <p>{new Date(review.date).toLocaleDateString("en-US", options)}</p>
                            </div>
                            <span className='d-flex align-items-center'>
                              {review.rating}<i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.text}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
          }
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default TourDetails
