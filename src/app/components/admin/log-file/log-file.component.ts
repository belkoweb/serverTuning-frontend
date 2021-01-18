import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AdminService} from "../../../services/admin.service";
import {LogFile} from "../../../model/log-file";

@Component({
  selector: 'app-log-file',
  templateUrl: './log-file.component.html',
  styleUrls: ['./log-file.component.css']
})
export class LogFileComponent implements OnInit {

  logFiles: Array<LogFile>;
  dataSource: MatTableDataSource<LogFile> = new MatTableDataSource();
  displayedColumns: string[] = ['group_id', 'type', 'member'];

  errorMessage: string;
  infoMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdminService) {
    this.findAllLogFile();
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllLogFile(){
    this.adminService.findAllLogFile().subscribe(data => {
      //this.logFiles = data;
      //this.dataSource.data = data;
      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
