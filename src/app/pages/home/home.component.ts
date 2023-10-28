import { Component } from "@angular/core";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 410, 3: 375, 4: 375 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  cols = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];

  constructor() {}

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
