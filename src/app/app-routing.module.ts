import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent }       from './users/users.component'
import { DashboardComponent }       from './dashboard/dashboard.component'
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'users',component: UsersComponent},
  { path: 'dashboard',component: DashboardComponent},
  { path: 'orders',component: OrdersComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
