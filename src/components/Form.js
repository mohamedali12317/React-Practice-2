import React from 'react';
import { useState } from 'react';

const Form = () => {
 const [name, setname] = useState("");
 const [pass, setpass] = useState("");
 const [gender, setgender] = useState("");



 const namehandler = (value) => {
  setname(value);
 }

 let passwordhandler = (value) =>{ setpass(value); } ;
 
 let genderhandler = (value) =>{ setgender(value); } ;


 return (
  <>
   <form onSubmit={(e) =>{
    e.preventDefault();
    console.log('form submit');
    console.log(name);
    console.log(pass);
    console.log(gender);
    console.log([name ,pass ,gender]);
    console.log({name ,pass ,gender});



   }}>
     <label>name</label>
     <input type="text" placeholder="your name" onChange={ (event) =>{ namehandler (event.target.value) } } />
     <br/>
     <label>password</label>
     <input type="password" placeholder="your password" onChange={(event) =>{ passwordhandler (event.target.value)}}/>
     <br/>
     <label>Gender</label>
     <select onChange={ (event) =>{ genderhandler (event.target.value)}}>
      <option value="male">male</option>
      <option value="fmale">fmale</option>
     </select>
     <button type="submit">submit</button>
     <br/>

   </form>
  </>
 );
}

export default Form;

