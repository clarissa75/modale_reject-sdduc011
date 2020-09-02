import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {

currentDate = new Date().toLocaleDateString();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal = () => {
    this.activeModal.close();
  }
}
