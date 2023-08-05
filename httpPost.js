const http = require('http')

let optiones = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

let data = JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
})

let req = http.request(optiones, res => {
    let cuerpo = ''
    res.on('data', (chunk) => {
        cuerpo  += chunk
    })
    res.on('end', () => {
        console.log(JSON.parse(cuerpo))
    })
})

req.on('error', err => {
    console.error('Error: ' + err)
})

req.write(data)

req.end()


