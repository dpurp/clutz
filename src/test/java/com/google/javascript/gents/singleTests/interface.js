goog.provide('ns.Interface2');
goog.provide('ns.Interface3');
goog.provide('ns.StructuralInterface');

/** @interface */
function Interface() {}
/**
 * @param {string} a
 * @return {number}
 */
Interface.prototype.bar = function(a) {};

/** @interface */
ns.Interface2 = function() {}
/**
 * @param {string} a
 * @return {number}
 */
ns.Interface2.prototype.bar = function(a) {};

/** @interface @implements {ns.Interface2} */
ns.Interface3 = function() {}
/**
 * @param {string} a
 * @return {number}
 */
ns.Interface3.prototype.baz = function(a) {};

/** @implements {ns.Interface2} */
class X {}

/**
 * @constructor
 * @implements {ns.Interface2}
 * @implements {ns.Interface3}
 */
function Y() {}

/** @record */
ns.StructuralInterface = function() {}

/**
 * @param {string} a
 * @return {number}
 */
ns.StructuralInterface.prototype.bar = function(a) {};

const /** !ns.StructuralInterface */ structInterfaceImpl = {
  /**
   * @param {string} a
   * @return {number}
   */
  bar: function(a) { return 1;}
} 
