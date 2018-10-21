import React from 'react';
import PropTypes from 'prop-types';

const Result = ({result}) => <div className="Result">{result}</div>;

Result.propTypes = {result: PropTypes.string.isRequired};
Result.propDefault = {result: '0'};

export default Result;