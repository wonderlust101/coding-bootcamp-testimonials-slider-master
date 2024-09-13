// type testimonialImageProps = {
//     user: 
// }

interface UserTestimonial {
    firstName: string;
    lastName: string;
    role: string;
    imgSrc: string;
    quote: string;
}

interface TestimonialSliderProps {
    userData: UserTestimonial;
}

export default function TestimonialImage({userData}: TestimonialSliderProps) {
    
    return (
        <img className='testimonials__image' src={userData.imgSrc} alt={userData.firstName + "'s portrait image."} />
    )
} 