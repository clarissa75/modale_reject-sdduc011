import { Component } from '@angular/core';
import { ModaleComponent } from './modale/modale.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private modalService: NgbModal){}
  open = () => {
    const modal = this.modalService.open(ModaleComponent, {size: 'xl'});

}

}
