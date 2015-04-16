# json-schema-deref
Returns a JSON Schema with $ref's replaced with actual schemas

## Get Started
Start by installing using a package manager or by grabbing the proper distribution:
```sh
$ npm install json-schema-deref
or
$ bower install json-schema-deref
```

Note: The main file for Bower defaults to the AngularJS version.

## Use in NodeJS
```javascript
var jsDeref = requrie('json-schema-deref');

var dereferencedSchema = jsDeref(schema);
```

## Use in AngularJS
```javascript
var myApp = angular.module('MyApp', ['jsonSchemaDeref']);

myApp.factory('myFactory', function (jsonSchemaDeref) {

  var schema = {
    type: 'object',
    ...
  };

  var dereferencedSchema = jsonSchemaDeref(schema);

});
```

## Use in the browser
```javascript
var jsDeref = window.JSON_SCHEMA_DEREF;

var dereferencedSchema = jsDeref(schema);
```

## MIT License
