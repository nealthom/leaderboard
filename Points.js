import React, {Component} from 'react';
import List from './List';


const containerStyle = {
	position: 'relative',
};
const relativeStyle = {
	position: 'absolute',
	left: '33%',
	top: 10,
	
	cursor: 'pointer',
	color: '#006c1d',

};
const allStyle = {
	position: 'absolute',
	left: '60%',
	top: 10,
	
	cursor: 'pointer',
	color: '#006c1d',

};


class Points extends Component{
	constructor(props){
		super();
		this.state = {
			relative: 'Points in the past 30 days \u25BC',
			allstyle: 'All time points',
			recent: true,
		};
	}

	relativeClick(event){
		this.setState({
			relative: 'Points in the past 30 days \u25BC',
			allstyle: 'All time points',
			recent:true,
		});
	}
	allstyleClick(event){
		this.setState({
			relative: 'Points in the past 30 days',
			allstyle: 'All time points \u25BC',
			recent:false,
		});
	}

	render(){

		if( this.state.recent){
		return(
			<div style={containerStyle}>
			<div style={relativeStyle} onClick={(event)=>this.relativeClick(event)}>{this.state.relative}</div>
			<div style={allStyle} onClick={(event)=>this.allstyleClick(event)}>{this.state.allstyle}</div>
			<List recent={this.props.recent} alltime={this.props.alltime} test={this.state.recent}/>

			</div>
		)}
		else {
		return(
			<div style={containerStyle}>
			<div style={relativeStyle} onClick={(event)=>this.relativeClick(event)}>{this.state.relative}</div>
			<div style={allStyle} onClick={(event)=>this.allstyleClick(event)}>{this.state.allstyle}</div>
			<List recent={this.props.recent} alltime={this.props.alltime} test={this.state.recent}/>

			</div>
		)

		}
			

	}
		

}

export default Points;
