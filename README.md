# MUI-THEME-VARIABLES

## Description

It is not the best way to write CSS code in a JavaScript file because the code becomes complicated, so this library enables you to use MUI theme properties as CSS variables, so you can use them in separate CSS and SCSS files.

## Note

When you create a custom theme, the variables will change automatically

## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install mui-theme-variables
```

## Example

### In the app.js file

```js
import { useTheme } from "@mui/material/styles";
import { useVariables } from "mui-theme-variables";
import "./style.css"

const theme = useTheme();
const { variables } = useVariables(theme)

// put the variables in the style prop in the main container

<div style={variables}>
    <h1 className="h1">Hello world</h1>
</div>

```

### In the CSS file

```css
.h1 {
  color: var(--palette-primary-main);
}
```

### In the SCSS file

```scss
.h1 {
  color: var(--palette-primary-main);
}
```

## Variables

| Variable Name                                                                        | default                                                                                                 |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `--breakpoints-values-xs`                                                            | 0                                                                                                       |
| `--breakpoints-values-sm`                                                            | 600                                                                                                     |
| `--breakpoints-values-md`                                                            | 900                                                                                                     |
| `--breakpoints-values-lg`                                                            | 1200                                                                                                    |
| `--breakpoints-values-xl`                                                            | 1536                                                                                                    |
| `--breakpoints-unit`                                                                 | px                                                                                                      |
| `--direction`                                                                        | ltr                                                                                                     |
| `--palette-mode`                                                                     | dark                                                                                                    |
| `--palette-common-black`                                                             | #000                                                                                                    |
| `--palette-common-white`                                                             | #fff                                                                                                    |
| `--palette-primary-main`                                                             | #90caf9                                                                                                 |
| `--palette-primary-light`                                                            | #e3f2fd                                                                                                 |
| `--palette-primary-dark`                                                             | #42a5f5                                                                                                 |
| `--palette-primary-contrast-text`                                                    | rgba(0, 0, 0, 0.87)                                                                                     |
| `--palette-secondary-main`                                                           | #ce93d8                                                                                                 |
| `--palette-secondary-light`                                                          | #f3e5f5                                                                                                 |
| `--palette-secondary-dark`                                                           | #ab47bc                                                                                                 |
| `--palette-secondary-contrast-text`                                                  | rgba(0, 0, 0, 0.87)                                                                                     |
| `--palette-error-main`                                                               | #f44336                                                                                                 |
| `--palette-error-light`                                                              | #e57373                                                                                                 |
| `--palette-error-dark`                                                               | #d32f2f                                                                                                 |
| `--palette-error-contrast-text`                                                      | #fff                                                                                                    |
| `--palette-warning-main`                                                             | #ffa726                                                                                                 |
| `--palette-warning-light`                                                            | #ffb74d                                                                                                 |
| `--palette-warning-dark`                                                             | #f57c00                                                                                                 |
| `--palette-warning-contrast-text`                                                    | rgba(0, 0, 0, 0.87)                                                                                     |
| `--palette-info-main`                                                                | #29b6f6                                                                                                 |
| `--palette-info-light`                                                               | #4fc3f7                                                                                                 |
| `--palette-info-dark`                                                                | #0288d1                                                                                                 |
| `--palette-info-contrast-text`                                                       | rgba(0, 0, 0, 0.87)                                                                                     |
| `--palette-success-main`                                                             | #66bb6a                                                                                                 |
| `--palette-success-light`                                                            | #81c784                                                                                                 |
| `--palette-success-dark`                                                             | #388e3c                                                                                                 |
| `--palette-success-contrast-text`                                                    | rgba(0, 0, 0, 0.87)                                                                                     |
| `--palette-grey-50`                                                                  | #fafafa                                                                                                 |
| `--palette-grey-100`                                                                 | #f5f5f5                                                                                                 |
| `--palette-grey-200`                                                                 | #eeeeee                                                                                                 |
| `--palette-grey-300`                                                                 | #e0e0e0                                                                                                 |
| `--palette-grey-400`                                                                 | #bdbdbd                                                                                                 |
| `--palette-grey-500`                                                                 | #9e9e9e                                                                                                 |
| `--palette-grey-600`                                                                 | #757575                                                                                                 |
| `--palette-grey-700`                                                                 | #616161                                                                                                 |
| `--palette-grey-800`                                                                 | #424242                                                                                                 |
| `--palette-grey-900`                                                                 | #212121                                                                                                 |
| `--palette-grey--a100`                                                               | #f5f5f5                                                                                                 |
| `--palette-grey--a200`                                                               | #eeeeee                                                                                                 |
| `--palette-grey--a400`                                                               | #bdbdbd                                                                                                 |
| `--palette-grey--a700`                                                               | #616161                                                                                                 |
| `--palette-contrast-threshold`                                                       | 3                                                                                                       |
| `--palette-tonal-offset`                                                             | 0.2                                                                                                     |
| `--palette-text-primary`                                                             | #fff                                                                                                    |
| `--palette-text-secondary`                                                           | rgba(255, 255, 255, 0.7)                                                                                |
| `--palette-text-disabled`                                                            | rgba(255, 255, 255, 0.5)                                                                                |
| `--palette-text-icon`                                                                | rgba(255, 255, 255, 0.5)                                                                                |
| `--palette-divider`                                                                  | rgba(255, 255, 255, 0.12)                                                                               |
| `--palette-background-paper`                                                         | #121212                                                                                                 |
| `--palette-background-default`                                                       | #121212                                                                                                 |
| `--palette-action-active`                                                            | #fff                                                                                                    |
| `--palette-action-hover`                                                             | rgba(255, 255, 255, 0.08)                                                                               |
| `--palette-action-hover-opacity`                                                     | 0.08                                                                                                    |
| `--palette-action-selected`                                                          | rgba(255, 255, 255, 0.16)                                                                               |
| `--palette-action-selected-opacity`                                                  | 0.16                                                                                                    |
| `--palette-action-disabled`                                                          | rgba(255, 255, 255, 0.3)                                                                                |
| `--palette-action-disabled-background`                                               | rgba(255, 255, 255, 0.12)                                                                               |
| `--palette-action-disabled-opacity`                                                  | 0.38                                                                                                    |
| `--palette-action-focus`                                                             | rgba(255, 255, 255, 0.12)                                                                               |
| `--palette-action-focus-opacity`                                                     | 0.12                                                                                                    |
| `--palette-action-activated-opacity`                                                 | 0.24                                                                                                    |
| `--shape-border-radius`                                                              | 4                                                                                                       |
| `--mixins-toolbar-min-height`                                                        | 56                                                                                                      |
| `--mixins-toolbar-@media (min-width:0px)-@media (orientation: landscape)-min-height` | 48                                                                                                      |
| `--mixins-toolbar-@media (min-width:600px)-min-height`                               | 64                                                                                                      |
| `--shadows-0`                                                                        | none                                                                                                    |
| `--shadows-1`                                                                        | 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)      |
| `--shadows-2`                                                                        | 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)      |
| `--shadows-3`                                                                        | 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)      |
| `--shadows-4`                                                                        | 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)     |
| `--shadows-5`                                                                        | 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)     |
| `--shadows-6`                                                                        | 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)    |
| `--shadows-7`                                                                        | 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)    |
| `--shadows-8`                                                                        | 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)    |
| `--shadows-9`                                                                        | 0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)    |
| `--shadows-10`                                                                       | 0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)   |
| `--shadows-11`                                                                       | 0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)   |
| `--shadows-12`                                                                       | 0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)   |
| `--shadows-13`                                                                       | 0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)   |
| `--shadows-14`                                                                       | 0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)   |
| `--shadows-15`                                                                       | 0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)   |
| `--shadows-16`                                                                       | 0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)  |
| `--shadows-17`                                                                       | 0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)  |
| `--shadows-18`                                                                       | 0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)  |
| `--shadows-19`                                                                       | 0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)  |
| `--shadows-20`                                                                       | 0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12) |
| `--shadows-21`                                                                       | 0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12) |
| `--shadows-22`                                                                       | 0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12) |
| `--shadows-23`                                                                       | 0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12) |
| `--shadows-24`                                                                       | 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12) |
| `--typography-html-font-size`                                                        | 16                                                                                                      |
| `--typography-font-family`                                                           | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-font-size`                                                             | 14                                                                                                      |
| `--typography-font-weight-light`                                                     | 300                                                                                                     |
| `--typography-font-weight-regular`                                                   | 400                                                                                                     |
| `--typography-font-weight-medium`                                                    | 500                                                                                                     |
| `--typography-font-weight-bold`                                                      | 700                                                                                                     |
| `--typography-h1-font-family`                                                        | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-h1-font-weight`                                                        | 300                                                                                                     |
| `--typography-h1-font-size`                                                          | 6rem                                                                                                    |
| `--typography-h1-line-height`                                                        | 1.167                                                                                                   |
| `--typography-h1-letter-spacing`                                                     | -0.01562em                                                                                              |
| `--typography-h2-font-family`                                                        | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-h2-font-weight`                                                        | 300                                                                                                     |
| `--typography-h2-font-size`                                                          | 3.75rem                                                                                                 |
| `--typography-h2-line-height`                                                        | 1.2                                                                                                     |
| `--typography-h2-letter-spacing`                                                     | -0.00833em                                                                                              |
| `--typography-h3-font-family`                                                        | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-h3-font-weight`                                                        | 400                                                                                                     |
| `--typography-h3-font-size`                                                          | 3rem                                                                                                    |
| `--typography-h3-line-height`                                                        | 1.167                                                                                                   |
| `--typography-h3-letter-spacing`                                                     | 0em                                                                                                     |
| `--typography-h4-font-family`                                                        | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-h4-font-weight`                                                        | 400                                                                                                     |
| `--typography-h4-font-size`                                                          | 2.125rem                                                                                                |
| `--typography-h4-line-height`                                                        | 1.235                                                                                                   |
| `--typography-h4-letter-spacing`                                                     | 0.00735em                                                                                               |
| `--typography-h5-font-family`                                                        | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-h5-font-weight`                                                        | 400                                                                                                     |
| `--typography-h5-font-size`                                                          | 1.5rem                                                                                                  |
| `--typography-h5-line-height`                                                        | 1.334                                                                                                   |
| `--typography-h5-letter-spacing`                                                     | 0em                                                                                                     |
| `--typography-h6-font-family`                                                        | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-h6-font-weight`                                                        | 500                                                                                                     |
| `--typography-h6-font-size`                                                          | 1.25rem                                                                                                 |
| `--typography-h6-line-height`                                                        | 1.6                                                                                                     |
| `--typography-h6-letter-spacing`                                                     | 0.0075em                                                                                                |
| `--typography-subtitle1-font-family`                                                 | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-subtitle1-font-weight`                                                 | 400                                                                                                     |
| `--typography-subtitle1-font-size`                                                   | 1rem                                                                                                    |
| `--typography-subtitle1-line-height`                                                 | 1.75                                                                                                    |
| `--typography-subtitle1-letter-spacing`                                              | 0.00938em                                                                                               |
| `--typography-subtitle2-font-family`                                                 | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-subtitle2-font-weight`                                                 | 500                                                                                                     |
| `--typography-subtitle2-font-size`                                                   | 0.875rem                                                                                                |
| `--typography-subtitle2-line-height`                                                 | 1.57                                                                                                    |
| `--typography-subtitle2-letter-spacing`                                              | 0.00714em                                                                                               |
| `--typography-body1-font-family`                                                     | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-body1-font-weight`                                                     | 400                                                                                                     |
| `--typography-body1-font-size`                                                       | 1rem                                                                                                    |
| `--typography-body1-line-height`                                                     | 1.5                                                                                                     |
| `--typography-body1-letter-spacing`                                                  | 0.00938em                                                                                               |
| `--typography-body2-font-family`                                                     | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-body2-font-weight`                                                     | 400                                                                                                     |
| `--typography-body2-font-size`                                                       | 0.875rem                                                                                                |
| `--typography-body2-line-height`                                                     | 1.43                                                                                                    |
| `--typography-body2-letter-spacing`                                                  | 0.01071em                                                                                               |
| `--typography-button-font-family`                                                    | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-button-font-weight`                                                    | 500                                                                                                     |
| `--typography-button-font-size`                                                      | 0.875rem                                                                                                |
| `--typography-button-line-height`                                                    | 1.75                                                                                                    |
| `--typography-button-letter-spacing`                                                 | 0.02857em                                                                                               |
| `--typography-button-text-transform`                                                 | uppercase                                                                                               |
| `--typography-caption-font-family`                                                   | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-caption-font-weight`                                                   | 400                                                                                                     |
| `--typography-caption-font-size`                                                     | 0.75rem                                                                                                 |
| `--typography-caption-line-height`                                                   | 1.66                                                                                                    |
| `--typography-caption-letter-spacing`                                                | 0.03333em                                                                                               |
| `--typography-overline-font-family`                                                  | "Roboto", "Helvetica", "Arial", sans-serif                                                              |
| `--typography-overline-font-weight`                                                  | 400                                                                                                     |
| `--typography-overline-font-size`                                                    | 0.75rem                                                                                                 |
| `--typography-overline-line-height`                                                  | 2.66                                                                                                    |
| `--typography-overline-letter-spacing`                                               | 0.08333em                                                                                               |
| `--typography-overline-text-transform`                                               | uppercase                                                                                               |
| `--typography-inherit-font-family`                                                   | inherit                                                                                                 |
| `--typography-inherit-font-weight`                                                   | inherit                                                                                                 |
| `--typography-inherit-font-size`                                                     | inherit                                                                                                 |
| `--typography-inherit-line-height`                                                   | inherit                                                                                                 |
| `--typography-inherit-letter-spacing`                                                | inherit                                                                                                 |
| `--transitions-easing-ease-in-out`                                                   | cubic-bezier(0.4, 0, 0.2, 1)                                                                            |
| `--transitions-easing-ease-out`                                                      | cubic-bezier(0.0, 0, 0.2, 1)                                                                            |
| `--transitions-easing-ease-in`                                                       | cubic-bezier(0.4, 0, 1, 1)                                                                              |
| `--transitions-easing-sharp`                                                         | cubic-bezier(0.4, 0, 0.6, 1)                                                                            |
| `--transitions-duration-shortest`                                                    | 150                                                                                                     |
| `--transitions-duration-shorter`                                                     | 200                                                                                                     |
| `--transitions-duration-short`                                                       | 250                                                                                                     |
| `--transitions-duration-standard`                                                    | 300                                                                                                     |
| `--transitions-duration-complex`                                                     | 375                                                                                                     |
| `--transitions-duration-entering-screen`                                             | 225                                                                                                     |
| `--transitions-duration-leaving-screen`                                              | 195                                                                                                     |
| `--z-index-mobile-stepper`                                                           | 1000                                                                                                    |
| `--z-index-fab`                                                                      | 1050                                                                                                    |
| `--z-index-speed-dial`                                                               | 1050                                                                                                    |
| `--z-index-app-bar`                                                                  | 1100                                                                                                    |
| `--z-index-drawer`                                                                   | 1200                                                                                                    |
| `--z-index-modal`                                                                    | 1300                                                                                                    |
| `--z-index-snackbar`                                                                 | 1400                                                                                                    |
| `--z-index-tooltip`                                                                  | 1500                                                                                                    |
