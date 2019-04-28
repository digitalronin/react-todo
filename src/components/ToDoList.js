import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Sortable from 'react-sortablejs';
import ToDo from './ToDo';

class ToDoList extends React.Component {
  list() {
    return this.props.toDoList.map((toDo, index) => {
      return <ToDo key={index} {...toDo} />;
    });
  }

  render() {
    const sortList = this.list();
    console.log(sortList);

    return (
      <Jumbotron>
        <Sortable
          options={{
            animation: 150
          }}
          tag="div"
          className="list-group"
          onChange={(order, sortable, evt) => {
            this.props.onChange(order, sortable, evt);
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
