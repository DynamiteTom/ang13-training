import { Component, OnInit } from '@angular/core';

interface arrChildren{
   id: number;
   children: number[];
}

@Component({
  selector: 'app-test2-info-sys',
  templateUrl: './test2-info-sys.component.html',
  styleUrls: ['./test2-info-sys.component.scss']
})
export class Test2InfoSysComponent implements OnInit {
  arr = new Array<arrChildren>(8);

  constructor() { }

  ngOnInit(): void {
     this.arrayData();
  }

  arrayData(){
    this.arr[1]   = {id:1, children: []};
    this.arr[1].id = 1;
    this.arr[1].children = [2,3,5];  

    this.arr[2] = {id:2, children: []};
    this.arr[2].id = 2;
    this.arr[2].children = [7,4];

    this.arr[3].id = 3;
    this.arr[4].id = 4;
    
    this.arr[3].children = [];
    this.arr[4].children = [];
    this.arr[5].children = [];
    this.arr[6].children = [];
    this.arr[7].children = [];
  }
}
