import { ActivatedRoute } from '@angular/router';
import { SeguimientoService } from '../services/seguimiento.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Seguimiento } from '../model/seguimiento';

@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent implements OnInit {

  seguimientos: Seguimiento[];


  constructor(public seguimientosService: SeguimientoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.seguimientosService.getSeguimiento().subscribe (seguimientos => {
      this.seguimientos = seguimientos;
    });
  }

  newSeguimiento() {
    this.router.navigateByUrl('/newSeguimiento');
  }

  admin(){
    this.router.navigateByUrl('/admin');
  }

  delete(){
    this.seguimientosService.deleteSeguimientos().subscribe (data => {
      alert('Success');
    });
  }

}
