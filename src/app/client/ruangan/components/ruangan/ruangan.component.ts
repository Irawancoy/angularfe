import { Component, OnInit, ViewChild } from '@angular/core';
import { RuanganService } from '../../services/ruangan.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from 'src/app/client/menu/services/menu.service';
interface Item {
  nama: string;
  harga1jam: number;
  harga3jam: number;
}
@Component({
  selector: 'app-ruangan',
  templateUrl: './ruangan.component.html',
  styleUrls: ['./ruangan.component.css'],
})
export class RuanganComponent implements OnInit {
  @ViewChild('keranjangModal') keranjangModal: any;

  listRuangan: any;
  modelId: any;
  items: Item[] = []; // Daftar item dalam keranjang
  showKeranjang: boolean = false; // Status tampilan keranjang
  modal: any;

  constructor(
    private ruanganService: RuanganService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getRuangan();
  }

  getRuangan() {
    this.ruanganService.getRuangan().subscribe(
      (res: any) => {
        this.listRuangan = res.data.list;
        console.log(this.listRuangan);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  showDetail(ruanganModel, modal) {
    this.modelId = ruanganModel.id;
    this.modalService.open(modal, { size: 'lg' });
  }

  addToCart(item: Item) {
    this.items.push(item);
    this.showKeranjang = true;
    this.modal = this.modalService.open(this.keranjangModal, { size: 'lg' });
  }
  reload() {
    window.location.reload();
  }
}
