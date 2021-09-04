- {} = require() -> module.export
- import {} from ''; -> export.default 파일 명 (import가 최신)

- module.exports === exports === {}
- 함수를 넣으면 module.exports !== exports === {}

 ## global : 노드의 전역 객체  (브라우저 : window)
 - global 생략 가능
 - golbal 속성에 값을 대입하면 다른 파일에서도 사용 가능
 
 ## 타이머 메서드
 - set
 - setTimeout((){}, 1000) : 1초 뒤 실행   (콜백 함수, 밀리초) -> 변수에 담으면 취소가능
 - setInterval(콜백 함수, 밀리초) : 변수에다가 담아줘야함. -> 반복 작동을 하는데 clearInterval(변수 명) 취소를 함
 - setImmediate(콜백함수) : 바로 실행함. 동시에 여러개를 실행할 때 사용 이것도 취소가 가능함
  - 왜냐면 호출 스택 -> 백그라운드 -> 테스큐 -> 호출스택 이렇게 흘러서 실행 전에 취소를 하면 취소가 된다!

## __filename, __dirname
  __filename : 현재 파일 경로 
  __dirname : 현재 폴더(디렉터리) 경로


## this
- 
  