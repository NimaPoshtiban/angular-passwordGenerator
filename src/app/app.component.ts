import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lenght = 0;
  includeLetters = false; //use for use letters check box
  includeNumbers =false; //use for use numbers check box
  includeSymbols =false;//use for use symbols check box
  password='';

  onChangeLenght(value:string){
    const parsedValue = parseInt(value)

    if(!isNaN(parsedValue)){
      this.lenght = parsedValue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }


  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = ' !@#$%^&*() ';

    let validChars = '';

    if (this.includeLetters){
      validChars += letters;
    }
    if (this.includeNumbers){
      validChars += numbers;
    }
    if (this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i =0; i<this.lenght; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  
    
  
}
