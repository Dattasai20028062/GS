function fun(){
    let box = document.getElementById("cb1");
    let load = document.getElementById("loading");
    load.style.visibility="visible";
    let con = document.getElementById("cls-bd");
    let img= document.getElementById("card-im");
    let nouser =document.getElementById("nouser");
    let ser = document.querySelector(".input-group");
    con.style.visibility="hidden";
    img.style.visibility="hidden";
    username = document.getElementById("username").value;
    username = username.split(' ').join('')
    fetch("https://api.github.com/users/" + username)
    .then((result) => {
        if (result.status == 404){
            console.log("NO USER FOUND");
            img.src = "./images/nogit.png"
            img.style.visibility = "visible";
            nouser.style.visibility="visible";
            nouser.innerHTML="NO USER FOUND";
            box.style.padding ="0"
            img.style.margin = "30px"
            return ;
        }
        return result.json();
    })
    .then((data) => {
        load.style.visibility="hidden";
        box.style.paddingBottom ="0";
        img.src = data.avatar_url;
        img.style.visibility = "visible";
        img.style.borderRadius ="50%";
        img.style.width = "200px";
        img.style.height = "200px";
        nouser.style.visibility="visible";
        ser.style.display = "none";
        nouser.innerHTML=`
        <h1>Profile Found</h1> 
        <h1> ${data.name} </h1>
        <h5> Followers : ${data.followers}  |  Following : ${data.following} </h5>
        <button class="btn btn-outline-success btn-lg btn-block" style="margin-top:50px;" onclick="pro()" type="button">Repos</button>`;
    })
}
function pro()
{
    let load = document.getElementById("loading1");
    let profile = document.getElementById("profile");
    let con = document.getElementById("con");
    con.style.display = "none";
    profile.style.display ="block";
    console.log(username);
    fetch(`https://api.github.com/users/${username}/repos`)
    .then((result) => result.json())
    .then((data)=>{
        console.log(data);
        load.style.display="none";
        document.getElementById("cb2").innerHTML=data.map(repos => 
            `
            <div class = "col" id="col">
                <a href="https://github.com/${repos.full_name}" target="_blank">${repos.name}</a>
            </div>
            `)
    })

}  