export interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Mesoneedling",
    description: "Advanced skin rejuvenation treatment that stimulates collagen production and improves skin texture.",
    imageUrl: "https://images.pexels.com/photos/3985356/pexels-photo-3985356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "mesoneedling"
  },
  {
    id: 2,
    title: "Wrinkle Relaxers",
    description: "Targeted treatments to reduce the appearance of fine lines and wrinkles for a more youthful appearance.",
    imageUrl: "https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "wrinkle-relaxers"
  },
  {
    id: 3,
    title: "Dermal Fillers",
    description: "Restore volume and enhance facial features with our premium dermal filler treatments.",
    imageUrl: "https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "dermal-fillers"
  },
  {
    id: 4,
    title: "PRP",
    description: "Harness your body's natural healing abilities with Platelet-Rich Plasma therapy for skin rejuvenation.",
    imageUrl: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "prp"
  }
];