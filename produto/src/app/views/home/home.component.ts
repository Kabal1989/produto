import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;
  public tituloDestaque!: string;
  public textoDestaque!: string

  classToDiv = {};

  constructor() {

    this.classToDiv = {
      'text-sucess': true
    };
  }
  
  ngOnInit() {
    this.titulo! = 'Bem vindo!';
    this.texto! = 'Hello, World!';
    this.tituloDestaque! = 'Que tal conhecer nossos jogos'
    this.textoDestaque! = 'Game Mania'
  }
  onSubmit(form: NgForm) {
    let dados = `
    Nome: ${form.value.nome}
    Email: ${form.value.email}
    Senha: ${form.value.password}`;

    console.log(dados);
  }

}

