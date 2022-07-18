const func1 = new Promise((resolve, reject) => {
    var flag = true;
    if (flag) resolve("성공");
    else reject("실패");
})

func1.then(value => {
    console.log(value);

}).catch(err => {
    console.log(err);
});