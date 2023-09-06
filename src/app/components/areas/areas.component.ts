import { AreaService } from './../../area.service';
import { Component } from '@angular/core';
import { Area } from 'src/app/area.model';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css'],
})
export class AreasComponent {
  Areas: Area[];

  constructor(private areaService: AreaService) {}

  ngOnInit(): void {
    this.areaService.getAreas().subscribe((res) => {
      this.Areas = res.map((el) => {
        return {
          id: el.payload.doc.id,
          ...(el.payload.doc.data() as Area),
        };
      });
    });
  }

  deleteArea = (area) => this.areaService.deleteArea(area);
}
