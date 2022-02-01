import { Component, OnInit, Input } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  addError() {
    this.messageService.add({severity:'error', summary:'Empty Item', detail:'Please input an item'});
  }
  addSuccess(){
    this.messageService.add({severity:'success', summary:'New Item', detail:'Thank You for adding: ' + this.newItem});
  }
    clear() {
        this.messageService.clear();
    }

  ngOnInit(): void {
  }

  shopping_list = [
    'Hyper-V',
    'Software Defined Storage',
    'Cluster Shared Volumes',
    'Server Message Block',
    'Scale out File Servers',
    'Guest Clustering',
    'Storage Spaces Direct',
    'Storage Replica',
    'Server Defined Networking',
    'Windows Admin Center'
  ]

  newItem = '';

  addNewItem(){
    if (this.newItem == ''){
      this.addError()
    }else{
      this.addSuccess()
      this.shopping_list.push(this.newItem)
    }
    
    this.newItem = ''
  }
}
