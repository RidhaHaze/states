import React, {Component} from 'react'
import Profile from './Compenents/Profile'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor(){
    super()
    this.state= {
      show: false,
    };
  }
toogle = () => {
this.setState({ show: !this.state.show });
};
render() {
  return(
      <div className="App">
  <button className='but' variant='primary' onClick={this.toogle
  }>show</button>
    {this.state.show ?  <Profile /> : null}
    </div>
    
    );
}
}

    