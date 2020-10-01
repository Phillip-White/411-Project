import React from 'react'
import Arrows from './Arrows'
import ClickAreas from './ClickAreas'
import Schematic from './pics/Geothermal Schematic.jpg'
import ArrowList from './data/ArrowList'
import ClickAreaList from './data/ClickAreaList'

class Map extends React.Component {

	constructor() {
		super()
		this.state = {
			listofarrows: ArrowList,
			listofclick: ClickAreaList
		}
	}

	render() {

		const arrowData = this.state.listofarrows.map(item => <Arrows key={item.id} item={item} />)
		const clickData = this.state.listofclick.map(area => <ClickAreas key={area.id} area={area} />)

		return (
			<div className="wrapper" id="map-container">
				<img src={Schematic} id="map" />
				<div id="arrow-container">
					{arrowData}
					</div>
				<div id="click-container">
					{clickData}
				</div>
			</div>
		)
	}
}

export default Map