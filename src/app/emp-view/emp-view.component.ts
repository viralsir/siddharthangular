import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit {

  constructor(public empservice:EmployeeService) { }

  ngOnInit(): void {
  }

}
