import {Component, Input} from '@angular/core'

@Component({
    selector:"dog-details",
    template:`
        <h2>{{name}} - {{color}}</h2>
        <button class="btn btn-waves" (click)="handleClick()">Bark</button>
    `
})
export class DogDetailsComponent{
    @Input()name:string
    @Input()color:string

    handleClick(){
        console.log("Click")
    }
}