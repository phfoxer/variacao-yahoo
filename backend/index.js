import request from "request";
import cors from "cors";
import express from "express";
const app = express();
const port = 4201;

const loadRequest = (symbol) => {
    return new Promise((resolve, reject) => {
        const options = {
            'method': 'GET',
            'url': `https://query2.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=30d`,
        }
        return request(options, (error, response)=>{
            if (error) {
                reject(error);
            }
            if (!error) {
                resolve(JSON.parse(response.body));
            }
        })
    })
}

app.use(cors());

app.get('/symbol/:symbol', async (req, res) => {
    const resp = await loadRequest(req.params.symbol);
    if (!resp?.chart?.result) {
        return res.send(null)
    }
    return res.send(resp.chart.result.shift())
});


app.listen(port, () => {
    console.log('Listerning on port ' + port);
})
