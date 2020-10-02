import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoreService } from 'src/app/services/core.service';
import { IComponentSourseInf, ISpDto } from 'src/app/models/sp.model';
import { SpService } from 'src/app/services/sp.service';
import { Router } from '@angular/router';

// function IdCompValidator(control: FormControl){

//   let injector = Injector.create({
//     providers:[{
//       provide: SpService,
//       useClass: SpService
//     }]
//   });
//   let service = injector.get(SpService);
//   let id =  control.value;
//   if(id != '') {
//     service.getAllSp().subscribe(res=>{
//       res.filter(item=>{
//         if(item.idCompAsSourceInf == +id){
//           return {
//             sourseInf: false
//           }
//         }
//       });
//     })
//   }
//   return null;
// }

@Component({
  selector: 'app-create-sp',
  templateUrl: './create-sp.component.html',
  styleUrls: ['./create-sp.component.scss']
})
export class CreateSpComponent implements OnInit {

  constructor(
    private core: CoreService,
    private spService: SpService,
    private router: Router
  ) { }

  form: FormGroup
  arr: IComponentSourseInf[] = []

  levels = [
    {
      id: 'emp_a3',
      name: 'ЕМП АСОУП-3',
      road: false
    },
    {
      id: 'skd_a3',
      name: 'СКД АСОУП-3',
      road: true
    },
    {
      id: '2ks',
      name: 'АСОУП - 2Кс',
      road: false
    },
    {
      id: 'skd_a2',
      name: 'СКД АСОУП-2',
      road: true
    }
  ]

  funcDorVisiable: boolean;
  loading: boolean = false;

  ngOnInit(): void {
    this.core.getCompSourseInf().subscribe(data=>{
      this.arr = data.filter(el=>{
        if(el.type == 'sp'){
          return el
        }
      })
    },
    err=>{
      console.log(err.error.message)
    })
    this.form = new FormGroup({
      idCompAsSourceInf: new FormControl('', [Validators.required]),
      techName: new FormControl('', [Validators.required]),
      description: new FormControl('', [ Validators.maxLength(255), Validators.minLength(10), Validators.required]),
      level: new FormControl('', [Validators.required]),
      funcDor: new FormControl([],[])
    })
    this.funcDorVisiable = false;
  }

  submitForm(){
    if(this.form.valid){
      this.loading = true;
      setTimeout(()=>{
        const sp = this.form.value
        this.spService.postSp(sp).subscribe(
          response => {
            console.log(response)
            this.router.navigateByUrl('/')
          },
          err=>{
            console.log(err)
            alert(err.error.message)
            this.loading = false;
          }
        )
      }, 1500);
    }
  }

  checkIdCompAsSourceInf(id: string){

  }



  // end of class
}
