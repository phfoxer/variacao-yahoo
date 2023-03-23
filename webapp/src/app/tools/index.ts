import { Result, TQuoteData } from "../types";

export const Tools = {
    howPercent(previus: number, current: number):number {
        return Number((((current - previus) / previus) * 100).toFixed(2))
    },
    factoryQuote(result: Result): Promise<TQuoteData[]> {
        if (!result || !result.timestamp) {
            return Promise.reject(null)
        }
        return new Promise((resolve, reject) => {
            try {
                const obj: TQuoteData[] = [];
                const unixTime = result.timestamp;
                const quote = result.indicators.quote[0];
                quote.open.reduce((prev: number, current: number, index: number, all: number[]) => {
                    const date = new Date(unixTime[index] * 1000);
                    const day = date.getDate().toString().padStart(2, '0');
                    const month = date.getMonth().toString().padStart(2, '0');
                    const year = date.getFullYear();
                    console.log(index);
                    
                    obj.push({
                        date: `${day}/${month}/${year}`,
                        price: Number(current.toFixed(2)),
                        dplus1: index > 1 ? this.howPercent(prev, current) : 0,
                        firstday: index > 1 ? this.howPercent(all[0], current) : 0,
                    })
                    return current;
                });
                resolve(obj)
            } catch (error) {
                reject(error)
            }
        })

    }
}