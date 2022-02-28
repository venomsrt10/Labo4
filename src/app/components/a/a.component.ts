import { Component, OnInit } from '@angular/core';
import { ConvertService } from 'src/convert.service';


@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  km: number = 0;
  mi: number = 0;


  constructor(private convertService: ConvertService) { }

  ngOnInit(): void {
  }


  kmToMi(){
    this.mi = this.convertService.kmToMi(this.km);
  }

  miToKm(){ 
    this.km = this.convertService.miToKm(this.mi);
  }


}



