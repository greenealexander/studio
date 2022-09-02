import { Register } from '~app-toolkit/decorators';
import { Network } from '~types/network.interface';

import { PendleYieldTokenFetcher } from '../common/pendle.yield.token-fetcher';
import { PENDLE_DEFINITION } from '../pendle.definition';

const appId = PENDLE_DEFINITION.id;
const groupId = PENDLE_DEFINITION.groups.yield.id;
const network = Network.ETHEREUM_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class EthereumPendleYieldTokenFetcher extends PendleYieldTokenFetcher {
  appId = appId;
  groupId = groupId;
  network = network;
  groupLabel = 'Future Yield';
  pendleDataAddress = '0xe8a6916576832aa5504092c1cccc46e3bb9491d6';
}
