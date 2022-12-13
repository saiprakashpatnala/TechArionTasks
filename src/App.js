import {Switch, Route} from 'react-router-dom'

import Counter from './components/Counter'

import Todos from './components/Todos'

import Home from './components/Home'

import LoginApi from './components/LoginApi'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/todos" component={Todos} />
      <Route exact path="/loginApi" component={LoginApi} />
    </Switch>
  </div>
)
export default App
