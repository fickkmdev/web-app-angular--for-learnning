const expressFunction = require('express')
const expressApp = expressFunction()

expressApp.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')

    next();
})

expressApp.get('/api/resource', (req, res)=>{
    const myJson = {id: 'B6104696', name: 'somkiart'}
    res.send(myJson)
})

expressApp.listen(3000, ()=>{
    console.log('listen on port 3000')
})