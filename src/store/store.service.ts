import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import {
  StoreConfig,
  StoreFeatureConfig,
  StoreRootConfig,
} from './store.config';
@Injectable()
export class StoreService {
  constructor(
    //@Inject('STORE_SERVICEuser.json')
    //private readonly storeConfig: StoreConfig,
  ) {
    console.log('store config');
   if (!fs.existsSync("store")) {
     fs.mkdirSync("store");
   }
  }
  save(data: any): void {
    // fs.appendFileSync(
    //   `${this.storeConfig.dirname}/${this.storeConfig.filename}`,
    //   JSON.stringify(data),
    // );
    console.log(data);
  }
}
