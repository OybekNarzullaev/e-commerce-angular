import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 410, 3: 375, 4: 375 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];
  products: Array<Product> | undefined = [];
  sort = "desc";
  count = 12;
  productSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productSubscription = this.storeService
      .getAllProducts(this.count.toString(), this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
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

  onItemsCountChange(newCount: number) {
    this.count = newCount;
    this.getProducts();
  }

  onSortChange(newSort: string) {
    this.sort = newSort;
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
}
