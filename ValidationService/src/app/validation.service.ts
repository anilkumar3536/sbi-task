import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static carpetAreaValidation(min:any, max:any) : ValidatorFn{
    return (control:AbstractControl) => {
      let carpetArea = Number(control.value)

      let minValue=min;
      let maxValue=max;
      console.log(carpetArea,minValue,maxValue)
      
      if(carpetArea<minValue){
        return {carpetAreaValidation: "Value is less than Minimum value"};
      }else if(carpetArea>maxValue){
        return {carpetAreaValidation: "Value is greater than Maximaum value"};
      }
      return null;
    }
  }
}
