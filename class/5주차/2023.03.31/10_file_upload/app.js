const express = require('express');
const app = express();
const PORT = 8000;

//multer 미들웨어 사용하기
const multer = require('multer'); // multer 불러오기
const path = require('path');// path 불러오기 (내장 모듈) => 파일, 폴더 경로를 쉽게 설정
const upload = multer({
    dest: 'uploads/' , // dest: 업로드할 파일 경로 지정
});
// multer 세부 설정
const uploadDetail = multer({
    storage: multer.diskStorage ({
        destination(req,file,done){
            // destination: 경로설정
            // done: callback 함수
            done(null,'uploads/');    
        },
        filename(req,file,done){
            // 가정) apple.png 파일을 업로드
            const ext = path.extname(file.originalname); // file.orginalname에서 "확장자" 추출
            // path.basename(file.originalname, ext) => apple(확장자 제거한 파일이름만!!)
            // Date.now() => 현재 시간 (1680309362206)
            // => 1970년 1월 1일 0시 0분 0초를 기준으로 현재까지 경과된 밀리초
            done(null,path.basename(file.originalname, ext) + Date.now() + ext)
            //(파일명 + 현재시간.확장자) 형식으로 파일 업로드
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024}, //5MB
    // 5 * 2^10 = 5KB
    // 5 * 2^10 * 2^10 = 5MB
});

app.set('view engine','ejs')
app.use('/views',express.static(__dirname + '/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/',(req,res)=>{
    res.render('index');
});

// single(): 하나의 파일 업로드할 때
// single()의 매개변수: input 의 name과 일치시키기!
app.post('/upload' , uploadDetail.single('userfile'), (req, res) =>{
    console.log(req.file); // 업로드한 파일 정보
    // {
    //     fieldname: 'userfile', // 폼에 정의한 name
    //     originalname: 'apple.jpg', // 사용자가 업로드한 파일명
    //     encoding: '7bit', // 파일 인코딩 타입
    //     mimetype: 'image/jpeg', // 파일 mime 타입
    //     destination: 'uploads/', // 파일 저장할 경로(폴더)
    //     filename: 'f3cf085cdd29940b8e8aa152041287cc', // destination에 저장된 파일명
    //     path: 'uploads\\f3cf085cdd29940b8e8aa152041287cc',// 업로드된 파일의 전체 경로
    //     size: 4533 // 파일 크기(byte)
   
    //   }
      
    console.log(req.body); // 폼에 입력한 정보
    //{title: '이것은 사과다~!!'} // input title에 입력한 값
    res.send('upload 완료~!!');
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});