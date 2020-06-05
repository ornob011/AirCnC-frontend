import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { register } from "../../redux/user/user.actions";
import ALert from "../utils/Alert";
import { alertAction } from "../../redux/alert/alert.actions";

const SignUpBlock = ({ toggleBtn, register, alertAction }) => {
	const [formData, setFormData] = useState({
		displayName: "",
		email: "",
		password: "",
		rePassword: "",
	});
	const { displayName, email, password, rePassword } = formData;
	const onChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const onSubmitHandler = (e) => {
		if (password !== rePassword) {
			alertAction("Password don't match", "danger");
		}
		register({ displayName, email, password });
		e.preventDefault();
	};
	return (
		<div className="auth-block">
			<h6>Log in</h6>
			<form onSubmit={onSubmitHandler}>
				<ALert />
				<div className="auth-input-box">
					<label htmlFor="displayName">Display Name</label>
					<input type="name" name="displayName" onChange={onChangeHandler} />
				</div>
				<div className="auth-input-box">
					<label htmlFor="phone">Email</label>
					<input type="email" name="email" onChange={onChangeHandler} />
				</div>
				<div className="auth-input-box">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" onChange={onChangeHandler} />
				</div>
				<div className="auth-input-box">
					<label htmlFor="rePassword">Re-password</label>
					<input type="password" name="rePassword" onChange={onChangeHandler} />
				</div>
				<CustomButton fullWidth>Sign Up</CustomButton>
				<p>
					Already have an account ?{" "}
					<strong onClick={(e) => toggleBtn()}>Sign in</strong>
				</p>
			</form>
		</div>
	);
};

export default connect(null, { register, alertAction })(SignUpBlock);
