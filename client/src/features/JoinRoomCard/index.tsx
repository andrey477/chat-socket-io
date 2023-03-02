import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import {Input} from "../../commons/Input";
import {Button} from "../../commons/Button";
import {observer} from "mobx-react-lite";
import userStore from '../../store/UserStore';

export const JoinRoomCard = observer(() => {
  const history = useHistory();

  const {values, handleSubmit, handleChange, isValid} = useFormik({
    initialValues: {
      room: '',
    },
    onSubmit: (values) => {
      history.push('/chat', {
        room: values.room,
        username: userStore.user?.username
      });
    }
  });

  return (
    <div className="flex h-screen bg-extend-midnight">
      <form onSubmit={handleSubmit} className="container w-full lg:w-1/4 m-auto p-4">
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
});
