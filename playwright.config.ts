import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const TOKEN_TESULT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQ0ZTE4NGU3LTAyZDEtNGQ2Mi04ZjFlLWQyYThhOTQ3ZGNmYy0xNjU3NjgxMTE3NjA4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMDk2NWU1ZjMtOGU5ZS00Nzg1LWFjNWYtMzVhZjEwNTA4Mjc5IiwidHlwZSI6InQifQ.1eVcOOMmCZRS0w9KeUjeA4ewYwvce7XciY0lEaF5Gys'
const config: PlaywrightTestConfig = {
  testDir: "./tests",
  reporter: [['playwright-tesults-reporter', {'tesults-target': TOKEN_TESULT}]],
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],
};

export default config;
