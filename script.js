const canvas = document.querySelector('#fullContainer');

const sizeButton = document.querySelector('#sizeButton');
sizeButton.addEventListener('click', () =>{
    let newSize = prompt('Enter size (number of boxes on each side).' , '');
    if(newSize > 100)
        newSize = 100;
    drawCanvas(newSize);
})

function drawCanvas(size)
{
    while(canvas.firstChild)
    {
        console.log('killing children');
        canvas.removeChild(canvas.firstChild);
    }
    for (let i = 0; i < size; i++)
    {
        const row = document.createElement('div');
        row.className = 'row';
        canvas.appendChild(row);
        console.log(i);
        
        for (let j = 0; j < size; j++)
        {
            const slot = document.createElement('div');
            slot.className = 'slot';

            slot.addEventListener('mouseenter', (e)=>{
                //e.target.style.background = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
                e.target.style.background = 'black';
                e.target.style.opacity = e.target.style.opacity == 0 ? .1 : +e.target.style.opacity + .1;
                console.log(e.target.style.opacity);
            });
            row.appendChild(slot);
            console.log(`>${j}`);
        }
    }
}


drawCanvas(16);
