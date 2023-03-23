import { Component } from '@angular/core';
import { YahooService } from 'src/app/services/yahoo.service';
import { Tools } from 'src/app/tools';
import { TQuoteData } from 'src/app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage {
  public quoteList: TQuoteData[] = [];
  public displayedColumns: string[] = ['date', 'price', 'dplus1', 'firstday'];

  constructor(private readonly yahooService: YahooService) { }
  ngOnInit(): void {
    this.yahooService.obterCotacao('PETR4.SA').subscribe({
      next: async (result) => {
        this.quoteList = await Tools.factoryQuote(result);
      }
    })
  }
}
