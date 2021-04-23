import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Seguimiento } from '../model/seguimiento';
import { SeguimientoService } from '../services/seguimiento.service';

@Component({
  selector: 'app-seguimiento-card',
  templateUrl: './seguimiento-card.component.html',
  styleUrls: ['./seguimiento-card.component.css']
})
export class SeguimientoCardComponent implements OnInit {

  @Input()
  seguimiento: Seguimiento;

  @Input()
  index: number;

  constructor(public seguimientoService: SeguimientoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  deleteSeguimiento(nombre: string) {
    this.seguimientoService.deleteSeguimiento(nombre).subscribe (data => {
      alert('Success');
    });
  }



  
}
