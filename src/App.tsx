import TestimonialSlider from "./TestimonialSlider/TestimonialSlider.tsx";
import testimonialDataJson from "./data/testimonialData.json";

interface UserTestimonial {
    firstName: string;
    lastName: string;
    role: string;
    imgSrc: string;
    quote: string;
}

const testimonialData: UserTestimonial[] = testimonialDataJson;

function App() {

  return (
    <div className='testimonial-page'>
        <main className='testimonial-page__content contained-grid'>
            <TestimonialSlider userData={testimonialData}/>
        </main>
    </div>
  )
}

export default App
