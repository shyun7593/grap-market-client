import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  //useState에 들어가는 값 : 기본값
  //즉, 첫번째 인자 값 time은 0부터 시작.
  console.log("컴포넌트 업데이트");
  React.useEffect(function () {
    setTime(time + 1);
  }, []);
  return (
    <div>
      <h3>{time}</h3>
      <button>1씩 올려주세요</button>
      <button>초기화 합니다</button>
    </div>
  );
}
