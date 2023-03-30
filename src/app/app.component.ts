import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unit-test';

  userName :string = '';

  getUserName(name:string){
    return `hello ${name}`;
  }

  getData(name:string){
    this.userName = name;
  }
}
