import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './components/Home';
import Music from './components/Music';
import Work from './components/Work'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact></Route>
        <Route component={Music} path='/audio' exact></Route>
        <Route component={Work} path='/webdesign' exact></Route>
      </Switch>
    </BrowserRouter>
  )
    
}

export default App;
