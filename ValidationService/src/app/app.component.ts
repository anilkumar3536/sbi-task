import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ValidationService';

  carpetForm! : FormGroup
  isfetchdata : any;
  carpetAreaUnitMap : any;

  areaUnitList = [
    { carpetAreaUnitId: 1, carpetAreaUnitDesc: "Square metre" },
    { carpetAreaUnitId: 2, carpetAreaUnitDesc: "Square feet" },
    { carpetAreaUnitId: 3, carpetAreaUnitDesc: "Acre" },
    { carpetAreaUnitId: 4, carpetAreaUnitDesc: "Hectare" },
    { carpetAreaUnitId: 5, carpetAreaUnitDesc: "Gunta" }
  ];

  fetchdata = [
    {
      carpetArea: "362",
      carpetAreaUnit: 1,
      carpetAreaUnitMap: [
        { carpetAreaUnitId: 1, minCarpetAreaAsPerUnit: 60.001, maxCarpetAreaAsPerUnit: 120 },
        { carpetAreaUnitId: 2, minCarpetAreaAsPerUnit: 645.835, maxCarpetAreaAsPerUnit: 1291.67 },
        { carpetAreaUnitId: 3, minCarpetAreaAsPerUnit: 0.016, maxCarpetAreaAsPerUnit: 0.03 },
        { carpetAreaUnitId: 4, minCarpetAreaAsPerUnit: 0.007, maxCarpetAreaAsPerUnit: 0.012 },
        { carpetAreaUnitId: 5, minCarpetAreaAsPerUnit: 0.594, maxCarpetAreaAsPerUnit: 1.186 }
      ]
    }
  ];

  constructor(){}

  ngOnInit(){
    this.carpetForm = new FormGroup({
      carpetarea:new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*\.?[0-9]+$/)]),
      carpetareaunit : new FormControl()
    })
    this.loadData()

  }

  loadData(){
    this.isfetchdata = this.fetchdata;
    console.log(this.isfetchdata)
    this.carpetForm.patchValue({
      carpetarea : this.isfetchdata[0].carpetArea,
      carpetareaunit : this.isfetchdata[0].carpetAreaUnit
    })
  }

}
