let box = document.getElementById("object-box")

box.addEventListener('click' , function () {
        let style = window.getComputedStyle(box);

        //access css properties so script can apply to any position and width
        let styleWidth = style.getPropertyValue('width');
        let styleLeft = style.getPropertyValue('left');

        //convert strings to numbers (explicit coercion)
        let boxWidth = Number(styleWidth.match(/[0-9]/gi).join(''));
        let pos = Number(styleLeft.match(/[0-9]/gi).join(''));

        let id = setInterval(frame, 4);

        function frame() {
          if (pos === window.innerWidth - (40 + boxWidth)) {
            clearInterval(id);
          } else {
            pos++; 
            box.style.left = pos + 'px'; 
          }
        }
})