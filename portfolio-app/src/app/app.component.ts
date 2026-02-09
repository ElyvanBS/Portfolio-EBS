import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreComponent } from "./component/sobre/sobre.component";
import { FormacaoComponent } from "./component/formacao/formacao.component";
import { ProjetoComponent } from "./component/projeto/projeto.component";
import { ContatoComponent } from "./component/contato/contato.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, SobreComponent, FormacaoComponent, ProjetoComponent, ContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';

   mostrarSup = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    this.mostrarSup = scrollY > 200;
  }
}
