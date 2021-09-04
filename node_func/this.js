console.log(this); // 전역일 떄 global이 아님
console.log(this === module.exports);

function a(){
  console.log(this === global); // global 이다
}
a();