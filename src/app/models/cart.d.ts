interface Cart {
  items: CartItem[];
}

interface CartItem {
  id: number;
  product: string;
  name: string;
  price: number;
  quantity: number;
}
