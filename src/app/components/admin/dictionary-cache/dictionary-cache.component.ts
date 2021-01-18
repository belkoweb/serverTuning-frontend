import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { AdminService } from "../../../services/admin.service";
import { DictionaryCache } from "../../../model/dictionary-cache";

@Component({
  selector: "app-dictionary-cache",
  templateUrl: "./dictionary-cache.component.html",
  styleUrls: ["./dictionary-cache.component.css"],
})
export class DictionaryCacheComponent implements OnInit {
  DictionaryCaches: Array<DictionaryCache>;
  dataSource: MatTableDataSource<DictionaryCache> = new MatTableDataSource();
  displayedColumns: string[] = ["GETMISSES", "GETS"];

  errorMessage: string;
  infoMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdminService) {
    this.findAllDictionaryCache();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllDictionaryCache() {
    this.adminService.findAllDictionaryCache().subscribe((data) => {
      this.DictionaryCaches = data;
      this.dataSource.data = data;
      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
