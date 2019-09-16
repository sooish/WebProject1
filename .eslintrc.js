module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends":"eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "constructor-super": 2,
        "for-direction": 2,
        "getter-return": 2,
        "no-async-promise-executor": 2,
        "no-case-declarations": 2,
        "no-class-assign": 2,
        "no-compare-neg-zero": 2,
        "no-cond-assign": 2,
        "no-const-assign": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-empty-pattern": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-semi": 2,
        "no-fallthrough": 2,
        "no-func-assign": 2,
        "no-global-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-misleading-character-class": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-new-symbol": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-prototype-builtins": 2,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-self-assign": 2,
        "no-shadow-restricted-names": 2,
        "no-sparse-arrays": 2,
        "no-this-before-super": 2,
        "no-undef": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "no-unsafe-negation": 2,
        "no-unused-labels": 2,
        "no-useless-catch": 2,
        "no-useless-escape": 2,
        "no-with": 2,
        "require-atomic-updates": 2,
        "require-yield": 2,
        "use-isnan": 2,
        "valid-typeof": 2,
        "no-unused-vars": 2,
        "no-var": 2,
        "semi-spacing": 2,
        "semi-style": 2,
        "quotes": 2,                            //문자 쌍따움표
        "semi": 2,                              //세미콜론
        "array-bracket-spacing": 2,             //배열생성시 괄호의 각 안쪽은 공백 금지
        "arrow-spacing": 2,                     //arrowFunction 화살표 앞뒤로 공백
        "block-spacing": 2,                     //{와 }의 각 안쪽은 공백
        "comma-spacing": 2,                     //,다음은 항상 공백
        "computed-property-spacing": 2,         //[와 ]의 각 안쪽은 공백 금지
        "no-spaced-func": 2,                    //함수이름과 () 사이 공백 금지
        "no-multi-spaces": 2,                   //공백은 2번이상금지
        "space-infix-ops": 2,                   //연산자 앞뒤로 공백 필요
        "no-multiple-empty-lines": 2,           //공백란 2줄이상연속 금지
        "no-trailing-spaces": 2,                //줄 마지막에 공백금지
        "brace-style": 2,                       //같은 라인 중괄호 C언어 스타일 ㄴㄴ
        "curly": 2,                             //{}생략 금지
        "lines-between-class-members": 2,       //클래스 안에서 멤버간 한줄공백
        "indent": ["error", 4],                 //1tab 들여쓰기
        "space-before-function-paren" : ["error", "never"],  //매개변수간 ,를 기준으로 한칸 공백
        "keyword-spacing" : 2                   //예약어 뒤에 공백 추가
    }
};