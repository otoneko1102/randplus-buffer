/**
 * @function 
 * Returns a buffer randomly.
 * @param {number} [length=0] - The length of the buffer. 
 * @returns {Buffer} Returns a random buffer.
 */
function buffer(length = 0) {
  if (!Number.isInteger(length) || length < 0) throw new Error('length must be non-negative number.');
  const result = Buffer.alloc(length);
  for (let i = 0; i < length; i++) {
    result[i] = Math.floor(Math.random() * 256);
  }
  return result;
}

module.exports = buffer;
