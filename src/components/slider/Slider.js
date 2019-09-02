import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import HeroImageDesktop from '../../assets/images/hero-image--desktop.jpg'
import HeroImageMobile from '../../assets/images/hero-image--mobile.jpg'
import Slider from 'react-slick'
import './slider.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderArrowButton = ({direction, onClick}) => (
    <button
        onClick={onClick}
        className={direction ==='forward' ? 'slider-arrow-next' : 'slider-arrow-prev'}>
            { direction === 'forward' ?
                <IoIosArrowForward style={{color: 'white', fontSize: 30}}/>:
                <IoIosArrowBack style={{color: 'white', fontSize: 30}}/>}
    </button>)


export default function CarouselSlider() {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        nextArrow: <SliderArrowButton direction='forward'/>,
        prevArrow: <SliderArrowButton direction='backward'/>
    };

    const slides = [
        {
            title: '50% off everything',
            subtitle: 'In stores & online',
            desktopBackgroundImage: HeroImageDesktop,
            mobileBackgroundImage: HeroImageMobile,
            links: [
                'women',
                'men',
                'kids',
                'home'
            ]
        },
        {
            title: '50% off everything',
            subtitle: 'In stores & online',
            desktopBackgroundImage: HeroImageDesktop,
            mobileBackgroundImage: HeroImageMobile,
            links: [
                'women',
                'men',
                'kids',
                'home'
            ]
        },
        {
            title: '50% off everything',
            subtitle: 'In stores & online',
            desktopBackgroundImage: HeroImageDesktop,
            mobileBackgroundImage: HeroImageMobile,
            links: [
                'women',
                'men',
                'kids',
                'home'
            ]
        },
    ]

    return (
        <Slider {...sliderSettings} className='full-width-slider'>
            {slides.map(slide => (
                <div className='slide-container'>
                    <div className='slide'>
                        <div className='slide-background-desktop' style={{backgroundImage: `url(${slide.desktopBackgroundImage})`}}/>
                        <div className='slide-background-mobile' style={{backgroundImage: `url(${slide.mobileBackgroundImage})`}}/>
                        <div className='slide-content-container'>
                            <div className='slide-content'>
                                <h3 className='slide-subtitle'>{slide.subtitle}</h3>
                                <h2 className='slide-title'>{slide.title}</h2>
                                <div className='slide-links-container'>
                                    {slide.links.map(link => (
                                            <div className='slide-link'>{link}</div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))
            }
        </Slider>)
}
