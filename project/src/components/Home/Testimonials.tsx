import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Software Developer',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    quote: 'CareerPath helped me transition from marketing to tech. The assessment accurately identified my strengths in problem-solving and logical thinking.',
    stars: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'UX Designer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    quote: 'I was stuck in a career I didn\'t enjoy. The assessment results opened my eyes to design, which combines my creativity and technical skills perfectly.',
    stars: 5
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'Data Scientist',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    quote: 'The career recommendations were spot on! I never considered data science before, but it\'s now my dream job combining my analytical mind and passion for insights.',
    stars: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how CareerPath has helped professionals find their ideal careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
    stars: number;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center space-x-1 text-yellow-400 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < testimonial.stars ? "currentColor" : "none"}
            className={i < testimonial.stars ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
      
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;