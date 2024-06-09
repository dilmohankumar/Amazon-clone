import React, { useState } from 'react';
import Slider from 'react-slick';
import { bannerimgone, bannerimgtwo, bannerimgthree, bannerimgfour, bannerimgfive } from '../../assets';

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "19%",
          right: "0",
          margin: "0 auto",
          transform: "translate(-50%, -50%)",
          width: "210px",
        }}
      >
        <ul style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i === dotActive ? {
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#131921",
            padding: "8px 0",
            cursor: "pointer",
            color: "white",
            border: "1px solid #f3a847"
          } : {
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#232F3E",
            padding: "8px 0",
            cursor: "pointer",
            color: "white",
            border: "1px solid #f3a847"
          }
        }
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "150px",
              }}
            >
              <ul style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
                i === dotActive ? {
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#131921",
                  padding: "8px 0",
                  cursor: "pointer",
                  color: "white",
                  border: "1px solid #f3a847",
                  fontSize: "12px",
                } : {
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#232F3E",
                  padding: "8px 0",
                  cursor: "pointer",
                  color: "white",
                  border: "1px solid #f3a847",
                  fontSize: "12px",
                }
              }
            >
              {i + 1}
            </div>
          ),
          },
        },
      ],
    
  };

  return (
    <div className='w-full'>
      <div className='w-full h-full relative'>
        <Slider {...settings}>
          <div>
            <img src={bannerimgone} alt='Banner Image One' />
          </div>
          <div>
            <img src={bannerimgtwo} alt='Banner Image Two' />
          </div>
          <div>
            <img src={bannerimgthree} alt='Banner Image Three' />
          </div>
          <div>
            <img src={bannerimgfour} alt='Banner Image Four' />
          </div>
          <div>
            <img src={bannerimgfive} alt='Banner Image Five' />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
