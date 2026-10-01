const { nxE2EPreset } = require('@nx/cypress/plugins/cypress-preset');
const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run user:serve',
        production: 'npx nx run user:serve-static',
      },
      ciWebServerCommand: 'npx nx run user:serve-static',
      ciBaseUrl: 'http://localhost:4203',
    }),
    baseUrl: 'http://localhost:4203',
  },
});
