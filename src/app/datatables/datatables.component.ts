import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatatablesComponent implements OnInit {
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
  @Input() table_conf:any = {};
  
  constructor() { }

  ngOnInit(): void {
    if (!this.table_conf.current_page) {
      this.table_conf.current_page = 1;
    } 
    if (!this.table_conf.item_per_page) {
      this.table_conf.item_per_page = 10;
    }

    if (!this.table_conf.no_of_pages) {
      this.table_conf.no_of_pages = this.table_data.length / this.table_conf.item_per_page;
      let float_no_of_pages = this.table_data.length / (this.table_conf.item_per_page * 1.0);
      if (float_no_of_pages !== this.table_conf.no_of_pages) {
        this.table_conf.no_of_pages += 1;
      }  
    }
    this.table_conf.display_list = [];
    let start = (this.table_conf.current_page-1) * 10;
    for(let i=start; i<start + this.table_conf.item_per_page; i++) {
      this.table_conf.display_list.push(this.table_data[i]);
    }
  }

  get_pages_array() {
    let pages_array = [];
    for(let i=0; i<this.table_conf.no_of_pages; i++) {
      pages_array.push(i+1);
    }
    return pages_array;
  }

  show_page(page_no) {
    this.table_conf.display_list = [];
    this.table_conf.current_page = page_no;
    let start = (this.table_conf.current_page-1) * 10;
    for(let i=start; i<start + this.table_conf.item_per_page; i++) {
      this.table_conf.display_list.push(this.table_data[i]);
    }
  }
}
