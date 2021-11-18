//תרגיל  ראשון

/*const run = () => {
    call(checknum)
}
const call = (fun) => { fun() }
const checknum = () => {
    try {
        let number = document.getElementById("val").value
        if (isNaN(number)) {
            error
        }
    } catch (err) {
        alert("רק מספרים מותרים")
    }
}*/

//תרגיל שני

/*const run = () =>{
    call(showname)
}

const call = (fun) =>{fun()}

const showname = () =>{
    document.getElementById("btn").innerHTML = "katriel"
}*/

//תרגיל שלישי

/*const run = () =>{
    call(showrundom)
}

const call = (fun) =>{fun()}

const showrundom = () =>{
    let rundomNumber = Math.floor(Math.random() * 10000)
    document.getElementById("btn").innerHTML = rundomNumber
}*/

//(מקווה שהבנתי נכון את השאלה..)תרגיל רביעי

/*const run = () =>{
    call(showparam)
}

const call = (fun) =>{fun()}



const showparam = () =>{
    let number = +prompt("enter number")
    document.getElementById("btn").innerHTML = number
}*/

//תרגיל חמישי

//תרגיל שישי

/*const run = () =>{
    call(showcolor)
}

const call = (fun) =>{fun()}



const showcolor = () =>{
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let bgColor = "rgb(" + x + "," + y + "," + z + ")"
 
  
    document.body.style.background = bgColor
}*/

//תרגיל שביעי
/*const run = () =>{
    let green = "green"
    call(showcolor, green)
}

const call = (fun, green) =>{fun(green)}


const showcolor = (green) =>{
    document.body.style.background = green
}*/

//
/*const run = () =>{
    let x = "green"
    let y = "blue"
    let z = "red"
    let ar = [x, y ,z]
    let color = ar[ Math.floor(Math.random() * ar.length) ]
    call(showcolor, color)
}

const call = (fun, color) =>{fun(color)}


const showcolor = (color) =>{
    document.body.style.background = color
}*/

//תרגיל תשיעי

/*let interval = 0
const run = () =>{
    interval = setInterval(() => {
        
    let rundomNumber = Math.floor(Math.random() * 10000)
    document.getElementById("btn").innerHTML = rundomNumber
    }, 1000);
}*/

//תרגיל עשירי

/*let interval = 0
const run = () =>{
    interval = setInterval(() => {
        document.body.style.backgroundColor = random_bg_color()
    }, 1000
    )

}
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 //console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

const stop = () =>{
    clearInterval(interval)
}*/
