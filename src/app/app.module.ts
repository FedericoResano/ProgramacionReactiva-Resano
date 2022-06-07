import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFlatModule } from './modules/material-flat/material-flat.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterYMapComponent } from './filter-ymap/filter-ymap.component';
import { ObservableMuestraComponent } from './observable-muestra/observable-muestra.component';
import { PromiseMuestraComponent } from './promise-muestra/promise-muestra.component';
import { PipeAsyncComponent } from './pipe-async/pipe-async.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    FilterYMapComponent,
    ObservableMuestraComponent,
    PromiseMuestraComponent,
    PipeAsyncComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialFlatModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
