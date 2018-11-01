let clock = document.getElementById('clock');
    

function clockX() {
    let time = new Date(),
        h = (time.getHours() % 12).toString(),
        m = time.getMinutes().toString(),
        s = time.getSeconds().toString();
    
    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    let clockString = h + ':' + m + ':' + s;
        

    clock.textContent = clockString;
    

   
}
clockX();
setInterval(clockX, 1000);