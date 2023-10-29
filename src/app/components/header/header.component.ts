import { Component, Input } from "@angular/core";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  constructor(private cartService: CartService) {}
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }
}
