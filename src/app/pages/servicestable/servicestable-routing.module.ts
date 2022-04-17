import { ProcessServiceComponent } from './process-service/process-service.component';
import { FailedServiceComponent } from './failed-service/failed-service.component';
import { SuccessServiceComponent } from './success-service/success-service.component';
import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
     component: TableComponent,
    data: {
      title: 'table'
    }  
  },
  {
    path: 'success',
     component: SuccessServiceComponent,
    data: {
      title: 'table'
    }  
  },
  {
    path: 'failed',
     component: FailedServiceComponent,
    data: {
      title: 'table'
    }  
  },
  {
    path: 'process',
     component: ProcessServiceComponent,
    data: {
      title: 'table'
    }  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicestableRoutingModule { }
