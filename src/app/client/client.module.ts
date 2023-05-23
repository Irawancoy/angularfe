import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { LoginComponent } from './auth/login/components/login/login.component';
import { RegisterComponent } from './auth/register/components/register/register.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/components/navbar/navbar.component';
import { MenuComponent } from './menu/components/menu/menu.component';
import { RuanganComponent } from './ruangan/components/ruangan/ruangan.component';
import { DetailMenuComponent } from './menu/components/detailMenu/detail-menu/detail-menu.component';
import { ReservasiComponent } from './reservasi/components/reservasi/reservasi.component';
import { ProfileComponent } from './auth/profile/components/profile/profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DetailRuanganComponent } from './ruangan/components/detail-ruangan/detail-ruangan/detail-ruangan.component';
import { KeranjangComponent } from './ruangan/components/keranjang/keranjang.component';
import { TentangKamiComponent } from './tentangKami/components/tentang-kami/tentang-kami.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    MenuComponent,
    RuanganComponent,
    DetailMenuComponent,
    ReservasiComponent,
    ProfileComponent,
    DetailRuanganComponent,
    KeranjangComponent,
    TentangKamiComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class ClientModule {}
