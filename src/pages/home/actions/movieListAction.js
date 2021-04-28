export const addMovie = (payload, dispatch) => {
    dispatch({
        payload,
        type: 'ADD_MOVIE'
    })
}