import React from 'react';
import PropTypes from 'prop-types';

const Touch = ({text, style}) => <div className={'Touch ' + style}>{text}</div>;

Touch.propTypes = {
    text: PropTypes.string,
    style: PropTypes.string
};

Touch.defaultProps = {text: '', style: ''};

export default Touch;