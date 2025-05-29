import Section from '../ui/Section';
import TeamMemberCard from '../ui/TeamMemberCard';
import { team } from '../../data/team';

export default function Team() {
  return (
    <Section 
      id="team" 
      title="Meet Our Team"
      subtitle="Our experienced professionals are dedicated to providing personalized care and exceptional results."
      background="light"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
        {team.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </Section>
  );
}