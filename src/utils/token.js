import { TOKEN } from '../utils/constants';

export function setToken(token) {
  localStorage.setItem(TOKEN, token);
}

export function getToken(token) {
  localStorage.getItem(TOKEN);
}
