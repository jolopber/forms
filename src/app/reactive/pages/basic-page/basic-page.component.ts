import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html' ,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent { }
