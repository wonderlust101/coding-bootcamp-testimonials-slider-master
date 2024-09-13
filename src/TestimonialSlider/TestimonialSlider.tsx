import {useState} from "react";
import TestimonialImage from "./TestimonialImage.tsx";
import TestimonialButtons from "./TestimonialButtons.tsx";

interface UserTestimonial {
    firstName: string;
    lastName: string;
    role: string;
    imgSrc: string;
    quote: string;
}

interface TestimonialSliderProps {
    userData: UserTestimonial[];
}

export default function TestimonialSlider({userData}: TestimonialSliderProps) {
    const [displayedTest, setDisplayedTest] = useState(0);

    function handleNextTest() {
        if (displayedTest + 1 === userData.length) {
            setDisplayedTest(0);
            return;
        }
        setDisplayedTest(displayedTest + 1);
    }

    function handlePreviousTest() {
        if (displayedTest - 1 < 0) {
            setDisplayedTest(userData.length - 1);
            return;
        }
        setDisplayedTest(displayedTest - 1);
    }

    return (
        <div className="testimonials">
            <div className="testimonials__image-slider">
                <div className="testimonials__image-container">
                    <TestimonialImage userData={userData[displayedTest]}/>
                </div>

                <div className="testimonials__buttons">
                    <TestimonialButtons onClick={handlePreviousTest} buttonType="previous"/>
                    <TestimonialButtons onClick={handleNextTest} buttonType="next"/>
                </div>
            </div>

            <div className="testimonials__text">
                <p className="testimonials__quote">{userData[displayedTest].quote}</p>

                <div className="testimonials__user-test">
                    <p className="testimonials__user-name">{userData[displayedTest].firstName + ' ' + userData[displayedTest].lastName}</p>
                    <p className="testimonials__user-role">{userData[displayedTest].role}</p>
                </div>
            </div>
        </div>
    )
} 