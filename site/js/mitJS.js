





//Hoveddel

  

document.getElementById("arrowbutton").addEventListener("click",function () {
    
    document.getElementById("tekst").scrollIntoView(true);
    
});


var videolist = ["video1", "video2", "video3"];

// Pauser og starter videoer på klik
function videocontrol(elementId, viskontroller){
    if (viskontroller === true){
        document.getElementById(elementId).setAttribute("controls","");
    } else {
        document.getElementById(elementId).addEventListener("click", function() {
            if (document.getElementById(elementId).paused) {
                document.getElementById(elementId).play();
            } else {
                document.getElementById(elementId).pause();
            }
        });
    }
}

//Køre start stop scriptet på alle videoer
for(var i=0; i<videolist.length; i++){
videocontrol("videolist[i]", false);
}
