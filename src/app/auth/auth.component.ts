import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  errorMessage = 'Mail ou mot de passe incorrect';

  constructor(private authService: AuthService, private router: Router, private formbuilder: FormBuilder) {
    this.authForm = this.formbuilder.group({
      usernameTeammate: ['', Validators.required],
      password: ['', Validators.required]
      });
  }

  ngOnInit(): void {
  }

  postdata(signinForm1: any): void {
    this.authService.userlogin(signinForm1.value.usernameTeammate, signinForm1.value.password)
      .pipe(first())
      .subscribe(
          data => {
            if (data === "Le mot de passe est erroné") {
              alert(data);
              this.authService.getLoggedInName.emit(false);
            } else if ( data === "Le nom d'utilisateur n'existe pas") {
              alert(data);
              this.authService.getLoggedInName.emit(false);
            }
            else {
              this.authService.setToken(data.usernameTeammate);
              this.authService.getLoggedInName.emit(true);
              const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/calendar';
              this.router.navigate([redirect]);
              localStorage.setItem('idTeammate', JSON.stringify(data.idTeammate));
            }
          },
          error => {
            alert(this.errorMessage);
          });
  }

  get usernameTeammate(): AbstractControl { return this.authForm.get('usernameTeammate'); }

  get password(): AbstractControl { return this.authForm.get('password'); }

}
