export interface CardProps {
    title: string;
    description: string;
    imgUrl: string;
}

export interface ButtonProps {
    label: string;
    onClick: ()=> void;
}

// Address structure
export interface Address {
  state: string;
  city: string;
  country: string;
}

// Offers structure
export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

// Main Property interface
export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}