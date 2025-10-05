'use strict'

// Find an element by ID with error handling
function findCheckElement(argName) {
	
	try {
		
		const workElement = document.getElementById(argName);
		if (!workElement) throw new ElementError("Element with id = '"+argName+"\' not found");
		return workElement;
					
	} catch(err) {
		
		console.error(err.message);
		throw err;
	}		
			
}

// Apply selected positioning to elements
function applyElementPositioning() {
	
	try {
		
		// get cubes elements
		const elCubeBase 	= findCheckElement('demoCubeBase');
		const elCubeToMove 	= findCheckElement('demoCubeToPosition');
		
		// get position
		const elSelect		= findCheckElement('position');
		const position 		= elSelect.value;
		
		// get distance number
		const elInput1 		= findCheckElement('distance');		
		const distance	 	= parseInt(elInput1.value) || 0;
		
		// get offset number
		const elInput2 		= findCheckElement('offset');		
		const offset	 	= parseInt(elInput2.value) || 0;

		// Position configuration mapping
		const positionConfig = {
			
			top: 			() => PositionTools.positionTop(elCubeBase, elCubeToMove, distance),
			right: 			() => PositionTools.positionRight(elCubeBase, elCubeToMove, distance),
			bottom: 		() => PositionTools.positionBottom(elCubeBase, elCubeToMove, distance),
			left: 			() => PositionTools.positionLeft(elCubeBase, elCubeToMove, distance),
			
			topRight: 		() => PositionTools.positionTopRight(elCubeBase, elCubeToMove, distance, offset),
			topLeft: 		() => PositionTools.positionTopLeft(elCubeBase, elCubeToMove, distance, offset),
			bottomRight: 	() => PositionTools.positionBottomRight(elCubeBase, elCubeToMove, distance, offset),
			bottomLeft: 	() => PositionTools.positionBottomLeft(elCubeBase, elCubeToMove, distance, offset),
	
			topCenter: 		() => PositionTools.positionTopCenter(elCubeBase, elCubeToMove, distance),
			rightCenter: 	() => PositionTools.positionRightCenter(elCubeBase, elCubeToMove, distance),
			bottomCenter: 	() => PositionTools.positionBottomCenter(elCubeBase, elCubeToMove, distance),
			leftCenter: 	() => PositionTools.positionLeftCenter(elCubeBase, elCubeToMove, distance),
		}	
		
		// Execute selected positioning function
		positionConfig[position]();
		
	} catch(err) {
		
		throw err;
	}
}

// Initialize positioning button click handler
document.getElementById('createBtn').addEventListener('click', function(e) {
	
	applyElementPositioning();
	
});



