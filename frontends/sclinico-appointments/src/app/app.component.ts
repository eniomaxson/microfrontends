import { Component, OnInit } from '@angular/core';
import { getGivenName } from '@spms/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sclinico-appointments';
  public givenName: string = getGivenName();

  ngOnInit(): void {}
}
