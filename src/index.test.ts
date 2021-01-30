import greeter from './index';
import { JsonRpcEngine } from 'json-rpc-engine';
import { MetaMaskInpageProvider } from '@metamask/inpage-provider';
import { providerFromEngine } from 'eth-json-rpc-middleware';

describe('Test', () => {
  it('greets', async () => {

    const engine = new JsonRpcEngine();
    engine.push(function(req, res, _next, end){
      if (req && Array.isArray(req.params)) {
        res.result = `Hello, ${req?.params[0] }!`;
        end();
      } else {
        end();
      }
    });
    const provider = providerFromEngine(engine);

    const name = 'Huey';
    const result = await provider.request({ params: [name] });
    expect(result).toEqual('Hello, Huey!');
  });
});
