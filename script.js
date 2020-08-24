let size = 16;
const container = document.querySelector('.container');
container.style.gridTemplateRows ='repeat('+size+',auto)';
container.style.gridTemplateColumns ='repeat('+size+',auto)';

for (i=0;i<(size*size);i++){
    const square = document.createElement('div')
    square.setAttribute('class', 'sqr');
    square.style.borderStyle='solid'
    square.style.borderWidth='1px'
    square.style.borderColor='pink'
    square.addEventListener('mouseover', e => {
      square.style.backgroundColor = 'black';
    });
    container.appendChild(square)
    }

    function clearSquare() {
        document.querySelector('.container').innerHTML = "";
    }
    
    function reset() {
        clearSquare();
        newSize = prompt('Pick the number of squares');
        const container=document.querySelector('.container');
        container.style.gridTemplateRows='repeat('+newSize+',auto)';
        container.style.gridTemplateColumns='repeat('+newSize+',auto)';
        
        for (i=0;i<(newSize*newSize);i++){
        const square = document.createElement('div');
        square.setAttribute('class', 'sqr');
        square.style.borderStyle='solid'
        square.style.borderWidth='1px'
        square.style.borderColor='pink'
        square.addEventListener('mouseover', e => {
        square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }}


    



