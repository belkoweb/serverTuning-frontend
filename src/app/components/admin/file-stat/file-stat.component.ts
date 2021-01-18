import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AdminService} from "../../../services/admin.service";
import {FileStat} from "../../../model/file-stat";

@Component({
  selector: 'app-file-stat',
  templateUrl: './file-stat.component.html',
  styleUrls: ['./file-stat.component.css']
})
export class FileStatComponent implements OnInit {

  fileStats: Array<FileStat>;
  dataSource: MatTableDataSource<FileStat> = new MatTableDataSource();
  displayedColumns: string[] = ['FILEID', 'PHYRDS', 'PHYWRTS', 'READTIM', 'WRITETIM'];

  errorMessage: string;
  infoMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdminService) {
    this.findAllFileStat();
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllFileStat(){
    this.adminService.findAllFileStat().subscribe(data => {
      //this.fileStats = data;
      //this.dataSource.data = data;
      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
