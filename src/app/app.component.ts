import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatListOption } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('nvnsource') nvnsource: MatSelectionList;
  @ViewChild('nvntarget') nvntarget: MatSelectionList;

  nvn_source_list: any[];
  nvn_target_list: any[];
  constructor() {
    this.nvn_source_list = [
      { name: 'Boots', value: "boots" },
      { name: "Clogs", value: "clogs" },
      { name: 'Loafers', value: "loafers" },
      { name: 'Moccasins', value: "moccasins" },
      { name: 'Sneakers', value: "sneakers" }];
    this.nvn_target_list = [];
  }

  ngOnInit() {

  }

  nvnMoveAllRight(event: any) {
    let tmp_source_list = [...this.nvn_source_list];
    //let tmp_target_list = [...this.nvn_target_list];

    this.nvn_source_list = [];
    this.nvn_target_list.push(...tmp_source_list);
    //this.moveFiles(this.nvn_source_list,this.nvn_target_list,this.nvnsource.selectedOptions.selected);    
    console.log("hellow");
  }

  nvnMoveRight(event: any) {
    let tmp_source_list = [];
    let tmp_target_list = [];
    this.nvn_source_list.forEach(item => {
      let selected = false;
      for (let element of this.nvnsource.selectedOptions.selected) {
        if (element.getLabel().trim() == item.name) {
          tmp_target_list.push(item);
          selected = true;
          break;
        }
      }

      if (!selected) {
        tmp_source_list.push(item);
      }
    });

    this.nvn_source_list = [...tmp_source_list];
    this.nvn_target_list.push(...tmp_target_list);
    //this.moveFiles(this.nvn_source_list,this.nvn_target_list,this.nvnsource.selectedOptions.selected);
    console.log("hellow");
  }


  nvnMoveLeft(event: any) {
    let tmp_source_list = [];
    let tmp_target_list = [];
    this.nvn_target_list.forEach(item => {
      let selected = false;
      for (let element of this.nvntarget.selectedOptions.selected) {
        if (element.getLabel().trim() == item.name) {
          tmp_source_list.push(item);
          selected = true;
          break;
        }
      }

      if (!selected) {
        tmp_target_list.push(item);
      }
    });

    this.nvn_source_list.push(...tmp_source_list);
    this.nvn_target_list = [...tmp_target_list];    
    console.log("hellow");
  }

  nvnMoveAllLeft(event: any) {
    //let tmp_source_list = [...this.nvn_source_list];
    let tmp_target_list = [...this.nvn_target_list];

    this.nvn_source_list.push(...tmp_target_list);
    this.nvn_target_list = [];
    console.log("hellow");
  }

  nvnOnSourceSelectionChange(event: any) {

  }

  nvnOnTargetSelectionChange(event: any) {

  }
}

