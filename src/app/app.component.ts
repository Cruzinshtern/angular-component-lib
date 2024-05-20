import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomAngularTableComponent } from '../../projects/custom-angular-component-lib/src/public-api';
import { CustomAngularPaginatorComponent } from '../../projects/custom-angular-component-lib/src/lib/custom-angular-paginator/custom-angular-paginator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomAngularTableComponent, CustomAngularPaginatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  columns: string[] = ['name', 'describe', 'date', 'fsdfsdfs'];
  tableData: any[] = [
    {
      name: 'mock name',
      fsdfsdfs: 'test',
      date: '2024-04-12',
      describe: 'description',
    },
    {
      name: 'mock name',
      test: 'test',
      date: '2024-04-12',
      describe: 'description',
    },
    {
      name: 'mock name',
      test: 'test',
      date: '2024-04-12',
      describe: 'description',
    },
    {
      name: 'mock name',
      test: 'test',
      date: '2024-04-12',
      describe: 'description',
    },
  ]
}
