# Tailwindcss plugin for :first-line

This Tailwind plugin implements the [CSS :first-line pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line)

## Installation

```bash
npm install --save-dev tailwindcss-first-line
```

or

```bash
yarn add -D tailwindcss-first-line
```

## Usage

```javascript
// tailwind.config.js

module.exports = {
    ...
    plugins: [
        require('tailwindcss-first-line'),
        ...
    ]
}
```

Then, add the `first-line` variant to each property you'd like to use it with.

```javascript
    textColor: [
      'responsive',
      'hover',
      'focus',
      'first-line',
    ],
```

You can then use it by preprending `first-line:` to your classes, like `first-line:your-class`.

For example, to change the color of the first line of a paragraph to white, you would write `first-line:text-white`.

If you have a prefix set in your config (e.g. `tw`), you would use the following syntax: `first-line:tw-text-white`.

**`:first-line` only applies to [block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#elements).**
