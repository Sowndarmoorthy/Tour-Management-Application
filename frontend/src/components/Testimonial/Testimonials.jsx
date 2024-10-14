import React from 'react'
import Silder from "react-slick"
import ava01 from '../../assets/images/ava-1.png'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'



const Testimonials = () => {

    const settings={
        dots:true,
        isfinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                },
            },
        ]
    }


  return (
    <Silder {...settings}>
        <div className="testimonial py-4 px-3">
            <p>"Booking my vacation through this website was so easy! The entire process was seamless, and the tour exceeded all my expectations. Highly recommend!. From start to finish, the tour booking experience was smooth and hassle-free. The customer service team helped me find the perfect adventure, and I loved every moment of the trip!"</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 rounded-2' alt='' />
                <div>
                    <h6 className='mb-0 mt-3'>Sowndar</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>"Booking my vacation through this website was so easy! The entire process was seamless, and the tour exceeded all my expectations. Highly recommend!. From start to finish, the tour booking experience was smooth and hassle-free. The customer service team helped me find the perfect adventure, and I loved every moment of the trip!"</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 rounded-2' alt='' />
                <div>
                    <h6 className='mb-0 mt-3'>Sowndar</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>"Booking my vacation through this website was so easy! The entire process was seamless, and the tour exceeded all my expectations. Highly recommend!. From start to finish, the tour booking experience was smooth and hassle-free. The customer service team helped me find the perfect adventure, and I loved every moment of the trip!"</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 rounded-2' alt='' />
                <div>
                    <h6 className='mb-0 mt-3'>Gokul</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>"Booking my vacation through this website was so easy! The entire process was seamless, and the tour exceeded all my expectations. Highly recommend!. From start to finish, the tour booking experience was smooth and hassle-free. The customer service team helped me find the perfect adventure, and I loved every moment of the trip!"</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 rounded-2' alt='' />
                <div>
                    <h6 className='mb-0 mt-3'>Raghul</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Silder>
  )
}

export default Testimonials