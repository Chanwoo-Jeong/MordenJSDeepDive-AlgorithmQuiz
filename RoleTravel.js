//미쳐버린 리액트 roleTravel 

// 1. 처음 로딩될때 marker 생성이 안된다. 왤까?

// 이유 :  리액트 구글맵 라이브러리 사용중인데 useJsApiLoader useLoadScript 이 두개의 차이점이 뭐야? 이것에 대한 해답이였다.
// 난여지껏 useLoadScript 를 사용하고 있었다. 그래서 챗 GPT에게 물어봣는데

// useJsApiLoader와 useLoadScript는 모두 React에서 Google Maps JavaScript API를 로드하기 위한 커스텀 훅입니다. 그러나 두 가지 접근 방식은 약간 다릅니다.

// useLoadScript는 Google Maps JavaScript API를 비동기적으로 로드하기 위한 기능을 제공합니다. 이를 사용하여, 지도 컴포넌트가 렌더링되기 전에 API가 로드되고 초기화될 수 있습니다.

// 반면에 useJsApiLoader는 Google Maps JavaScript API를 로드하는 동안 로딩 상태를 관리하고, API가 로드될 때까지 대기할 수 있는 기능을 제공합니다. 이를 사용하여, 다른 컴포넌트에서도 Google Maps JavaScript API를 사용할 수 있습니다.

// 라고 차이점을 내놓았다.API가


// 즉 useLoadScript는 비동기적으로 수행하기 때문에 마커가 생성될 타이밍에 지도가 아직 생성되지 않을 수도 있다. 그렇기 때문에 마커를 생성하려 해도 아직 지도가 없기때문에 구현이 안되는 것이었다.

// useJsApiLoader 는 로드하는동안 로딩상태를 관리하고 구글맵 api가 로드될때까지 대기할 수 있는 기능을 제공하기 때문에 아주 자아알 마커가 생성되는것을 볼 수 있다.

// 2. useRef가 정상작동하는걸까?

// 윗 이유와 마찬가지로 구글맵이 아직 로드되지 않았는데 useRef를 하고 있으니 당연히 안되는 것이었다. useJsApiLoader를 사용하여 문제해결!

// 3. component 안에 있는 배열은 모조리 날아가버린다. 재랜더링 때문인걸까? 여지껏 눈치를 왜 못챘지?

// 4. 왜 데이터를 4개밖에 못가져 왔을까?

//뭔가 새벽에는 10개 낮에는 20개로 제한이 되어 있는걸까.................