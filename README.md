# CDLS : Creatable Design Language System


> 디자인 스타일 가이드와 HTML/CSS 패턴, 목업을 코드로 구현하고 관리하는 프로젝트입니다.

> vue-webpack-boilerplate 로 제작되었습니다.

> https://github.com/vuejs-templates/webpack

## Design Language System

Pages
``` bash
/home
/style
/patterns
```

CSS
``` bash
/static/css/cdls/core/
common.scss : 아래 모든 scss 들을 포함하는 최상위 scss
-- reset.scss : 기본 css 정의 오버라이드 (.cr 클래스 사용)
-- layout.scss : Grid System 및 요소 배치와 관련된 정의등
-- colors.scss : 모든 색 관련 정의
-- text.scss : 폰트 크기, 줄간 등 정의
-- ui.scss : input, .btn 등 UI 요소 정의
-- utils.scss : 그 외 svg 등 요소들에 대한 정의
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
