import React, {Component} from 'react';
import logo from './freecodecamp.jpeg';

const imgStyle = {
	width: 200,
	height: '100%',
};
const divStyle ={
	backgroundColor: '#006c1d',
	height: '100%',

};
const leaderStyle = {
	backgroundColor: '#006c1d',
	color: 'white',
	paddingLeft: '40%',
	fontFamily: "'Lobster', cursive",
	fontSize: '2em',
};

class Title extends Component{
	constructor(props){
		super();
	}

	render()
	{
		
		return(<div>
				<div style={divStyle}><img src={logo} alt="logo" style={imgStyle}/></div>
			    <div style={leaderStyle}>Leaderboard</div>
			   </div>
		)
	}

}


export default Title;