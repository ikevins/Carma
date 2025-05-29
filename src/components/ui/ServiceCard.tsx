import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-8">
        <h3 className="font-serif text-2xl font-medium mb-4">{service.title}</h3>
        <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>
        <Link 
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-accent font-medium hover:text-accent-dark transition-colors group/link"
        >
          Learn More
          <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}