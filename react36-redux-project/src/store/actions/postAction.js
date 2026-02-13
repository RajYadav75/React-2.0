export const fetchPostsRequest = () => ({
    type: 'FETCH_POSTS_REQUEST',
});
export const fetchPostsSuccess = (posts) => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload:posts
});
export const fetchPostsFailure = (error) => ({
    type: 'FETCH_POSTS_FAILURE',
    payload: error,
});

export const fetchPosts = () => async (dispatch) => {
    // Dispatch The Fetch Posts
    dispatch(fetchPostsRequest());
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
        const data = await response.json();
        // Dispatch Fetch Success
        dispatch(fetchPostsSuccess(data));
    }catch(error) {
        // Dispatch Fetch Failure
        fetchPostsFailure(error.message);
    }



}

