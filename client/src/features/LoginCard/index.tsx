import {FC} from "react";
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import {login} from "../../api/auth";
import {Input} from "../../commons/Input";
import {Button} from "../../commons/Button";

interface Props {

}

export const LoginCard: FC<Props> = () => {
	const history = useHistory();

	const {values, handleSubmit, handleChange, isValid} = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		onSubmit: async (values) => {
			try {
				await login({
					username: values.username,
					password: values.password,
				});
				history.push('/test');
			} catch (error) {

			}
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
					id="password"
					name="password"
					value={values.password}
					placeholder="password"
					onChange={handleChange}
				/>
				<Button type='submit' disabled={!isValid}>Login</Button>
			</form>
		</div>
	);
}
