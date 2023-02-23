import {FC} from 'react';
import {IMessage} from "../../types";
import {Message} from "../../commons/Message";

interface Props {
  messages: IMessage[];
  username: string;
}

export const MessagesBlock: FC<Props> = ({ messages, username }) => {
  const variant = (message: IMessage) => {
    return username === message.username ? 'right' : 'left';
  }

  const style = {
    variant: {
      left: 'items-start',
      right: 'items-end',
    }
  }

  return (
    <div className="flex flex-col space-y-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {messages.map((message) => (
        <div className={`
        flex flex-col space-y-2 text-xs mx-auto mx-2 order-2 items-start
        ${style.variant[variant(message)]}
        `}>
          <Message variant={variant(message)}>
            {message.text}
          </Message>
        </div>
      ))}
    </div>
  );
}
