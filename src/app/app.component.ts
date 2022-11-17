import { Component, inject, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  winrate = 0;
  loseRate = 0;
  name = 'Angular ' + VERSION.major;
  form = new FormGroup({
    totalGame: new FormControl(null, [Validators.required]),
    winTime: new FormControl(null, [Validators.required]),
  });

  primengConfig = inject(PrimeNGConfig);

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  calculateWinrate() {
    if (this.form.valid) {
      this.winrate =
        (this.form.controls.winTime.value * 100) /
        this.form.controls.totalGame.value;

      this.loseRate = 100 - this.winrate;
    } else {
      this.form.markAllAsTouched();
    }
  }
}
