/**
 * Methods for manipulating 2-vectors.
 * @module vec2
 **/

/**
 * Vec2 is just an array with 2 elements.
 * @typedef Vec2
 * @type {Number[]}
 **/

/**
 * Computes the squared magnitude of the vector.
 * @param {Vec2} vec
 * @return {Number} squared magnitude of vec
 **/
module.exports.sqrLen = function(vec) {
  return vec[0]*vec[0] + vec[1]*vec[1];
};

/**
 * Subtracts one vector from the other.
 * @param {Vec2} a
 * @param {Vec2} b
 * @return {Vec2} a - b
 **/
module.exports.sub = function(a, b) {
  return [a[0] - b[0], a[1] - b[1]];
};
