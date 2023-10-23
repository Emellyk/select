import React, { Component } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="/images/slide1.svg" />
          </div>
          <div>
            <img src="/images/slide2.svg" />
          </div>
          <div>
            <img src="/images/slide3.svg" />
          </div>
          <div>
            <img src="/images/slide1.svg" />
          </div>
        </Slider>
      </div>
    )
  }
}

