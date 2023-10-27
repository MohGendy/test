const msgdiv = document.getElementById("msgd")
const msginput = document.getElementById("msgi")


function send(){
    var msg2 = msginput.value
    localStorage.setItem("msg2",msg2)
    alert(`msg sent is : ${msg2}`)
}
function getmsg(){
    var msg1 = localStorage.getItem("msg1")
    msgdiv.innerHTML = msg1
}

setInterval(getmsg,1000)

// localstorage => setItem (add), getItem (get), clear (del all), removeItem (del)
// sessionstorage => setItem (add), getItem (get), clear (del all), removeItem (del)
// JSON => stringify (to str) , parse (return to original)
// setInterval => repet function