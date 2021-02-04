const search=document.getElementById("search_form");
const title=document.getElementById("title");
const status=document.getElementById("status");
const icon=document.getElementById("weather_icon");
const temp=document.getElementById("temp");
const input=document.getElementById("city_input");

 const fetchApi=()=>{

        const weatheUrl=`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=1a7354c7c009f8dfb1d607d297e4f7ca` 
        fetch(weatheUrl)
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            title.innerText=data.name;
            status.innerText=data.weather[0].description
        
            console.log(status.innerText);
const iconUrl=`http://openweathermap.org/img/w/${data.weather[0].icon}.png`
     icon.setAttribute('src', iconUrl);
            temp.innerText = Math.round(data.main.temp)
        
        }) 
            
}
   

search.addEventListener('click', (e)=>{
  e.preventDefault()   

 fetchApi();

  })
