export type TQuoteData = {
  date: string;
  price: number;
  dplus1: number;
  firstday: number;
}



export type TYChart = {
  chart: Chart
}

export type Chart = {
  result: Result[]
  error: any
}

export type Result = {
  meta: Meta
  timestamp: number[]
  indicators: Indicators
}

export type Meta = {
  currency: string
  symbol: string
  exchangeName: string
  instrumentType: string
  firstTradeDate: number
  regularMarketTime: number
  gmtoffset: number
  timezone: string
  exchangeTimezoneName: string
  regularMarketPrice: number
  chartPreviousClose: number
  priceHint: number
  currentTradingPeriod: CurrentTradingPeriod
  dataGranularity: string
  range: string
  validRanges: string[]
}

export type CurrentTradingPeriod = {
  pre: Pre
  regular: Regular
  post: Post
}

export type Pre = {
  timezone: string
  start: number
  end: number
  gmtoffset: number
}

export type Regular = {
  timezone: string
  start: number
  end: number
  gmtoffset: number
}

export type Post = {
  timezone: string
  start: number
  end: number
  gmtoffset: number
}

export type Indicators = {
  quote: Quote[]
  adjclose: Adjclose[]
}

export type Quote = {
  high: number | undefined[]
  low: number | undefined[]
  close: number | undefined[]
  open: number[]
  volume: number | undefined[]
}

export type Adjclose = {
  adjclose: number | undefined[]
}
