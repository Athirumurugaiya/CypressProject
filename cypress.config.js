import { defineConfig } from "cypress";

export default defineConfig({

  e2e: {
   baseUrl :"https://www.dominos.co.in",
  supportFile: "cypress/support/commands.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && !browser.isHeadless) {
          // Add incognito mode flag
          launchOptions.args.push('--incognito');
        }
        return launchOptions;
      });
    },
      // chromeWebSecurity: false,
      //  experimentalSessionAndOrigin: true,
      //  experimentalModifyObstructiveThirdPartyCode: true,
      //  browser: 'chrome',
      //  args: ['--user-data-dir=C://Users//arvind.thirumurugaiy//AppData//Local//Google//Chrome//User Data//Profile 1'], // Path to your browser profile
      watchForFileChanges:false

    
  },
  
});
