import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loader-fast',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <section [ngClass]="['w-full', cssClass]" >
      <!-- Son como children o slots del componente -->
      <ng-content />
    </section>
  `,
})
export class HeavyLoaderFastComponent {

  @Input({ required: true })
  public cssClass!: string;

  constructor() {
    console.log('Heavy loader created');
  }
}
