function fun(){
    let box = document.getElementById("cb1");
    let load = document.getElementById("loading");
    load.style.visibility="visible";
    let con = document.getElementById("cls-bd");
    let img= document.getElementById("card-im");
    let nouser =document.getElementById("nouser");
    con.style.visibility="hidden";
    img.style.visibility="hidden";
    let username = document.getElementById("username").value;
    username = username.split(' ').join('')
    fetch("https://api.github.com/users/" + username)
    .then((result) => {
        if (result.status == 404){
            console.log("NO USER FOUND");
            img.src = "images/nogit.png"
            img.style.visibility = "visible";
            nouser.style.visibility="visible";
            nouser.innerHTML="NO USER FOUND";
            box.style.padding ="0"
            img.style.margin = "30px"
        }
        return result.json();
    })
    .then((data) => {
        console.log(data);
        load.style.visibility="hidden";
        img.src = data.avatar_url;
        img.style.visibility = "visible";
        img.style.borderRadius ="50%";
        img.style.width = "200px";
        img.style.height = "200px";
        nouser.style.visibility="visible";
        nouser.innerHTML="PROFILE FOUND";
    })
}