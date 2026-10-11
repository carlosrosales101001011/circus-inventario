import axios from 'axios';

export const API_URL = 'https://api-sistema-luroga2.azurewebsites.net/api';
export const URL_IMG_ARTICULO = 'https://archivosluroga.blob.core.windows.net/avatar-articulos/';

// sin token: la vista es publica
export const PTApi = axios.create({
	baseURL: API_URL,
});
