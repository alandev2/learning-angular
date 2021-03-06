import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  cursos?: string[];
  constructor(private _cursosServices: CursosService){ }

  ngOnInit(){
    this.cursos = this._cursosServices.getCursos();
    CursosService.onChange.subscribe((cursos: string[]) => this.cursos = cursos);
  }

  onDelete(name: string){ this._cursosServices.remCurso(name); }
}
