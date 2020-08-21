import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISpDto } from 'src/app/models/sp.model';
import { SpService } from 'src/app/services/sp.service';

@Component({
  selector: 'app-sp-element',
  templateUrl: './sp-element.component.html',
  styleUrls: ['./sp-element.component.scss']
})
export class SpElementComponent implements OnInit {

  @Input() data: ISpDto
  @Output() deleteSp: EventEmitter<string> = new EventEmitter<string>()

  constructor(private spService: SpService) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  remove(){
    this.deleteSp.emit(this.data.id)
  }

}
