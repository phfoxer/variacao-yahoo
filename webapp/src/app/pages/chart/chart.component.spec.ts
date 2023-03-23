import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { YahooService } from 'src/app/services/yahoo.service';
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartPage } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartPage;
  let fixture: ComponentFixture<ChartPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPage ],
      imports: [HttpClientModule,MatTableModule,NgApexchartsModule],
      providers: [YahooService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
