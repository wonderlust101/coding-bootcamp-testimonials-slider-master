import React from "react";
import nextIcon from '/src/assets/images/icon-next.svg';
import previousIcon from '/src/assets/images/icon-prev.svg';

type testimonialButtonsProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonType: string;
}

export default function TestimonialButtons({onClick, buttonType}: testimonialButtonsProps) {
    let icon: string = '';
    
    if (buttonType === 'previous') {
        icon = previousIcon;
    }
    else if (buttonType === 'next') {
        icon = nextIcon;
    }

    return (
        <button className={'testimonials__buttons testimonials__buttons--' + buttonType} onClick={onClick}
                aria-label={buttonType}>
            <img className='testimonials__buttons-icon' src={icon} alt="" role="presentation"/>
        </button>
    )
} 