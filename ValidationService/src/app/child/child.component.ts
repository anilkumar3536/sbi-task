import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
@Input() isBussiness:any
ngOnInit(){
//console.log("test", this.isBussiness)
}
ngOnChanges(){
  console.log("test", this.isBussiness)
}

}
