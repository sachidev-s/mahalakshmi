import { Grid ,Button} from '@mui/material';
import React, { useState } from 'react';
import { grey } from '@mui/material/colors';

const Rework = () => {


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
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid className="mb-5" item xs={6}>


                    <div className='ms-5 me-5 mb-5 mt-5'>
                        <img height="700px" width="100%" src="images/banarasi-saree.jpg" alt="" />
                    </div>
                    <span>

                        <Grid container className="  ms-5"   >


                            <Grid className=' me-3' xs={2}>    <a href=""> <img  height="150px" width="100%" src="images/image_zoom.jpeg" alt="" className='small-img' /></a>
                            </Grid>
                            <Grid className="me-3" xs={2}>       <a href="">  <img height="150px" width="100%" src="images/banarasi-saree.jpg" alt="" className='small-img' /> </a>
                            </Grid>
                            <Grid className="me-3" xs={2}>        <a href="">   <img height="150px" width="100%" src="images/images (5).jpg" alt="" className='small-img' /> </a>
                            </Grid>
                            <Grid className="me-3" xs={2}>        <a href=""> <img height="150px" width="100%" src="images/images(7).jpg" alt="" className='small-img' /> </a>
                            </Grid>
                            {/* <Grid className="me-3" xs={2}>       <a href="">  <img height="150px" width="100%" src="images/banarasi-saree.jpg" alt="" className='small-img' /> </a> */}

                            {/* </Grid> */}
                        </Grid>

                    </span>
                    {/* <div className='ms-5 me-5 mt-5   ' >
                        <img height="300px" width="70%" src="images/images (4).jpeg" alt="" id='productImg' className='small-img' />
                        <img height="300px" width="70%" src="images/image_zoom.jpeg" alt="" className='small-img' />
                        <img height="300px" width="70%" src="images/banarasi-saree.jpg" alt="" className='small-img' />
                        <img height="300px" width="70%" src="images/images (5).jpg" alt="" className='small-img' />
                        <img height="300px" width="70%" src="images/images(7).jpg" alt="" className='small-img' />

                    </div> */}



                </Grid>
                <Grid item xs={6}>






                    <div className='ms-4 mb-4 mt-5 me-4'>
                        <h1 className=" ">BANARASI SAREE </h1>

                        <div className=''>
                             <div className="d-flex">

                                 <div className="">
                                     <h3 className="rupees me-2">
                                     RS. 23,220
                                     </h3>
                                 </div>
                                 <div className="">
                                     <h3>
                                     RS. 19,737 (15% OFF)  
                                     </h3>
                                 </div>
                             </div>

                            {/* <p>Rating4.1<i className="fa fa-star"></i></p> */}
                            {/* <h3 className="rupees">     RS. 19,737 (15% OFF)</h3>  */}
                           

                            <h3 className="code">  SKU: 0030V302233088</h3>
                            <div className='row'>
                                <div className='col-md-3 mt-3'>
                                    <div className=''>
                                        <div className='mb-5 d-flex'>
                                            {/* <h4 className='quantity'>QUANTITY</h4> */}
                                            <button type='button' onClick={handleDecrement} className="me-2">-</button>

                                            <div className=' text-center me-2' >{quantity}</div>

                                            <button type='button' onClick={handleIncrement} className="me-2">+</button>
                                        </div>

                                        {/* <div className='' >
                                            <h3 className=''> SHIPPING CHARGE</h3>
                                        </div>
                                        <div className=''>
                                            <h3>India Shipping:</h3>


                                            <div className=''>
                                                <h4 className=''>free</h4>
                                            </div>
                                            <h3>International Shipping:</h3>


                                            <div className=''>
                                                <h4 className=''>Above $299 FREE Shipping*</h4>
                                            </div>
                                            <h4 className=''>Cannot be clubbed with Any offer</h4>
                                        </div> */}
                                    </div>

                                </div>
                            </div>




                            <div className=''>
                            <Button className='me-3 mb-5' color="error" variant="contained">Add to cart</Button> 
                            <Button id='button' className='mb-5' >  go to cart</Button>
                            
                            </div>

                            <h4 className='mb-4'>PRODUCT DETAILS</h4>
                        </div>
                        <div className='mb-5'>

                            <p className='mb-5'>Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight &amp; soft fabric for breathable and comfortable wearing. </p>
                            <h4 className='mb-5'>NEED HELP WITH THIS PRODUCT ?</h4>
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


                </Grid>

            </Grid>

    </div>
    )
}

export default Rework
