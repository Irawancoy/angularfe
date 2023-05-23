import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/components/register/register.component';
import { LoginComponent } from './auth/login/components/login/login.component';
import { ClientAuthGuard } from '../core/guard/clientAuth.guard';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { MenuComponent } from './menu/components/menu/menu.component';
import { RuanganComponent } from './ruangan/components/ruangan/ruangan.component';
import { ReservasiComponent } from './reservasi/components/reservasi/reservasi.component';
import { ProfileComponent } from './auth/profile/components/profile/profile.component';
import { KeranjangComponent } from './ruangan/components/keranjang/keranjang.component';
import { TentangKamiComponent } from './tentangKami/components/tentang-kami/tentang-kami.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' },
  {
    path: '',
    canActivate: [ClientAuthGuard],
    children: [
      { path: 'home', component: DashboardComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'ruangan', component: RuanganComponent },
      { path: 'reservasi', component: ReservasiComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'keranjang', component: KeranjangComponent },
      { path: 'tentang-kami', component: TentangKamiComponent },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
