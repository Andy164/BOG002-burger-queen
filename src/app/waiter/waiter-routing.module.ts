import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { TablesComponent } from './components/tables/tables.component';
import { WaiterComponent } from './components/waiter/waiter.component';

const routes: Routes = [
  {
    path: 'waiter',
    component: WaiterComponent,
   
    children: [
      {
        path: 'tables',
        component: TablesComponent,
      },
      {
        path: 'order/:id',
        component: OrderComponent,
      },
      {
        path: '',
        redirectTo: 'tables',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaiterRoutingModule {}
