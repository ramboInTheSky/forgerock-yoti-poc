/**
 * Returns a factory function to produce numbers intended for one-time use.
 *
 * @param length The number of digits to generate
 */
declare function nonce(length?: number): () => number;
export default nonce;
