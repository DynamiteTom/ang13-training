import { Component, Input, OnInit } from '@angular/core';


export class MainSubject {
  customerNo: number=0;
  subject_name: string="";
  subject_topics: string[] = [];
  subject_descriptions: string[][] = [][25];
}

@Component({
  selector: 'app-subject-data-entry',
  templateUrl: './subject-data-entry.component.html',
  styleUrls: ['./subject-data-entry.component.scss']
})
export class SubjectDataEntryComponent implements OnInit {
  @Input() main_subject = "History";

  constructor() { }

  ngOnInit(): void {
  }

}
