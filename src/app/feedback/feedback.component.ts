import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  displayedColumns: any[] = ['action', 'id', 'form', 'createdBy', 'created'];
  feedback: any[] = [];
  dataSource: MatTableDataSource<any>;
  previewModal = false;
  deleteModal = false;
  selectedFeedback: any;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService) {
    this.dataSource = new MatTableDataSource(this.feedback);
  }

  ngOnInit(): void {
    this.apiService.getFeedback().then((res: any)=> {
      this.feedback = res;
      // console.log(res)
    });

  }

  // ngAfterViewInit(): void {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  openPreview(feedback: any) {
    this.selectedFeedback = Object.assign({}, feedback);
  }
}
