import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Link className="link-element" to="/counter">
      Counter
    </Link>
    <Link className="link-element" to="/todos">
      Todos
    </Link>
    <Link className="link-element" to="/loginapi">
      LoginApi
    </Link>
  </div>
)

export default Home
