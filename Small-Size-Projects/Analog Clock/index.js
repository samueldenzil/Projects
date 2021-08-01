setInterval(() => {
    // Getting Time by using Date Object
    const d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    // Calculating angle of Rotation
    hRotaion = (30 * hTime) + (mTime / 2) + (sTime / 120);
    mRotation = (6 * mTime) + (sTime / 10);
    sRotation = 6 * sTime;

    // Rotating the hands of the clock
    hour.style.transform = `rotate(${hRotaion}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000)