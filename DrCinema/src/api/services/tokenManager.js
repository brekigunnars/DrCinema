import { authenticate } from './auth';

let currentToken = null;

export const getToken = async () => {
  if (!currentToken) {
    currentToken = await authenticate();
  }
  return currentToken;
};

export const refreshToken = async () => {
  currentToken = await authenticate();
  return currentToken;
};
