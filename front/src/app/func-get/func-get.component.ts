import { Component, OnInit } from '@angular/core';
import Funcionario from '../Funcionario';
import { FuncionarioService } from '../funcionario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-func-get',
  templateUrl: './func-get.component.html',
  styleUrls: ['./func-get.component.css']
})
export class FuncGetComponent implements OnInit {

  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarioService
      .getFuncionarios()
      .subscribe((data: Funcionario[]) => {
        this.funcionarios = data;
      });
  }

}
