import React, { useEffect, useState } from 'react';
import { Loader } from '../loader';
import PropTypes from 'prop-types';
import './styles.scss';

export const Card = (props) => {
  const { title, body, onMoreClick, thumbnailPath } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (thumbnailPath) {
      const img = new Image();
      img.onload = () => {
        setIsImageLoaded(true);
      };
      img.src = thumbnailPath;
    }
  }, [thumbnailPath]);

  return (
    <div className="card">
      <div className="card-top-content">
        {Boolean(thumbnailPath) && (
          <>
            {!isImageLoaded ? (
              <div className="img-loading-block">
                <Loader />
                <p>Image is loading</p>
              </div>
            ) : (
              <img src={thumbnailPath} alt={title + ' thumbnail' || 'Card Image'} />
            )}
          </>
        )}
      </div>
      <div className="card-body">
        {Boolean(title) && <p className="card-title">{title}</p>}
        {Boolean(body) && <div className="card-content">{body}</div>}
        {Boolean(onMoreClick) && (
          <div className="card-link">
            <span onClick={onMoreClick}>More information</span>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  thumbnailPath: PropTypes.string,
  onMoreClick: PropTypes.func,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
