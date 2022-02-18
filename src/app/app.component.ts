import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name:string="Siddharth Shah";
   age:number=10;
   phno:string="9426158100";
   entryvisible:boolean=true;
   viewvisible:boolean=false;

   addbtnclick(){
     this.entryvisible=true;
     this.viewvisible=false;
   }
   viewbtnclick(){
     this.entryvisible=false;
     this.viewvisible=true;
   }
}
 // DI   dependancy injection
