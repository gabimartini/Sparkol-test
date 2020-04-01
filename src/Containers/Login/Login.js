import React, { useState, useEffect} from 'react';
import classes from './Login.module.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Card from '../../Componets/Card'



export default function SignIn(){

const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [route, setRoute] = useState(false);
const [message, setmessage] = useState('')



const submitHandler = event => {
event.preventDefault();
        
    if(name !== '' && password !== ''){
    axios.post('http://localhost:3333/login', { username: name, password: password })
    .then(res=> { setRoute(true)})
    .catch((error)=>{ setmessage(error.message);
      });
     }else{
      setmessage('Fill in all fields')
     }
    sessionStorage.setItem('User', name);
  };


  useEffect(() => {
    fetch("http://localhost:3333/metrics")
    .then(res => res.text())
     .catch(err => err);

  })


 
if(route){
    return <Redirect to='/page'/>
}



  return(



<Card>

<form onSubmit={submitHandler} >
    <div className={classes.Login}>
    <input  type='text' 
    placeholder='Your name' 
    value={name}
    onChange={event => {
        setName(event.target.value);
      }}
    />
    </div>

    <div className={classes.Login}>
    <input type='password' 
    placeholder='Your password' 
    value={password}
    onChange={event => {
        setPassword(event.target.value);
      }}
    />
    </div>
    

    <button  
    type='Submit'> Send
    </button>
</form>
    <p className={classes.error}>{message}</p>
 </Card>

  )

}