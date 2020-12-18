import React from 'react';
import PropTypes from 'prop-types';
import style from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={style.notification}>{message}</p>;
};

export default Notification;

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
