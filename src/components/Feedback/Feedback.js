import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const Feedback = ({
  options,
  onLeaveFeedback,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  isShown,
}) => {
  return (
    <div className="Feedback">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {isShown ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
