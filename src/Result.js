import React from 'react';
import PropTypes from 'prop-types';

const Result = ({result}) => <div className="Result">{result}</div>;

Result.propTypes = {result: PropTypes.number.isRequired};

export default Result;