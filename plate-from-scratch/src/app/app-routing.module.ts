import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { PaymentComponent } from './components/shopping-cart/payment/payment.component';
import { ProductStoreComponent } from './components/admin-portal/product-store/product-store.component'; 
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component'
import { ViewAllComponent } from './components/admin-portal/view-all/view-all.component'
import { ProductDeleteComponent } from './components/admin-portal/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/admin-portal/product-update/product-update.component';

const routes: Routes = [ 
  { path: '', redirectTo:'/shop',pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent },
  { path:'shop', component:ShoppingCartComponent },
  { path:'payment', component:PaymentComponent},
  { path: 'admin-portal', component: AdminPortalComponent },
  { path: 'product-store', component: ProductStoreComponent},
  { path: 'view-all', component: ViewAllComponent},
  { path: 'product-delete', component: ProductDeleteComponent},
  { path: 'product-update', component:ProductUpdateComponent },
  { path:'**', component: PageNotFoundComponent }



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
