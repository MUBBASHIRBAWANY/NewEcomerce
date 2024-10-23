import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card1.css'
const Card1 = () => {
  return (
    <div >
      <div className="row">
        <div className='col-lg-6 col-sm-12 card1'>
          <div id='card-img'>
          <img id='first'  src="/assets/4.png" alt="" />         

          </div>
          
        </div>

        <div className='col-lg-6 col-sm-12 card1'>
          
              <img id='second' src="/assets/5.png" alt="" />
            
         
              </div>
        </div>
    </div>
  )
}

export default Card1
