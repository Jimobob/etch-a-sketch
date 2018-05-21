let grids = 16;
let color = 'gray';
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
	
createGrid();