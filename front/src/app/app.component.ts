import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationCancel,
          NavigationEnd,
          NavigationError,
          NavigationStart,
          Event,
          Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'front';

  constructor(private loadingBarService: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  /**
   * @param event Método responsável por lidar com as ações do 'loading Bar Progress' da Navegação.
   */
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBarService.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBarService.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBarService.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBarService.stop();
    }
  }
}

