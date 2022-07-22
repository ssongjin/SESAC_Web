const obj = {
    out: {
        in: {
            key: 'value'
        }
    }
};
console.log(obj);
console.log(obj["out"]);
console.log(obj["out"]["in"]);

console.time("시간시간");

console.error("에러!");

console.trace();
/* 맨 첫번째 발생한 오류 찾는 것. 레이블명 넣을 수 있음*/

console.table([{ name: 'abc', birth: 1990 }, { name: 'def', birth: 1978 }]);

console.dir(obj, { colors: true, depth: 2 });
console.dir(obj, { colors: false, depth: 1 });

console.timeEnd("시간시간");
/*time는 레이블이 동일해야 가능함*/