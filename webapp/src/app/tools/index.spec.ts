import { fakeAsync, tick } from '@angular/core/testing';
import { Tools } from '.';
import { TQuoteData, TYChart } from '../types';

const jsonMock: any = { "chart": { "result": [{ "meta": { "currency": "BRL", "symbol": "PETR4.SA", "exchangeName": "SAO", "instrumentType": "EQUITY", "firstTradeDate": 946900800, "regularMarketTime": 1679599399, "gmtoffset": -10800, "timezone": "BRT", "exchangeTimezoneName": "America/Sao_Paulo", "regularMarketPrice": 22.64, "chartPreviousClose": 26.55, "priceHint": 2, "currentTradingPeriod": { "pre": { "timezone": "BRT", "end": 1679576400, "start": 1679575500, "gmtoffset": -10800 }, "regular": { "timezone": "BRT", "end": 1679601600, "start": 1679576400, "gmtoffset": -10800 }, "post": { "timezone": "BRT", "end": 1679605200, "start": 1679601600, "gmtoffset": -10800 } }, "dataGranularity": "1d", "range": "1mo", "validRanges": ["1d", "5d", "1mo", "3mo", "6mo", "1y", "2y", "5y", "10y", "ytd", "max"] }, "timestamp": [1677153600, 1677240000, 1677502800, 1677589200, 1677675600, 1677762000, 1677848400, 1678107600, 1678194000, 1678280400, 1678366800, 1678453200, 1678712400, 1678798800, 1678885200, 1678971600, 1679058000, 1679317200, 1679403600, 1679490000, 1679599399], "indicators": { "quote": [{ "high": [26.790000915527344, 26.700000762939453, 26.739999771118164, 26.920000076293945, 25.43000030517578, 25.670000076293945, 25.739999771118164, 26.1200008392334, 25.780000686645508, 25.920000076293945, 26.229999542236328, 25.579999923706055, 24.860000610351562, 24.729999542236328, 23.479999542236328, 23.520000457763672, 23.510000228881836, 23.649999618530273, 23.600000381469727, 23.6200008392334, 23.670000076293945], "volume": [73913400, 64409100, 76250600, 130248100, 109257700, 124516200, 87591800, 50227400, 59052500, 66220400, 68042300, 48118600, 58605500, 58916700, 93708800, 66821000, 93502700, 57575200, 43391200, 46435600, 62318100], "open": [25.770000457763672, 26.670000076293945, 25.84000015258789, 26.209999084472656, 25.309999465942383, 25.420000076293945, 24.829999923706055, 25.700000762939453, 25.719999313354492, 25.149999618530273, 25.350000381469727, 25.15999984741211, 24.549999237060547, 24.280000686645508, 23.329999923706055, 23.399999618530273, 23.100000381469727, 23.510000228881836, 23.200000762939453, 23.389999389648438, 23.3700008392334], "close": [26.549999237060547, 25.899999618530273, 26.149999618530273, 25.239999771118164, 25.299999237060547, 24.639999389648438, 25.700000762939453, 25.959999084472656, 25.100000381469727, 25.420000076293945, 25.309999465942383, 24.979999542236328, 24.190000534057617, 23.760000228881836, 23.34000015258789, 23.260000228881836, 23.510000228881836, 22.93000030517578, 23.399999618530273, 23.329999923706055, 22.639999389648438], "low": [25.770000457763672, 25.8700008392334, 25.809999465942383, 25.239999771118164, 24.190000534057617, 24.3700008392334, 24.450000762939453, 25.3700008392334, 24.93000030517578, 25.1299991607666, 25.280000686645508, 24.940000534057617, 24.100000381469727, 23.600000381469727, 22.799999237060547, 22.969999313354492, 22.860000610351562, 22.889999389648438, 23.079999923706055, 23.040000915527344, 22.59000015258789] }], "adjclose": [{ "adjclose": [26.549999237060547, 25.899999618530273, 26.149999618530273, 25.239999771118164, 25.299999237060547, 24.639999389648438, 25.700000762939453, 25.959999084472656, 25.100000381469727, 25.420000076293945, 25.309999465942383, 24.979999542236328, 24.190000534057617, 23.760000228881836, 23.34000015258789, 23.260000228881836, 23.510000228881836, 22.93000030517578, 23.399999618530273, 23.329999923706055, 22.639999389648438] }] } }], "error": null } };

describe('Tools', () => {
    beforeEach(async () => {

    });

    it('should be test howPercent', () => {
        expect(Tools.howPercent(10, 11)).toEqual(10);
    });



    it('should be test factoryQuote fail', fakeAsync(() => {
        let result: any;
        Tools.factoryQuote({} as any).catch(data => {
            result = data;
        });
        tick();
        expect(result).toBeNull();
    }));

    it('should be test factoryQuote okay', fakeAsync(() => {
        let result: TQuoteData[] = [];
        Tools.factoryQuote(jsonMock.chart.result[0]).then(data => {
            result = data;
        });
        tick();
        expect(result.length).toBeGreaterThan(0);
    }));


});