import { value } from './../../../shared/data/dropdowns';
import { Component, OnInit, ViewChild } from '@angular/core';
import Stepper from 'bs-stepper';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-script',
  templateUrl: './add-script.component.html',
  styleUrls: ['./add-script.component.scss']
})
export class AddScriptComponent implements OnInit {
  fileToUpload;
  @ViewChild('f', { static: false }) floatingLabelForm: NgForm;
  @ViewChild('vform', { static: false }) validationForm: FormGroup;
  regularForm: FormGroup;

  selectedLanguage;
  selectedgenra;
  selectedSubgenra;
  selectedeating;
  selectscript
  showscriptLink = false
  languages = [
    { id: 1, name: 'Arabic' },
    { id: 2, name: 'English' },
    { id: 4, name: 'French' },
    { id: 5, name: 'Russian' },
    { id: 1, name: 'Japanese' },
    { id: 2, name: 'Korean' },
    { id: 4, name: 'Chinese' },

  ];


   genra=[
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Fantasy' },
    { id: 5, name: 'Horror' },
    { id: 6, name: 'Mystery' },
    { id: 7, name: 'Historical' },
    { id: 8, name: 'Religious' }
   ]

   subgenra=[

    { id: 1, name: 'War and military action' },
    { id: 1, name: 'spy and espionage action' },
    { id: 1, name: 'Martial arts action' },
    { id: 1, name: 'Western shoot Em up action' },
    { id: 1, name: 'Action hybrid genras' },

   ]
   scripts=[
    { id: 1, name: 'script1' },
    { id: 1, name: 'script2' },
   ]


   rating = [
    { id: 1, name: '18+' },
    { id: 1, name: '16+' },
    { id: 1, name: '12+' },
    { id: 1, name: 'Family Guidance' },
   ]
  acceptCondtion=false


  constructor(private router :Router) { }
  private stepper: Stepper;



  next() {
    this.stepper.next();
  }

  onSubmit() {
    // return false;
    this.router.navigateByUrl('/services/addscript');
    // window.reload
    window.location.reload();

  }

  onReactiveFormSubmit() {
    this.regularForm.reset();
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: true,
      animation: true,
      // orientation: 'vertical'
      selectors: {
        steps: '.step',
        trigger: '.step-trigger',
        // class: '.vertical'
        // orientation
      }
    })

    this.regularForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      source: new FormControl(null, [Validators.required]),
      script: new FormControl(null, [Validators.required]),
      subGenra: new FormControl(null, [Validators.required]),
      movie: new FormControl(null, [Validators.required]),
      genra: new FormControl(null, [Validators.required]),
      language: new FormControl(null, [Validators.required]),
      // location: new FormControl(null, [Validators.required]),
      summery: new FormControl(null, [Validators.required]),
      formcheck4: new FormControl('Option one is this' ,[Validators.required] ),
      formcheck1: new FormControl('Option one is this' ,[Validators.required] ),
      formcheck2: new FormControl('Option one is this' ,[Validators.required] ),
      formcheck3: new FormControl('Option one is this' ,[Validators.required] ),
      // form2check4: new FormControl('Option one is this' ,[Validators.required] ),
      // form2check5: new FormControl('Option one is this' ,[Validators.required] ),
      // form2check6: new FormControl('Option one is this' ,[Validators.required] ),
      // form3check1: new FormControl('Option one is this' ,[Validators.required] ),
      // form3check2: new FormControl('Option one is this' ,[Validators.required] ),
      
    });
  }

  handelchange(event) {
    console.log("change", event.target.value)
    if (event.target.value == 'Yes') {
      this.acceptCondtion = true
      document.getElementById('accept').classList.add('acceptcon');
      document.getElementById('icon').classList.add('checkicon');
      document.getElementById('btnstep3').classList.add('greenbtn');
      // document.getElementById('btn').removeAttribute('disabled')

    }
    else {
      this.acceptCondtion = false
      document.getElementById('accept').classList.remove('acceptcon');
      document.getElementById('icon').classList.remove('checkicon');
      document.getElementById('btnstep3').classList.remove('greenbtn');
      // document.getElementById('btn').setAttribute('disabled', 'disabled')

    }
  }

  handlechangeScript(event)
  {
    if (event.target.value == 'No') {
      this.showscriptLink = true
    }
else
{
  this.showscriptLink = false

}

  }

  onFileChanged(files: FileList) {
    this.fileToUpload = <File>files[files.length - 1];
  }
  uploadfile() {
    document.getElementById('Inputupload').click();

  }
  get f() {
    return this.regularForm.controls;
  }
}