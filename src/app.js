import React from 'react';
import logo from './logo.svg';
import './App.css';
import hello from './hello'
import './hello.css'

function App({name, age}) {
  return (
   <div className="myName">Welcome to the party by {name} who is {age} years old 
   <br/>
   <hello></hello>
   </div>
  )
};

// function App() {
//   return (
//    <div>Welcome to the party by  who is years old</div>
//   )
// }

export default App;
