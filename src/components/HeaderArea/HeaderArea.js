import React, { useEffect, useState, Fragment } from "react";
import "./HeaderArea.scss";
import homeLogo from "../../assets/logo.png";
import CustomButton from "../custom-button/CustomButton";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/user/user.actions";

const HeaderArea = ({ auth, logout }) => {
    const [path, setPath] = useState("");
    let location = useLocation();
    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname]);
    return (
        <div className="HeaderArea">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="home-logo">
                            <Link to="/">
                                <img src={homeLogo} alt="Home logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="header-navigation">
                            <ul className="options">
                                {path === "/" ? (
                                    <Fragment>
                                        <li className="option">
                                            <Link to="/l">Host your home</Link>
                                        </li>
                                        <li className="option">
                                            <Link to="/gf">Host your home</Link>
                                        </li>
                                    </Fragment>
                                ) : (
                                        ""
                                    )}
                                <li className="option">
                                    <Link to="/checkout">Help</Link>
                                </li>
                                {path === "/" ? (
                                    <Fragment>
                                        <li className="option">
                                            {!auth ? (
                                                <Link to="/auth">
                                                    <CustomButton rounded>Login</CustomButton>
                                                </Link>
                                            ) : (
                                                    <li onClick={() => logout()}>
                                                        <CustomButton rounded waring>
                                                            Logout
													</CustomButton>
                                                    </li>
                                                )}
                                        </li>
                                    </Fragment>
                                ) : (
                                        <Fragment>
                                            {!auth ? (
                                                <Fragment>
                                                    <li className="option">
                                                        <Link to="/house">Login</Link>
                                                    </li>
                                                    <li className="option">
                                                        <CustomButton rounded>Sign UP</CustomButton>
                                                    </li>
                                                </Fragment>
                                            ) : (
                                                    <li className="option" onClick={() => logout()}>
                                                        <CustomButton rounded waring>
                                                            Logout
												</CustomButton>
                                                    </li>
                                                )}
                                        </Fragment>
                                    )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.user.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(HeaderArea);
