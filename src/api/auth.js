import { get, BASE_URL } from './api';
import { writable } from 'svelte/store';

export async function getMember() {
	return get('/admin/member');
}

export const isAuthenticated = writable(false); // 초기값 false로 설정
export const member = writable(null);

export async function isLogin() {
	try {
		const response = await getMember();
		if (response !== null) {
			isAuthenticated.set(true);
			member.set(response);
		}
	} catch (error) {
		console.error('Error while logging in:', error);
		isAuthenticated.set(false); // 로그인 실패 시 false로 설정
		member.set(null);
	}
}

export function socialLogin() {
	const frontendUrl = window.location.protocol + '//' + window.location.host;
	window.location.href = BASE_URL + '/auth/authorize/google' + '?redirect_url=' + frontendUrl;
}

export async function logout() {
	try {
		const response = get('/v3/auth/logout');
		if (response !== null) {
			isAuthenticated.set(false);
			member.set(null);
            localStorage.setItem('ACCESS_TOKEN', '');
		}
	} catch (error) {
		console.error('Error while logout:', error);
	}
}
