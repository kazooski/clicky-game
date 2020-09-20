import React, {Component} from 'react';
// import logo from './logo.svg';
import Image from './component/Image';
import Navbar from './component/Navbar';
import Header from './component/Header';
import posters from './posters.json';
import './App.css';

class App extends Component {

  state={
    posters,
    score: 0,
    topScore: 0
  };

  endGame = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, function() {
        console.log(this.state.topScore);
      });
    }
    this.state.posters.forEach(poster => {
      poster.clicked = 0;
    });
    alert(`You clicked on that one! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  scoreCount = id => {
    this.state.posters.find((o, i) => {
      if (o.id === id) {
        if(posters[i].clicked === 0){
          posters[i].clicked = posters[i].clicked + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.posters.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.endGame();
        }
      } else {
        return console.log("nah 2.0");
      }
    })
  };
  
  render () {
    return(
      <div className="container">
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        {this.state.posters.map( poster => (

          <Image 
            scoreCount={this.scoreCount}
            id={poster.id}
            // key={poster.id}
            image={poster.image}
          />

        ))}

      </div>

    ) //return
    
  } //render
} // class App

export default App;
