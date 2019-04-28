import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const ToDo = ({ title, _id }) => (
  <ListGroup.Item data-id={_id}>{title}</ListGroup.Item>
);

ToDo.propTypes = {
  title: PropTypes.string.isRequired
};

export default ToDo;
