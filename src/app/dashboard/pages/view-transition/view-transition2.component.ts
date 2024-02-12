import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 2" />
    <section class="flex justify-end gap-2">
      <img
        srcset="https://i.pinimg.com/236x/b6/f3/56/b6f3562bff69b20bca612ae95919b7bf.jpg"
        alt="Naruto"
        class="rounded shadow-lg shadow-amber-200 hover:shadow-amber-400 hover:shadow-2xl transition-all duration-200 ease-in-out"
        width="200"
        height="300"
        style="view-transition-name: hero1"
        lazy="true"
      >
      <div
        style="view-transition-name: box2"
        class="bg-amber-500 w-80 h-80 rounded-full fixed bottom-2 right-10"
      ></div>
    </section>
  `
})
export default class ViewTransitionComponent {

}
