import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/area.service';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.css'],
})
export class CreateAreaComponent {
  public areaForm: FormGroup;

  constructor(
    public areaService: AreaService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.areaForm = this.formBuilder.group({
      codigo: [undefined],
      name: [''],
      lider: [undefined],
      state: [''],
    });
  }

  onSubmit() {
    this.areaService.createArea(this.areaForm.value);
    this.router.navigate(['areas']);
  }
}
