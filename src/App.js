import React, {Component} from 'react';
import Wrapper from "./components/Wrapper/Wrapper"
import Header from "./components/Header/Header"
import Cards from "./components/Cards/Cards"
import cards from './cards.json'



class App extends Component {
  state = {
    cards,
    score: 0,
    highScore: 0
  }

  clickCount = id => {
    this.state.cards.find((card, i) => {
      if(card.id === id ){
        if(cards[i].count === 0){
          cards[i].count += 1
          this.setState({
            score: this.state.score + 1
          }, function(){
            console.log(this.state.score)
          })
          this.state.cards.sort(() => Math.random() - 0.5)
          return true
        } else {
          this.gameOver()
        }
      }
    })
  }

  gameOver = () => {
    if (this.state.score > this.state.highScore){
      this.setState({
        highScore: this.state.score
      }, function(){
        console.log(this.state.highScore)
      })
    }
    this.state.cards.forEach(card => {
      card.count = 0
    });
    alert(`Game over. Please try again! \nscore: ${this.state.score}`)
    this.setState({score: 0})
  }

  render () {
    return(
      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}>
          Game of Thrones Clicker: Don't Click an Image Twice
        </Header>
        {this.state.cards.map(card => (
          <Cards 
          clickCount={this.clickCount}
          id={card.id}
          key={card.id}
          image={card.image}
          />
        ))}
      </Wrapper>
    )
  }
}
    


export default App;
