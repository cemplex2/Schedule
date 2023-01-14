import React from "react";
import './styles/SlideIn.css';

const SlideIn = ({children, startAnimation}) => {
    const transitionProperties = startAnimation ? {marginTop: '5px', opacity: 1} : {};
    return (
        <div className="slide-in" style={transitionProperties}>
            {children}
        </div>
    );
};
export default SlideIn