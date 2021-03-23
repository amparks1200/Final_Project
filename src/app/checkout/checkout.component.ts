import { Component, OnInit } from '@angular/core';
import { UsaServiceService } from '../usa-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  //verify CC number
// document.getElementById("checkout-submit").addEventListener("click", validateCC);
public ccNumber: string = "";
public ccValid: boolean = false;

validateCC(){
  // event.preventDefault();
  // const number = document.getElementById("ccNumber").value
  if (this.isCCValid()){
    this.ccValid = true;
    console.log (this.ccNumber, this.ccValid)
    this.router.navigate(["/Receipt"])
    // return this.ccValid 
  }else{
    alert("Credit Card number is not valid. Please enter a valid credit number.")
  }
}

isCCValid() {
  let number = String(this.ccNumber);

  let sum = parseInt(number.charAt(number.length - 1));

  for (let i = 0; i < number.length - 1; i++) {
      let value = parseInt(number.charAt(i));

      if (i % 2 === 0) {
          value *= 2;
      }

      if (value > 9) {
          value -= 9;
      }

      sum += value;
  }

  return sum % 10 === 0;
}

  constructor(public service: UsaServiceService, public router: Router) { }

  ngOnInit(): void {
  }

}
