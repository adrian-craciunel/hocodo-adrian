import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const ErrorBounderyPageContent = ({ retry }) => {
  return (
    <div className="error-boundery-page-content">
      <h3>An error occured please try again later.</h3>
      {Boolean(retry) && <button onClick={retry}>Retry</button>}
    </div>
  );
};

ErrorBounderyPageContent.propTypes = {
  retry: PropTypes.func
};
