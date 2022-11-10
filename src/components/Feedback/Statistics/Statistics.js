import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="Statistics__list">
    <li className={css.Statistics__item}>Good: {good}</li>
    <li className={css.Statistics__item}>Neutral: {neutral}</li>
    <li className={css.Statistics__item}>Bad: {bad}</li>
    <li className={css.Statistics__item}>Total: {total}</li>
    <li className={css.Statistics__item}>
      Positive feedback: {positivePercentage()}%
    </li>
  </ul>
);

export default Statistics;
