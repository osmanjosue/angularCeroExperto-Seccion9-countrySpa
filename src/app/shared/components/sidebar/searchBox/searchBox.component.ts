import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: []
})
export class SearchBoxComponent implements OnInit {

  private debouncer = new Subject<string>;
  // private debouncer: Subject<string> = new Subject<string>;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();
  // public onValue: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
      })
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

  constructor() { }


}
