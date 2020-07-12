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
			category: 'Drawing',
			name: 'Man',
			artist: 'A',
		},
		{
			img: 'images/header-1.jpg',
			category: 'Drawing',
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
    category : []
};

 const itemList = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORY:
			return {  
                ...state,
                category : state.items.filter(item => item.category === action.category).map(item => item.img)
            };
		default:
			return state;
	}
};

export default itemList
