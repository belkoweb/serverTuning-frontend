import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SystemEvent} from "../../../model/system-event";
import {AdminService} from "../../../services/admin.service";

@Component({
  selector: 'app-system-event',
  templateUrl: './system-event.component.html',
  styleUrls: ['./system-event.component.css']
})
export class SystemEventComponent implements OnInit {

  systemEvents: Array<SystemEvent>;
  dataSource: MatTableDataSource<SystemEvent> = new MatTableDataSource();
  displayedColumns: string[] = ['EVENT_ID', 'EVENT', 'TIME_WAITED', 'TOTAL_WAITS'];

  errorMessage: string;
  infoMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdminService) {
    this.findAllSystemEvent();
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllSystemEvent(){
    this.adminService.findAllSystemEvent().subscribe(data => {
      //this.systemEvents = data;
      //this.dataSource.data = data;
      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
