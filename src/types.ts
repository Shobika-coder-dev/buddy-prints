export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'Trendy' | 'Minimal' | 'Graphic' | 'Custom';
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
  color: string;
  customDesign?: string;
  customText?: string;
}
