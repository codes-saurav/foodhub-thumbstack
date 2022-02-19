import React from 'react'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='text-center text-white'>
       FoodHub &copy; {currentYear}  @Saurav Raj
    </div>
  )
}

export default Footer