import PropTypes from 'prop-types';

const TodoInput = ({todo, createTodo, addToDo}) => {
  return (
    <div className="input-wrapper">
        <input type="text" name="todo" value={todo} placeholder='Create a new task' onChange={createTodo} />
        <button type="button" className='add-todo-button' onClick={addToDo}>Add</button>
    </div>
  )
}

TodoInput.propTypes = {
    todo: PropTypes.string,
    createTodo: PropTypes.func,
    addToDo: PropTypes.func,
}

export default TodoInput