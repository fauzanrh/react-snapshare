# react-snapshare

> Snapchat share button

[![NPM](https://img.shields.io/npm/v/react-snapshare.svg)](https://www.npmjs.com/package/react-snapshare) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Requirements

- An app created on the [Snap Kit developer portal](https://kit.snapchat.com/portal)
- A website to add the share button
- Users on Snapchat 10.67+

## Getting started

To start using Creative Kit Web you will need to complete the following steps on the [Snap Kit developer portal](https://kit.snapchat.com/portal) under your app's settings:

1. Turn the toggle for 'Creative Kit' to ON under the 'Kits' section.
2. Once turned on, a new section will appear titled 'Whitelisted Attachment URL Domains'
3. Add the base url of your website to the 'Whitelisted Attachment URL Domains' list. For example, if your article is hosted at https://www.snapchat.com/article/helloWorld you need only enter https://www.snapchat.com. Be sure to include the https:// so as to pass URL validation.
4. If you are using multiple testing environments, you will need to add all the base urls to this list like https://dev.snapchat.com , https://staging.snapchat.com

## Install

```bash
npm install --save react-snapshare
```

## Usage

```jsx
import React, { Component } from "react";
import Snapshare from "react-snapshare";

class Example extends Component {
  render() {
    return <Snapshare />;
  }
}
```

## Props

1. dataShareUrl: PropTypes.string

2. dataTheme: PropTypes.string

3. dataSize: PropTypes.string

4. dataText: PropTypes.string

5. stickerAssetURL: PropTypes.string

1000 x 1000px
Transparent background
Less than 1MB
PNG format
Animated stickers in GIF format are supported only on iOS. On Android please use WebP.

6. publisherID: PropTypes.string

In order to link the Creative Kit Share back to yourself as a Discover Publisher, you can add an additional meta tag to the html. First, obtain your publisher ID from [Story Studio](https://publish.snapchat.com/).

## Behavior of the Share Button

- On Desktop - If a user on desktop clicks the Snapchat share button, a new window will open with a Snapcode and information about the page. This information is pulled from OG tags - og:title, and og:site_name. The user can scan the Snapcode with the Snapchat camera, and the link will attach the URL to Snapchat.

- On Mobile Web - If a user on a mobile device taps on the Snapchat share button, one of two things will happen:
  1. Snapchat app installed - the user will be deep linked into the Snapchat app, and be presented with a modal containing information about the page. This information is pulled from OG tags - og:title, and og:site_name. The modal will also contain prompts to attach the URL to a Snap, or send the URL via chat.
  2. Snapchat app not installed - the user will be prompted to open the App/Play Store to get the Snapchat app.

## License

MIT © [thomaswangio](https://github.com/thomaswangio)
