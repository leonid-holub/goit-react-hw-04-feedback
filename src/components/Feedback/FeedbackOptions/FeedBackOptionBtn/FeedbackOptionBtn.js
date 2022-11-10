import React from 'react';
import css from './FeedbackOptionBtn.module.css';

const BtnCreate = ({ btnName, onLeaveFeedback }) => {
  return (
    <button className={css.Button} type="button" onClick={onLeaveFeedback}>
      {btnName}
    </button>
  );
};

export default BtnCreate;
