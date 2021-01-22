const data = require('./data/products.json');


export default function handler(req, res) {
    const {
      query: { id },
    } = req
  
    res.end(`Post: ${id}`)
}