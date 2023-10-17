let inputEle=document.getElementById("location-input");
let tempEle=document.getElementById("temp-value");
let locEle= document.getElementById("location");
let weatherEle = document.getElementById("weather");
let btnEle = document.getElementById("btn");
let icon = document.getElementById("icon");
const apikey = "e221a63c57f4488fd4fce74521fcfcd1";
btnEle.onclick = function(){
    if(inputEle.value===""){
        alert("Please enter valid location!")
    }else{
        loc = inputEle.value;
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data);
            const{name} = data
            const{feels_like} = data.main
            const{description} = data.weather[0]
            tempEle.innerText=Math.floor(feels_like-273);
            locEle.innerText = name;
            weatherEle.innerText = description
        })
        .catch(()=>{
            alert("Eter valid location")
        })
        inputEle.value=""
    }
}