
import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  outputDir: 'test-results',

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Maximum time for one complete test
  timeout: 60000,

  // Maximum time for expect assertions
  expect: {
    timeout: 10000
  },
  // use: {
  //   actionTimeout: 0,
  //   navigationTimeout: 30000
  // },

  // Maximum time for the entire test run
  globalTimeout: 0,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  use: {
    viewport: { width: 1280, height: 720 },

    // Timeout for individual actions
    actionTimeout: 15000,

    // Timeout for page navigation
    navigationTimeout: 30000,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        channel: process.env.CI ? undefined : 'chrome',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        }
      }
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox', viewport: null }
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' }
    }
  ]
});
