import {FC, useCallback} from 'react';
import {IMessage} from "../../types";
import {Message} from "../Message";

interface Props {
  messages: IMessage[];
  username: string;
}

export const MessagesBlock: FC<Props> = ({ messages, username }) => {
  const isMyMessage = (message: IMessage) => {
    return username === message.username;
  }

  const style = useCallback((message: IMessage) => {
    return [
      isMyMessage(message) ? 'items-end' : 'items-start',
    ].join(' ').concat(' ', 'flex flex-col space-y-2 text-xs mx-auto mx-2 order-2 items-start');
  }, [messages]);
  return (
    <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {messages.map((message) => (
        <div className={style(message)}>
          <Message isMyMessage={isMyMessage(message)}>
            {message.text}
          </Message>
        </div>
      ))}
    </div>
  );
}
