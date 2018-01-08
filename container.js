const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

container.register('container', function(){
    return container;
});

module.exports = container;