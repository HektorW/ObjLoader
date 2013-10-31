"use strict";

test("the root object exists", function() {
  ok(ObjLoader, "ObjLoader exists");
  ok(ObjLoader.Model, "ObjLoader.Model exists");
  ok(ObjLoader.loadModel, "ObjLoader.loadModel exists");
});


test("Models can be created", function() {
  var model = new ObjLoader.Model();
  ok(model instanceof ObjLoader.Model, "Model created with new returns an instance of Model");

  model = ObjLoader.Model();
  ok(model instanceof ObjLoader.Model, "Model created without new returns an instance of Model");

  model = new ObjLoader.Model("localhost", "Model1");
  strictEqual(model.url, "localhost", "model created with new has correct url");
  strictEqual(model.name, "Model1", "model created with new has correct name");

  model = ObjLoader.Model("localhost", "Model1");
  strictEqual(model.url, "localhost", "model created without new has correct url");
  strictEqual(model.name, "Model1", "model created without new has correct name");

  model = new ObjLoader.Model();
  strictEqual(model.vertices, null, "model.vertices is null");
  strictEqual(model.texcoords, null, "model.texcoords is null");
  strictEqual(model.normals, null, "model.normals is null");
  strictEqual(model.indices, null, "model.indices is null");
  strictEqual(model.tangents, null, "model.tangents is null");
  strictEqual(model.bitangents, null, "model.bitangents is null");
});



asyncTest("Models load correctly", function() {
  function registerModelTest(testVars) {
    stop();
    ObjLoader.loadModel(
      testVars.url,
      function done(model) {
        equal(model.vertices.length, testVars.vertices, "vertices are ok");
        equal(model.normals.length, testVars.normals, "normals are ok");
      },
      function error() {

      },
      function progress() {

      }
    );
  }

  registerModelTest({
    url: './models/cube.obj',
    vertices: 8,
  })
});


