import {PropsWithChildren, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import userStore from '../../store/UserStore';
import {useHistory} from "react-router-dom";

interface Props {
  secured: boolean;
}

export const Layout = observer(({ children, secured }: PropsWithChildren<Props>) => {
  const history = useHistory();
  useEffect(() => {
    if (!userStore.user?.username && secured) {
      history.push('/login');
    }
  }, []);

  return (
    <div>
      {children}
    </div>
  );
})
