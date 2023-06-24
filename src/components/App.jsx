import React, {Component} from "react";
import {Container} from './App.styled';
import Statisytics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}

handleClick = option => {
  this.setState(prevState => ({
    [option]: prevState[option] + 1,
  })
  )
}

countTotalFeedback = () => {
  return this.state.good + this.state.neutral + this.state.bad;
}

countPositiveFeedbackPercentage = () => {

  return (this.countTotalFeedback() === 0) ? 0 : ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1)
  
}
render() {
return (
  <Container>
    <Section 
    title={'Please leave feedback'} 
    children={
    <FeedbackOptions 
      options={Object.keys(this.state)}
      onLeaveFeedback={this.handleClick}
      />}
    />
      
    <Section 
    title={"Statystics"}
    children={ 
      this.countTotalFeedback() === 0 ?
      (<Notification message={"There is no feedback"} />) :
      (<Statisytics 
    good={this.state.good}
    neutral={this.state.neutral}
    bad={this.state.bad}
    total={this.countTotalFeedback()}
    positivePercentage={this.countPositiveFeedbackPercentage()} />)
    }/>
    
  </Container>
)
}
}

export default App;