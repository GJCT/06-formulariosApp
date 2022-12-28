import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit{

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor(){}

  ngOnInit(): void {
    
  }

  // nombreValido(): boolean{
  //   return;
  // }

  guardar(miFormulario: NgForm){
    console.log(miFormulario)
  }

}
