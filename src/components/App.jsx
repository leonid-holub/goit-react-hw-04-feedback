import React from 'react';
import Feedback from './Feedback/Feedback';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const { textContent } = e.target;
    this.setState(() => ({
      [textContent]: this.state[textContent] + 1,
    }));
    this.isShown = true;
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      this.state.good + this.state.neutral + this.state.bad &&
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    ).toFixed(0);
  };

  isShown = false;

  render() {
    return (
      <>
        <Feedback
          options={this.state}
          onLeaveFeedback={this.addFeedback}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
          isShown={this.isShown}
        />
      </>
    );
  }
}

export default App;
