import * as types from '../types'
import axios from 'axios';

export const fetchPosts = (json) => ({
    type: "FETCH_POSTS",
    payload: json
})

