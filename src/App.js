import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const productsDetails = [
  {name: 'Photoshop', price: '$240.33'},
  {name: 'Illustrator', price: '$124.54'},
  {name: 'PDF Reader', price: '$31.54'}
]

const productStyle = {
  border: '1px solid gray',
  borderRadius: '5px',
  backgroundColor: 'lightgray',
  float: 'left',
  width:'30%',
  margin: '10px'
}

function App() {
  return (
    <div className="App">
      <header style={{display:'flex'}} className="App-header">
        <Post />
        <Post/>
      </header>
    </div>
  );
}

function Post(){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
  },[]);  

  return(
    <div style={{display:'flex', flexWrap: 'wrap', alignItems:'center'}}>
      {
        posts.map(function (post) {
          return(
            <div style={productStyle}>
              <article style={{}}>
                <h1 style={{color:'red'}}>{post.title}</h1>
                <p style={{color:'black'}}>{post.body}</p>
              </article>
            </div>
          )        
        })
      }
    </div>  
  )
}

function Product(props){
  const {name, price} = props.prod;
  return(
    <div style={productStyle}>
      <h4>{name}</h4>
      <h3>{price}</h3>
      <button>Buy Now!!S</button>
    </div>
  )
}

function Person(){
  const stylePlayer = {
    border:'2px solid red',
    margin: '10px'
  }
  return(
    <div style={stylePlayer}>
      <h1>Name : Shakib Al Hassan</h1>
      <h3>Player of the year.</h3>
    </div>
  )
}

export default App;
