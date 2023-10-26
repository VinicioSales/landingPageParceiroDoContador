import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { filter, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InitializationService {

  constructor() { }

  private componentsInitialized = new Subject<number>();
  private totalComponents = 3; // Defina o número total de componentes que você está esperando inicializar

  componentInitialized() {
    this.componentsInitialized.next(1);
  }

  waitForAllComponents() {
    return this.componentsInitialized.pipe(
      take(this.totalComponents),
    );
  }
}
