import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {

  nombre="Sara";

  apellido="Díaz";

  edad=30;

  //empresa="Google";


  llamaEmpresa(value:string){

  }
}
