import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicestableRoutingModule } from './servicestable-routing.module';
import { TableComponent } from './table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SuccessServiceComponent } from './success-service/success-service.component';
import { FailedServiceComponent } from './failed-service/failed-service.component';
import { ProcessServiceComponent } from './process-service/process-service.component';


@NgModule({
  declarations: [TableComponent, SuccessServiceComponent, FailedServiceComponent, ProcessServiceComponent],
  imports: [
    CommonModule,
    ServicestableRoutingModule,
    NgxDatatableModule
  ]
})
export class ServicestableModule { }
