import { Component } from "@angular/core";
import { CartService } from "src/app/services/cart.service";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 410, 3: 375, 4: 375 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  cols = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];

  products = [
    {
      id: 1,
      title: "snikers",
      category: "shoes",
      description: "Description",
      image: "https://via.placeholder.com/150",
      price: 150,
    },
    {
      id: 2,
      title: "ball",
      category: "sports",
      description: "Description",
      image: "https://via.placeholder.com/150",
      price: 100,
    },
  ];
  constructor(private cartService: CartService) {}

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(newProduct: Product): void {
    this.cartService.addToCart({
      id: newProduct.id,
      product: newProduct.image,
      name: newProduct.title,
      price: newProduct.price,
      quantity: 1,
    });
  }
}
