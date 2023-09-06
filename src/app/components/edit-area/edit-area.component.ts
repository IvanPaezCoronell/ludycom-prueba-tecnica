import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AreaService } from './../../area.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css'],
})
export class EditAreaComponent {
  public editForm: FormGroup;
  areaRef: any;

  constructor(
    public areaService: AreaService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      codigo: [undefined],
      name: [''],
      lider: [undefined],
      state: [''],
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.areaService.getAreaById(id).subscribe((res) => {
      this.areaRef = res;
      this.editForm = this.formBuilder.group({
        codigo: [this.areaRef.codigo],
        name: [this.areaRef.name],
        lider: [this.areaRef.lider],
        state: [this.areaRef.state],
      });
    });
  }

  onSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.areaService.updateArea(this.editForm.value, id);
    this.router.navigate(['areas']);
  }
}
