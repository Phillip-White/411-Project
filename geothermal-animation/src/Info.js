import React from 'react'
import Sidebar from './Sidebar'
import Schematic from './pics/Geothermal Schematic.jpg'
//import Slider from './Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapCarousel from './BootstrapCarousel' 

class Info extends React.Component {
    constructor() {
        super()
        this.state = {
            //popUP info (display, picture and text)
            showPopUp: false,
            pic: 'Boiler',
            text: ''
        }
        this.click = this.click.bind(this)
    }

    //when a click area is clicked change the state to re-render page (popup)
    click(picture) {
        this.setState({
            showPopUp: 'visible'
        })
        this.setState({
            pic: picture.name
        })
        this.setState({
            //will be desc when we have all the info
            text: picture.title
        })
    }

    render() {
        const show = this.state.showPopUp
        const pic = this.state.pic
        const text = this.state.text
        return (
            <div className="page">
                <Sidebar show={show} pic={pic} text={text}  season={"Info"}/>
                <div style={{overflow:'auto'}}>
                    
                    <BootstrapCarousel></BootstrapCarousel>  
                    <h1>What is Geothermal Energy?</h1>
                    
                    Geothermal energy is the heat from the Earth. The word geothermal comes from the Greek words geo (earth) and therme (heat). Geothermal energy is a renewable energy source because heat is continuously produced inside the earth. People use geothermal heat to heat buildings and generate electricity. Geothermal heat pumps use the earth as a heat source in the winter and as a heat storage source in the summer. This allows the system to provide extremely efficient heating or cooling all year long in virtually any climate.
                    Southeastern Louisiana University currently has two geothermal systems: a hybrid system and a pond system.
                    <br/><br></br>
                    <h1>Why use Geothermal?</h1>
                    Geothermal technology saves you money each and every day. By using the constant temperature below the earth's surface, your geothermal system doesn't need to work as hard heating and cooling your home. It runs more efficiently, so it costs you less money - up to 80% savings over your existing heating and cooling system costs!
                    Climatemaster has designed a geothermal savings calculator that can help you determine just how much you can save. You will need to answer just a few simple questions about your home and your existing heating and cooling system and hot water needs and the savings calculator will do the rest.
                    <br/><br/>
                    <h1>Hybrid System</h1><br></br>
                    In our residence halls Ascension Hall and Twelve Oaks Hall, we have  220 wells at 300 feet underground. This is the second-largest system in the States according to Climate Master and the first of this kind in the State of Louisiana.  
                    <br/><br/>
                    <h1>Pond Systems</h1><br/>
                    We utilize a pond loop system at the Sustainability Center. The pond closed-loop configuration is the most economical configuration. It can be installed when the building is situated close to a body of surface water, such as a lake or a pond. The system functions similarly to a ground loop system. Pipes are usually run to the water with longer sections submerged in the water itself. The pipe may be curled densely in order to fit more of it in a given space. It is recommended that pond loops are used only in cases where the water does not drop below 6 to 8 feet at its lowest level in order to ascertain sufficient heat-transfer capability. Pond loops with closed systems do not affect water bodies in any adverse way.
                    <br></br><br/>
                    <h1>Explore Hybrid System </h1>
                    <br/>
                    Summer: Heat is absorbed from the building and dissipated into the ground. The temperature in the ground is lower, 60°F, than underneath the ground, 85°F or more. Therefore, heat is collected throughout the water wells and dissipated into the ground. Water returns to the dorms with a lower temperature.                    </div>
                </div>
            )
    }
}

export default Info