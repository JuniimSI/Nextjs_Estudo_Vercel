const data =  import('../data/products.json')

async function handler (req, res) {
    console.log((await data).products);
    res.send((await data).products);
}


export default handler;