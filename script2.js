const throttleFunction = (func, delay) => {
    
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
const btn = document.querySelector("#center");
btn.addEventListener("mousemove", throttleFunction((dets) => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute("src","https://images.unsplash.com/photo-1694181491519-8b7adcd7578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
    div.appendChild(img);
    div.classList.add('imagediv')
    div.style.left = dets.clientX + 'px'
    div.style.top = dets.clientY + 'px'
    document.body.appendChild(div)
    gsap.to(img,{
        y:"0",
        ease:Power3
    });
    setTimeout(function(){
        div.remove()
    },2000)
}, 300));
