import { MoralisNextApi } from '@moralisweb3/next';

const NEXTAUTH_URL = 'http://localhost:3000';

if (process.env.MORALIS_API_KEY === undefined || typeof process.env.MORALIS_API_KEY !== 'string') {
  throw new Error('process.env.apiKey is missing or not a string');
}

export default MoralisNextApi({
  apiKey: process.env.MORALIS_API_KEY,
  authentication: {
    domain: NEXTAUTH_URL ? new URL(NEXTAUTH_URL).host : '',
    uri: 'http://localhost:3000',
    timeout: 120,
  },
});
