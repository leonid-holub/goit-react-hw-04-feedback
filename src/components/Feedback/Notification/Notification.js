import React from 'react';
import css from '../Section/Section';

const Notification = ({ message }) => {
  return <div className={css.Feedback__sections}>{message}</div>;
};

export default Notification;
