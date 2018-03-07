import {
	CREATE_GAME
} from '../constants/sapper';

const getRandomArbitary = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

const addBombs = (count, width, height) => {
	let bombs = [];
	for(let i = 0; i < width; i++){
		bombs[i] = [];	
		for(var j = 0; j < height; j++)
			bombs[i][j] = false;
	}

	while(count > 0){
		let x = getRandomArbitary(0, width-1);
		let y = getRandomArbitary(0, height-1);

		if(!bombs[x][y]){
			bombs[x][y] = true;
			count--;
		}
	}

	return bombs;
}

const initialSapperState = {
	bombsList: [],
	isStartGame: false
}

export const sapperReducer = (state = initialSapperState, action) => {
	switch (action.type){
		case CREATE_GAME: {
			const bombsList = addBombs(action.bombsCount, action.boardWidth, action.boardHeight);
			return {
				...state,
				bombsList: bombsList,
				isStartGame: true
			}
		}
		default:
			return state;
	}
}