import { Component, OnInit } from '@angular/core';

import { CardsHealthcheckService } from '../../_services/cards-healthcheck.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit {

  id: any;
    form: FormGroup;
    errorMessage;

    constructor(
      public cardsHealthcheckService: CardsHealthcheckService,
      private router: Router,
      private fb: FormBuilder,
      private route: ActivatedRoute
    ) {
        this.createForm();
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        if(this.id){
            this.cardsHealthcheckService.find(this.id).subscribe(x => this.form.patchValue(x));
        }


    }

    createForm() {
        this.form = this.fb.group({
        region: ['', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
        ] ],
        apiName: ['', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
        ] ],
        apiServiceURL: ['', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
        ] ],
        environment: ['', [Validators.required] ],
        description: ['', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
        ] ],

        });
    }

    onSubmit(){
        var response = this.id ? this.cardsHealthcheckService.update(this.id, this.form.value) : this.cardsHealthcheckService.create(this.form.value);

        response.subscribe(
        data => {
            console.log('Product created / updated successfully!');
            this.router.navigateByUrl('cards-healthcheck/list');
        }
        ,
        err => {
            this.errorMessage = err.error.message;
        }
        );
    }
}
