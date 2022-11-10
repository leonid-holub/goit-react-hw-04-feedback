import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.Feedback__section}>
      <h2 className={css.Feedback__title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
