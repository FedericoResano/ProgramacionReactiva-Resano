import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MatButtonModule, MatIconModule, MatInputModule, MatCardModule, MatTableModule]
})
export class MaterialFlatModule { }
