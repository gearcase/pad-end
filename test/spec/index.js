'use strict';

var expect = require('chai').expect;

describe('pad-start: ', function () {

  var padEnd = require('../../');

  it('common usage:', function () {

    expect(padEnd('abc', 10)).to.equal('abc       ');
    expect(padEnd('abc', 10, 'foo')).to.equal('abcfoofoof');
    expect(padEnd('abc', 6, '123465')).to.equal('abc123');

    expect(padEnd('x', 5, 'ab')).to.equal('xabab');
    expect(padEnd('x', 4, 'ab')).to.equal('xaba');
    expect(padEnd('abcd', 2, '#')).to.equal('abcd');
    expect(padEnd('abc', 10, '0123456789')).to.equal('abc0123456');
    expect(padEnd('x', 3)).to.equal('x  ');
  });

  it('If string or maxLength is null or undefined, return the string directly:', function () {
    expect(padEnd()).to.be.an('undefined');
    expect(padEnd('x')).to.equal('x');
    expect(padEnd('x', null)).to.equal('x');
    expect(padEnd('x', 'a')).to.equal('x');
  });
});
