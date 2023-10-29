import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent {
  @Input() product: Product | undefined;
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
