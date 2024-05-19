import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { categoryList } from '../shared/data/categoryList';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatButtonModule,MatTableModule , MatIconModule , RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  displayedColumns: string[] = ['categoryName', 'numOfWords', 'lastEdit', 'actions'];
  dataSource = categoryList;
}


