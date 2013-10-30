(function(root, undefined) {

  "use strict";


/* ObjLoader main */

// Base object.
var ObjLoader = function() {
  if (!(this instanceof ObjLoader)) {
    return new ObjLoader();
  }
};


// Version.
ObjLoader.VERSION = '0.0.0';


// Export to the root, which is probably `window`.
root.ObjLoader = ObjLoader;


}(this));
