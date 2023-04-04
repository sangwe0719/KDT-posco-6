const Comment = require("../model/result");

exports.main = (req, res) => {
  res.render("practice1");
};

 exports.login = (req, res) => {
  const user = Comment.getComments()[0]; 

   if (req.body.id === user.userId &&req.body.pw === user.userPw) {
     res.send({ isLogin: true, userInfo: req.body });
   } else {
    res.send({ isLogin: false });
   }
 };


