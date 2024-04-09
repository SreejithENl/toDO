import PropTypes from 'prop-types';

const TodoList = ({todos, deleteTodo}) => {
  return (
    <div className='todo-items-container'>
            {
              todos?.length ? (
                <ul className='todo-list'>
                  { todos.map((todoItem, index) => (
                      <div key={index} className='todo-item'>
                        <li key={index}>{todoItem}</li>
                        <button className='delete-todo' onClick={() => deleteTodo(todoItem)}>-</button>
                      </div>
                  ))}
              </ul>
              ) : (
                <div className="no-todos-found">
                  <p>No Todos found</p>
                </div>
              )
            }
        </div>
  )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func
}

export default TodoList