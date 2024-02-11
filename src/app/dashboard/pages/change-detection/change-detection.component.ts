import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  // Cambiando el sincorinia de los cambios de Zonejs
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />
    <pre>
      {{ frameworkAsSignal() | json }}
    </pre>
    <pre>
      {{ frameworkAsProperty | json }}
    </pre>
  `,
})
export default class ChangeDetectionComponent {


  // Pasando el valor del signal con el computed
  public currentFramework = computed(() => `Change Detention - ${this.frameworkAsSignal().name}`);


  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 20
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {

    setTimeout(() => {
      // No lo toma si el checkDetention está en OnPush
      // this.frameworkAsProperty.name = 'Astro'

      // Funciona con cualquier hangeDetention, pero mejora si es una señal y está en OnPush
      this.frameworkAsSignal.update(currentValue => ({
        ...currentValue,
        name: 'Astro'
      }));

    }, 3000);

    setTimeout(() => {
      this.frameworkAsSignal.update(currentValue => ({
        ...currentValue,
        name: 'Svelte'
      }));
    }, 5000 );

  }


}
