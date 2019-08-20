import {Component, Input, Output,EventEmitter} from '@angular/core'

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

    @Output() bark = new EventEmitter<{}>()
    handleClick(){
        console.log("Click")
        this.bark.emit({})
    }
}