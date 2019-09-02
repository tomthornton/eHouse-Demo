import React from 'react'
import CollegeBoundDesktop from '../assets/images/college-bound--desktop.jpg'
import CollegeBoundMobile from '../assets/images/college-bound--mobile.jpg'
import NewArrivalsDesktop from '../assets/images/new-arrivals--desktop.jpg'
import NewArrivalsMobile from '../assets/images/new-arrivals--mobile.jpg'

export default function FeaturedBoxes() {

    const boxes = [
        {
            title: 'New Arrivals',
            subtitle: 'Our latest Summer styles. Fresh. Fun. Fabulous.',
            desktopBackgroundImage: NewArrivalsDesktop,
            mobileBackgroundImage: NewArrivalsMobile,
            links: [
                'women',
                'men',
                'kids',
                'home'
            ]
        },
        {
            title: 'College Bound',
            subtitle: 'New places and new faces. Same great style',
            desktopBackgroundImage: CollegeBoundDesktop,
            mobileBackgroundImage: CollegeBoundMobile,
            links: [
                'Shop Dorm Decor'
            ]
        }
    ]


    return (
        <section className='featured-boxes full-width-container'>
            <div className='container'>
                {boxes.map(box => (
                    <div className='featured-box-wrapper'>
                        <div className='featured-box'>
                            <div className='background-image-desktop' style={{backgroundImage: `url(${box.desktopBackgroundImage})`}}/>
                            <div className='background-image-mobile' style={{backgroundImage: `url(${box.mobileBackgroundImage})`}}/>
                            <div className='featured-box-content'>
                                <h2 className='featured-box-title'>{box.title}</h2>
                                <h3 className='featured-box-subtitle'>{box.subtitle}</h3>
                                <div className='featured-box-links-container'>
                                    {box.links.map(link => (
                                        <div className='featured-box-link'>
                                            {link}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>)
}
