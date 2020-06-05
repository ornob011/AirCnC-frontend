import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./alert.styles.scss";

const Alert = ({ alert }) => {
    return (
        <Fragment>
            {alert !== null &&
                alert.length > 0 &&
                alert.map((alert) => (
                    <div
                        key={alert.id}
                        className={`custom-alert custom-alert-${alert.alertType}`}>
                        {alert.alertType === "success" ? (
                            <div className="alert-icon">&#10003;</div>
                        ) : (
                                <div className="alert-icon">&#10005;</div>
                            )}
                        {alert.msg}
                    </div>
                ))}
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
