import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter();
  @Input() cols: number = 3;
  @Input() sort: string = "desc";
  @Input() itemsShowCount: number = 12;

  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  constructor() {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(itemCount: number): void {
    this.itemsShowCount = itemCount;
    this.itemsCountChange.emit(itemCount);
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
