import React from 'react';
import {LoginPage} from "./pages/LoginPage";

/**
 * 1) Страница логина (имя и номер комнаты).
 * 2) Страница чата
 * 3) Сообщение, имя отправителя, тайпинг, не отправлять сообщение самому себе,
 *    показывать кто онлайн.
 * **/


function App() {
  return (
    <div className="App">
      <LoginPage/>
    </div>
  );
}

export default App;
