import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
// import 'moment/locale/pt-br';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss']
})
export class MomentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log(moment.locale()); // en
    moment.locale('fr');
    console.log(moment.locale()); // fr
    moment.locale('pt-BR');
    console.log(moment.locale()); // pt-BR

    const date = moment();
    let dateInFormat = date.format('MM DD YYYY, h:mm:ss a');
    console.log(dateInFormat);
  }

}
