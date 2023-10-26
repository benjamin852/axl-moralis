Interchain Tc with Axelar and Moralis

Send available ERC20 token from one blockchain to another via axelar

Setup .env.local file as follows

# Get your KEY https://admin.moralis.io/web3apis
MORALIS_API_KEY=<YOUR_MORALIS_KEY>
# Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/64
NEXTAUTH_SECRET=<YOUR_NEXT_KEY>
# replace for production
NEXTAUTH_URL='http://localhost:3000'


The axelr related services are available in the `ERC20Balances.tsx` template. Users should be able to seemlessly transfer Axelar related ERC20 tokens that they hold between two blockchains. For example, a uer can transfer their aUSDC from Polygon to Ethereum to several (or a single) addresses. After sending the token the user can click through a button to take them to Axelarscan to view the ongoing transaction.

Run:
`npm run dev`

To compile and run the application

Navigatore in the navbar to Balances/ERC20 to get to the page to interact with the Axelar related functionality.

