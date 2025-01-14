export interface TestimonialType {
  id: number;
  name: string;
  feedback: string;
  rating: number;
}

export interface TeamMemberType {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
}

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FAQType {
  id: number;
  question: string;
  answer: string;
}