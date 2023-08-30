import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedAngularMaterialModule } from 'src/app/shared/shared-angular-material/shared-angular-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomePageRoutingModule, SharedAngularMaterialModule],
})
export class HomeModule {}
