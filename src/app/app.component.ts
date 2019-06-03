import { Component, ViewChild, OnInit} from '@angular/core';
import { DxValidationGroupComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DevExpress';
  name: string = '';
  @ViewChild('validationGroup') valGrp : DxValidationGroupComponent;
  employees : { userId : string;
    jobTitleName : string;
    firstName: string;
    lastName: string;
    preferredFullName: string;
    employeeCode: string;
    region: string;
    phoneNumber: string;
    emailAddress: string}[];

  constructor(private employeesService: EmployeesService){}

  ngOnInit(){
    this.employees = this.employeesService.getEmployees();
    
  }

  onClick(){
    let type = this.valGrp.instance.validate().isValid ? 'success' : 'error';
    this.name = this.valGrp.instance.validate().isValid ? this.name : 'No name entered';
    notify(this.name, type, 60000);
    this.name = '';
    }  
  }

