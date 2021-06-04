# GlueConnectors Testing Tool

The purpose of this tool is to assess the functionality of GlueDesktop's Outlook, Word and Excel connectors (add-ins). 
This is done via the G4O and GlueJS libraries.

## Installation

In order for the application to be utilized within GlueDesktop's environment a .JSON configuration is utilized. The 'ConnectTest.json' configuration must be placed in the %localappdata%\Tick42\GlueDesktop\config\apps folder. 

In order to start the tool, the following must be executed: 

```cmd
npm i           // install the dependencies
npm run start   // run the server
```
