import { FC } from 'react';
import {Route, Switch} from "react-router-dom";
import {LoginPage} from "../pages/LoginPage";
import {ChatPage} from "../pages/ChatPage";

interface Props {

}

export const Routes: FC<Props> = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <LoginPage />
      </Route>
      <Route exact path='/chat'>
        <ChatPage />
      </Route>
    </Switch>
  );
}
