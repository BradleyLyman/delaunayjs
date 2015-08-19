/**
 * Contains functions for manipulating 3x3 matricies.
 * @module mat3
 **/

/**
 * A Mat3 is just a 9 element array of values.
 * @typedef Mat3
 * @type {Number[]}
 **/

/**
 * Calculates the determinant of a mat3.
 * @param {Mat3} mat
 * @return {Number}
 **/
module.exports.det = function(mat) {
  return mat[0]*mat[4]*mat[8] + mat[1]*mat[5]*mat[6] + mat[2]*mat[3]*mat[7] -
         mat[2]*mat[4]*mat[6] - mat[1]*mat[3]*mat[8] - mat[0]*mat[5]*mat[7];
};
