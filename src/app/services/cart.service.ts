import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private _snackbar: MatSnackBar) {}

  addToCart(item: CartItem) {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackbar.open("1 item added to cart.", "Ok", { duration: 3000 });
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });

    this._snackbar.open("Cart is cleared.", "Ok", { duration: 3000 });
  }

  removeFromCart(item: CartItem) {
    const newItem = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    this.cart.next({ items: newItem });

    this._snackbar.open("1 item removed from cart.", "Ok", { duration: 3000 });
  }

  addQuantity(item: CartItem) {
    const newItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity += 1;
        return _item;
      }

      return _item;
    });

    this.cart.next({ items: newItems });
    this._snackbar.open("1 item added to cart.", "Ok", { duration: 3000 });
  }

  removeQuantity(item: CartItem) {
    if (item.quantity === 1) {
      return this.removeFromCart(item);
    } else {
      const newItems = this.cart.value.items.map((_item) => {
        if (_item.id === item.id) {
          _item.quantity -= 1;
          return _item;
        }

        return _item;
      });

      this.cart.next({ items: newItems });
      this._snackbar.open("1 item removed from cart.", "Ok", {
        duration: 3000,
      });
    }
  }
}
