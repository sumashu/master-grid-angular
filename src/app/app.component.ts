import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';

  columnDefs = [
    { field: 'make', headerName:'Make',sortable:true,filter:true },
    { field: 'model', headerName:'Model',sortable:true,filter:true },
    { field: 'price', headerName:'Price',sortable:true,filter:true}
];

rowData: Observable<any[]>;

constructor(private http:HttpClient)
{

}
ngOnInit(): void {
  this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
}
}
