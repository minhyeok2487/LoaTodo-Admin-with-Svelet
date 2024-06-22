const API_BASE_URL = 'http://localhost:8080';

function getAuthHeaders() {
	const token = localStorage.getItem('token');
	return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function get(url) {
	const response = await fetch(`${API_BASE_URL}${url}`, {
		headers: {
			...getAuthHeaders()
		}
	});
	return response.json();
}

export async function post(url, data) {
	const response = await fetch(`${API_BASE_URL}${url}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			...getAuthHeaders()
		},
		body: JSON.stringify(data)
	});
	return response.json();
}

export async function put(url, data) {
	const response = await fetch(`${API_BASE_URL}${url}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			...getAuthHeaders()
		},
		body: JSON.stringify(data)
	});
	return response.json();
}

export async function del(url) {
	const response = await fetch(`${API_BASE_URL}${url}`, {
		method: 'DELETE',
		headers: {
			...getAuthHeaders()
		}
	});
	return response.json();
}
