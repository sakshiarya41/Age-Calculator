
function getAge(){
    let dob=document.getElementById("dob");
    let age1=document.getElementById("dob").value;  //fetching user entered date value
    dob.addEventListener("change",displayAge);         // change in date input
    return age1;
};

function calcAge(){ 
    let now=new Date();                 //current date and time
    let userbirth=getAge();   
    let birth=new Date(userbirth);    // changing user input date to Date format
    let yr_diff=now.getFullYear()-birth.getFullYear();   
    let mon_diff=now.getMonth()-birth.getMonth();
    let date_dif=now.getDate()-birth.getDate();

    const arr=[0,2,4,6,7,9,11];
    const arr30=[1,3,5,8,10];   // storing months having 30 days

    //if current date is less than birth date


    if(date_dif<0){       
        mon_diff=mon_diff-1;                        //then don't consider current month
        if(arr30.includes(birth.getMonth())){
            date_dif=30-Math.abs(date_dif);          //and calc date diff
        }
        else{
            date_dif=31-Math.abs(date_dif);
        }
    }

    //if current month is less than birth month

    if(mon_diff<0){
        mon_diff=12-Math.abs(mon_diff);
        yr_diff=yr_diff-1;                          
    }


    const diff=[yr_diff,mon_diff,date_dif];
    return diff;
};

function displayAge(){
    const age=calcAge();

    //entered  date is future date
    if(age[0]<0){
        document.querySelector(".age").style.display="none";
        document.querySelector(".error").style.display="block";
    }
    else{
        document.querySelector(".age").style.display="block";
        document.querySelector(".error").style.display="none";
        let yr=document.getElementById("years");
        yr.textContent=age[0];
        let mn=document.getElementById("months");
        mn.textContent=age[1];
        let days=document.getElementById("days");
        days.textContent=age[2];
    }
};

getAge();