import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}
  openSnackBar(message: any, action: any) {
    let snackBarRef = this.snackBar.open(message, action,{duration:3000});
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The SnackBar was Dismissed');
    });
    snackBarRef.onAction().subscribe(()=>{
      console.log('The SnackBar Action Was Triggered')
    })
  }

  ngOnInit(): void {}
}
