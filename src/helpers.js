/** Return random item from list of items.
 *
 * @param {Array} items
 *
 * @returns {Any} random item from list of items
 */

const choice = (items) => {
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
};

/**Returns a copy of array without first matching item.
 * If item is not found, returns undefined.
 *
 * @param {Array} items
 * @param {Any} itemToRemove
 *
 * @returns {Any} itemToRemove
 *
 * @example
 *
 * remove([1, 2, 3, 4, 5], 3) // 3
 * remove([1, 2, 3, 4, 5], 17) // undefined
 */

const remove = (items, itemToRemove) => {
  const idx = items.findIndex((item) => item === itemToRemove);
  if (idx === -1) return undefined;
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

export { choice, remove };
