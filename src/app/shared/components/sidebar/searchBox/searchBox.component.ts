import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: []
})
export class SearchBoxComponent implements OnInit {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();
  // public onValue: EventEmitter<string> = new EventEmitter<string>();

  emitValue( value: string): void {
    this.onValue.emit( value );
  }

  constructor() { }

  ngOnInit() {
  }

}
