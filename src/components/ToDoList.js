import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Sortable from 'react-sortablejs';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  list() {
    return this.props.toDoList.map((toDo, index) => {
      return <ToDo key={index} {...toDo} />;
    });
  }

  slist() {
    return this.props.toDoList.map((toDo, index) => (
      <li key={toDo._id} data-id={toDo.title}>
        List Item {toDo.title}
      </li>
    ));
  }

  render() {
    let sortable = null;
    const sortList = this.slist();
    console.log(sortList);

    return (
      <Jumbotron>
        <ListGroup>{this.list()}</ListGroup>

        <p>Sortable</p>

        <Sortable
          options={{
            animation: 150
          }}
          tag="ul"
          className="list-group"
          ref={c => {
            if (c) {
              sortable = c.sortable;
            }
          }}
          onChange={(order, sortable, evt) => {
            this.props.onChange(order);
          }}
        >
          {sortList}
        </Sortable>
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
