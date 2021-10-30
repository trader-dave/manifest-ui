<p align="center">
  <!-- image here -->
</p>

<h1 align="center">Manifest UI</h1>

<p align="center">Design System themes and components for <a href="https://www.project44.com/" >project44</a>.</p>

<p align="center">
  <a aria-label="Storybook" href="https://project44.github.io/manifest-ui/">
        <img alt="" src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg">
    </a>
  <a aria-label="Playroom" href="https://project44.github.io/manifest-ui/playroom">
    <img alt="" src="https://img.shields.io/badge/Playroom-live-blueviolet">
</p>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/@manifest-ui/react">
    <img alt="" src="https://img.shields.io/npm/v/@manifest-ui/react.svg">
  </a>
    </a>
    <a aria-label="percy.io builds" href="https://percy.io/f2a7a5cd/manifest-ui">
    <img alt="" src="https://percy.io/static/images/percy-badge.svg">
  </a>
  <a aria-label="build status" href="https://github.com/project44/manifest-ui/actions/workflows/pages.yml">
      <img alt="" src="https://github.com/project44/manifest-ui/actions/workflows/validate.yml/badge.svg">
  </a>
  <a aria-label="pages status" href="https://github.com/project44/manifest-ui/actions/workflows/pages.yml">
      <img alt="" src="https://github.com/project44/manifest-ui/actions/workflows/pages.yml/badge.svg">
  </a>
</p>

Themeable design system built using [Chakra UI] for the project44.

## Documentation

Our documentation site lives at [zeroheight]. You'll be able to find detailed documentation on getting started, all of the components, our theme, our principles, and more.

## Installation

Install `@manifest-ui/react` and necessary peer dependencies in your project with your package manager of choice:

```sh
# with npm
npm install @manifest-ui/react

# with yarn
yarn add @manifest-ui/react
```

Note that you must have Manifest UI and all peer dependencies installed for your project as well.

```
# npm with peer dependencies
npm install @emotion/react@^11 @emotion/styled@^11 framer-motion@^4

# yarn with peer dependencies
yarn add @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

## Usage

To start using the theme and components, please follow these steps:

Wrap your application with the `ManifestProvider` provided by **@manifest-ui/react**.

```jsx
import { ManifestProvider } from '@manifest-ui/react';

// Do this at the root of your application
function App({ children }) {
  return <ManifestProvider>{children}</ManifestProvider>;
}
```

Now you can start using components like so:

```jsx
import { Button } from '@manifest-ui/react';

function Example() {
  return <Button>Track shipment</Button>;
}
```

## Contributing

We love collaborating with folks inside and outside of project44 and welcome contributions!

> 👉 See the [contributing docs] for more info on code style, testing, coverage, and troubleshooting

[zeroheight]: https://p44design.systems
[chakra ui]: https://chakra-ui.com/
[contributing docs]: CONTRIBUTING.md
