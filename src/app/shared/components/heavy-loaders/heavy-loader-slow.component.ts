import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loader-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[800px]', cssClass]">
      <h2>Heavy Loader Slow</h2>
    </section>
  `,
})
export class HeavyLoaderSlowComponent {

  @Input({ required: true })
  cssClass!: String;

  constructor() {
    const start = Date.now();
    // Código bloqueante o simula un componnete muy pesado
    while (Date.now() - start < 3000) { }
    console.log('Cargado')
  }
}
