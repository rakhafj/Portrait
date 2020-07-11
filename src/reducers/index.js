import {GET_CATEGORY } from '../actions'

const initialState = {
	items: [
		{
			img: 'images/man.jpg',
			category: 'Photograph',
			name: 'Man',
			artist: 'A',
		},
		{
			img: 'images/boy.jpg',
			category: 'Photograph',
			name: 'Man',
			artist: 'A',
		},
		{
			img: 'images/girl.jpg',
			category: 'Photograph',
			name: 'Man',
			artist: 'A',
		},
		{
			img: 'images/header-1.jpg',
			category: 'Photograph',
			name: 'Man',
			artist: 'A',
		},
		{
			img: 'images/man.jpg',
			category: 'Photograph',
			name: 'Man',
			artist: 'A',
		},
	],
	category: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORY:
			return { 
                ...state,
                category : items.filter(item => item.category === action.category).map(item => item.category)
            };
		default:
			return state;
	}
};
