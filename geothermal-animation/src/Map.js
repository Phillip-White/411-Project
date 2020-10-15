import React from 'react'
import Arrows from './Arrows'
import ClickAreas from './ClickAreas'
import Schematic from './pics/Geothermal Schematic.jpg'
import { MapInteractionCSS } from 'react-map-interaction'
import axios from 'axios'

class Map extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			listofarrows: [],
			listofclick: []
		}
	}

	//connect to database and get data
	componentDidMount() {
		axios.get('http://localhost:5000/parts/')
			.then(response => {
				this.setState({
					listofclick: response.data
				})
			})
			.catch((error) => {
				console.log(error)
			})
		axios.get('http://localhost:5000/arrow/')
			.then(response => {
				this.setState({
					listofarrows: response.data
				})
			})
	}


	render() {

		//map data one by one
		const arrowData = this.state.listofarrows.map(item => <Arrows key={item.id} item={item} />)
		const clickData = this.state.listofclick.map(area => <ClickAreas key={area._id} area={area} click={this.props.click} />)

		return (
			<div className="wrapper" id="map-container">
				<MapInteractionCSS>
					<img alt="Schematic" src={Schematic} id="map" />
					<div id="arrow-container">
						{arrowData}
					</div>
					<div id="click-container">
						{clickData}
					</div>
				</MapInteractionCSS>
			</div>
		)
	}
}

export default Map