import {FC, useEffect, useState} from 'react';
import {io} from "socket.io-client";
import {useLocation} from 'react-router-dom';
import {useFormik} from "formik";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {IMessage} from "../../types";
import {MessagesBlock} from "../../components/MessagesBlock";

interface Props {

}

interface Location {
  username: string;
  room: string;
}

const socket = io();

export const ChatPage: FC<Props> = () => {
  const { username, room } = useLocation<Location>().state;
  const [messages, setMessages] = useState<IMessage[]>([]);

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (values) => {
      sendMessage(values.message);
    }
  });

  const sendMessage = (text: string) => {
    socket.emit('sendMessage', {
      username,
      text,
      room,
    });
    resetForm();
  }

  useEffect(() => {
    socket.emit('join', {
      username,
      room
    });

    socket.on('message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    socket.on('roomMessages', (messages) => {
      setMessages(prev => [...prev, ...messages]);
    });
  }, []);

  return (
    <div className="flex-1 p:2 sm:p-6 h-screen bg-extend-midnight overflow-hidden">
      <div className="justify-between flex flex-col w-1/2 mx-auto h-screen p-4">
        <MessagesBlock messages={messages} username={username}/>
        <form
          className="flex mh-40 w-full"
          onSubmit={handleSubmit}
        >
          <Input
            id='message'
            name='message'
            placeholder='message'
            value={values.message}
            onChange={handleChange}
          />
          <Button
            type='submit'
            disabled={!values.message.length}
          >Send</Button>
        </form>
      </div>
    </div>
  );
}
