import { useState } from 'react';
import Feedback from './Feedback/Feedback';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [isShown, setShown] = useState(false);

  const state = { good, neutral, bad };

  const addFeedback = e => {
    const { textContent } = e.target;
    if (textContent === 'good') {
      setGood(good + 1);
    }
    if (textContent === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (textContent === 'bad') {
      setBad(bad + 1);
    }

    setShown(true);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (
      good + neutral + bad && (good / (good + neutral + bad)) * 100
    ).toFixed(0);
  };

  return (
    <>
      <Feedback
        options={state}
        onLeaveFeedback={addFeedback}
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
        isShown={isShown}
      />
    </>
  );
}
