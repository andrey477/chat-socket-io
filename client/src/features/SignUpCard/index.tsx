import { FC } from 'react';
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import {Input} from "../../commons/Input";
import {Button} from "../../commons/Button";
import {signUp} from "../../api/auth";

interface Props {

}

export const SignUpCard: FC<Props> = () => {
	const history = useHistory();

	const {values, handleSubmit, handleChange, isValid} = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		onSubmit: async (values) => {
			try {
				await signUp({
					email: values.email,
					password: values.password,
					username: values.username
				});
				history.push('/login');
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
					id="email"
					name="email"
					value={values.email}
					placeholder="email"
					onChange={handleChange}
				/>
				<Input
					id="password"
					name="password"
					value={values.password}
					placeholder="password"
					onChange={handleChange}
				/>
				<Input
					id="confirmPassword"
					name="confirmPassword"
					value={values.confirmPassword}
					placeholder="confirmPassword"
					onChange={handleChange}
				/>
				<Button type='submit' disabled={!isValid}>Sign Up</Button>
			</form>
		</div>
	);
}
