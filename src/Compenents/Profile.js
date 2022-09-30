import React, { Component } from 'react'
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';

export default class Profile extends Component {
  constructor(props){
    console.log('initialization')
    super(props);
    this.state={
      Fullname :'Ridha Benrekhissa',
      Profession :'Dev',
      Bio :'Studying React',


    }

   
  }
    render() {
        console.log('render')
    return (
      <div>  
       <h1 className='name'>{this.state.Fullname}</h1>
       <h2 className='pro'>{this.state.Profession}</h2>
       <h3 className='bio'>{this.state.Bio}</h3>
       
       </div>
    )
  }
}

