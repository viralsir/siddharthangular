import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Employee} from "../employee";

@Component({
  selector: 'app-emp-entry',
  templateUrl: './emp-entry.component.html',
  styleUrls: ['./emp-entry.component.css']
})
export class EmpEntryComponent implements OnInit {

  msg:string="";
  empFormRef=new FormGroup({
    name:new FormControl(),
    salary:new FormControl()
  })
  constructor(public empservice:EmployeeService) { }  // di for emp service

  ngOnInit(): void {
  }

  addEmployee(){
    let empform=this.empFormRef.value;
    this.empservice.employeelist.push(new Employee(empform.name,empform.salary))
    this.msg="Employee is added";
    this.empFormRef.reset()
  }
}
