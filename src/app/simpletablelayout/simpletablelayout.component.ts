import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpletablelayout',
  templateUrl: './simpletablelayout.component.html',
  styleUrls: ['./simpletablelayout.component.css']
})
export class SimpletablelayoutComponent implements OnInit {

  @Input() table_data = [
    {
      "affiliation_id": "2730024",
      "school_name": "Sardar Patel Vidyalaya (SPV), Lodhi Estate",
      "about": "Sardar Patel Vidyalaya is alternatively also known as SPV. The school was established in 1958.",
      "contact_email": "spvdelhi@gmail.com, spv@spvdelhi.org",
      "latitude": "28.5930975",
      "longitude": "77.22352599999999",
      "rating": "4.3",
      "rated_by": "324",
      "classes": "Nursery - 12th",
      "established": "1958",
      "school_medium": "Hindi",
      "campus_area": "18964 Sq. Metres",
      "full_address": "Lodhi Estate, New Delhi, Delhi, India"
    }
  ];

  @Input() columns = ["affiliation_id", "school_name", "about", "contact_email", "rating", "rated_by"];
  @Input() items_per_page = [10, 20, 30, 40, 50, 100];
  @Input() displayed_item_per_page = 10;  
  @Input() filtered_data = []
  @Input() displayed_data = [];

  @Input() columns_style = {
    "rated_by": {
      "type": "button",
      "link": "https://somelink/$value",
      "value": "Open"
    }
  };

  page_index = 1;
  search_text = "";

  total_pages = 0;
  displayed_pages = [];
  constructor() { }

  ngOnInit(): void {
    this.applyFilter();
  }

  applyFilter() {
    this.filtered_data = [];
    for(let i=0; i<this.table_data.length; i++) {
      if (this.table_data[i]["school_name"].indexOf(this.search_text) !== -1) {
        this.filtered_data.push(this.table_data[i]);
      }
    }
    console.log("Info, ", this.filtered_data.length);
    this.show_page(1);
  }

  set_pages_navbar() {
    this.total_pages = this.filtered_data.length / this.displayed_item_per_page;
    if (this.filtered_data.length % this.displayed_item_per_page > 0) {
      this.total_pages += 1;
    }

    this.displayed_pages = [];
    for(let i=1; i<this.total_pages+1; i++) {
      this.displayed_pages.push(i);
    }
  }

  show_page(page_no) {
    this.set_pages_navbar();
    this.page_index = page_no;
    let start = ( this.page_index - 1 ) * this.displayed_item_per_page;
    let end = start + this.displayed_item_per_page;
    this.displayed_data = [];
    for(let i=start; i<end; i++) {
      this.displayed_data.push(
        this.filtered_data[i]
      )
    }
  }

  reset_items_per_page() {
    this.show_page(this.page_index);
  }

  get_custom_value(row, column_name) {
    if (this.columns_style[column_name]) {
      return this.columns_style[column_name]["value"].replace("$value", row[column_name]);
    }
    return "NA";
  }

  get_link(row, column_name) {
    if (this.columns_style[column_name]) {
      return this.columns_style[column_name]["link"].replace("$value", row[column_name]);
    }
    return "NA";
  }
}
