import { defineConfig, devices } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test';

export const timeout = 3000
export const waitTime = 5000
export const jestTimeout = 20000
// export const baseURL = 'https://www.bbc.co.uk/iplayer';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/homePage.spec.ts"],
  use: {
    headless: false,
    screenshot: "on",
    "video": "retain-on-failure",
  },

}

