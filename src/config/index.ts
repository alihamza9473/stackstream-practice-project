const { REACT_APP_API_URL } = process.env;
//export const API_BASE_PATH: string = REACT_APP_API_URL || 'https://devapistackstream.mergestack.com/api/v1';

export const API_BASE_PATH: string =
  REACT_APP_API_URL || "http://localhost:4000/api/v1";
export const COOKIE_USER_TOKEN = "USER_SESSION";
export const COOKIE_USER = "USER_DETAILS";

export * from "config/enums";
export * from "config/data";
