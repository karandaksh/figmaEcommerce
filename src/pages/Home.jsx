import React from 'react'
import { Link } from 'react-router'
import CategoryFilter from '../components/CategoryFilter'

const Home = () => {
  return (
    <>

      <div className="md:px-20 border-b border-0">
        <div className="xl:container mx-auto ">
          <CategoryFilter/>
        </div>
      </div>

    </>
  )
}

export default Home
