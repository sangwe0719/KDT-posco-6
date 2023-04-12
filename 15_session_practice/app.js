const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    session({
      secret: "session", // 필수 옵션 (세션 암호화할 떄 쓰이는 키)
      resave: false,
      saveUninitialized: false, // 일반적으로 false 지정
    })
  );

app.get('/', (req, res) => {
    res.render('index', {userid: req.session.userid});
  });

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/loginData', (req, res) => {
  if (req.body.userid == 'banana' && req.body.userpw == '1234') {
      req.session.userid = req.body.userid;
      req.session.userpw = req.body.userpw;
      res.send(true);
  } else {
      res.send(false);
  }
})

app.post("/logout", (req,res) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }
    res.send(true);  
  })
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// req 객체
// req.session: "사용자" 별로 해당 객체({ }) 안에 세션 정보 유지
// req.session.키 = 값; // 세션 쿠키 설정
// req.session.키; // 세션 쿠키 사용(읽기)
// req.session.destroy(callback); // 세션 삭제