declare module 'eth-json-rpc-middleware' {
  import { MetaMaskInpageProvider } from "@metamask/inpage-provider";
  import { JsonRpcEngine } from "json-rpc-engine";

  export function providerFromEngine (engine: JsonRpcEngine) : MetaMaskInpageProvider;
}
