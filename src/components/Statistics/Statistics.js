import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li className={style.listItem}>Good: {good}</li>
      <li className={style.listItem}>Neutral: {neutral}</li>
      <li className={style.listItem}>Bad: {bad}</li>
      <li className={style.listItem}>Total: {total}</li>
      <li className={style.listItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
