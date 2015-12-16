import chai from 'chai';
import matterMiddleware from '../src/middleware';

describe('matter middleware', () => {
  const doDispatch = () => {};
  const doGetState = () => {};
  const nextHandler = matterMiddleware({dispatch: doDispatch, getState: doGetState});
  it('must return a function to handle next', () => {
    chai.assert.isFunction(nextHandler);
    chai.assert.strictEqual(nextHandler.length, 1);
  });
  describe.skip('handle errors', () => {
    it('must throw if argument is non-object', done => {
      try {
        matterMiddleware();
      } catch(err) {
        done();
      }
    });
  });
});
