const { console } = require("console");
const url = require("url");
const { URL } = url;
const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=%EC%B2%AD%EB%85%84%EC%B7%A8%EC%97%85%EC%82%AC%EA%B4%80&tqi=hWg%2F%2Bdp0YihsskkkNXhssssssB8-031369";
const naver = new URL(string);

console.log(url.formet(naver));
console.log(url.parse(string));

console.log(naver.searchParams);