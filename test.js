var assert = require('assert');
var greeter = require('./greeter');

describe('greeter', function(){
    describe('greet', function(){
        it('引数に応じて決まった文字列を返すこと', function(){
            assert.equal(greeter.greet('taro'),'Hello, taro');
        });
    });
});