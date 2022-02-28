import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Convertisseur universel';
  tabs : any = [{label: "Conversion KM à Miles", link: "/a"}, {label: "Conversion Celsius à Fahrenheit", link: "/b"}]
}


