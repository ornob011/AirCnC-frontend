import React, { useState } from "react";
import SignUpBlock from "../../components/signup-block/SignUpBlock";
import LoginBlock from "../../components/login-block/LoginBlock";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const AuthPage = ({ isAuthenticated }) => {
	const [toggle, setToggle] = useState(false);
	const changeToggler = (e) => {
		setToggle(!toggle);
	};
	let history = useHistory();

	if (isAuthenticated) {
		return <Redirect to={history.goBack()} />;
	}
	return (
		<div className="auth-page">
			<div className="container">
				<div className="row">
					<div className="col-md-4 offset-4">
						{toggle ? (
							<SignUpBlock toggleBtn={changeToggler} />
						) : (
							<LoginBlock toggleBtn={changeToggler} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated,
});
export default connect(mapStateToProps)(AuthPage);
