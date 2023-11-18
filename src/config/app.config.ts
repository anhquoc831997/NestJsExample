export interface AppConfig {
  apiKey: string;
}

export const appConfig: AppConfig = {
  apiKey: process.env.API_KEY || 'defaultApiKey',
};
