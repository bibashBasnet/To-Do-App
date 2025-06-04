import React from 'react'
import {Link} from 'react-router-dom'
import image from '../../assets/images/image.png'
import './Landing.css'

const Landing = () => {
  return (
    <div className='hero'>
      <div className="intro-text">
        <h1>
            <span className='tagline1'>Organize work and life </span>
            <span className='tagline2'>finally</span>
        </h1>
        <Link className='btn red' to='/register'>Register Now</Link>
        <Link className='btn blue' to='/login'>Login</Link>
      </div>
      <div className=''>
        <img src={image} alt='heroimage' width={'100%'} height={515}/>
      </div>
    </div>
  )
}

export default Landing
