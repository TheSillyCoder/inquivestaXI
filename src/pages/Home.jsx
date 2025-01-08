import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Timer from '../components/Timer'

const Home = () => {
  return (
    <>
    <Navbar active=""/>
    <div className="hero-section">
      <img src="./logo.png" alt="" className="hero-img" />
      <h3 className='glitch'>7th to 9th February, 2025</h3>
      <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} transition={{ type: "spring", stiffness: 400, damping: 10 }}><Link to="/about" className='hero-link'>But What is Inquivesta?</Link></motion.div>
      <Timer/>
    </div>
    </>
  )
}

export default Home