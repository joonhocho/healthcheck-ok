import {describe, it} from 'mocha';
import {expect} from 'chai';
import sinon from 'sinon';
import healthcheck from '../lib';


describe('healthcheck', () => {
  it('sends 200', () => {
    const res = {
      append: () => {},
      sendStatus: () => {},
    };
    const append = sinon.spy(res, 'append');
    const sendStatus = sinon.spy(res, 'sendStatus');

    healthcheck(null, res);

    expect(append.withArgs('Cache-Control', 'no-cache, no-store, max-age=0').calledOnce).to.be.true;
    expect(sendStatus.withArgs(200).calledOnce).to.be.true;
  });
});
