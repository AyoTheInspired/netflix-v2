import axios from "axios";

// 0c27e117ae60f2cfd0ff1310060fd3a9

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export default instance;
