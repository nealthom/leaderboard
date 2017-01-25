import React,{Component} from 'react';

const listStyle = {
  backgroundColor: 'white',
   marginLeft: 350,
   marginRight: 400,

};
const itemStyle = {
 paddingTop: 10,
 listStyle : 'none',
};
const imgStyle = {
   position: 'relative',
   top: -15,
   left: 10,
    width: 50,
    height: 50,

};
const nameStyle ={
  position: 'absolute',
  left: 100,
  top: 0,

};
const containStyle={
    position: 'relative',
    top: 30,
    marginRight: 900,
    paddingBottom: 20,

};
const recentStyle={

    position: 'absolute',
    left: 300,
    top: -2,
    
    width: 200,
    height: 44,
    paddingLeft: '40%',
    paddingTop: 0,
    marginRight: 400,
};
const alltimeStyle={

    position: 'absolute',
    left: 595,
    top: -2,
   
    width: 200,
    height: 44,
    paddingLeft: '40%',
    paddingTop: 0,
    
};
const countStyle = {

  position: 'absolute',
  left: -25,
  top: 12,

};


class List extends Component{

	constructor(props){
		super();
	}


   render(){


   	if(this.props.test){
   		return(
   			<ol style={listStyle}>
          
        {
          
          this.props.recent.map(function(vals, i){
            return<div> 
             
            <li key={i}style={itemStyle}>
              <div style={containStyle}> 
              <div style={countStyle}> {i + 1} </div>
              <img src={vals.img} style={imgStyle}/>
              <div style={nameStyle}><a href={'https://www.freecodecamp.com/' + vals.username}>{vals.username}</a></div>
              <div style={recentStyle}>{vals.recent}</div>
              <div style={alltimeStyle}>{vals.alltime}</div>
              </div>

            </li></div>          
          })
    }
    </ol>


   		)
   }
   else{
   	return(
   		<ol style={listStyle}>
          
        {
          
          this.props.alltime.map(function(vals, i){
            return<div> 
             
            <li key={i}style={itemStyle}>
              <div style={containStyle}> 
              <div style={countStyle}> {i + 1} </div>
              <img src={vals.img} style={imgStyle}/>
              <div style={nameStyle}><a href={'https://www.freecodecamp.com/' + vals.username}>{vals.username}</a></div>
              <div style={recentStyle}>{vals.recent}</div>
              <div style={alltimeStyle}>{vals.alltime}</div>
              </div>

            </li></div>          
          })
    }
    </ol>

   	)
   }

}

}


export default List;