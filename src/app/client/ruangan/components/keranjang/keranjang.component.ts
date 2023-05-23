import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/client/menu/services/menu.service';

interface Ruangan {
  nama: string;
  harga1jam: number;
  harga3jam: number;
}

interface Menu {
  id: number;
  nama: string;
  harga: number;
  jumlah: number;
}

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.component.html',
  styleUrls: ['./keranjang.component.css'],
})
export class KeranjangComponent implements OnInit {
  @Input() listRuangan: Ruangan[] = [];
  selectedPrice: number = 0;
  listMenu: Menu[] = [];
  menuTersedia: any;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.menuService.getMenu().subscribe(
      (res: any) => {
        this.listMenu = res.data.list;
        this.menuTersedia = res.data.list.filter(
          (menu: any) => menu.status > 0
        );
        console.log(this.menuTersedia);
        console.log(this.listMenu);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
