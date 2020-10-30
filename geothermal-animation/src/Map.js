import React from 'react'
import Arrows from './Arrows'
import ClickAreas from './ClickAreas'
import Schematic from './pics/Geothermal Schematic.jpg'
import ArrowList from './data/ArrowList'
import ClickAreaList from './data/ClickAreaList'
import { MapInteractionCSS } from 'react-map-interaction';
import arrows from './onload.js'

class Map extends React.Component {

	constructor() {
		super()
		this.state = {
			listofarrows: ArrowList,
			listofclick: ClickAreaList
		}
	}

	render() {

		const click = this.props.click
		const arrowData = this.state.listofarrows.map(item => <Arrows key={item.id} item={item} />)
		const clickData = this.state.listofclick.map(area => <ClickAreas key={area.id} area={area} click={click} />)

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