const clock = document.querySelector('.clock');

//To update the time on the digital clock every second
const tick = () => {
    const now = new Date();

    const hours = zeroPad(now.getHours(), 2);

    const minutes = zeroPad(now.getMinutes(), 2);

    const seconds = zeroPad(now.getSeconds(), 2);

    const html = `
    <span>${hours}</span> :
    
    <span>${minutes}</span> :
    
    <span>${seconds}</span>
    `;

    clock.innerHTML = html;
}

const zeroPad = (num, places) => String(num).padStart(places, '0');

setInterval(tick, 1000);