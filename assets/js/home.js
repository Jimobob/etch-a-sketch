let grids = 16;
let color = 'pink';
let opacity = 0;
const container = document.querySelector('#container');

function createGrid(){
	for(let col = 0; col < grids; col++){
		for(let row = 0; row < grids; row++){
			let gridCell = document.createElement('div');
			gridCell.setAttribute('class', 'gridCell');

			container.appendChild(gridCell);

			gridCell.addEventListener('mouseover', function(e){
				event.target.style.background = color;
			})
		}
	}
}

function reset(){
	while(container.firstChild){
		container.removeChild(container.firstChild);
	}
	createGrid();
}

function resize(){
	grids = prompt("Enter a number for the squares per side.");
	document.body.style.setProperty('--columnNumber', grids);
	reset();
}
	
createGrid();