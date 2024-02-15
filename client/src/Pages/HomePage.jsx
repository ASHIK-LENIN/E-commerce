import React from 'react'
import Header from '../Components/Layout/Header'
import Hero from '../Components/Route/Hero'
import Categories from '../Components/Route/Categories'
import BestDeals from '../Components/Route/BestDeals/BestDeals'


const HomePage = () => {
  return (
    <>
<Header activeHeading={1}/>
<Hero/>
<Categories/>
<BestDeals />
    </>
  )
}

export default HomePage