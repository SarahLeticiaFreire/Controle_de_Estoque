import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private loginService: LoginService) { }

  login(): void {
    this.loginService.login(this.username, this.password)
      .subscribe(
        () => {
          this.router.navigate(['/nomecomp']); 
        },
        () => {
          this.errorMessage = 'Usuários ou senha errados.';
        }
      );
  }
}
