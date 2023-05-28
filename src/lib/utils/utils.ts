/**
 * Checks if an array is empty
 * @param {Array} arr Array to be tested
 * @return {Boolean} Boolean value
 */
export const isNotEmptyArray = (arr: unknown): boolean =>
  Array.isArray(arr) && arr.length > 0;
