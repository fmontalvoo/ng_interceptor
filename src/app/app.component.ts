import { Component } from '@angular/core';

import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng_interceptor';
  constructor(private us: UsuariosService) {
    this.us.obtenerUsuarios()
      .subscribe({
        next: res => {
          console.log(res);
        },
        error: err => {
          console.warn(`Error de peticion: ${err}`);
        },
        complete: () => {
          console.log('Completado');
        }
      });
  }
}
