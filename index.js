console.log("working");
function time() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am_pm = document.getElementById("ampm");
var time = new Date();
var hrs = time.getHours();
var mins = time.getMinutes();
var sec = time.getSeconds();

var am_pm = "AM";
if(hrs==0){
    hrs=12; //11.59---00.00----12.00
}
if(hrs>12){
    hrs = hrs-12; //24 hrs format into 12 hours format 
    am_pm = "PM";
}
if(hrs<10){
    hrs="0"+hrs;
}

if(mins<10){
    mins="0"+mins;
}

if(sec<10){
    sec="0"+sec;
}

hours.innerText = hrs
minutes.innerText = mins
seconds.innerText = sec
am_pm.innerText = am_pm


}time();
var onesecond = 1000;
setInterval(time,onesecond);




function setTime(){

        var a =  document.getElementById("wake_up_time").value
        var b =  document.getElementById("lunch_time").value 
        var c =  document.getElementById("nap_time").value
        var d =  document.getElementById("night_time").value
        

        var hourr = new Date().getHours();


        if(a == hourr)
        {

            document.getElementById("good").innerText = "GOOD MORNING!!  !!"

            document.getElementById("breakfast").innerText = "grab some healthy breakfast!!!"

            document.getElementById("pic").src = "./pic.png";

        }
        
        if (b == hourr){
            document.getElementById("good").innerText = "Good Afternoon !! Take some Sleep"
 
            document.getElementById("breakfast").innerText = "let's have some lunch !!"

            document.getElementById("pic").src = "./lunchtime.svg";
        
        }

        if (c == hourr){
            document.getElementById("good").innerText = "Good Evening !!"
 
            document.getElementById("breakfast").innerText = "Stop Yawning ,Get some Tea"

            document.getElementById("pic").src = "./nap.png";
        
        }

        
        if (d == hourr){
            document.getElementById("good").innerText = "Good Night!!"
 
            document.getElementById("breakfast").innerText = "Close Your Eyes And Go To Sleep "

            document.getElementById("pic").src = "./night.png";
        
        }

}






