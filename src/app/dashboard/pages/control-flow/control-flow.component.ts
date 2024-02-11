import { Component, effect, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from '@shared/components/title/title.component';

type Grade = 'A' | 'B' | 'C';
enum GradeEnum {
  A = 'A',
  B = 'B',
  C = 'C',
}

@Component({
  standalone: true,
  imports: [ ReactiveFormsModule, TitleComponent ],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public gradeChoose = new FormControl<Grade>('A');
  public stateGrade = new FormControl<Grade>(GradeEnum.A);
  public signalStateGrade = signal<Grade>(this.stateGrade.value ?? 'A');
  public grade = signal<Grade | string>(this.gradeChoose.value ?? 'A');

  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Astro', 'Qwik', 'React']);
  public frameworks2 = signal([]);



  public gradeSelectEffect = effect(() => {
    console.log(this.signalStateGrade())
  });



  public toggleContent() {
    this.showContent.update(value => !value);
  }

  public selectChoise(value: Grade | string) {

    this.grade.set(value.toLocaleUpperCase());
  }

}
