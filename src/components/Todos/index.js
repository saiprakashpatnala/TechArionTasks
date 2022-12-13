import {useEffect, useState} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const Todos = () => {
  const [array, newArray] = useState([])
  useEffect(() => {
    const getTodos = async () => {
      const url = 'https://gorest.co.in/public/v1/todos'
      const options = {
        method: 'GET',
      }
      const response = await fetch(url, options)
      const data = await response.json()
      const setArray = data.data.map(each => ({
        id: each.id,
        status: each.status,
        title: each.title,
      }))
      newArray(setArray)
    }
    getTodos()
  }, [])
  console.log(array)

  return (
    <div>
      <ul className="todo-list">
        {array.map(each => (
          <TodoItem key={each.id} details={each} />
        ))}
      </ul>
    </div>
  )
}

export default Todos
