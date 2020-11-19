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
                         <Carousel.Item style={{'height':"300px"}} >  
                         <img style={{'height':"40vh"}}  
                         className="d-block w-100"  
                        src={'assets/img/i2.jpg'}
                          alt=""/>  
                           <Carousel.Caption>  
                             <h3>First Demo</h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"300px"}}>  
                                 <img style={{'height':"40vh"}}  
                                   className="d-block w-100"  
                                   src={'assets/img/i1.jpg'}
                                   alt=""/>  
                                       <Carousel.Caption>  
                                   <h3>Heat Pump</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"300px"}}>  
                                       <img style={{'height':"40vh"}}  
                                        className="d-block w-100"  
                                        src={'assets/img/i3.jpg'}
                                        alt=""/>  
                                        <Carousel.Caption>  
                                          <h3>Cooling Tower</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default BootstrapCarousel