# Read-Only Reference Field UI Extension

This project was created with https://github.com/shiftlab/contentful-react-ui-extension.

A Contentful UI Extension for Entry fields, which shows a simple "read-only" link.

This extension would be used for Relationship fields that are created behind the scenes, perhaps
automatically via a webhook processor.

![screenshot2](https://user-images.githubusercontent.com/1427475/34423029-62c212ac-ebe7-11e7-848d-b011e19e97c7.png)

## Setup

Clone this project.

Install dependencies by running `yarn`.

Configure an `.env` file:

```
SPACE_ID={space id from contentful admin}
CONTENTFUL_MANAGEMENT_ACCESS_TOKEN={management token from contentful admin}
```

## Configuration

UI Extension configuration options are provided with a descriptor file called `extension.json`.
 
Details on configuring this file can be found [here](https://github.com/contentful/contentful-extension-cli#descriptor-files).

## Available commands

- `yarn start` - Start server in development mode for local development
- `yarn build` - Builds deployable UI extension
- `yarn deploy` - Deploys extension to Contentful
