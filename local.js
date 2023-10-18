// require('module.js')

// const id = document.getElementsByName('id')
// const pw = document.getElementsByName('pw');

// if(id.value == "" || pw.value == ""){
//   alert("로그인 불가")
// }

// var letters = 'abc'
var usename="Asc"
var usename1="1Aa"
var regex=/^[a-z0-9]*$/;
var regey=/^[A-Z0-9]*$/;
var regez=/^[a-zA-Z0-9]*$/;


if(!regex.test(usename1) && !regey.test(usename1)){
  console.log("성공")
}else{console.log("실패")}