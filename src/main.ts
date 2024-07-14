import { bootstrapApplication } from '@angular/platform-browser';
import { TableExpandableRowGroupDemo } from './app/table-expandable-row-group-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(TableExpandableRowGroupDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));