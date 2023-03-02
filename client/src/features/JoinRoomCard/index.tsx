import { FC } from 'react';
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import {Input} from "../../commons/Input";
import {Button} from "../../commons/Button";

interface Props {

}

export const JoinRoomCard: FC<Props> = () => {
  const history = useHistory();

  const {values, handleSubmit, handleChange, isValid} = useFormik({
    initialValues: {
      username: '',
      room: '',
    },
    onSubmit: (values) => {
      history.push('/chat', {
        username: values.username,
        room: values.room,
      });
    }
  });

  return (
    <div className="flex h-screen bg-extend-midnight">
      <form onSubmit={handleSubmit} className="container w-full lg:w-1/4 m-auto p-4">
        <Input
          id="username"
          name="username"
          value={values.username}
          placeholder="username"
          onChange={handleChange}
        />
        <Input
          id="room"
          name="room"
          value={values.room}
          placeholder="room"
          onChange={handleChange}
          className='text-red-darker'
        />
        <Button type='submit' disabled={!isValid}>Login</Button>
      </form>
    </div>
  );
}
