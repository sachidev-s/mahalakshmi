import { Grid } from '@mui/material'
import React, { useState } from 'react'
//  import Cards from './Cards'
import Dropdown from './Dropdown'
import './Heads.css'
function Heads() {

  const [show, setShow] = useState(false)
  const showDropdown = () => {
    setShow(true)

  }
  const hideDropdown = () => {
    setShow(false)
  }
  const [view, setView] = useState(false)
  const viewDropdown = () => {
    setView(true)

  }
  const unviewDropdown = () => {
    setView(false)
  }


  const delivery = <p className='del'>Break the traditional courier cycle with Delivery Direct doorstep pickup and delivery. Experience hassle-free shipping from the comfort of home or office with Delivery Direct.
    Deal: 20% off for all service ·</p>


  return (

<>
<Grid className='' id='links'container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

<Grid xs={16}>



    

      <div className='nav ms-5 mt-5'>
        <a className='info' href="/info" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}
        > INFO AND CARE</a>
        <a className='delivery' href="/delivery" onMouseEnter={viewDropdown} onMouseLeave={unviewDropdown}> DELIVERY</a>
        <a className='return' href="/" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}  >RETURN AND EXCHANGE</a>
        <a className='mrp' href="/mrp" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>MRP</a>
        <a className='manufacture' href="/manufactured" onMouseEnter={viewDropdown} onMouseLeave={unviewDropdown}>MANUFACTURED AND MARKETED BY</a>
        {show ? <Dropdown /> : hideDropdown}
        {view ? delivery : hideDropdown}
      </div>




</Grid>

</Grid>




{/* 
    
    <div className='container d-flux'>
      <div className='nav'>
        <a className='info' href="/info" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}
        > INFO AND CARE</a>
        <a className='delivery' href="/delivery" onMouseEnter={viewDropdown} onMouseLeave={unviewDropdown}> DELIVERY</a>
        <a className='return' href="/" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}  >RETURN AND EXCHANGE</a>
        <a className='mrp' href="/mrp" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>MRP</a>
        <a className='manufacture' href="/manufactured" onMouseEnter={viewDropdown} onMouseLeave={unviewDropdown}>MANUFACTURED AND MARKETED BY</a>
        {show ? <Dropdown /> : hideDropdown}
        {view ? delivery : hideDropdown}
      </div> */}



      <div className='cards'>
        <div className='recent'>
           <h4>RECENTLY VIEWED</h4> 
        </div>

         {/* <Cards />  */}
      </div>

    
    </>
  )
}

export default Heads
