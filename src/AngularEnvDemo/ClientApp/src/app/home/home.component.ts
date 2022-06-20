import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public environment = environment.environment;
  public env_demo_key = environment.env_demo_key;
  public env_demo_name = environment.env_demo_name;
  public env_demo_url = environment.env_demo_url;
}
