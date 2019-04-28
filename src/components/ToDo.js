import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const ToDo = ({ title }) => (
  <ListGroup.Item data-id={title}>{title}</ListGroup.Item>
);

ToDo.propTypes = {
  title: PropTypes.string.isRequired
};

export default ToDo;
