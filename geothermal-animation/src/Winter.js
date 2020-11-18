import React from 'react';
import Sidebar from './Sidebar'
import Map from './Map'
import Snowfall from 'react-snowfall'
import ReactDOM from 'react-dom'

class Winter extends React.Component {
    constructor() {
        super()
        this.state = {
            //popUP info (display, picture and text)
            showPopUp: false,
            pic: '',
            text: ''
        }
        this.click = this.click.bind(this)
    }

  
    //when a click area is clicked change the state to re-render page (popup)
    click(picture) {
        this.setState({
            showPopUp: true
        })
        this.setState({
            pic: picture.name
        })
        this.setState({
            //will be desc when we have all the info
            text: picture.desc
        })
    }

    render() {
        const show = this.state.showPopUp
        const pic = this.state.pic
        const text = this.state.text
        return (
            <div className="page">

               

                
                <Sidebar show={show} pic={pic} text={text} season={"Winter"} >

                </Sidebar>
                
               
                
                    <Map season="Winter" click={this.click} />
                    
            </div>
        )
    }
}



export default Winter