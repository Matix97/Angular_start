import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mój początek';
  catGif = "https://miastodzieci.pl/wp-content/uploads/2010/06/puppies-2243686_1920.jpg";
  catGifAlt = "Image with cat";
  dog1 = {name:"Rexio", color:"red"};
  dog2 = "Fado";

  doBark(name:string)
  {
    console.log(`${name} has barked.`)
  }
  changeDog1(name)
  {
    this.dog1.name=name;
  }
}
