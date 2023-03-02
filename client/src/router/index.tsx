import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "./config";
import {Layout} from "../components/Layout";

export const Routes = () => {
  return (
    <Switch>
      {routes.map(({ exact, path, secured, component}) => (
        <Route exact={exact} path={path}>
          <Layout secured={secured}>
            {component}
          </Layout>
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
