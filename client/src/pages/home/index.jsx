import React from 'react'
import BestServices from './bestservices'
import Buisness from './buisness'
import Mambers from './mambers'
import Services from './services'
import Study from './study'
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Buisness/>
    <Services/>
    <BestServices/>
    <Study/>
    <Mambers/>
    </div>
  )
}

export default Home