import {Component} from '@angular/core'

@Component({
    selector:"dog-details",
    template:`
        <h2>{{name}}</h2>
    `
})
export class DogDetailsComponent{
    name="Mat"
}