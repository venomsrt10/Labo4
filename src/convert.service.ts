import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() { }


  kmToMi(km: number): number {
    let mi = Math.fround((km*0.62137));
    return mi;
  }
    
  miToKm(mi: number): number { 
    let km = Math.fround((mi/0.62137));
    return km;
  }

  celToFahr(celcius: number): number {
    let fahr = Math.round(((celcius*1.8)+32));
    return fahr;
  }

  fahrToCel(fahr: number): number {
    let cel = Math.round(((fahr-32)*0.5556));
    return cel;
  }

  

}
