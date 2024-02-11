
import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <h1
      [class]="classTitleTailwind"
    >
      {{ title }}
    </h1>
  `
})
export class TitleComponent {

  @Input({ required: true })
  public title!: string;

  @Input()
  public classTitleTailwind: string ='text-3xl mb-5 font-semibold';

  // Solo si se coloca como atributo en el elemento sera true !
  @Input({ transform: booleanAttribute })
  public whitShadow: boolean = false;
}
