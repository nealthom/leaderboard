import React, {Component} from 'react';
import Axios from 'axios';
import Title from './Title';
import Points from './Points';
import List from './List';



class Leaders extends Component{
  constructor(props){
      super();

  this.state = {
    recent : [],
    alltime : []
    };
  }

  
 
  componentDidMount(){
      return Axios.all([
            Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent'),
            Axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
              ])
          .then(Axios.spread((newRecent,allTime)=>{
            this.setState({
                  recent: newRecent.data,
                  alltime: allTime.data,
            })

            
          }));
  }


  render(){

    return(<div><Title /><Points recent={this.state.recent} alltime={this.state.alltime}/> 

       </div>
   );
  }
}


export default Leaders;