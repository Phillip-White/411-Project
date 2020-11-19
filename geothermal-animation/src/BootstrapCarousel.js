import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class BootstrapCarousel extends Component {  
        render() {  
  
                return (  
                        <div>  
                                <div class='container-fluid' >  
                                        <div className="row title" style={{  }} >  
                                        </div>  
                                </div>  
                                <div className='container-fluid' >  
                                        <Carousel>  
                                                <Carousel.Item style={{'height':"300px", 'width':'100%'}} >  
                                                <img style={{'height':"40vh", 'width':'100%'}}  
                                                className="d-block w-100%" alt=""  
                                                src={'assets/img/i1.jpg'}  />  
                                                <Carousel.Caption>  
                                                <h3></h3>  
                                                </Carousel.Caption>  
                                                </Carousel.Item  >  
                                                <Carousel.Item style={{'height':"300px", 'width':'100%'}}>  
                                                <img style={{'height':"40vh", 'width':'100%'}}  
                                                className="d-block w-100%" alt="" 
                                                src={'assets/img/i2.jpg'}    />  
                                                <Carousel.Caption>  
                                                <h3></h3>  
                                                </Carousel.Caption>  
                                                </Carousel.Item>  
                                                <Carousel.Item style={{'height':"300px", 'width':'100%'}}>  
                                                <img style={{'height':"40vh", 'width':'100%'}}  
                                                className="d-block w-100%" alt=""  
                                                src={'assets/img/i3.jpg'}   />  
                                                <Carousel.Caption>  
                                                <h3></h3>  
                                                </Carousel.Caption>  
                                                </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default BootstrapCarousel