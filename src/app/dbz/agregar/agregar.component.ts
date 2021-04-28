import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
	
  @Input() nuevo: Personaje = { //Emite Valores del component padre al hijo (Hijo actual)
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService){

  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); //Envia el valor del Componente hijo al componente Padre

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }

	this.dbzService.agregarPersonaje(this.nuevo);
	//this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };

  }
}
