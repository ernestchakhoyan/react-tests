import { types } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
	await axios.get("https://jsonplaceholder.typicode.com/posts")
		.then((response) => {
			dispatch({
				type: types.GET_POSTS,
				payload: response.data
			});
		})
		.catch((err) => {
			console.log(err, "get posts api error")
		})
};