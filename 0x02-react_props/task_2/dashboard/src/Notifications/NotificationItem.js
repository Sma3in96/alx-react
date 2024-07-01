import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  const li = html ? (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  ) : (
    <li data-notification-type={type}>{value}</li>
  );

  return li;
}

export default NotificationItem;
