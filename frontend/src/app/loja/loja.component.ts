import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';

import { Produtos } from 'src/model/produtos';
import { ProdutosService } from 'src/service/produtos.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css'],
  animations: [
    trigger('animate', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial=>final', animate('500ms ease-in')),
    ]),
  ]
})
export class LojaComponent implements OnInit {
  p: number = 1;
  listaProdutos: Produtos[];
  precoParcelado: number[] = [];
  currentState: string = 'initial';
  plataforma: string;
  plataformaTitle: string;

  constructor(private produtosService: ProdutosService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getProdutos();

    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getProdutos();
    })
  }

  getProdutos() {
    this.plataforma = this.activatedRoute.snapshot.params['plataforma'];

    this.produtosService.getProductsByPlataforma(this.plataforma).subscribe(res => {

      for (let i = 0; i < res.length; i++) {
        res[i].imagem = this.sanitizer.bypassSecurityTrustUrl(res[i].imagem);
      }

      this.listaProdutos = res;
      this.plataformaTitle = res[0].plataforma;

      for (let i = 0; i < this.listaProdutos.length; i++) {
        this.precoParcelado.push(this.listaProdutos[i].preco / 3);
      }

      if (this.currentState = "initial") {
        setTimeout(() => {
          this.currentState = 'final';
        }, 500);
      }
    }, err => {
      console.log(err);
    });
  }
}
