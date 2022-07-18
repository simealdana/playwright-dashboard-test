import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import 'dotenv/config'

const TOKEN_TESULT =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQ0ZTE4NGU3LTAyZDEtNGQ2Mi04ZjFlLWQyYThhOTQ3ZGNmYy0xNjU3NjgxMTE3NjA4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMDk2NWU1ZjMtOGU5ZS00Nzg1LWFjNWYtMzVhZjEwNTA4Mjc5IiwidHlwZSI6InQifQ.1eVcOOMmCZRS0w9KeUjeA4ewYwvce7XciY0lEaF5Gys";
const defaultConfig: PlaywrightTestConfig = {
  testDir: "./tests",

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
    }
  ],
};

const tesultsConfig: PlaywrightTestConfig = process?.env?.ENV?.toLowerCase() === 'local' ?{} :{
  reporter: [
    ["playwright-tesults-reporter", { "tesults-target": TOKEN_TESULT }],
  ],
}

const config: PlaywrightTestConfig = {
  ...defaultConfig,
  ...tesultsConfig,
};

export default config;
