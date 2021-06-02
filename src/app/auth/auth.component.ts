import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  error = '';

  constructor(private authService: AuthService, private route: Router, private formbuilder: FormBuilder) { 
    this.authForm = this.formbuilder.group({
      usernamePartner: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
      });
  }

  ngOnInit(): void {
  }

}
