import React from 'react'
class Footer extends React.Component {
    render(){
        return(
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                            <div className="col">
                                <ul className="list-unstyled">
                                    <li><a href="https://www.southeastern.edu/">Southeastern Louisiana University</a></li>
                                    <li>Winter</li>
                                </ul>
                            </div>  

                            <div className="col">
                                <ul className="list-unstyled">
                                    <li>Summer</li>
                                    <li>Winter</li>
                                </ul>
                            </div> 
                    </div>
                </div>        
            </div>
        )  
    }
}
export default Footer;