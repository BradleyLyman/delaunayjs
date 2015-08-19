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
    p1      : function() { return n1; },
    p2      : function() { return n2; },
  };
};

/**
 * Returns true if the edges contain the same point names,
 * order does not matter.
 * @param {Edge} e1
 * @param {Edge} e2
 * @return {Boolean}
 **/
var isEdgeEqual = function(e1, e2) {
  return (e1.p1() === e2.p1() && e1.p2() === e2.p2()) ||
         (e1.p2() === e2.p1() && e1.p1() === e2.p2());
};

/**
 * This function creates a triangle object which represents how the triangle's
 * points are connected via edges.
 * @param {Number} p1
 * @param {Number} p2
 * @param {number} p3
 * @return {Triangle}
 **/
var Triangle = function(p1, p2, p3) {
  var points = [p1, p2, p3];
  var edge1  = Edge(p1, p2),
      edge2  = Edge(p2, p3),
      edge3  = Edge(p3, p1);

  return {
    e1        : function() { return edge1; },
    e2        : function() { return edge2; },
    e3        : function() { return edge3; },
    getPoints : function() { return points; }
  };
};

/**
 * Creates a delaunay triangulation structure with an initial "supertriangle".
 * @param {Number} initialSize - radius of the circumcircle of the
 *                               supertriangle.
 **/
module.exports.createDelaunay = function(initialSize) {
  var angle = 3.1415 * 2 / 3;
  var points = [
    [initialSize*Math.cos(angle*0), initialSize*Math.sin(angle*0)],
    [initialSize*Math.cos(angle*1), initialSize*Math.sin(angle*1)],
    [initialSize*Math.cos(angle*2), initialSize*Math.sin(angle*2)]
  ];
  var triangle = Triangle(0, 1, 2);

  return {
    points    : points,
    triangles : [triangle]
  };
};








