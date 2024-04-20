
function showDescription(name, description) {
    document.getElementById('product-description').innerHTML = `
        <h3>${name}</h3>
        <p>${description}</p>
    `;
}
function current() {

    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let d = a.getDate()
    let mo = a.getMonth()
    let y = a.getFullYear()
    console.log(d, mo, y)

    let time = "Hours:" + h + "\nMinutes" + ":" + m + "\tSecond:" + s + "\nDate:" + d + '/'  + y;
    document.getElementById("btn").innerText = time;

    let t = setInterval(function () {
        current();

    }, 1000);
}
current();