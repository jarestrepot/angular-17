import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoaderFastComponent } from '@shared/components/heavy-loaders/heavy-loader-fast.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, HeavyLoaderFastComponent, CommonModule ],
  templateUrl: './defet-options.component.html',
})
export default class DefetOptionsComponent {

}
