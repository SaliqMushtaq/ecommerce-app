import React from 'react'
import {assets} from '../assets/assets/frontend_assets/assets'
import Hero from '../components/Hero'

function Home() {
  console.log('Home component rendered')
  console.log('assets:', assets)
  
  return (
    /*
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h1 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '20px'}}>Latest Arrivals</h1>
      <button style={{padding: '12px 32px', backgroundColor: 'black', color: 'white', fontSize: '14px', cursor: 'pointer', marginBottom: '20px'}}>
        Shop Now
      </button>
      <div style={{marginTop: '30px'}}>
        {assets.hero_img ? (
          <img src={assets.hero_img} alt="hero" style={{maxWidth: '100%', height: 'auto', display: 'block'}} />
        ) : (
          <p>Image not available</p>
        )}
      </div>
    </div>
    */
    <div>
      <Hero/>
    </div>
  )
}

export default Home
