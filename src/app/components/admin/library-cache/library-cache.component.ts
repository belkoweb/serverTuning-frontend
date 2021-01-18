import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {LibraryCache} from "../../../model/library-cache";
import {AdminService} from "../../../services/admin.service";

@Component({
  selector: 'app-library-cache',
  templateUrl: './library-cache.component.html',
  styleUrls: ['./library-cache.component.css']
})
export class LibraryCacheComponent implements OnInit {

  libraryCaches: Array<LibraryCache>;
  dataSource: MatTableDataSource<LibraryCache> = new MatTableDataSource();
  displayedColumns: string[] = ['GETS', 'GETHITS', 'GETHITRATIO', 'PINS', 'PINHITS', 'PINHITRATIO', 'RELOADS'];

  errorMessage: string;
  infoMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdminService) {
    this.findAllLibraryCache();
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllLibraryCache(){
    this.adminService.findAllLibraryCache().subscribe(data => {
      //this.libraryCaches = data;
      //this.dataSource.data = data;
      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
