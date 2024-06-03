"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonDiff = void 0;
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
function jsonDiff(json1, json2) {
    var diff = {
        added: {},
        deleted: {},
        edited: {},
    };
    for (var key in json1) {
        if (json1.hasOwnProperty(key)) {
            if (!json2.hasOwnProperty(key)) {
                diff.deleted[key] = json1[key];
            }
            else if (json1[key] !== json2[key]) {
                diff.edited[key] = [json1[key], json2[key]];
            }
        }
    }
    for (var key in json2) {
        if (json2.hasOwnProperty(key)) {
            if (!json1.hasOwnProperty(key)) {
                diff.added[key] = json2[key];
            }
        }
    }
    return diff;
}
exports.jsonDiff = jsonDiff;
// Default export for JavaScript
exports.default = jsonDiff;
