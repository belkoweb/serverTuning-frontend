import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { RedoLogBuffer } from "../../../model/redo-log-buffer";
import { AdminService } from "../../../services/admin.service";

@Component({
  selector: "app-redo-log-buffer",
  templateUrl: "./redo-log-buffer.component.html",
  styleUrls: ["./redo-log-buffer.component.css"],
})
export class RedoLogBufferComponent implements OnInit {
  redoLogBuffers: Array<RedoLogBuffer>;
  dataSource: MatTableDataSource<RedoLogBuffer> = new MatTableDataSource();
  displayedColumns: string[] = ["name", "value"];

  errorMessage: string;
  infoMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminService: AdminService) {
    this.findAllRedoLogBuffer();
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllRedoLogBuffer() {
    this.adminService.findAllRedoLogBuffer().subscribe((data) => {
      this.redoLogBuffers = data;
      this.dataSource.data = data;
      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
