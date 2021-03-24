import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
    firstName : new FormControl(''),
    secondName : new FormControl('')
  });

  selectedFile: File = null;


  constructor(private registrationService: RegistrationService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(){
  }
  
  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  submit(){

    let username = this.register.value.username;
    let password = this.register.value.password;
    let firstName = this.register.value.firstName;
    let secondName = this.register.value.secondName;

    this.registrationService
      .register(username, password, firstName, secondName, this.selectedFile)
      .subscribe(
        response => {
          let snackbarRef = this.matSnackBar.open("Registrierung erfolgreich abgeschlossen", "OK", {
            duration: 20000
          });
          snackbarRef.afterDismissed().subscribe(
            () => {
              this.loginService
                .authenticate(username, password)
                .subscribe(
                  response => {
                    this.loginService.setToken(response);
                    this.loginService.setUsername(username);
                    this.router.navigate(
                      ['/home']
                    );
                  }
                );
            }
          );
        },
        error => {
          console.log("failure");
        }
      );
  }

}
