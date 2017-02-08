import chai from 'chai';
import evaluateStyle from '../src/index.js';

chai.should();

describe('evaluateStyle', function () {
  it('should evaluate static inlinestyle', () => {
    const style = {
      foo: 'bar'
    };

    evaluateStyle(style, {data: 'foobar'}).should.deep.equal(style);
  });

  it('should evaluate dynamic inlinestyle', () => {
    const style = {
      foo: 'bar',
      bar: (data) => `${data.foobar}`
    };
    const data = {foobar: 'foobar'};

    evaluateStyle(style, data).should.deep.equal({...style, bar: data.foobar});
  });

  it('should evaluate nested dynamic inlinestyle', () => {
    const style = {
      foo: 'bar',
      bar: {
        test: 'asdf',
        foobar: (data) => `${data.foobar}`
      }
    };
    const data = {foobar: 'foobar'};

    evaluateStyle(style, data).should.deep.equal({...style, bar: {...style.bar, foobar: data.foobar}});
  });
});
