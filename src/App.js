import AdminDasboard from "./admin/AdminDasboard";
import Login from "./Authentication/Login";
import AdminRoute from "./Authentication/helper/AdminRoute";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddCourse from "./admin/AddCourse";
import AddRemove from "./admin/AddRemove";
import AssignCourse from "./admin/AssignCourse";
import MarkAttendance from "./admin/MarkAttendance";
import NotFound from "./components/NotFound";
import UserRoute from "./Authentication/helper/UserRoute";
import User from "./user/User";
import EditAttendance from "./admin/EditAttendance";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <AdminRoute path="/admin" exact component={AdminDasboard} />
        <AdminRoute path="/admin/addremove" exact component={AddRemove} />
        <AdminRoute path="/admin/addcourse" exact component={AddCourse} />
        <AdminRoute path="/admin/assign" exact component={AssignCourse} />
        <AdminRoute path="/admin/mark" exact component={MarkAttendance} />
        <AdminRoute path="/admin/edit" exact component={EditAttendance} />
        <UserRoute path="/user" exact component={User} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
