## 0.4.0

### Breaking changes
* Don't use a protocol-relative URL for script loading. It was breaking ngTweet in Ionic, and is a practice that is no longer considered appropriate for the web. The widgets file is now served via https. If you don't want this, the URL can be changed via configuration.

## 0.3.1

### Fixes
* No longer clobber global log and debug state with the production build.

## 0.3.0

### Enhancements
* Added a `twitterTimeline` directive to allow for timeline embeds.

## 0.2.0

### Breaking changes
* The Twitter script is no longer downloaded on page load, meaning embedded Tweets not wrapped in `<twitter-widget>` tags will *not* be rendered.  If this behavior is desired, please include the `twitterWidgetInitialize` directive somewhere within your application.

### Enhancements
* Added a `twitterWidgetInitialize` directive to load the script greedily (instead of on-demand).
* Added an optional `twitter-widget-options` attribute to the `twitterWidget` directive to allow for Tweet appearance customization.

## 0.1.2

### Fixes
* Widget: Don't use the raw Twitter ID attribute value when linking the directive.
* Docs: Fix docs to properly pass in the Twitter ID.

## 0.1.1

### Fixes
* Unscramble Bower dependencies and Bower devDependencies.

## 0.1.0
Initial release
