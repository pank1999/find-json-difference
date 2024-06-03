interface JsonDifference {
    added: Record<string, any>;
    deleted: Record<string, any>;
    edited: Record<string, [any, any]>;
}
/**
 * Calculates the difference between two JSON objects.
 * @param {any} json1 - The first JSON object.
 * @param {any} json2 - The second JSON object.
 * @returns {JsonDifference} - The difference between the two JSON objects.
 *
 * @example
 * const json1 = { name: 'John', age: 30 };
 * const json2 = { name: 'John', age: 35, city: 'New York' };
 * const diff = jsonDiff(json1, json2);
 * console.log(diff);
 * // Output: { added: { city: 'New York' }, deleted: {}, edited: { age: [30, 35] } }
 * @example
 * const json1 = { name: 'John', age: 30 };
 * const json2 = { name: 'John', age: 30 };
 * const diff = jsonDiff(json1, json2);
 * console.log(diff);
 * // Output: { added: {}, deleted: {}, edited: {} }
 * @example
 * const json1 = { name: 'John', age: 30 };
 * const json2 = { name: 'John', age: 30, city: 'New York' };
 * const diff = jsonDiff(json1, json2);
 * console.log(diff);
 * // Output: { added: { city: 'New York' }, deleted: {}, edited: {} }
 */
declare function jsonDiff(json1: any, json2: any): JsonDifference;
export { jsonDiff, JsonDifference };
export default jsonDiff;
