import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterYMapComponent } from './filter-ymap/filter-ymap.component';
import { ObservableMuestraComponent } from './observable-muestra/observable-muestra.component';
import { PipeAsyncComponent } from './pipe-async/pipe-async.component';
import { PromiseMuestraComponent } from './promise-muestra/promise-muestra.component';

const routes: Routes =[
  {
      path:'',
      component: PromiseMuestraComponent
  },
  {
      path:'promise',
      component: PromiseMuestraComponent
  },
  {
    path:'observable',
    component: ObservableMuestraComponent
},
{
  path:'filter/map',
  component: FilterYMapComponent
},

{
  path:'pipeasync',
  component: PipeAsyncComponent
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
