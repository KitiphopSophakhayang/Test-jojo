import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 appMinLabel = 'myAppMinLabel';
 appMaxLabel = 'myAppMaxLabel';
 sqaureHeight = 100;
 sqaureWidht = 250;

 appCounter = 20;  
  
products = [{
  code: 500,
  name: 'Car',
  category: 'tttt',
  quantity: 'eiei'

}];
 activate: boolean = false;

value: string = "Hello eiei";

customerList: string[] = ['customer1','customer2','customer3','customer4']

  // title = 'my-new-project';
  // jojo = 'GuJoe';

  // GuJoeConsole(){
  //   console.log('Hello Joe:',this.jojo);
  // }

  // ChangeGuJoe(name: string){
  //   this.jojo = name;
  // }$

  // value = 0;

  // calBuffet(value: string){
  //   const price = Number(value);
  //   this.value =(price*3)/4
  // }
  testClick(){
    console.log('test')
  }

  testNumberChange(value: number){
    console.log('test01 : ' ,value);
  }

doAppMaxChange(value: number){
  console.log('TestMax :' , value);
}

doAppMinChange(value : number){
  console.log('TestttMin : ' , value);
}

pushCustomer(){
  this.customerList.push('customer' + (this.customerList.length+1));
} 

unshiftCustomer(){
  this.customerList.unshift('customer'+(this.customerList.length+1));
}

removecutomer(index: number){
  this.customerList.splice(index , 1)
}

}
