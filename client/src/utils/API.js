import axios from "axios";

export default {
	getStuff: function() {
		console.log("firing");
		return axios.get("/stuff")
		;
	}
}