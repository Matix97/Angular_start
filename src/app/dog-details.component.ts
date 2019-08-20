import {Component, Input} from '@angular/core'

@Component({
    selector:"dog-details",
    template:`
        <h2>{{name}} - {{color}}</h2>
    `
})
export class DogDetailsComponent{
    @Input()name:string
    @Input()color:string
}