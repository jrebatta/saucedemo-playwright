import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  featuresRoot: './src/resources/features/',
  steps: './src/playwright/steps/*.step.ts',
  outputDir: './target/playwright-test',
  importTestFrom: './src/playwright/util/playwright-bdd.ts',
  disableWarnings: {
    importTestFrom: true
  }
});

export default defineConfig({
  timeout: 30000,
  testDir,
  outputDir: './target/generated-test-sources',
  fullyParallel: true,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    cucumberReporter('json', { outputFile: './target/cucumber-reports/cucumber.json' }),
    ['list'],
    ['html', { outputFolder: './target/playwright-reports' }]
  ],
  use: {
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
    headless: true,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }
  ]
});
