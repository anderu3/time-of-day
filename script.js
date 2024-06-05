
let myDate = new Date();
let myHour = myDate.getHours();
let myGreetings = "";
let myColor = "";
let myPic = "";

if(myHour > 5 && myHour < 12){//morning
    myGreetings = "Good Morning!";
    myColor = "#faf0ca";
    myPic = "morning.jpg";
}else if(myHour > 12 && myHour < 18){//afternoon
    myGreetings = "Good Afternoon!";
    myColor = "#f4d35e";
    myPic = "afternoon.jpg";
}else if(myHour > 18 && myHour < 23){//evening
    myGreetings = "Good Evening!"
    myColor = "#ffc300"
    myPic = "images/evening.jpg"
}else{//night
    myGreetings = "Good Night!";
    myColor = "#006494";
    myPic = "images/night.jpg"
}

document.getElementById("my-greeting").innerHTML = myGreetings;
document.querySelector("html").style.backgroundColor = myColor;
document.getElementById("my-pic").src = "images/" + myPic;

  