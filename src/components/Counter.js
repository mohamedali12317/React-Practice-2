import React from 'react';

class Counter extends React.Component {

 constructor (props) {
  super(props);
  this.state = {
   counter: 0
   
  }
    this.incrementCounter = this.incrementCounter.bind(this);
 }

 incrementCounter = () => {
    this.setState( { counter: this.state.counter + 1 } );
    console.log( 'incrementCounter working');
 }

 

 render() {
   return(
    <>
     <h1>counter: {this.state.counter}</h1>
     <button onClick={this.incrementCounter}>+</button>
    </>
   )
 }
}


export default Counter;
