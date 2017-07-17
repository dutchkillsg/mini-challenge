function btn1() {
    document.getElementById("result").innerText = "I'm Right";
}

function btn2() {
    document.getElementById("result").innerText = "No, I'm Right!";
}

document.getElementById("dare").addEventListener("mouseover", function(){
	alert("I fucking told you not to hover over me!!");
});


window.addEventListener("keypress",function(e) {
    var evalue = e.key
    document.getElementById("press").innerHtml=e.key
});



//question 4
document.getElementById('frm').addEventListener('submit',function(e) {
	var us = document.getElementById("user");
    var ps = document.getElementById("pass");
    if (us == /^(?=.*\d)*/ && ps == "12345678") {
        console.log("you are in")
      } else {
        return "incorrect"
      }
});

