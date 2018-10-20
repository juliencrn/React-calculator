import React from 'react';
import PropTypes from 'prop-types';

const Touch = ({text, style, touchClick}) => (
    <div className={'Touch ' + style} onClick={() => touchClick(text)}>{text}</div>
);

Touch.propTypes = {
    text: PropTypes.string,
    style: PropTypes.string,
    touchClick: PropTypes.func
};

Touch.defaultProps = {text: '', style: ''};

export default Touch;