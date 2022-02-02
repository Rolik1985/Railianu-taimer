export const Stopwatch = (timer) => {
    let sec = timer % 60,
        min = Math.floor(timer / 60),
        hour = Math.floor(timer / 3600);
    let secondWatch = (sec <= 9) ? `0${sec}` : `${sec}`,
        minutWatch  = (min <= 9) ? `0${min}` : `${min}`,
        hoursWatch  = (hour <= 9) ? `0${hour}` : `${hour}`;
    
    return `${hoursWatch}:${minutWatch}:${secondWatch}`
}