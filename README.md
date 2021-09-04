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
- 전역일 때 module.exports
- 함수 안에서는 global 자바스크립트랑 같음.

## require
- require 되믄 캐싱이 된다. cache 안에 저장을 해둠
- require.main은 노드 실행 시 첫 모듈을 가리킴

## 순환 참조
- dep1이 dep2를 참조하고 dep2가 dep1을 참조하는 경우
- 순환 참조되는 경우는 피하는게 좋음

## process
- 현재 실행 중인 노드 프로세스에 대한 정보를 담고 있다.
- process.env : 시스템 환경 변수들이 들어있는 객체
- process.nextTick : 이벤트 루프가 다른 콜백 함수들 보다 nextTick의 콜백 함수를 우선적으로 처리함
- process.exit : 노드 종료