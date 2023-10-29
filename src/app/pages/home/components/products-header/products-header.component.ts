import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter();
  @Input() cols: number = 3;

  sort = "sort";
  itemsShowCount = 12;

  constructor() {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(itemCount: number): void {
    this.itemsShowCount = itemCount;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
