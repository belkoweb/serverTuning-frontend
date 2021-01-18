import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Latch } from "../../../model/latch";
import { AdminService } from "../../../services/admin.service";

@Component({
  selector: "app-latch",
  templateUrl: "./latch.component.html",
  styleUrls: ["./latch.component.css"],
})
export class LatchComponent implements OnInit {
  latches: Array<Latch> = new Array<Latch>();
  dataSource: MatTableDataSource<Latch> = new MatTableDataSource();
  displayedColumns: string[] = ["IMMEDIATE_GETS", "NAME", "IMMEDIATE_MISSES"];

  errorMessage: string;
  infoMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdminService) {
    this.findAllLatch();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  findAllLatch() {
    this.adminService.findAllLatch().subscribe((data) => {
      this.latches = data;
      this.dataSource.data = data;
      console.log(data);
    });
  }
}
