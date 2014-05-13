
var median = require('..');

var tobi = { name: { first: 'tobi' }, age: 3, role: { name: 'admin' } };
var loki = { name: { first: 'loki' }, age: 1 };
var jane = { name: { first: 'jane' }, age: 8 };

describe('median(arr, fn)', function(){
  it('should return the median value', function(){
    var arr = [1,2,3,5,6];
    var n = median(arr, function(n){ return n * 2 });
    n.should.eql(6);
  })

  it('should support property strings', function(){
    var users = [tobi, loki, jane];
    var n = median(users, 'age');
    n.should.equal(3);
  })
})

describe('median(arr)', function(){
  it('should return the median value', function(){
    median([1,3,2,5,6]).should.equal(3);
  })
  it('should support negative numbers', function(){
    median([-1,-4,-2]).should.equal(-2);
  })
})
