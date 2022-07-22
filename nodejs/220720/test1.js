async function exec(){
    let user = await login("kim");
    console.log(user+"님 환영합니다.");
    let videos = await getVideo(user);
    console.log(videos);
    let title = await getDetail(videos[0]);
    console.log(title);
}

exec();