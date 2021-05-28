import Admin from "./admin/Admin";
import Login from './Authentication/Login'
import AdminRoute from './Authentication/helper/AdminRoute'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <AdminRoute path='/admin' exact component={Admin} />
      </Switch>

    </Router>
  )
}

export default App
