import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {UnathorizedComponent} from './components/error/unathorized/unathorized.component';
import {NotFoundComponent} from './components/error/not-found/not-found.component';
import {LatchComponent} from "./components/admin/latch/latch.component";
import {LibraryCacheComponent} from "./components/admin/library-cache/library-cache.component";
import {RedoLogBufferComponent} from "./components/admin/redo-log-buffer/redo-log-buffer.component";
import {DictionaryCacheComponent} from "./components/admin/dictionary-cache/dictionary-cache.component";
import {FileStatComponent} from "./components/admin/file-stat/file-stat.component";
import {LogFileComponent} from "./components/admin/log-file/log-file.component";
import {SystemEventComponent} from "./components/admin/system-event/system-event.component";

const routes: Routes = [

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  {path: 'dashboard',
  component: DashboardComponent,
  },
  {path: 'latches',
  component: LatchComponent,
  },

   {path: 'libraryCaches',
  component: LibraryCacheComponent,
  },
  {path: 'redoLogBuffers',
    component: RedoLogBufferComponent,
  },
  {path: 'dictionaryCaches',
    component: DictionaryCacheComponent,
  },
  {path: 'fileStats',
    component: FileStatComponent,
  },
  {path: 'logFiles',
    component: LogFileComponent,
  },
  {path: 'systemEvents',
    component: SystemEventComponent,
  },
  {path: '404', component: NotFoundComponent},
  {path: '401', component: UnathorizedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
constructor(private router: Router) {
  this.router.errorHandler = (error: any) => {
    this.router.navigate(['/404']);
  }
}
}
