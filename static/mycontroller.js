
window.onload = () => {
    
    if (this.window.document.getElementsByTagName('html')[0].id === 'home') {
        loadParamHome();
    }
};

loadParamHome = () => {
    const userCookie = JSON.parse(decodeURIComponent(document.cookie.match(/user=(.*);?/)[1])),
        lastTime = moment(userCookie.lastTime),
        nowTime = moment(userCookie.nowTime),
        diffTime = nowTime.diff(lastTime, 'milliseconds'),
        monthsDiff = moment.duration(diffTime).format(),
        labelTime = document.getElementById('time');
    
    labelTime.innerHTML = monthsDiff;

    //TODO :: Fraccionar y mostrar fracciones de tiempo por separado
}

logout = () => {
    window.location.href = "http://localhost:3000/logout";
}