import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoaderSlowComponent } from '@shared/components/heavy-loaders/heavy-loader-slow.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  standalone: true,
  imports: [HeavyLoaderSlowComponent, CommonModule, TitleComponent ],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}
