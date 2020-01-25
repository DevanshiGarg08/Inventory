import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  constructor() { }
    @Output() generated = new EventEmitter();

    enterfi :string;
    entersi :string;
    enterfp :number;
    entersp :number;
    
 
  onGenerate(){
   
       let post = {first:this.enterfi, second:this.entersi, fp:this.enterfp, sp:this.entersp, total:+this.enterfp + + this.entersp};
       console.log(post);
       this.generated.emit(post);
  }
  

  ngOnInit() {
  }

}
