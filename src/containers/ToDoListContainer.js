import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList,
    onChange: (order, sortable, evt) => {
      console.log('order', order);
      console.log('sortable', sortable);
      console.log('evt', evt);
    }
  };
};

const ToDoListContainer = connect(mapStateToProps)(ToDoList);

export default ToDoListContainer;
