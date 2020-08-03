import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ // appcomponent的<router-outlet>
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', // 空的或隨便打都會導向home的頁面
    redirectTo: 'spa/home',
    pathMatch: 'full' // 使用redirectTo就一定要使用pathMatch
  },
  {
    path: 'spa',
    component: LayoutComponent, // 多一個children就要多一個在component裡的<router-outlet>
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // 只打spa也導向home
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true, // 上正式機要拿掉，會自動log出來
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
