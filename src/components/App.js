import React, { Component } from 'react';
import Movies from './Movies';
import Search from './Search';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies : [
        {title: 'The Matrix'},
        {title: 'Hackers'},
        {title: 'Jurassic Park'},
        {title: 'Drunken Master'},
        {title: 'Star Wars'}
      ]

    }
  }


  render(){

    const style = {
      width: "60%",
      margin: "16px auto",
      border: "1px solid #eee",
      boxShadow: "0 2px  3px #ccc",
      padding: "16px",
      textAlign: "center"
    }

    const h1Style = {
      width: "60%",
      margin: "16px auto",
      border: "1px solid gray",
      boxShadow: "0 2px  3px #ccc",
      padding: "16px",
      textAlign: "center",
      backgroundColor: "#D3D3D3"
    }

    return(
    <div style={style} className="App">
      <h1 style={h1Style}>Movie list</h1>
    
      <p>
        <Search />

      </p>
      
      <Movies title={this.state.movies[0].title} />
      <Movies title={this.state.movies[1].title} />
      <Movies title={this.state.movies[2].title} />
      <Movies title={this.state.movies[3].title} />
      <Movies title={this.state.movies[4].title} />
    </div>
  )}
}

export default App;
