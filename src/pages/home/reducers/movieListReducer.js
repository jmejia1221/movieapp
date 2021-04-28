import * as types from '../actions/actionTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case types.ADD_MOVIE:
            return {
                ...state,
                movieList: [...state.movieList, action.payload]
            };
        default:
            return state;
    };
};

export default reducer;