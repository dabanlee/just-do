/**
 * objects extend
 *
 */

 function extend() {
     var options, name, clone, copy, source, copyIsArray,
         target = arguments[0] || {},
         i = 1,
         length = arguments.length,
         deep = false;

     if (typeof target === 'boolean') {
         deep = target;
         target = arguments[i] || {};
         i++;
     }

     if (typeof target !== 'object') {
         target = {};
     }

     for (; i < length; i++) {
         //
         if ((options = arguments[i]) !== null) {
             // for in source object
             for (name in options) {

                 source = target[name];
                 copy = options[name];

                 if (target == copy) {
                     continue;
                 }

                 // deep clone
                 if (deep && copy && (typeof copy == 'object' || (copyIsArray = Array.isArray(copy)))) {
                     // if copy is array
                     if (copyIsArray) {
                         copyIsArray = false;
                         // if is not array, set it to array
                         clone = source && Array.isArray(source) ? source : [];
                     } else {
                         // if copy is not a object, set it to object
                         clone = source && typeof copy == 'object' ? source : {};
                     }

                     target[name] = extend(deep, clone, copy);
                 } else if (copy !== undefined) {
                     target[name] = copy;
                 }
             }
         }
     }

     return target;
 }

module.exports = extend;
