import React from 'react';
import { TeamMember } from '../../data/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="text-center group">
      <div className="relative mb-6 mx-auto w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        <img 
          src={member.imageUrl} 
          alt={member.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          <h3 className="font-serif text-2xl font-medium text-neutral-900">{member.name}</h3>
          {member.credentials && (
            <span className="text-accent font-medium">{member.credentials}</span>
          )}
        </div>
        <p className="text-accent font-medium">{member.role}</p>
        <p className="text-neutral-600 leading-relaxed max-w-lg mx-auto">{member.bio}</p>
      </div>
    </div>
  );
}