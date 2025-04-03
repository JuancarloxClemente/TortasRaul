import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IoniconsService } from './service/ionicons.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private IoniconsService: IoniconsService = inject (IoniconsService);
  constructor() {
    this.IoniconsService.loadAllIcons();
    // this.IoniconsService.loadAllIcons();
  }
}
