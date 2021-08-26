let express = require('express')
let mysql = require('mysql')

let app = express()

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test'
})

connection.connect(err => {
  if (err) throw err;

  console.log("mysql数据库连接成功...")
})

// 查询全部数据
app.get('/getUserInfo', (req, res) => {
  let params = req.query
  console.log("----params----", params)
  let sql = ''
  if(params.name == undefined || params.name == '') {
    sql = 'select * from userinfo'
  } else {
    sql = 'select * from userinfo  where name= ?'
  }
  
  let where_value = [params.name]

  connection.query(sql, where_value, (err, result) => {
    if (err) {
      console.log('[SELECT ERROR]:', err.message)
    }
    res.json(result)
  })
})

// 增加数据
app.post('/add', (req, res) => {
  let post = ''
  req.on('data', (chunk) => {
    post += chunk
    console.log("--post----", post)
  })

  req.on('end', () => {
    
  })

  res.send('add.....')
})


let server = app.listen(3000, () => {
  console.log('server is running in port 3000...')
})