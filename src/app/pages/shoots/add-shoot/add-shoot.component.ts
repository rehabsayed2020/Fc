import { value } from './../../../shared/data/dropdowns';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import Stepper from 'bs-stepper';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { Router } from '@angular/router';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-add-shoot',
  templateUrl: './add-shoot.component.html',
  styleUrls: ['./add-shoot.component.scss']
})
export class AddShootComponent implements OnInit {
  fileToUpload;
  @ViewChild('f', { static: false }) floatingLabelForm: NgForm;
  @ViewChild('vform', { static: false }) validationForm: FormGroup;
  regularForm: FormGroup;
  selectedLanguage;
  selectedgenra;
  selectedSubgenra;
  selectedeating;
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
   locations=[
    { id: 1, name: 'Adventure' },
    { id: 1, name: 'action' },
   ]


   rating = [
    { id: 1, name: '18+' },
    { id: 1, name: '16+' },
    { id: 1, name: '12+' },
    { id: 1, name: 'Family Guidance' },
   ]
  
   acceptLaws=false
   check = false

   showlist=false
   showMap = false
   iframeUrl:SafeResourceUrl;

   url='https://www.google.com/maps?q=Riyadh Saudi Arabia&output=embed'
  // url='https://www.google.com/maps?q=Ash Shamli Saudi Arabia&output=embed'
  // url='https://www.google.com/maps?q=shaqra Saudi Arabia&output=embed'

    // url='https://www.google.com/maps?q= Hoft Al Batin Saudi Arabia&output=embed'

  



  //  url='!1m18!1m12!1m3!1d387144.0075834208!2d-73.97800349999999!3d40.7056308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1394298866288'






  acceptCondtion = false;
  selectedLocation
  // private _sanitizer: any;
  // f2check1=false


  constructor(private router: Router , private _sanitizer : DomSanitizer) { }


  private stepper: Stepper;



  next() {
    this.stepper.next();
  }

  createURL() {
    //Create your URL
    // return your URL
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

    this.iframeUrl=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.0075834208!2d-73.97800349999999!3d40.7056308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1394298866288')


    this.regularForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      subGenra: new FormControl(null, [Validators.required]),
      movie: new FormControl(null, [Validators.required]),
      genra: new FormControl(null, [Validators.required]),
      language: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      textArea: new FormControl(null, [Validators.required]),
      form1check: new FormControl('Option one is this' ,[Validators.required] ),
      form2check1: new FormControl('Option one is this' ,[Validators.required] ),
      form2check2: new FormControl('Option one is this' ,[Validators.required] ),
      form2check3: new FormControl('Option one is this' ,[Validators.required] ),
      form2check4: new FormControl('Option one is this' ,[Validators.required] ),
      form2check5: new FormControl('Option one is this' ,[Validators.required] ),
      form2check6: new FormControl('Option one is this' ,[Validators.required] ),
      form3check1: new FormControl('Option one is this' ,[Validators.required] ),
      form3check2: new FormControl('Option one is this' ,[Validators.required] ),
      
    });


  }

  handelchange(event) {
    console.log("change", event.target.value)
    this.check = true;
    // event.target.value == 'Yes'? this.acceptLaws = true: this.acceptLaws = false;

    if(event.target.value == 'Yes')
    {
      this.acceptLaws = true;
      document.getElementById('linlaw').style.height='138px'

    }
   else
   {
    this.acceptLaws = false;
    document.getElementById('linlaw').style.height='273px'
   }

  
   
  }


  handelchange2(event)
  {
    console.log("change", event.target.value)
    // event.target.value == 'Yes'? this.acceptLaws = true: this.acceptLaws = false;

    if(event.target.value == 'Yes')
    {
      this.showlist = true;

    }
   else
   {
    this.showlist = false;
   }


  }

  handelchange3(event)
  {
    let value = event.target.value
    switch(value) {
      case 'shamli':
        this.url='https://www.google.com/maps?q=Ash Shamli Saudi Arabia&output=embed'    
        break;    
      case 'shaqra':
        this.url='https://www.google.com/maps?q=shaqra Saudi Arabia&output=embed'        
        break;
      case 'Hoft':
        this.url='https://www.google.com/maps?q=Hoft Al Batin Saudi Arabia&output=embed'       
        break;
      default:
        this.url='https://www.google.com/maps?q=Riyadh Saudi Arabia&output=embed'     
    }


  }

  selectlocation()
  {
    this.showMap= true;
    document.getElementById('finalsubmit').style.marginTop='15%'
  }

 




  get f() {
    return this.regularForm.controls;
  }


}