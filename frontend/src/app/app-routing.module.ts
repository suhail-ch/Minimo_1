import { AdminComponent } from './admin/admin.component';
import { SeguimientosComponent } from './seguimientos/seguimientos.component';
import { SeguimientoFormComponent } from './seguimiento-form/seguimiento-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  { path: 'admin', component: AdminComponent},
  { path: 'seguimientos', component: SeguimientosComponent},
  { path: 'newSeguimiento', component: SeguimientoFormComponent},
  { path: 'newStudent/:subjectName', component: SeguimientosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
