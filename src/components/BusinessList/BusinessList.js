import React, { Component } from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends Component {
	
	render() {
		let toRender =''
		if (this.props.businesses !== undefined){
			toRender = (
				<div className="BusinessList">
					{
						this.props.businesses.map(business=>{
							return <Business business={business} key={business.id}/>;
						})
					}
				</div>
			);
		} else {
			toRender = <h1>Could not find Data</h1>
		}
		return toRender
	}
}

export default BusinessList;