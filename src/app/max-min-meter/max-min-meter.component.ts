import { Component ,OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.scss']
})
export class MaxMinMeterComponent {
 @Input() minLaBel = 'MinLaBel';
 @Input() maxLaBel = 'MaxLaBel';


 @Output() minChange = new EventEmitter();
 @Output() maxChange = new EventEmitter();

doMinChange(value : string){
 this.minChange.emit(value);
}

doMaxChange(value: string){
  this.maxChange.emit(value);
}

}
