import React from 'react'
import Arrows from './Arrows'
import ClickAreas from './ClickAreas'
import Schematic from './pics/Geothermal Schematic.jpg'
import { MapInteractionCSS } from 'react-map-interaction'
import axios from 'axios'
import Snowfall from 'react-snowfall'
import { arrowTranspose } from './onload'

class Map extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			listofarrows: [],
			listofclick: [],
			value: {
				scale: 1,
				translation: { x: 0, y: 0 }
			},
			tempLeft: 5320,
			tempTop: 3790,
			trans: {
				xMin: -(window.innerWidth * .6),
				xMax: (window.innerWidth * .6),
				yMin: -(window.innerHeight),
				yMax: (window.innerHeight * .8)
			}
		}
	}



	//connect to database and get data
	componentDidMount() {
		axios.get('http://' + window.location.hostname + ':5000/parts/')
			.then(response => {
				this.setState({
					listofclick: response.data
				})
			})
			.catch((error) => {
				console.log(error)
			})
		axios.get('http://' + window.location.hostname + ':5000/arrow/')
			.then(response => {
				this.setState({
					listofarrows: response.data
				})
			})
		arrowTranspose("temp")
	}
	

	render() {
		//map data one by one	
		const arrowData = this.state.listofarrows.map(item => <Arrows key={item._id} item={item} season={this.props.season} />)
		const clickData = this.state.listofclick.map(area => <ClickAreas key={area._id} area={area} click={this.props.click} />)

		let season
		if (this.props.season === 'Summer') {
			season = "warm_temp"
		}

		else if (this.props.season === 'Winter') {
			season = "cold_temp"
		}

		let temp = require('./pics/' + season + '.png')
		const tempStyle = {
			top: this.state.tempTop,
			left: this.state.tempLeft
		}

		let snow = null
		if (this.props.season === 'Winter') {
			snow = <Snowfall color="#cee9ee"/>
		}

		const sunStyle = {
			top: 0,
			right:0,
			transform: 'translate(50%,-50%)',

        }

		let sun = null
		if (this.props.season === 'Summer') {
			let sunpic = require('./pics/sun.png')
			sun = <img src={sunpic} alt="Sun" id="sun" style={sunStyle}/>
			setInterval(rotateImg(sun),1000)
		}

		function rotateImg(prop){
			console.log("Hello")
			//this.style.transform =+ 23deg
		}
		return (
			<div className="wrapper" id="map-container">
				<MapInteractionCSS minScale={.5} translationBounds={this.state.trans} value={this.state.value} onChange={(value) => {
					this.setState({ value })
					this.setState({
						trans: {
							xMin: -(((document.getElementById("map").width * this.state.value.scale) + document.getElementById("map").style.left.match(/\d+/g)) * .9),
							xMax: (((window.innerWidth * .9) - document.getElementById("map").style.left.match(/\d+/g)) * .5),
							yMin: -(((document.getElementById("map").height * this.state.value.scale) + document.getElementById("map").style.top.match(/\d+/g)) * .9),
							yMax: ((window.innerHeight - document.getElementById("map").style.top.match(/\d+/g)) * .8)
						}
                    })
				}
				}>
					<img alt="Schematic" src={Schematic} id="map" />
					<img alt="Thermostat" style={tempStyle} src={temp} id="temp" />
					<div id="arrow-container">
						{arrowData}
					</div>
					<div id="click-container">
						{clickData}
					</div>
					{snow}
				</MapInteractionCSS>
				{sun}
			</div>
		)
	}
}





export default Map