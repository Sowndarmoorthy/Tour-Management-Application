import React from 'react';
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.png';
import ava02 from '../../assets/images/ava-2.png';
import ava03 from '../../assets/images/ava03.avif';
import ava001 from "../../assets/images/ava001.jpg"

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>"This platform made planning my trip incredibly convenient. The booking was quick, and the trip was unforgettable. Everything went beyond my expectations. I highly recommend this service to anyone looking for a hassle-free vacation planning experience!"</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 rounded-2' alt='testimonial' />
                    <div>
                        <h6 className='mb-0 mt-3'>Belly</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>"From the first click to the final booking, everything was straightforward. The tour offered exceeded my expectations, and the service was fantastic. I enjoyed every bit of my trip, and I can't wait to plan my next adventure with this company!"</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava001} className='w-25 rounded-2' alt='testimonial' />
                    <div>
                        <h6 className='mb-0 mt-3'>Jack</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>"The user-friendly booking process made everything so easy. The trip itself was beyond what I expected. Excellent customer service from start to finish. I couldn't have asked for a better experience. I'll definitely use this service again!"</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 rounded-2' alt='testimonial' />
                    <div>
                        <h6 className='mb-0 mt-3'>Swa</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>"I found the perfect trip in minutes! The entire booking experience was smooth and enjoyable. The tour exceeded my expectations in every way. The support team helped me choose the right package, and I couldn’t be more satisfied with the whole process."</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 rounded-2' alt='testimonial' />
                    <div>
                        <h6 className='mb-0 mt-3'>Lakshmi</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default Testimonials;
