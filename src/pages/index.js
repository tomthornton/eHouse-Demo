import React from 'react'
import Layout from '../components/layout'
import '../assets/styles/styles.scss'
import CarouselSlider from '../components/slider/slider'
import TextImageBanner from '../templates/text-image-banner'
import FeaturedBoxes from '../templates/featured-boxes'
import Callouts from '../templates/callouts'

const IndexPage = () => (
  <Layout>
    <CarouselSlider/>
    <TextImageBanner/>
    <FeaturedBoxes/>
    <Callouts/>
  </Layout>
)

export default IndexPage
