import { Component, OnInit } from '@angular/core';
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
  isBussinessMessage="hello";
  iscarpetAreaUnitId:any;
  areaUnitList = [
    { carpetAreaUnitId: 1, carpetAreaUnitDesc: "Square metre" },
    { carpetAreaUnitId: 2, carpetAreaUnitDesc: "Square feet" },
    { carpetAreaUnitId: 3, carpetAreaUnitDesc: "Acre" },
    { carpetAreaUnitId: 4, carpetAreaUnitDesc: "Hectare" },
    { carpetAreaUnitId: 5, carpetAreaUnitDesc: "Gunta" }
  ];

  fetchdata = [
    {
      carpetArea: 62,
      carpetAreaUnitId:null,
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
   setTimeout(() => {
      this.isBussinessMessage = 'Message updated after 2 seconds!';
      // Angular might not detect this change immediately without additional steps
    }, 1000);

    this.carpetForm = new FormGroup({
      carpetarea:new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*\.?[0-9]+$/)]),
      carpetareaunit : new FormControl()
    })
    this.loadData();
    console.log("iscarpetAreaUnitId2",this.iscarpetAreaUnitId)
    if(this.iscarpetAreaUnitId != null){
this.carpetForm.controls['carpetarea'].valueChanges.subscribe((result)=>{
      this.carpetAreaUnitMap=this.isfetchdata[0].carpetAreaUnitMap.filter((res:any)=>res.carpetAreaUnitId==this.carpetForm.controls['carpetareaunit'].value)
      this.carpetForm.controls['carpetarea'].setValidators([ValidationService.carpetAreaValidation(this.carpetAreaUnitMap[0]?.minCarpetAreaAsPerUnit,this.carpetAreaUnitMap[0]?.maxCarpetAreaAsPerUnit)])
    })
    this.carpetForm.controls['carpetareaunit'].valueChanges.subscribe((result)=>{
      this.carpetAreaUnitMap=this.isfetchdata[0].carpetAreaUnitMap.filter((res:any)=>res.carpetAreaUnitId==result)
      this.carpetForm.controls['carpetarea'].setValidators([ValidationService.carpetAreaValidation(this.carpetAreaUnitMap[0]?.minCarpetAreaAsPerUnit,this.carpetAreaUnitMap[0]?.maxCarpetAreaAsPerUnit)])
      this.carpetForm.controls['carpetarea'].updateValueAndValidity();
    })
    }
    
   

  }

  loadData(){
    this.isfetchdata = this.fetchdata;
    this.iscarpetAreaUnitId=this.isfetchdata[0].carpetAreaUnitId,
    console.log("iscarpetAreaUnitId",this.iscarpetAreaUnitId)
    this.carpetForm.patchValue({
      carpetarea : this.isfetchdata[0].carpetArea,
      carpetareaunit : this.isfetchdata[0].carpetAreaUnit
    })
    if(this.iscarpetAreaUnitId != null){
      this.carpetAreaUnitMap=this.isfetchdata[0].carpetAreaUnitMap.filter((res:any)=>res.carpetAreaUnitId === this.isfetchdata[0].carpetAreaUnit)
    this.carpetForm.controls['carpetarea'].setValidators([ValidationService.carpetAreaValidation(this.carpetAreaUnitMap[0]?.minCarpetAreaAsPerUnit,this.carpetAreaUnitMap[0]?.maxCarpetAreaAsPerUnit)])
    this.carpetForm.controls['carpetarea'].updateValueAndValidity();
    this.carpetForm.controls['carpetarea'].markAsTouched()
    }
    
  }

}
