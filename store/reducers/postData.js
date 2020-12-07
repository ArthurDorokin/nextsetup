const initialState = {
    posts: []
}

export const postData = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return {
                ...state,
                posts: action.payload,
            }
        default:
            return state
    }
}