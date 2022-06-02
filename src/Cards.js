import React from 'react'
import './Card.css';
import Data from './Data'
import {Card,Row,Col } from 'react-bootstrap'
import Realtive from './Realtive';
import { Grid } from '@mui/material';
function Cards() {
  return (
<>




<Grid container 

>
  <Grid >


  <Row  className="card-product ms-5 me-5 mb-5">
          {Data.products.map((product)=>( 
              <Col>
                <Card className='styl 'width="300">
                  <Card.Img variant="top" className='img' src={product.image} />
                  <div className='border-img'>
                {product.percentage}
              </div>
                  <Card.Body >
                  <div className="box">
                      <i class="fa fa-cart-arrow-down"></i>
                      <i className="fa fa-heart"></i>
                      <i class="fa fa-align-left"></i>
                    </div>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className='description'>{product.description}</Card.Text>
                    <Card.Text className='price'>{product.price}</Card.Text>

                  </Card.Body>
                  
                </Card>
            </Col>
            ) )}
         
      </Row>
    
  </Grid>
</Grid>


<div className='tops'>
    
      {/* <Row sm={12} md={10} lg={10} xl={4} className="card-product">
          {Data.products.map((product)=>( 
              <Col>
                <Card className='styl' >
                  <Card.Img variant="top" className='img' src={product.image} />
                  <div className='border-img'>
                {product.percentage}
              </div>
                  <Card.Body >
                  <div className="box">
                      <i class="fa fa-cart-arrow-down"></i>
                      <i className="fa fa-heart"></i>
                      <i class="fa fa-align-left"></i>
                    </div>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className='description'>{product.description}</Card.Text>
                    <Card.Text className='price'>{product.price}</Card.Text>

                  </Card.Body>
                  
                </Card>
            </Col>
            ) )}
         
      </Row> */}
      <Realtive/>
</div>
</>
  )
}

export default Cards
