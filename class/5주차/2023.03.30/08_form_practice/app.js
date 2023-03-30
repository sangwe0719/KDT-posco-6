const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');// view engine 등록
app.use('/views', express.static(__dirname + '/views'));  // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({extended: true}))// post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json());// json 형태로 데이터를 주고 받음

// 라우팅(routing): 경로 설정
// 브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가!!

// localhots:PORT/ 접속했을 때, index.ejs를 보여주겠다
/*app.get('/', function(req,res){
    // views/index.ejs 파일을 찾아서 응답
    const myTitle = '폼 실습을 합시다~~'
    res.render('index',{ title: myTitle});
});*/

app.get('/',function(req,res){
    const myTitle = '실습 풀이'
    res.render('valid', {title:myTitle});
})

app.get('/practice1',function(req,res){
    res.render('practice1',{
    })
})


app.get('/practice2',function(req,res){
    res.render('practice2',{
    })
})

/*app.get('/getform', function(req,res){
    //console.log(req); // { xx: {},  yy: {}, ... query: { id: 'sean', pw: '1234' }}
    console.log(req.query); // {id:'apple' ,pw: '1234'}
    //res.send('get 요청 성공!')
    res.render('result',{
        title: 'GET 요청 폼 결과 확인하기',
        id: req.query.id,//'apple'
        pw: req.query.pw,//'1234'
});
})


app.post('/postForm', function(req, res){
    console.log(req.body);// { id: 'banana', pw: '4321' }
    //res.send('post 요청 성공!!!');
    res.render('result',{
        title: 'POST 요청 폼 결과 확인하기',
        id: req.body.id,//'apple'
        pw: req.body.pw,//'4321'
    });
})
*/

app.get('/getform', function(req,res){
    res.render('result1',{
        title: '실습 1 결과입니다.',
        name: req.query.name,
        gender: req.query.gender,
        birthyear: req.query.birthyear,
        birthmonth: req.query.birthmonth,
        birthday: req.query.birthday,
        favoritefood: req.query.favoritefood
});
})

app.post('/postform', function(req, res){
    res.render('result2',{
        title: '실습 2 결과입니다.',
        name: req.body.name,
        gender: req.body.gender,
        birthyear: req.body.birthyear,
        birthmonth: req.body.birthmonth,
        birthday: req.body.birthday,
        favoritefood: req.body.favoritefood,
        color: req.body.color,
        number: req.body.number
    });
})

app.listen(PORT, function(){
    console.log('웹 서버 실행!!');
    console.log(`http://localhost:${PORT}`);
})

