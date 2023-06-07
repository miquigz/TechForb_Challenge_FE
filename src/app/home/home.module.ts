import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { CardsComponent } from './pages/cards/cards.component';
import { ProvidesComponent } from './pages/provides/provides.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { PointsComponent } from './pages/points/points.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    CardsComponent,
    ProvidesComponent,
    TransactionsComponent,
    InsuranceComponent,
    PointsComponent,
    AssistanceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
