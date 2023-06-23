import React, {Component} from "react";
import {Container, ButtonList, StatisticList} from './App.styled'

class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}

handleClick = e => {
  const {name} = e.target;

  this.setState(prevState => ({
    [name]: prevState[name] + 1,
  })
  )
  console.log(e.target);
  console.log(this.state.good)
}
render() {
return (
  <Container>
    <div>
      <h2>Please leave feedback</h2>
      <ButtonList>
        <li>
          <button type="button" name="good" onClick={this.handleClick}>Good</button>
        </li>
        <li>
          <button type="button" name="neutral" onClick={this.handleClick}>Neutral</button>
        </li>
        <li>
          <button type="button" name="bad" onClick={this.handleClick}>Bad</button>
        </li>
      </ButtonList>
    </div>
    <div>
    <h2>Statisytics</h2>
      <StatisticList>
        <li>
          <p>Good: {this.state.good} </p>
        </li>
        <li>
          <p>Neutral: {this.state.neutral}</p>
        </li>
        <li>
          <p>Bad: {this.state.bad}</p>
        </li>
      </StatisticList>
    </div>
  </Container>
)
}
}

export default App;