import { Component } from '@angular/core';
import { schools } from './sample_schools.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datatables';
  table_data = schools;
  columns = ["affiliation_id", "school_name", "about", "contact_email", "rating", "rated_by"];
}
