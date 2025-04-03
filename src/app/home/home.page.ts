import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent , IonIcon} from '@ionic/angular/standalone';
import { InteractionService } from '../service/interaction.service';
import { FirestoreService } from '../firebase/firestore.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonIcon,IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  private firestoreService: FirestoreService = inject (FirestoreService);
  private InteractionService: InteractionService = inject (InteractionService);

  constructor() {
    this.test()
    this.testLectura();
  }

  async test() {
    console.log('test()');
    await this.firestoreService.createDocument('test', {hola:'nada'})
}

testLectura() {
  this.firestoreService.getDocumentsChanges('test').subscribe(res => {
    console.log('testLectura ->', res);
        });
    }
  }

interface ProductoI{
  name: string;
  precio : number;
}
