import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '../../model/User';
import {Router} from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:User;
  subscription: Subscription;
  usuarioleido:any;
  
  constructor(private usuarioServices: UsuarioService,private router:Router) { }

  ngOnInit() {
    this.usuario = new User("Alisson","Diane");
    this.usuarioleido = 0;

  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ValidarUsuario(usuario: User) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    alert("has enviado:"+ usuario.user + ' ' + usuario.password);
    this.usuarioServices.get(usuario.user,usuario.password).subscribe((usuarioleido) => {this.usuarioleido = usuarioleido;    
    })
    this.Mensaje();
    }
    Mensaje(){
      console.log(this.usuarioleido);
      if (this.usuarioleido === 0){
        alert("Usuario ingresado incorrectamente");
      }else{
       if(this.usuarioleido.tipoUsuario.nombreTu === "ADMINISTRADOR"){
         console.log( this.usuarioleido.tipoUsuario.nombreTu);
          alert("Bienvenido");
           this.router.navigate(['vistaAdmin']);
       }else{
        alert("Usuario ingresado incorrectamente tipo incorrecto");
        }
      }

    }
}
