import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

declare var require: any;
const data: any = require('../../../shared/data/company.json');
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent {

  // public
  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  isEditingRow
  // DataTable Content Titles
  columns = [
      { prop: 'No' },
      { prop: 'Requested Services' },
      { prop: 'Request Date' },
      { prop: 'Process Time' },
      { prop: 'Status' },
      { prop: 'Action' }

  ];

  constructor(private router :Router) {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
  }

  getRowHeight(row) {
    return row.height;
  }
  routlinks(value)
  {
    console.log(value)
    if(value =='Why?')
    {
      this.router.navigateByUrl('/homeservices/failed');

    }
    else if(value =='Check')
    {
      this.router.navigateByUrl('/homeservices/process');

    }
    else{
      this.router.navigateByUrl('/homeservices/success');

    }
  }
}
