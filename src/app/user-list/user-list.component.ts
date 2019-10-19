import { Component, OnInit } from '@angular/core';
import { UserfileService } from '../_services/userfile.service';
import { AlertifyService } from '../_services/alertify.service';
import { Userfile } from '../_models/userfile';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userfiles: Userfile[];

  constructor(private userfileService: UserfileService, private alertify: AlertifyService) { }

  columnDefs = [
    { headerName: 'UserID', field: 'UserID', rowDrag: true },
    { headerName: 'Name', field: 'Name', sortable: true, filter: true }, // sortable: true, filter: true
    { headerName: 'EMailAddress', field: 'EMailAddress', sortable: true, filter: true },
    { headerName: 'SecurityMgr', field: 'SecurityMgr', sortable: true, filter: true},
    { headerName: 'UserDisabled', field: 'UserDisabled', sortable: true, filter: true }
  ];

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userfileService.getUsers().subscribe((odata: any) => {
      this.userfiles = odata.value;
      // console.log(userfiles.value);
    }, error => {
      this.alertify.error(error);
    });
  }

}
