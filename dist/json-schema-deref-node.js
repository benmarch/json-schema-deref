function getSchemaFromRefString(schema, refString) {
    var pieces = refString.split('/');
    if (pieces.shift() !== '#') {
        throw new Error('Local references only!');
    }

    return deref(pieces.reduce(function (prevObj, key) {
        if (!prevObj[key]) {
            throw new Error('Local references only!');
        }
        return prevObj[key];
    }, schema));
}

function deref(schema) {
    if (!schema.properties) {
        return schema;
    }

    Object.keys(schema.properties).forEach(function (propertyName) {
        if (schema.properties.hasOwnProperty(propertyName)) {
            var property = schema.properties[propertyName];
            Object.keys(property).forEach(function (key) {
                if (property.hasOwnProperty(key)) {
                    if (key === '$ref') {
                        schema.properties[propertyName] = getSchemaFromRefString(schema, property[key]);
                    }
                }
            });
        }
    });

    return schema;
}


module.exports = deref;