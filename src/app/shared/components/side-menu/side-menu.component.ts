import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '@app/app.routes';


@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  private menuItems = signal<Routes>(routes);

  public menuItemsComputed = computed(
    () => this.menuItems()
      .map(route => route.children ?? [])
      .flat()
      .filter(({ path }) => path !== '')
      .filter(router => !router.path?.includes(':'))

  )
}
