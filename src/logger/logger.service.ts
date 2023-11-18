import { AppConfig } from "src/config/app.config";

export class LoggerService {
  config = null;
  constructor(config: any) {
    this.config = config;
  }
  prefix = 'Logger';
  log() {
    console.log("this.config.getConfig()");
    console.log(this.prefix + 'Logger');
  }
}
export function loggerFacetory(): LoggerService {
  console.log('LOGGER 1');
  return new LoggerService('empty');
}
export const LOGGER_KEY = 'LOGGER_KEY';
