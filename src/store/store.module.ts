import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import {
  StoreConfig,
  StoreFeatureConfig,
  StoreRootConfig,
} from './store.config';

let rootStoreConfig: StoreConfig;
const STORE_CONFIG_TOKEN = 'STORE_CONFIG_TOKEN';
const DEFAUTLLT_STORE_DIRNAME = 'store';
const DEFAULT_FILE_NAME = 'data.json';

@Module({
    providers: [StoreService],
    exports: [StoreService],
})
class RootStoreModule {

}



@Module({
    imports: [RootStoreModule],
})
export class StoreModule {
  static forRoot(storeConfig?: StoreRootConfig): DynamicModule {
    rootStoreConfig = StoreModule.createConfig(storeConfig);
    return {
      module: RootStoreModule,
      imports: [RootStoreModule],
      providers: [
        {
          provide: STORE_CONFIG_TOKEN,
          useValue: rootStoreConfig,
        },
      ],
    };
  }
  static forFeature(storeConfig: StoreFeatureConfig): DynamicModule {
    const token = 'STORE_SERVICE' + storeConfig.filename;
    return {
      module: StoreModule,
      imports: [RootStoreModule],
      providers: [
        {
          provide: token,
          useFactory: () => {
            const featureStoreConfig = StoreModule.createConfig({
              ...rootStoreConfig,
              ...storeConfig,
            });
            return new StoreService();
          },
        },
      ],
      exports: [token],
    };
  }

  private static createConfig(config: StoreConfig): StoreConfig {
    const defaultConfig: StoreConfig = {
      dirname: DEFAUTLLT_STORE_DIRNAME,
      filename: DEFAULT_FILE_NAME,
    };
    return { ...defaultConfig, ...config };
  }
}
