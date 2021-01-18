import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../../services/admin.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(private adminService: AdminService) {}
  sumPinsMinceReloadsLibraryCache = 0;
  sumPinsLibraryCache = 0;
  libraryCacheHitRatioValue = 0;
  sumGetsGetMissesDictionaryCache = 0;
  sumGetsDictionaryCache = 0;
  dictionaryCacheHitRatioValue = 0;
  redoLogBufferHitRatioValue = 0;
  ngOnInit() {
    this.libraryCacheHitRatio();
    this.dictionaryCacheHitRatio();
    this.redoLogBufferHitRatio();
  }
  libraryCacheHitRatio() {
    this.adminService.findAllLibraryCache().subscribe((data) => {
      let difference = 0;
      data.forEach((element) => {
        difference = element.pins - element.reloads;
        this.sumPinsMinceReloadsLibraryCache += difference;
        this.sumPinsLibraryCache += element.pins;
      });
      this.libraryCacheHitRatioValue =
        (this.sumPinsMinceReloadsLibraryCache / this.sumPinsLibraryCache) * 100;
    });
  }
  dictionaryCacheHitRatio() {
    this.adminService.findAllDictionaryCache().subscribe((data) => {
      data.forEach((element) => {
        this.sumGetsGetMissesDictionaryCache +=
          element.gets - element.getmisses;
        this.sumGetsDictionaryCache += element.gets;
      });
      this.dictionaryCacheHitRatioValue =
        (this.sumGetsGetMissesDictionaryCache / this.sumGetsDictionaryCache) *
        100;
    });
  }
  redoLogBufferHitRatio() {
    this.adminService.findAllRedoLogBuffer().subscribe((data) => {
      let redo_entries, redo_buffer_allocation_retries;
      redo_entries = data[0].value;
      redo_buffer_allocation_retries = data[1].value;

      this.redoLogBufferHitRatioValue =
        redo_buffer_allocation_retries / redo_entries;
    });
  }
}
