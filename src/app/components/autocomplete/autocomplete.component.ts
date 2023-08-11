import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions?: Observable<string[]>;

  ngOnInit() {
    //console.log(this.myControl)
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    
  }

  private _filter(value: string): string[] {
   // console.log(value);
    const filterValue = value.toLowerCase();

    // let a = this.options.filter(option => option.toLowerCase().includes(filterValue));
    let a = this.options;
    //console.log(a);
    return a;
  }

  getvalue(){
    
  }
}

