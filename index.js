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

        //moving eyes
        let eyeOne = document.getElementById('eye1');
        let eyeTwo = document.getElementById('eye2');

        let eyeOneStyle = window.getComputedStyle(eyeOne);
        let eyeTwoStyle = window.getComputedStyle(eyeTwo);

        let eyeOneLeft = eyeOneStyle.getPropertyValue('left');
        let eyeOneTop = eyeOneStyle.getPropertyValue('top');

        let eyeTwoLeft = eyeTwoStyle.getPropertyValue('left');

        let eyeId = setInterval(eyeFrame, 100);

        let oneLeftVal = Number(eyeOneLeft.match(/[0-9]/gi).join(''));
        let oneTopVal = Number(eyeOneTop.match(/[0-9]/gi).join(''));

        let twoLeftVal = Number(eyeTwoLeft.match(/[0-9]/gi).join(''));

        function eyeFrame(){
            console.log(oneTopVal)
            if(oneLeftVal === 300){
                clearInterval(eyeId)
            }
            else{
            if(oneTopVal !== 215){
                oneTopVal--;
                eyeOne.style.top = oneTopVal + 'px';
            }
            oneLeftVal++;
            twoLeftVal++;
            eyeOne.style.left = oneLeftVal + 'px';
            eyeTwo.style.left = twoLeftVal + 'px';
            }
        }
})