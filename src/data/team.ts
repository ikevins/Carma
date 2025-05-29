export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  credentials?: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Carolyne Singh",
    role: "Aesthetic Injector",
    credentials: "PA-C",
    bio: "Carolyne is the founder of Carma Aesthetics and a board-certified physician assistant. She completed her Master's in Medical Sciences at Nova Southeastern University in Orlando, FL, and is fellowship trained with the American Foundation for Aesthetic Medicine (AFFAM). She brings an artistic approach and extensive knowledge of facial anatomy to create stunning, natural results.",
    imageUrl: "https://images.pexels.com/photos/5214969/pexels-photo-5214969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Dr. Paul Goldberg",
    role: "Medical Director",
    credentials: "MD",
    bio: "Dr. Goldberg is a board certified plastic surgeon with over 30 years of experience in the aesthetic industry. He completed his Plastic Surgery Fellowship in 1985 at Mount Sinai Medical Center in New York and has been in private practice ever since. He participates in clinical research and remains actively involved in the aesthetic realm.",
    imageUrl: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];