import Adapter from './adapter';

import { UniswapV2 } from './uniswap-v2';
import { UniswapV1 } from './uniswap-v1';

const DEXS: { [dex: string]: typeof Adapter } = {
  'uniswap': UniswapV1,
  'uniswapv2': UniswapV2,
  'sushiswap': UniswapV2,
  'defiswap': UniswapV2,
  'linkswap': UniswapV2,
};

export { DEXS };
