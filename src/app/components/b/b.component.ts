import { Component, OnInit } from '@angular/core';
import { ConvertService } from 'src/convert.service';


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  cel: number = 0;
  fahr: number = 0;



  constructor(private convertService: ConvertService) { }

  ngOnInit(): void {
  }

  celToFahr(){
    this.fahr = this.convertService.celToFahr(this.cel);
  }

  fahrToCel(){ 
    this.cel = this.convertService.fahrToCel(this.fahr);
  }


}
