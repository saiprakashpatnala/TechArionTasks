import {useState} from 'react'

import './index.css'

const LoginApi = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const enterName = event => {
    setName(event.target.value)
  }

  const enterEmail = event => {
    setEmail(event.target.value)
  }

  const enterMessage = event => {
    setMessage(event.target.value)
  }

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {email, message, name}
    const url = 'https://admin.srkprojects.com/web/api/client/v1/contact-us/'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(email)
    console.log(message)
    console.log(name)
    if (response.ok === true) {
      console.log(data)
    }
  }

  return (
    <div className="login-container">
      <h1 className="heading">Login</h1>
      <form onSubmit={submitForm}>
        <div className="input-container">
          <label htmlFor="email">Enter Email</label>
          <input
            required
            onChange={enterEmail}
            placeholder="Enter your Email"
            value={email}
            type="email"
            id="email"
          />
        </div>

        <div className="input-container">
          <label htmlFor="message">Text Your Message</label>
          <input
            required
            placeholder="Text Your Message"
            value={message}
            onChange={enterMessage}
            type="text"
            id="message"
          />
        </div>
        <div className="input-container">
          <label htmlFor="name">Enter Name</label>
          <input
            required
            onChange={enterName}
            placeholder="Enter your Name"
            value={name}
            type="text"
            id="name"
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginApi
