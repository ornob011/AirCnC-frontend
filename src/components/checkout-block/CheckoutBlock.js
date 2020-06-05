import React from "react";
import "./checkout-block.styles.scss";
import StepZilla from "react-stepzilla";
import HouseRules from "../house-rules/HouseRules";
import ContactWithHost from "../contact-with-host/ContactWithHost";
import PaymentBlock from "../payment-block/PaymentBlock";

const CheckoutBlock = () => {
    const steps = [
        { name: "Reviews house rules >", component: <HouseRules /> },
        { name: "Who's coming ? >", component: <ContactWithHost /> },
        { name: "Confirm and pay >", component: <PaymentBlock /> },
    ];
    return (
        <div className="checkout-block">
            <div className="step-progress">
                <StepZilla
                    steps={steps}
                    stepsNavigation={true}
                    prevBtnOnLastStep={false}
                    showSteps={true}
                    nextButtonText="Continue"
                    nextButtonCls="custom-button"
                    backButtonText=""
                    backButtonCls=""
                />
            </div>
        </div>
    );
};

export default CheckoutBlock;
