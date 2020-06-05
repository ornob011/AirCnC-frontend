import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
    fullWidth,
    outline,
    right,
    rounded,
    waring,
    children,
    mt2,
    cardPay,
    ...otherprops
}) => {
    return (
        <button
            className={`${cardPay ? "custom-button-cardPay" : ""} ${
                waring ? "custom-button-waring" : ""
                } ${fullWidth ? "fullWidth" : ""} ${right ? "custom-button-right" : ""} ${
                outline ? "custom-button-outline" : ""
                } ${rounded ? "rounded" : ""} custom-button`}
            {...otherprops}>
            {children}
        </button>
    );
};

export default CustomButton;
