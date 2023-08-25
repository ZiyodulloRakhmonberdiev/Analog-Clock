const deg = 6, 
    hr = document.querySelector('#hr'), 
    min = document.querySelector('#min'), 
    sec = document.querySelector('#sec');

setInterval(() => {
    let day = new Date(), 
    h = day.getHours() * 30,
    m = day.getMinutes() * deg,
    s = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${h+(m/12)}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;

    console.log(h);
}, 1000)
