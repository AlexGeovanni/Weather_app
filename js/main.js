const container = document.getElementById('container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');


// consulta es a traves de una api de clima, modo de la consulta es de paises.
search.addEventListener('click',async()=>{
    const APIK = '3205aec08bf6921991d13ff48c3859ed';
    const city = document.querySelector('.search-box input').value;
    if(city==''){
        return
        // https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3205aec08bf6921991d13ff48c3859ed

    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIK}`;

    let data = await fetch(url).then((res)=>{
        if(res.status !="200"){
            if(screen.width > 768){
                container.style.height="480px"
            }else{
                container.style.height="400px"
            }
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }
        else{
            return res.json();
        }
    })
    if(data){
        let temperature = data.main.temp;
        let humidity = data.main.humidity;
        let speed = data.wind.speed;
        let description = data.weather[0].description;
        let nameImg=(data.weather[0].main).toLowerCase()
        console.log(temperature,humidity,speed,description,nameImg)
        Temperatures(temperature,humidity,speed,description,nameImg);
    }
})



function Temperatures(Te,Hu,Sp,Des,Img){
    let imgen = document.querySelector('.weather-box img');
    let temperature = document.querySelector('.weather-box .temperature');
    let description = document.querySelector('.weather-box .description');
    let humidity = document.querySelector('.weather-details .humidity span');
    let wind = document.querySelector('.weather-details .wind span');

    if(screen.width > 768){
        container.style.height="550px"
    }else{
        container.style.height="450px"
    }

    imgen.src= ''
    imgen.src=`./img/${Img}.png`
    temperature.innerHTML= Te +' °C';
    humidity.innerHTML = Hu;
    wind.innerHTML= Sp;
    description.innerHTML= Des;

    error404.style.display ='none'
    weatherBox.style.display = '';
    weatherDetails.style.display = '';
    weatherBox.classList.add('fadeIn');
    weatherDetails.classList.add('fadeIn');


}
