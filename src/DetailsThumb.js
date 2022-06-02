import React from 'react'

function DetailsThumb() {
  return (
    <div className='container'>
       <div className='big-img'>
            <img src="images/banarasi-saree.jpg" alt="" />
           </div> 
       <div className='thumb' >
          <img src="images/images (4).jpeg" alt="" id='productImg' className='small-img' />
          <img src="images/image_zoom.jpeg" alt="" className='small-img' />
          <img src="images/banarasi-saree.jpg" alt="" className='small-img' />
          <img src="images/images (5).jpg" alt="" className='small-img' />
          <img src="images/images(7).jpg" alt="" className='small-img' />

        </div>
    </div>
  )
}

export default DetailsThumb
