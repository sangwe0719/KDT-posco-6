const express = require('express');
const app = express();
const PORT = 8000;

const multer = require('multer'); 
const path = require('path');
const upload = multer({
    dest: 'uploads/' , 
});

const uploadDetail = multer({
    storage: multer.diskStorage ({
        destination(req,file,done){
            done(null,'uploads/');    
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            // [파일명 + 현재시간.확장자] 형식 
            //done(null,path.basename(file.originalname, ext) + Date.now() + ext);

            //[유저아이디값 + 현재시간.확장자] 형식
            console.log(req.body);
            // {
            //   userid: 'a',
            //   password: 'aa',
            //   username: 'a',
            //   age: '1'
            // }
            done(null, req.body.userid + Date.now() + ext);
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024},
});

app.set('view engine','ejs')
app.use('/views',express.static(__dirname + '/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/static', express.static(__dirname + '/static')); // js, css static 폴더

app.get('/views',(req,res)=>{
    res.render('practice1');
});



app.post('/postform',uploadDetail.single('userfile'),function(req, res){
    console.log(req.file);
    res.render('result1',{
        userid: req.body.userid,
        userpw: req.body.userpw,
        username: req.body.username,
        userage: req.body.userage,
        userfile: req.file.path
    });
})

/*
app.post('/postform', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.file);
    // {
    //   fieldname: 'profile',
    //   originalname: 'peach.jpg',
    //   encoding: '7bit',
    //   mimetype: 'image/jpeg',
    //   destination: 'uploads/',
    //   filename: 'peach1680324245660.jpg',
    //   path: 'uploads\\peach1680324245660.jpg',
    //   size: 3593
    // }
    console.log(req.file.path); // 이미지 업로드된 경로
    console.log(req.body);
    // {
    //   userid: 'a',
    //   password: 'aa',
    //   username: 'a',
    //   age: '1'
    // }
    res.render('result1', {
      userInfo: req.body,
      src: req.file.path,
    });
  });
*/

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});