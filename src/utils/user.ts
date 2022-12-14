/**
 * user.js is used to manage the user authorization cookies
 */
import Cookies from "universal-cookie";
import axios from "axios";

export const COOKIE_USER_TOKEN = "USER_SESSION";
export const COOKIE_USER = "USER_DETAILS";

// import { COOKIE_USER_TOKEN, COOKIE_USER } from "config";

interface ILoginResponse {
  access: string;
  refresh: string;
}

export function isLoggedIn(): boolean {
  const cookies = new Cookies();
  return cookies.get(COOKIE_USER_TOKEN);
}

export function deleteSession(): void {
  const cookies = new Cookies();
  cookies.remove(COOKIE_USER_TOKEN, { path: "/" });
}

export function saveUserSession(user: ILoginResponse) {
  const cookies = new Cookies();
  const session = {
    refresh: user.refresh || cookies.get(COOKIE_USER_TOKEN).refresh,
    access: user.access,
  };
  cookies.set(COOKIE_USER_TOKEN, session, { path: "/" });
  axios.defaults.headers.common.access = `${user.access}`;
  axios.defaults.headers.common.refresh = `${user.refresh}`;
}

export function getSession(): ILoginResponse {
  const cookies = new Cookies();
  return cookies.get(COOKIE_USER_TOKEN);
}

export function saveUser(user: any) {
  const cookies = new Cookies();
  cookies.set(COOKIE_USER, { user }, { path: "/" });
}

export function getUser() {
  const cookies = new Cookies();
  return cookies.get(COOKIE_USER);
}

export function getRefreshToken(): string | null {
  const session = getSession();
  if (session && session.refresh) {
    return session.refresh;
  }
  return null;
}

export function initSession() {
  const user = getSession();
  axios.defaults.headers.common.access = `${user.access}`;
  axios.defaults.headers.common.refresh = `${user.refresh}`;
}
