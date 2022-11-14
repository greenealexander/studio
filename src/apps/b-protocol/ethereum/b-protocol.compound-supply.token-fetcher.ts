import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { CompoundContractFactory, COMPOUND_DEFINITION } from '~apps/compound';
import { EthereumCompoundSupplyTokenFetcher } from '~apps/compound/ethereum/compound.supply.token-fetcher';
import { DefaultAppTokenDataProps } from '~position/template/app-token.template.types';
import { Network } from '~types/network.interface';

import { B_PROTOCOL_DEFINITION } from '../b-protocol.definition';
import { BProtocolContractFactory } from '../contracts';

export class EthereumBProtocolCompoundSupplyTokenFetcher extends EthereumCompoundSupplyTokenFetcher {
  appId = B_PROTOCOL_DEFINITION.id;
  groupId = B_PROTOCOL_DEFINITION.groups.compoundSupply.id;
  network = Network.ETHEREUM_MAINNET;
  groupLabel = 'Compound Lending';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(CompoundContractFactory) protected readonly compoundContractFactory: CompoundContractFactory,
    @Inject(BProtocolContractFactory) protected readonly bProtocolContractFactory: BProtocolContractFactory,
  ) {
    super(appToolkit, compoundContractFactory);
  }

  async getAddresses() {
    return [];
  }

  async getAccountAddress(address: string): Promise<string> {
    const registry = this.bProtocolContractFactory.bProtocolCompoundRegistry({
      address: '0xbf698df5591caf546a7e087f5806e216afed666a',
      network: this.network,
    });

    const avatarAddress = await registry.avatarOf(address);
    return avatarAddress;
  }

  async getPositionsForBalances() {
    const positions = await this.appToolkit.getAppTokenPositions<DefaultAppTokenDataProps>({
      appId: COMPOUND_DEFINITION.id,
      groupIds: [COMPOUND_DEFINITION.groups.borrow.id],
      network: this.network,
    });

    return positions.map(position => {
      const appGroupNetwork = { appId: this.appId, groupId: this.groupId, network: this.network };
      const proxiedAppToken = { ...position, ...appGroupNetwork };
      proxiedAppToken.key = this.getKey({ appToken: proxiedAppToken });
      return proxiedAppToken;
    });
  }
}
