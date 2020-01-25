
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }
 @Input() out=[];
 @Input() total;
 total1:number;
 tax:number;
 
 amountpay:number;
 a:boolean=false;
 checkout()
{ this.a=true;
 this.total1=this.total;
 this.tax=this.total*0.20;
 
 console.log(this.tax)
 this.amountpay=this.total+this.tax;
}
  ngOnInit() {
  }

}
