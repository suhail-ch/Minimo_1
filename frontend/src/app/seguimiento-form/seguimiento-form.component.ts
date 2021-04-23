import { SeguimientoService } from '../services/seguimiento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seguimiento-form',
  templateUrl: './seguimiento-form.component.html',
  styleUrls: ['./seguimiento-form.component.css']
})
export class SeguimientoFormComponent implements OnInit {

  seguimientoForm: FormGroup;
  isSubmitted = false;

  constructor(public seguimientoService: SeguimientoService, private router: Router, 
              private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.seguimientoForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.nullValidator]],
      fecha: ['', [Validators.required, Validators.nullValidator]],
      dni: ['', [Validators.required, Validators.nullValidator]],
      telefono: ['', [Validators.required, Validators.nullValidator]],
      fiebre: ['', [Validators.required, Validators.nullValidator]],
      tos: ['', [Validators.required, Validators.nullValidator]],
      dificultadRespiratoria: ['', [Validators.required, Validators.nullValidator]],
      malestarGeneral: ['', [Validators.required, Validators.nullValidator]],
    });
  }
  get formControls(){
    return this.seguimientoForm.controls;
  }

  submitSeguimiento(): void {
    this.isSubmitted = true;
    if(this.seguimientoForm.invalid){
      return;
    }
    const nombre = this.seguimientoForm.value.nombre;
    const fecha = this.seguimientoForm.value.fecha;
    const dni = this.seguimientoForm.value.dni;
    const telefono = this.seguimientoForm.value.telefono;
    const fiebre = this.seguimientoForm.value.fiebre;
    const tos = this.seguimientoForm.value.tos;
    const dificultadRespiratoria = this.seguimientoForm.value.dificultadRespiratoria;
    const malestarGeneral = this.seguimientoForm.value.malestarGeneral;

    let seguimiento = {'nombre': nombre, 'fecha': fecha, 'dni': dni, 'telefono': telefono, 'fiebre': fiebre,
    'tos': tos, 'dificultadRespiratoria': dificultadRespiratoria, 'malestarGeneral': malestarGeneral };

    console.log("NEW SEGUIMIENTO: ", seguimiento);
    
    this.seguimientoService.newSeguimiento(seguimiento).subscribe(() => {
       this.router.navigateByUrl('/seguimientos');
     });

  }
}
