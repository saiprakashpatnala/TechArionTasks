import {useState} from 'react'

import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

import './index.css'

const Counter = () => {
  const [countValue, setCountValue] = useState(0)

  const increment = () => {
    setCountValue(prevState => prevState + 3)
  }

  const decrement = () => {
    if (countValue > 0) {
      setCountValue(prevState => prevState - 3)
    }
  }

  return (
    <div className="card">
      <h1 className="heading">Counter</h1>
      <div className="buttons-container">
        <button className="button" type="button" onClick={decrement}>
          <AiOutlineMinus />
        </button>
        <p className="count">{countValue}</p>
        <button className="button" type="button" onClick={increment}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  )
}

export default Counter
