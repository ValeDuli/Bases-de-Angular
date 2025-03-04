import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Iron Man';
    edad: number=45;

    get nombreCapitalizado(){
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre}-${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre='Spider-Man';
    }
    cambiarEdad():void{
        console.log('hey....')
        this.edad=26;
    }
}
