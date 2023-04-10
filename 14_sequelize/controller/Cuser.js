const models = require('../models');

exports.index = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signup = async (req, res) => {
  await models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  });
    res.end();
  };


exports.post_signin = async(req, res) => {
  //[before]
  // console.log(req.body); // 폼에 입력한 로그인 정보

  // User.post_signin(req.body, (result) => {
  // console.log('Controller post_sign: ', result); 

  //  if (result.length > 0) {
  //    res.send(true);
  // } else {
  //    res.send(false);
  //  }
  //});
  //[after]
  const result = await models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw
    }
  });
  console.log('>>>>>',result);

  if(result){
    res.send(true);
  } else {
    res.send(false);
  }
};

exports.post_profile = async (req, res) => {
  //console.log(req.body);

  //User.post_profile(req.body.userid, (result) => {
  //  console.log(result);
  //})
  const result = await models.User.findOne({
    where: { userid: req.body.userid},
  });
  console.log('>>>>>',result); // {}
  if (result) {
    res.render('profile', { data: result});
  }
};

exports.delete_profile = async (req, res) => {
  // [before]
  // console.log(req.body);
  // User.delete_profile(req.body.id, () => {
  //   res.end();
  // });

  // [after]
  await models.User.destroy({
    where: { id: req.body.id },
  });
  res.end();
};

exports.edit_profile = async (req, res) => {
  // [before]
  // console.log(req.body);
  // User.edit_profile(req.body, () => {
  //   res.end();
  // });

  // [after]
  await models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  );
  res.end();
};

