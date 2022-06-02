import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
// import Cards from './Cards'

function Product() {



  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevCount => prevCount - 1)

    }
  }


  const handleIncrement = () => {
    if (quantity < 10) {


      setQuantity(prevCount => prevCount + 1)
    }
  }



  return (
    <div className="container">

      <div className="details">






        <div className="header">
          <div className='first'>
            <h1 className="display-5 fw-bolder">BANARASI SAREE </h1>

            <div className='aim'>


              {/* <p>Rating4.1<i className="fa fa-star"></i></p> */}
              <h3 className="rupees">RS. 23,220</h3>
              <h3 className="rupee">RS. 19,737 (15% OFF)</h3>

              <h3 className="code">  SKU: 0030V302233088</h3>
              <div className='row'>
                <div className='col-md-3 mt-3'>
                  <div className='input-group'>
                    <div className='buttons'>
                      {/* <h4 className='quantity'>QUANTITY</h4> */}
                      <button type='button' onClick={handleDecrement} className="buttonone">-</button>

                      <div className='form-control text-center' >{quantity}</div>

                      <button type='button' onClick={handleIncrement} className="buttontwo">+</button>
                    </div>

                    <div className='charge' >
                      <h3 className='shp-charge'> SHIPPING CHARGE</h3>
                    </div>
                    <div className='shipping'>
                      <h3>India Shipping:</h3>


                      <div className='free'>
                        <h4 className=''>free</h4>
                      </div>
                      <h3>International Shipping:</h3>


                      <div className='freee'>
                        <h4 className='freee'>Above $299 FREE Shipping*</h4>
                      </div>
                      <h4 className='offer'>Cannot be clubbed with Any offer</h4>
                    </div>
                  </div>

                </div>
              </div>




              <div className='buttons'>
                <button className="cart">Add to cart</button>
                <button className="now" >Go to Cart</button>
              </div>

              <h4>PRODUCT DETAILS</h4>
            </div>
            <div className='list'>

              <p className='p'>Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight &amp; soft fabric for breathable and comfortable wearing. </p>
              <h4>NEED HELP WITH THIS PRODUCT ?</h4>
              {/* <div className=''> */}
              <i className='fa fa-thin fa-comment'>   Chat with us on whatsapp</i>
              <h6 className='h6'>Mon-Sat | 9am to 6pm(Ist)</h6>
              <i className=" fa fa-thin fa-phone" >   Give us a call - +91 34567899</i>
              <h6 className='h6'>Mon-Sat | 9am to 6pm(Ist)</h6>
              <i className=" fa fa-thin fa-envelope" >   Write to us</i>
              <h6 className='h6'>enquiry@mahalakshmi.com</h6>

              {/* </div> */}


            </div>


          </div>
          {/* <div className='big-img'>
            <img src="images/banarasi-saree.jpg" alt="" />
            </div> */}

        </div>
        {/*         
        <div className='thumb' >
          <img src="images/images (4).jpeg" alt="" id='productImg' className='small-img' />
          <img src="images/image_zoom.jpeg" alt="" className='small-img' />
          <img src="images/banarasi-saree.jpg" alt="" className='small-img' />
          <img src="images/images (5).jpg" alt="" className='small-img' />
          <img src="images/images(7).jpg" alt="" className='small-img' />

        </div> */}

      </div>
      {/* <DetailsThumb/> */}
      {/* <div className="nav-item" onClick={closeClick}>
     <i className={click? 'nav-menu actiive':'nav-menu'} ></i> */}
      {/* <div className='nav'>
        <a className='info' href="/info" >INFO AND CARE</a>
        <a className='delivery' href="/delivery" > DELIVERY</a>
        <a className='return' href="/return" >RETURN AND EXCHANGE</a>
        <a className='mrp' href="/mrp">MRP</a>
        <a className='manufacture' href="/manufactured">MANUFACTURED AND MARKETED BY</a>
        <p className='paragraph'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
      </div>



      <div className='cards'>
        <div className='recent'>
          <h4>RECENTLY VIEWED</h4>
        </div>

        <Cards />
      </div> */}

    </div>
  )
}

export default Product
