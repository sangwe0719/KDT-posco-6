const User = require('../model/User');

exports.index = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signup = (req, res) => {
  User.post_signup(req.body, () => {
    // res.end(): 데이터 없이 응답할 때 사용
    res.end();
  });
};

exports.post_signin = (req, res) => {
  console.log(req.body); // 폼에 입력한 로그인 정보

  User.post_signin(req.body, (result) => {
    console.log('Controller post_sign: ', result); 

    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.post_profile = (req, res) => {
  console.log(req.body);

  User.post_profile(req.body.userid, (result) => {
    console.log(result);
  })
};

exports.delete_profile = (req, res) => {
  console.log(req.body);

  User.delete_profile(req.body.id, () => {
  })
}

exports.edit_profile = (req, res) => {
  console.log (req.body);

  User.edit_profile(req.body, () => {
    res.end();
  })
}


