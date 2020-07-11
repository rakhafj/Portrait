export const GET_CATEGORY = 'GET_COLLECTION_CATEGORY';

export const getCategory = (category) => {
	return async (dispatch) => {
		dispatch({
			type: GET_CATEGORY,
			category,
		});
	};
};

// export function incrementAsync() {
// 	return async (dispatch) => {

// 		setTimeout(() => {
// 			dispatch(_add());
// 		}, 5000);
// 	};
// }
