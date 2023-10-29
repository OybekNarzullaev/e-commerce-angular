import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        id: 1,
        name: "snikers",
        product: "https://via.placeholder.com/150",
        price: 150,
        quantity: 1,
      },
      {
        id: 2,
        name: "snikers",
        product: "https://via.placeholder.com/150",
        price: 450,
        quantity: 1,
      },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.quantity * item.price)
      .reduce((prev, current) => prev + current, 0);
  }
}
