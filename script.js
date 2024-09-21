const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNum= document.getElementById("day-name");
const yearName = document.getElementById("year");

const date = new Date();
const month = date.getMonth()
monthName.innerText = date.toLocaleString("en",{
    month:"long"
});

// const weekday = date.getDay()
dayName.innerText = date.toLocaleString("en",{
    weekday: "long"
})

// const number = date.getDate()
dayNum.innerText = date.getDate()
   
yearName.innerText = date.getFullYear();