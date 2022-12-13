import './index.css'

const TodoItem = props => {
  const {details} = props
  const {title, status} = details
  return (
    <li className="todo-details">
      <h1 className="title">{title}</h1>
      <p className="status">{status}</p>
    </li>
  )
}

export default TodoItem
