# Simple Bootstrap Table

![imagedemo](https://jennie-uploaded-assets.s3.ap-south-1.amazonaws.com/Screenshot%202021-11-01%20at%201.16.13%20PM.png)



## Intregration Steps

Extract the code to some directy, Once the code is extracted, user can see folder structure

```
src/
  app/
    datatables/
      datatables.component.html
      datatables.component.ts
      datatables.component.css
```

copy folder `datatables` inside `src/app/`, Add `DatatablesComponent` to app.module.ts. The data templete is added to project.

Use show tables use.
```
<app-datatables [table_data]="table_data" [columns]="columns"></app-datatables>    
```

where 
```
columns = ["affiliation_id", "school_name", "about", "contact_email", "rating", "rated_by"]; // array list of all columns
table_data = [
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
];  // containing data to show
```

