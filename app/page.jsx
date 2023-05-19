import React from 'react'
import Navbar from '@components/navbar'
// assets/svgviewer-png-output.png
// ₹

const Home = () => {
  return (
    <div className='wraper'>
      <div className="header"></div>
        

        <div className="content-wraper">


          <div className="content-heading">
            <img src="assets/profile.png" alt="img" />
            <div>
              <h3>Bharadwaj Centre</h3>
              <p>Food Influencer</p>
            </div>
          </div>




          <div className="content">
           <div className="up">
            <img className='icon' src="assets/arrow-up.png" alt="" />
           </div>
           <h2  className='heading'> Food Center</h2>

            <div className="menu">
              
              <div className="varity-heading">
                <p>Noodles</p>
                <p  className='action'>Chinese</p>
              </div>

              <div className="varities">




                 <div className="card">
                  Dandon Noodles
                 </div>


                 
                 <div>
                  Chow Mien
                 </div>
                 <div>
                  Lo Mein
                 </div>


              </div>


              <div className="varity-heading">
                <p>Meals Coupon</p>
                
              </div>
              <div className="horizontal-slider">

                <div className="dates">
                  <h5>27th JAN - 18th FEB </h5>
                  <h4>UPTO</h4>
                  <h4>25% OFF</h4>

                  
                </div>

                <div className="horizontal-card">
                  <p>Chinese</p>
                  <h4>₹ 299/- </h4>
                  <p> <img src="" alt="" /> 22% + 30% off - Expires in 1h</p>
                </div>

                <div className="horizontal-card">
                  <p>Chinese</p>
                  <h4>₹ 299/- </h4>
                  <p> <img src="" alt="" /> 22% + 30% off - Expires in 1h</p>
                </div>

                <div className="horizontal-card">
                  <p>Chinese</p>
                  <h4>₹ 299/- </h4>
                  <p> <img src="" alt="" /> 22% + 30% off - Expires in 1h</p>
                </div>

                <div className="horizontal-card">
                  <p>Chinese</p>
                  <h4>₹ 299/- </h4>
                  <p> <img src="" alt="" /> 22% + 30% off - Expires in 1h</p>
                </div>


              </div>

              <div className="button-wrap">
              <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home