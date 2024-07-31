import Slider from 'react-slick'
import ball from 'assets/images/ball.webp'
import changeUsual from 'assets/images/change@1x.webp'
import changeRetina from 'assets/images/change@2x.webp'
import lamboUsual from 'assets/images/lambo@1x.webp'
import lamboRetina from 'assets/images/lambo@2x.webp'
import memeUsual from 'assets/images/meme@1x.webp'
import memeRetina from 'assets/images/meme@2x.webp'
import pumpUsual from 'assets/images/pump@1x.webp'
import pumpRetina from 'assets/images/pump@2x.webp'

import { SectionTitle } from 'components/sectionTitle'

import { NextButton, PrevButton } from './comicsSliderBtns'

import './comics.scss'

const Comics = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  }
  return (
    <section className='comics' id='comics'>
      <SectionTitle title='Comics' />
      <div className='comics__content'>
        <Slider {...settings} className='comics__slider'>
          <div>
            <img
              srcSet={`${changeUsual} 1x, ${changeRetina} 2x`}
              alt='Comic 1'
              className='comics__image'
            />
          </div>
          <div>
            <img
              srcSet={`${pumpUsual} 1x, ${pumpRetina} 2x`}
              alt='Comic 2'
              className='comics__image'
            />
          </div>
          <div>
            <img
              srcSet={`${memeUsual} 1x, ${memeRetina} 2x`}
              alt='Comic 3'
              className='comics__image'
            />
          </div>
          <div>
            <img
              srcSet={`${lamboUsual} 1x, ${lamboRetina} 2x`}
              alt='Comic 4'
              className='comics__image'
            />
          </div>
        </Slider>
        <img src={ball} alt='ball' className='comics__bg-image ball-1' />
        <img src={ball} alt='ball' className='comics__bg-image ball-2' />
        <img src={ball} alt='ball' className='comics__bg-image ball-3' />
      </div>
    </section>
  )
}

export default Comics
