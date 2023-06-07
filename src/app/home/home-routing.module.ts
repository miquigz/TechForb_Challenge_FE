import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';
import { PointsComponent } from './pages/points/points.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { ProvidesComponent } from './pages/provides/provides.component';
import { CardsComponent } from './pages/cards/cards.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, 
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'transactions', component: TransactionsComponent
      },
      {
        path: 'assistance', component: AssistanceComponent
      },
      {
        path: 'points', component: PointsComponent
      },
      {
        path: 'provides', component: ProvidesComponent
      },
      {
        path: 'insurance', component:InsuranceComponent
      },
      {
        path: 'cards', component: CardsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
