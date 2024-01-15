let johnBtn = document.getElementById("johnBtn");
let janeBtn = document.getElementById("janeBtn");
let Allchat = document.querySelector(".Allchat");
let inp = document.getElementById("inp");
let send = document.getElementById("send");
let clear = document.querySelector(".clear button");
let h2 = document.querySelector(".h2 h2");
let nbrMsg = 0; 
let nom = "john";


// quand vous cliquez sur button john il va changer background de buttons et hidden notification
johnBtn.addEventListener("click", function(){
    h2.innerHTML = "John chatting...";
    johnBtn.style.background = "#600c98b5";
    janeBtn.style.background = "#eeeeeeb0";
    johnBtn.style.color = "#fff";
    janeBtn.style.color = "#000";
    console.log("clicked")
    nom = "john";
    johnBtn.querySelector("span").innerHTML = ""
    johnBtn.querySelector("span").style.backgroundColor = "transparent";
    nbrMsg = 0;

})

// quand vous cliquez sur button jane il va changer background de buttons et hidden notification
janeBtn.addEventListener("click", function(){
    h2.innerHTML = "Jane chatting...";
    janeBtn.style.background = "#600c98b5";
    johnBtn.style.background = "#eeeeeeb0";
    janeBtn.style.color = "#fff";
    johnBtn.style.color = "#000";
    console.log("clicked");
    nom = "jane";
    nbrMsg = 0;
    janeBtn.querySelector("span").innerHTML = ""
    janeBtn.querySelector("span").style.backgroundColor = "transparent";

})

//function a deux parametres le nom de personne qui envoyer un message et le numbre des messages qui envoyer
function clicksend(name, nbrMsg){
    if(nom == "jane"){
        let d = new Date();
        if(inp.value != ""){
            Allchat.innerHTML += `<div class="chatJane">
                                    <div class="name">Jane</div>
                                    <div class="msg">${inp.value}</div>
                                    <div class="time">${d.getHours()}:${d.getMinutes()}</div>
                                </div>`;
                                Allchat.scrollTop = Allchat.scrollHeight;
                                inp.value = "";
                                johnBtn.querySelector("span").innerHTML = nbrMsg
                                johnBtn.querySelector("span").style.backgroundColor = "red";
        }else{
            alert("enter a message")
        }
    }else if(nom == "john"){
        let d = new Date();
        if(inp.value != ""){
            Allchat.innerHTML += `<div class="chatJohn">
                                    <div class="name">John</div>
                                    <div class="msg">${inp.value}</div>
                                    <div class="time">${d.getHours()}:${d.getMinutes()}</div>
                                </div>`;
                                Allchat.scrollTop = Allchat.scrollHeight;
                                inp.value = "";
                                janeBtn.querySelector("span").innerHTML = nbrMsg
                                janeBtn.querySelector("span").style.backgroundColor = "red";
        }else{
            alert("enter a message")
        }
    }
}

//button qui envoyer le message
send.addEventListener("click", function(){
    nbrMsg++;
    clicksend(nom, nbrMsg);
})

//button supprimer tous les messages et notifications
clear.addEventListener("click", function(){
    Allchat.innerHTML = "";
    johnBtn.querySelector("span").innerHTML = ""
    johnBtn.querySelector("span").style.backgroundColor = "transparent";
    janeBtn.querySelector("span").innerHTML = ""
    janeBtn.querySelector("span").style.backgroundColor = "transparent";
    nbrMsg = 0;
})
