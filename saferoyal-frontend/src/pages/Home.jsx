import React from 'react'
import HLayout from '../components/HLayout'
import Stats from '../components/stats'
import Serv from '../components/Serv'
import Cards from '../components/cards'
import Schools from '../components/schools'
const Home = () => {
  return (
    <div>
      <HLayout>
       <Stats/>
       <Serv/>
       <Cards/>
       <Schools/>
      
      </HLayout>

    </div>
  )
}

export default Home