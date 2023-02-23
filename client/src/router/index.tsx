import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "./config";

export const Routes = () => {
  return (
    <Switch>
      {routes.map(({ exact, path, component}) => (
        <Route exact={exact} path={path}>
          {component}
        </Route>
      ))}
      <Route exact path='/'>
        <Redirect to='/login'/>
      </Route>
      <Route path='*'>
        <Redirect to='/login'/>
      </Route>
    </Switch>
  );
}
