import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  
  //personajes:Personaje[]=[
    //{
      //nombre:'Goku',
      //poder:15000
    //},
    //{
      //nombre:'Vegeta',
      //poder:7500
    //},
  //];

  ////personajes:Personaje[]=[];

  nuevo: Personaje={
    nombre:'Maestro Roshi',
    poder: 500
  }

  //get personajes():Personaje[]{
    //return this.dbzServise.personajes;
  //}

 // agregarNuevoPersonaje(argumento:Personaje){
    //this.personajes.push(argumento);
 // }
  constructor(){
    //this.personajes=this.dbzServise.personajes;
  }

}
