import { Register } from '~app-toolkit/decorators';
import { Network } from '~types/network.interface';

import { PendleOwnershipTokenFetcher } from '../common/pendle.ownership.token-fetcher';
import { PENDLE_DEFINITION } from '../pendle.definition';

const appId = PENDLE_DEFINITION.id;
const groupId = PENDLE_DEFINITION.groups.ownership.id;
const network = Network.ETHEREUM_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class EthereumPendleOwnershipTokenFetcher extends PendleOwnershipTokenFetcher {
  appId = appId;
  groupId = groupId;
  network = network;
  groupLabel = 'Ownership';
  pendleDataAddress = '0xe8a6916576832aa5504092c1cccc46e3bb9491d6';
  dexFactoryAddress = '0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac';
}
