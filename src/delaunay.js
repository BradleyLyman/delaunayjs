/**
 * Provides methods for incrementally building a delauny triangulation
 * of a set of points.
 * @module delaunay
 **/

var vec2 = require('./vec2.js');

/**
 * Holds the required state for a delaunay triangulation.
 * @typedef Delaunay
 * @type {Object}
 * @property {Object} vertices - Map of named vertices.
 **/

/**
 * This function generates an object which represents an edge of a triangle,
 * connecting two named points.
 * @param {Number} n1 - index of the first point.
 * @param {Number} n2 - index of the second point.
 * @return {Edge}
 **/
var Edge = function(n1, n2) {
  return {
    p1 : function() { return n1; },
    p2 : function() { return n2; }
  };
};

/**
 * This function creates a triangle object which represents how the triangle's
 * points are connected via edges.
 * @param {Edge} edge1 - First edge
 * @param {Edge} edge2 - Second edge
 * @param {Edge} edge3 - Third edge
 * @return {Triangle}
 **/
var Triangle = function(edge1, edge2, edge3) {
  return {
    e1 : function() { return edge1; },
    e2 : function() { return edge2; },
    e3 : function() { return edge3; }
  };
};

/**
 * Creates a delaunay triangulation structure with an initial "supertriangle".
 * @param {Number} initialSize - radius of the circumcircle of the
 *                               supertriangle.
 **/
module.exports.createDelaunay = function(initialSize) {

};








