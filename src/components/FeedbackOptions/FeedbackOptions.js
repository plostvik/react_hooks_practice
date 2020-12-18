import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const Feedback = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        className={styles.btn}
        type="button"
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={styles.btn}
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={styles.btn}
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default Feedback;

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
