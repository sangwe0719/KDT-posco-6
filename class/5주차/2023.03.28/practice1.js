// 실습2. Promise -> async/await 기본코드
// call, back, hell 함수: 실습 23의 함수와 동일
function call(name) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log(name);
        resolve(name); // 작업 성공시 then(name)
      }, 1000);
    });
  }
  
  function back() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('back');
        resolve('back'); // 작업 성공시 then('back')
      }, 1000);
    });
  }
  
  function hell() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('callback hell');
      }, 1000);
    });
  }


async function exec(){
    let user = await call('kim');
    console.log(user + '반가워');
    let back2 = await back();
    console.log(back2 + '을 실행했구나');
    let hell2 = await hell();
    console.log('여기는' + hell2);
}

exec();

  
  
  
  
  
  
  