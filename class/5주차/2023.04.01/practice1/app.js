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
            done(null,path.basename(file.originalname, ext) + Date.now() + ext)
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024},
});

app.set('view engine','ejs')
app.use('/views',express.static(__dirname + '/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

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
        userfile: req.file.filename
    });
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});