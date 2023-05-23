import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ProfileService } from 'src/app/client/auth/profile/services/profile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private profileService: ProfileService,
    private modalService: NgbModal
  ) {}
  custData: any;
  cust: any;
  email: any;
  token: any;
  titleCard: any;
  modelId: any;
  ngOnInit(): void {
    this.getProfile();
    this.token = localStorage.getItem('ctoken');
  }

  logout() {
    localStorage.removeItem('ctoken');
    swal.fire({
      icon: 'success',
      title: 'Logout Berhasil',
      text: 'Terima Kasih',
    });
    window.location.reload();
  }

  getProfile() {
    this.profileService.getProfile().subscribe((res) => {
      this.custData = res;
      this.cust = this.custData.data;
      console.log(this.cust);
      this.email = this.custData.data.email;
      // console.log(this.email);
      // console.log(this.email);
    });
  }

  settingProfile(profileModel, modal) {
    this.titleCard = 'Edit Profile';
    this.modelId = profileModel.id;
    this.modalService.open(modal, {
      size: 'lg',
      backdrop: 'static',
    });
  }
}
