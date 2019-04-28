import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  list() {
    return this.props.toDoList.map((toDo, index) => (
      <ToDo key={index} {...toDo} />
    ));
  }

  render() {
    return (
      <Jumbotron>
        <ListGroup>{this.list()}</ListGroup>
      </Jumbotron>
    );
  }
}

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ToDoList;
