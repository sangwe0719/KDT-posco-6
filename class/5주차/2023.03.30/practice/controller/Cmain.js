 const result = require("../model/result");

 exports.main = (req, res) => {
   res.render("practice1");
 };

// 실습1
//  exports.login = (req, res) => {
//   const user = User.getComments()[0]; 

//    if (req.body.id === user.userId &&req.body.pw === user.userPw) {
//      res.send({ isLogin: true, userInfo: req.body });
//    } else {
//     res.send({ isLogin: false });
//    }
//  };

// 선택 실습
exports.axios2 = (req, res) => {
    const userDatas = result.users.split('\n');
    console.log(userDatas);
    // [ 'apple//1234//사과사과', 'banana//4321//바나나나나', 'happy//qwer1234//해피해피' ]
  
    const users = []; // 유저 정보 배열
    const userIds = []; // 유저 아이디만 저장 배열
    for (let user of userDatas) {
      console.log(user);
      // apple//1234//사과사과
      // banana//4321//바나나나나
      // happy//qwer1234//해피해피
  
      users.push({
        realId: user.split('//')[0], // apple -> banana -> happy
        realPw: user.split('//')[1], // 1234 -> 4321 -> qwer1234
        name: user.split('//')[2], // 사과사과 -> 바나나나나 -> 해피해피
      });
      userIds.push(user.split('//')[0]); // apple -> banana -> happy
    }
    console.log(users);
    console.log(userIds);
  
    // 사용자가 폼에 입력한 값 vs. 정답 배열
    // 사용자가 폼에 입력한 아이디: req.body.userId
    const idx = userIds.indexOf(req.body.userId);
    if (idx >= 0) {
      // 아이디 있음
      console.log(users[idx]);
      // { realId: 'banana', realPw: '4321', name: '바나나나나' }
  
      if (users[idx].realPw === req.body.userPw) {
        // 아이디 있고, 비번 맞음
        res.send({ isLogin: true, userInfo: users[idx] });
      } else {
        // 아이디 있고, 비번 틀림
        res.send({ isSuccess: false });
      }
    } else {
      // 아이디 없음
      res.send({ isSuccess: false });
    }
  };