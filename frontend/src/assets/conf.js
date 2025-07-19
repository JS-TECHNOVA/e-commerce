const BASE_URL = "http://127.0.0.1:8000/api/v1";
const SERVER_URL = "http://127.0.0.1:8000";

function GetAbsoluteURL(url) {
	return `${SERVER_URL}/${url}`;
}

export { BASE_URL, GetAbsoluteURL };
