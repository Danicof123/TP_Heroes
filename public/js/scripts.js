const d = document,
      w = window,
    $header = d.querySelector('.header');

d.addEventListener('DOMContentLoaded' , e => {
    
    w.addEventListener('mousemove', e => {        
        let x = `${Math.floor(e.clientX) - innerWidth}`,
            y = `${Math.floor(e.clientY) - innerHeight}`;

        if(x > 0) x = 0; 
        if(y > 0) y = 0;

        let posBackground = x*.1 + "px " + y*.1 + "px";
        let posForeground = x*.3 + "px " + y*.3 + "px";

        $header.style.backgroundPosition = posForeground + ", " + posBackground;
        
    })
})