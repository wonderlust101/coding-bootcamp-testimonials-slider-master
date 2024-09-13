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
    const [nextTest, setNextTest] = useState(userData.length - 1);
    const [displayedTest, setDisplayedTest] = useState(0);
    const [previousTest, setPreviousTest] = useState(1);

    function handleNextTest() {
        setPreviousTest(displayedTest);
        setDisplayedTest(nextTest);
        if (nextTest + 1 === userData.length) {
            setNextTest(0);
            return;
        }
        setNextTest(nextTest + 1);
    }

    function handlePreviousTest() {
        setNextTest(displayedTest);
        setDisplayedTest(previousTest);
        if (previousTest - 1 < 0) {
            setPreviousTest(userData.length - 1);
            return;
        }
        setPreviousTest(previousTest - 1);
    }

    return (
        <div className='testimonials'>
            <div className='testimonials__image-slider'>
                <div className="testimonials__image-container">
                    <TestimonialImage userData={userData[previousTest]}/>
                    <TestimonialImage userData={userData[displayedTest]}/>
                    <TestimonialImage userData={userData[nextTest]}/>
                </div>

                <div className="testimonials__buttons">
                    <TestimonialButtons onClick={handlePreviousTest} buttonType='previous'/>
                    <TestimonialButtons onClick={handleNextTest} buttonType='next'/>
                </div>
            </div>

            <div className='testimonials__text'>
                <p className="testimonials__quote">{userData[displayedTest].quote}</p>

                <div className='testimonials__user-test'>
                    <p className='testimonials__user-name'>{userData[displayedTest].firstName + ' ' + userData[displayedTest].lastName}</p>
                    <p className='testimonials__user-role'>{userData[displayedTest].role}</p>
                </div>
            </div>
        </div>
    )
} 