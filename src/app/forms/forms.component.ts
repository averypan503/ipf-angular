import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormPreviewComponent } from './form-preview.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  displayedColumns: any[] = ['action', 'id', 'name', 'layout', 'created'];
  forms: any[] = [];
  dataSource: MatTableDataSource<any>;
  previewModal = false;
  deleteModal = false;
  selectedForm: any;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.forms);
  }

  ngOnInit(): void {
    this.apiService.getFeedbackForms().then((res: any)=> {
      this.forms = res;
      console.log('---',res)
    });

  }

  openPreview(form: any) {
    this.selectedForm = Object.assign({}, form);
  }
}
