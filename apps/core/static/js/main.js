import { tick } from "./utils.js"


class Circle {
    constructor(){
        this.x = (Math.random() * (window.innerWidth/2)) + window.innerWidth/4 
        this.y = (Math.random() * (window.innerHeight/2)) + window.innerHeight/4
        this.size = 35
        this.glow = false
        this.time = new Date()
        this.glow_inc = 0
        this.glow_time = new Date()
    }
    draw(){
        c.beginPath();
        //c.filter = "brightness(1)";
        if(this.glow){
            if(new Date() - this.glow_time > 100){
                this.glow_time = new Date()
                this.glow_inc = this.glow_inc + 3
            }
            c.shadowBlur = 20 + this.glow_inc
        } else {
            c.shadowBlur = 0
        }
       
        c.shadowColor = 'rgba(255, 255, 255, 1)'; // Glow color
        c.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        c.fillStyle = "white";
        c.fill();
        c.lineWidth = 0;
        c.strokeStyle = "white";
        c.stroke();

        if(new Date() - this.time > 5000){
            this.time = new Date()
            this.update()
        }
    }
    update(){
        this.x = (Math.random() * (window.innerWidth/2)) + window.innerWidth/4 
        this.y = (Math.random() * (window.innerHeight/2)) + window.innerHeight/4
        this.size = ((Math.random() * 2) + 1) * 25
    }
}


let circle = new Circle()

function drawCircle(){
    circle.draw()
}

function animate(){
    c.clearRect(0,0,canvas.width,canvas.height)

    is_next_frame = tick()
    drawCircle()

    requestAnimationFrame(animate)
}


animate()

document.addEventListener('touchstart',(e)=>{
    let x = e.changedTouches[0].clientX
    let y = e.changedTouches[0].clientY
    //console.log(circle.x,circle.y)
    //console.log(x,y)

    let is_in_circle = isPointInCircle(x,y,circle.x,circle.y,circle.size)
    
    if(is_in_circle){
        circle.glow = true
    } else {
        circle.glow = false
        circle.glow_inc = 0
    }
})

document.addEventListener('touchend',(e)=>{
    circle.glow = false
    circle.glow_inc = 0
})

function isPointInCircle(pointX, pointY, circleX, circleY, radius) {
    // Calculate the distance between the point and the circle's center
    const distance = Math.sqrt(Math.pow(pointX - circleX, 2) + Math.pow(pointY - circleY, 2));

    // Check if the distance is less than or equal to the radius
    return distance <= radius;
}
