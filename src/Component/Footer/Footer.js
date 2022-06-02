import { Grid } from '@mui/material';
import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <div className=''>
            <Grid className='news mb-4 text-white text-center'
               container
               direction="row"
               justifyContent="center">
                <Grid className='mt-4 ' xs={4}>
                 <h6 className='letter'>NEWSLETTER</h6>
                 <p className='news-content'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
                 <form className="d-flex mb-4" role="search">
      <input className="form-control " type="search" placeholder="Enter Your Email" aria-label="Search" />
      <button className="btn btn-dark" type="submit">SUBSCRIBE</button>
    </form>
                </Grid>
            </Grid>
            <Grid className=' footer' container
                direction="row"
                justifyContent="space-around"
                spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                <Grid className="" xs={3}>
                    <ul className='list-unstyled ms-5 me-3 mt-5'>
                        <h5>Email</h5>
                        <li  >  <i className="fa fa-3x fa-envelope-o me-3" aria-hidden="true"></i>  <a className='text-decoration-none text-dark' href=' '>   mail@mahalekshmi.com</a>   </li>
                        <h5 className='mt-4  mb-3'>phone</h5>
                        <li  >  <i className="fa fa-solid fa-3x fa-microphone me-4"></i>  <a className='text-decoration-none text-dark' href=' '>   (123)456-7890</a>  </li>
                        <h5 className='mt-4  mb-3'>Social Link</h5>
                        <li  > <a className='text-decoration-none text-dark me-2' href=' '>   <i className="fa fa-2x fa-brands fa-facebook-f"></i> </a>
                            <a className='text-decoration-none text-dark me-2' href=' '>  <i className=" fa fa-2x fa-brands fa-linkedin"></i> </a>
                            <a className='text-decoration-none text-dark me-2' href=' '>  <i className=" fa fa-2x fa-brands fa-instagram"></i> </a>
                            <a className='text-decoration-none text-dark me-2' href=' '>  <i className=" fa fa-2x fa-brands fa-twitter"></i> </a>
                        </li>
                    </ul>
                </Grid>
                <Grid xs={2}>
                    <ul className='list-unstyled ms-5 me-3 mt-5'>
                        <h5 className='mb-4'>About Us</h5>
                        <a className='text-decoration-none text-dark ' href=''> <li className='mb-3'>About Us</li></a>
                        <a className='text-decoration-none text-dark ' href=''> <li className='mb-3'>Contact Us</li></a>
                        <a className='text-decoration-none text-dark' href=''> <li className='mb-3'>Compare List</li></a>
                        <a className='text-decoration-none text-dark' href=''> <li className='mb-3'>News & Events</li></a>
                        <a className='text-decoration-none text-dark' href=''> <li className='mb-3'>Career</li></a>
                        <a className='text-decoration-none text-dark' href=''> <li className='mb-3'>CSR</li></a>
                        <a className='text-decoration-none text-dark' href=''> <li className='mb-3'>FAQ</li></a>
                    </ul>
                </Grid>
                <Grid xs={2}>
                    <ul className='list-unstyled ms-5 me-3 mt-5'>
                        <h5 className='mb-4'>Policies</h5>
                        <a className='text-decoration-none text-dark ' href=''> <li className='mb-3'>Privacy Policy</li></a>
                        <a className='text-decoration-none text-dark ' href=''> <li className='mb-3'>Terms & conditions</li></a>
                        <a className='text-decoration-none text-dark' href=''> <li className='mb-3'>Disclaimer Policy</li></a>
                        <a className='text-decoration-none text-dark' href=''> <li className='mb-3'>Payment Policy</li></a>
                        <a className='text-decoration-none text-dark' href=''> <li className='mb-3'>Shipping Policy</li></a>
                        <a className='text-decoration-none text-dark' href=''> <li className='mb-3'>Return policy</li></a>
                    </ul>
                </Grid>
                <Grid xs={5}>
                    <ul className='list-unstyled ms-5 me-3 mt-5'>
                        <h5 className='mb-4'>Working Days/Hours</h5>
                        <li className='mb-3'>Mon - Saturday / 09:00 AM - 08:00 PM</li>
                        <li className='mb-3'>Sunday / 10:00 AM - 08:00 PM</li>
                        <h5 className='mb-3'>We Accept</h5>
                        <li className='mb-3'>
                        </li>
                    </ul>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" xs={12}>
                    <hr className='w-75 ' />
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" xs={12}>
                    <p className='text-center mt-4 mb-4'>© 2022 By Mahalekshmisilks. All Rights Reserved.</p>
                </Grid>
            </Grid>
        </div >
    )
}
export default Footer