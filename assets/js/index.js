const msgdiv = document.getElementById("msgd")
const msginput = document.getElementById("msgi")


function send(){
    var msg1 = msginput.value
    localStorage.setItem("msg1",msg1)
    alert(`msg sent is : ${msg1}`)
}

function getmsg(){
    var msg2 = localStorage.getItem("msg2")
    msgdiv.innerHTML = msg2
}

setInterval(getmsg,1000)