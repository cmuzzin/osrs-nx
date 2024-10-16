import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { OSRSService } from '@myngapp/data-access';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit  {
  title = 'myngapp';

  constructor(private osrsService: OSRSService ) {}

  ngOnInit() {
    this.osrsService.fetchData().subscribe(data => {
      console.log(data);
    })
  }
}
