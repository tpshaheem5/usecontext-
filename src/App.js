import logo from './logo.svg';
import './App.css';
import {  createContext, useReducer } from 'react';
import Component from './compenent/Component'

const reducer =(state,action)=>{
  switch (action) {
    case 'change red':
    return 'red'
    case 'change blue':
      return 'blue'
      case 'change yellow':
        return 'yellow'
    default:
     return state
  }
}

export const shacontext = createContext() 

function App() {
  const [state,dispatch]=useReducer(reducer,'white')
 
  return (
    <div style={{backgroundColor:state,width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>

    <shacontext.Provider value={{state,dispatch}}>
      <Component/>
    </shacontext.Provider>
    </div>
    
  );
}

export default App;

