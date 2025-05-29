import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center min-h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
    }}>
      <div className="container text-center text-white">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
          Discover Your Natural Beauty
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          Personalized aesthetic treatments in a luxurious, comfortable environment
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            variant="accent" 
            size="lg" 
            onClick={() => document.getElementById('services')?.scrollIntoView()}
          >
            Explore Services
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-white border-white hover:bg-white hover:text-neutral-900"
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Book Consultation
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center animate-bounce">
        <a href="#about" className="text-white">
          <ChevronDown className="h-8 w-8 mx-auto" />
        </a>
      </div>
    </div>
  );
}