import React from 'react';
import BtnCreate from './FeedBackOptionBtn/FeedbackOptionBtn';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  Object.keys(options).map(btnName => (
    <BtnCreate
      key={btnName}
      btnName={btnName}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));

export default FeedbackOptions;
