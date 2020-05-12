import React from 'react';
import classes from './PersonalPage.module.css'
import Card from '../../Componets/Card'




export default function PersonalPage() {

  let name = sessionStorage.getItem('Name');     
  let age = sessionStorage.getItem('Age');   
  
  const clearSession = () => {
    sessionStorage.clear()
  }
 
    
        return(
          <Card >
            <div className={classes.container}>
            <div>
              <p className={classes.gretting}>Hi, <span>{name}</span></p>
            </div>
        <p className={classes.personalpage}>You are {age} years old</p>
 <a href="/" onClick={clearSession} className={classes.logout}>Logout</a>
            </div>
           
          </Card>
  
        );
    }