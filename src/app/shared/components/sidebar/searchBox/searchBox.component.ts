import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: []
})
export class SearchBoxComponent implements OnInit {

  @Input()
  public placeholder: string='';

  constructor() { }

  ngOnInit() {
  }

}
