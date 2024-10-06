import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import data from './data'
import './App.css';

function App() {
 const cardList = data.map(item => {
   return ( 
    	<Card 
        key={item.id}
        {...item}
        
      />
    )
  })
 

  return (
    <div className='container'>
      <Header />
      {cardList}
    </div>
  )
}

export default App
