import {Component, Input, Output,EventEmitter} from '@angular/core'

@Component({
    selector:"dog-details",
    template:`
        <h2>{{name}} - {{color}}</h2>
        <input (change)="handleNameChange($event)" type="text" />
        <button class="btn btn-waves" (click)="handleClick()">Bark</button>
    `
})
export class DogDetailsComponent{
    @Input()name:string
    @Input()color:string

    @Output() bark = new EventEmitter<{}>()
    @Output() nameChange = new EventEmitter<string>()
    handleClick(){
        console.log("Click")
        this.bark.emit({})
    }
    handleNameChange(e){
        console.log(e.target.value)
        this.nameChange.emit(e.target.value)
    }
}