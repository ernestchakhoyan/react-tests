import { types } from "../../actions/types";
import postReducer from "./reducer";

describe("Posts reducer", () => {
	it("Should return initial state", () => {
		const newState = postReducer(undefined, {});

		expect(newState).toEqual([]);
	});

	it("Should return new state if receiving type", () => {
		const posts = [
			{ title: "Title1" },
			{ title: "Title2" },
			{ title: "Title3" }
		];

		const newState = postReducer(undefined, {
			type: types.GET_POSTS,
			payload: posts
		});

		expect(newState).toEqual(posts);
	});
});