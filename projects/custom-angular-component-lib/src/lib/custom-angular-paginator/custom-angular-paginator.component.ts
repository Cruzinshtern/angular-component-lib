import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IPaginatorPageChanged {
  prevPage: number | null,
  currentPage: number,
  nextPage: number | null,
  totalPages: number,
  pageSize: number
}

@Component({
  selector: 'custom-angular-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-angular-paginator.component.html',
  styleUrl: './custom-angular-paginator.component.scss'
})
export class CustomAngularPaginatorComponent implements OnInit {
    /**
   * Total length of data.
   */
    @Input() length: number = 0;

    /**
     * Number of items to be displayed on the page.  
     * NOTE: If pageSize is not provided, page size is taken from the first element in pageSizeOptions array
     */
    @Input() pageSize: number = 0;
  
    /**
     * Variants for number of items to be displayed on the page.
     */
    @Input() pageSizeOptions: number[] = [];
  
    /**
     * Event on page change.  
     * @returns { IPaginatorPageChanged } Metadata about currently selected page
     */
    @Output() onPageChanged: EventEmitter<IPaginatorPageChanged> = new EventEmitter<IPaginatorPageChanged>();
  
    pages: number = 1;
    page: number = 1;
  
    ngOnInit(): void {
      if (this.pageSize) {
        this.pages = Math.ceil(this.length / this.pageSize);
      } else {
        this.pages = Math.ceil(this.length / this.pageSizeOptions[0]);
      }
    }
  
    handlePrev(): void {
      if (this.page - 1 === 0) return;
      this.page--;
      this.onPageChanged.emit({
        prevPage: this.page - 1 === 0 ? null : this.page - 1,
        currentPage: this.page,
        nextPage: this.page + 1,
        totalPages: this.pages,
        pageSize: this.pageSize
      });
    }
  
    handleNext(): void {
      if (this.page + 1 > this.pages) return;
      this.page++
      this.onPageChanged.emit({
        prevPage: this.page - 1,
        currentPage: this.page,
        nextPage: this.page + 1 > this.pages ? null : this.page + 1,
        totalPages: this.pages,
        pageSize: this.pageSize
      });
    }
  
    handlePageSizeOptionSelect(e: any): void {
      this.pageSize = Number(e.target.value);
      this.pages = Math.ceil(this.length / this.pageSize);
      this.page = 1;
      this.onPageChanged.emit({
        prevPage: null,
        currentPage: this.page,
        nextPage: this.page + 1 > this.pages ? null : this.page + 1,
        totalPages: this.pages,
        pageSize: this.pageSize
      });
    }
}
