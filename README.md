# HTML 'lang' test pages

This project builds web pages for testing how the HTML `lang` attribute
is handled by different browsers, operating systems, and screen readers.

Four pages are generated with the following variations:

- Start with `lang="en"` at page load, with the language specified
  directly on the `<html>` element in the page source
- Start with `lang="en"`, with the `lang` attribute not set in the HTML
  source, but instead set on the `<html>` element using JavaScript
- Start with `lang="fr"` at page load, with the language specified
  directly on the `<html>` element in the page source
- Start with `lang="fr"`, with the `lang` attribute not set in the HTML
  source, but instead set on the `<html>` element using JavaScript

Each page contains a toggle button, at the bottom of the page, which
switches the `lang` attribute on the `<html>` element between `"en"` and
`"fr"`. And each page contains 3 blocks of 4 elements:

- The first block is static and does not change when the language is
  changed
- The second block changes with the language, with only the text being
  replaced
- The third block changes with the language, with the whole content
  tree being replaced

## Building and hosting on GitHub Pages

This project uses [Eleventy](https://www.11ty.dev/) to build the test
web pages with the generated HTML pages being hosted on GitHub Pages.
The GitHub repository is configured to serve the pages from the `docs`
directory and the `.eleventy.js` configuration file specifies the output
directory as `docs`. The generated pages are committed to the
repository.

Use the following commands to build the web pages:

```
npm install
npm run build
```

`npm start` is also available to run a local web server when editing.
