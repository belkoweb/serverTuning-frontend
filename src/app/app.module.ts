import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminTemplateComponent } from './components/template/admin-template/admin-template.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnathorizedComponent } from './components/error/unathorized/unathorized.component';
import { DatePipe } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import {
  MatButtonModule, MatCardModule,
  MatInputModule, MatListModule,
  MatToolbarModule, MatSelectModule,
  MatFormFieldModule, MatTableModule,
  MatPaginatorModule, MatSortModule,
  MatProgressBarModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatDialogModule} from "@angular/material/dialog";
import {ToastrModule} from "ngx-toastr";
import { StatistiqueComponent } from './components/admin/statistique/statistique.component';
import { LatchComponent } from './components/admin/latch/latch.component';
import { DictionaryCacheComponent } from './components/admin/dictionary-cache/dictionary-cache.component';
import { LibraryCacheComponent } from './components/admin/library-cache/library-cache.component';
import { RedoLogBufferComponent } from './components/admin/redo-log-buffer/redo-log-buffer.component';
import { SystemEventComponent } from './components/admin/system-event/system-event.component';
import { FileStatComponent } from './components/admin/file-stat/file-stat.component';
import { LogFileComponent } from './components/admin/log-file/log-file.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminTemplateComponent,
    NotFoundComponent,
    UnathorizedComponent,
    StatistiqueComponent,
    LatchComponent,
    DictionaryCacheComponent,
    LibraryCacheComponent,
    RedoLogBufferComponent,
    SystemEventComponent,
    FileStatComponent,
    LogFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
     NgxSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
