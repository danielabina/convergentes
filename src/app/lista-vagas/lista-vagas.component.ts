import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-vagas',
  templateUrl: './lista-vagas.component.html',
  styleUrls: ['./lista-vagas.component.css']
})
export class ListaVagasComponent implements OnInit {

  public vagas = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.buscarVagas();
  }

  buscarVagas() {
    this.vagas = [
      { id: 1, nome: 'teste 1', descricao: 'teste 1', salario: 2500 },
      { id: 2, nome: 'teste 2', descricao: 'teste 2', salario: 3000 },
      { id: 3, nome: 'teste 3', descricao: 'teste 3', salario: 3500 }
    ];
  }

  candidatar(id) {
    console.log(id);
  }
  
  cadastrar() {
    this.router.navigate(['/cadastro-candidato']);
  }
}
