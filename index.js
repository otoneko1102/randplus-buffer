function buffer(length = 0) {
  if (!Number.isInteger(length) || length < 0) throw new Error('length must be non-negative number.');
  const result = Buffer.alloc(length);
  for (let i = 0; i < length; i++) {
    result[i] = Math.floor(Math.random() * 256);
  }
  return result;
}

module.exports = buffer;