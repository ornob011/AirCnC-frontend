import React, { useState } from "react";
import "./login-block.styles.scss";
import CustomButton from "../custom-button/CustomButton";
import { login } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import Alert from "../utils/Alert";

const LoginBlock = ({ toggleBtn, login, isAuthenticated, history }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;
    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const onSubmitHandler = (e) => {
        login(email, password);
        e.preventDefault();
    };

    //Redirected

    return (
        <div className="auth-block">
            <h6>Log in</h6>
            <Alert />
            <form onSubmit={onSubmitHandler}>
                <div className="auth-input-box">
                    <label htmlFor="phone">Email</label>
                    <input type="email" name="email" onChange={onChangeHandler} />
                </div>
                <div className="auth-input-box">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={onChangeHandler} />
                </div>
                <CustomButton fullWidth>Login</CustomButton>
                <p onClick={(e) => toggleBtn()}>
                    Don't have an account ? <strong>Sign up</strong>
                </p>
            </form>
        </div>
    );
};

export default connect(null, { login })(LoginBlock);
