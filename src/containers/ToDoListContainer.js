import { connect } from 'react-redux';
import { reorderList } from '../actions';
import ToDoList from '../components/ToDoList';

const mapStateToProps = state => {
  return { toDoList: state.toDoList };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: ids => dispatch(reorderList(ids))
  };
};

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default ToDoListContainer;
