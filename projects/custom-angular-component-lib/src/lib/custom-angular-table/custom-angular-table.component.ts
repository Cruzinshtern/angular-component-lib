import { CommonModule } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'custom-angular-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-angular-table.component.html',
  styleUrl: './custom-angular-table.component.scss'
})
export class CustomAngularTableComponent {
  /**
   * Columns to be displayed in the table.  
   * Keep in mind that the order of strings in array is the order of the table columns you'll get.  
   * @type { string[] }
   */
  columns: InputSignal<string[]> = input.required<string[]>();

    /**
   * Actual data to be displayed in the table.  
   * @type { any[] }
   */
  tableData: InputSignal<any[]> = input.required<any[]>();
}
