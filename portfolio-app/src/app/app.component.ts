import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreComponent } from "./component/sobre/sobre.component";
import { FormacaoComponent } from "./component/formacao/formacao.component";
import { ProjetoComponent } from "./component/projeto/projeto.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SobreComponent, FormacaoComponent, ProjetoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
