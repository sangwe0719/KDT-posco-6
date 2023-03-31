const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');// view engine 등록
app.use('/views', express.static(__dirname + '/views'));  // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({extended: true}))// post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json());// json 형태로 데이터를 주고 받음

app.get('/',function(req,res){
    res.render('index');
})

app.get('/axios', function(req,res){
    console.log(req.query);
    res.send(req.query);
})


const realId = 'banana'; // 정답 아이디
const realPw = '4321'; // 정답 비밀번호
app.post('/axios', function (req, res) {
  console.log(req.body); // { userId: 'aa', userPw: 'a' }

  // 정답 아이디/비밀번호 vs. 사용자가 폼에 입력한 아이디/비밀번호
  if (realId === req.body.userId && realPw === req.body.userPw) {
    // 정답 아이디랑 사용자가 입력한 아이디가 같고, 정답 비번이랑 사용자가 입력한 비번이 같음
    // => 로그인 성공
    res.send({ isLogin: true, userInfo: req.body });
  } else {
    // 그렇지 않으면
    // => 로그인 실패
    res.send({ isLogin: false });
  }
});

app.listen(PORT, function(){
    console.log('웹 서버 실행!!');
    console.log(`http://localhost:${PORT}`);
})

