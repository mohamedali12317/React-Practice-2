import React from 'react';

class Welocme extends React.Component {
 state = {
  fristName: "omar" ,
  lastName: "ali"
 }
 render() {

  console.log(this.props);

  console.log(this.state);

  return (
   <>
    <h1>hello components , {this.props.name}</h1>
    <p>title : {this.props.title}</p> 
    <h4>Welocme , {this.state.fristName}</h4>
    <h4>Welocme , {this.state.lastName}</h4>
    <button onClick={()=>{
       this.setState({
        lastName: 'hmada'
     }) // this.setState
    }}>
     change name
    </button>

    {/* <button onClick={()=>{}}>

    </button> */}


   </>
    
  )  // return
   

 }  // render()

 componentDidMount () {

  // this.setState({
  //    lastName: 'hmada'
  // }) // this.setState

  console.log('componentDidMount phase');
   
 } // componentDidMount

}  // class


export default Welocme;
