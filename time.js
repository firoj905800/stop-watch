let hrs=document.getElementById("hrs")
let mins=document.getElementById("mins")
let sec=document.getElementById("sec")

setInterval(()=>{
    
   
let CurrentTime=new Date();

hrs.innerHTML=CurrentTime.getHours();
mins.innerHTML=CurrentTime.getMinutes();
sec.innerHTML=CurrentTime.getSeconds();
},1000)

let year=document.getElementById("year")
let month=document.getElementById("month")
let day=document.getElementById("day")
setInterval(()=>{
    let CurrentDate=new Date();

    year.innerHTML=CurrentDate.getFullYear();
    month.innerHTML=CurrentDate.getMonth();
    day.innerHTML=CurrentDate.getDay()+3;
})