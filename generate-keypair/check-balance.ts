import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
    throw new Error('Provide a public key to check the balance of!');
}

const publicKey = new PublicKey(suppliedPublicKey);

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
    '💰 Finished! The balance for the wallet at address', publicKey.toBase58(), 'is', balanceInSOL, '!'
);