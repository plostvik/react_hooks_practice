import React, { useState } from 'react';
import Statistics from './components/Statistics/Statistics.js';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section.js';
// import Notification from './components/Notification/Notification.js';

function App() {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [statistics, setStatistics] = useState({ good: 0, neutral: 0, bad: 0 });

  // const addReview = e => {
  //   switch (e.target.name) {
  //     case 'good':
  //       return setGood(prevState => prevState + 1);

  //     case 'neutral':
  //       return setNeutral(prevState => prevState + 1);

  //     case 'bad':
  //       return setBad(prevState => prevState + 1);

  //     default:
  //       return;
  //   }

  // };

  const addReview = e => {
    setStatistics(prevState => ({
      ...prevState,
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  // this.setState(prevState => ({
  //       [e.target.name]: prevState[e.target.name] + 1,
  //     }));

  // countTotalFeedback = () => {
  //   let total = Object.values(this.state).reduce((el, acc) => el + acc, 0);
  //   return total;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  // };

  const { good, neutral, bad } = statistics;

  return (
    <>
      <Section title="Leave your feedback">
        <FeedbackOptions onLeaveFeedback={addReview}></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {/* {this.countTotalFeedback() ? ( */}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          // total={this.countTotalFeedback()}
          // positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
        {/* ) : (
          <Notification message="No feedback given"></Notification>
        )} */}
      </Section>
    </>
  );
}

export default App;
