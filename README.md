# Password Generator

This extension generates passwords as combinations of letters, numbers and symbols to insert into the current editor window, or place onto the clipboard.

The composition and length of the passwords is configurable.

## Features

Two commands can be used:
- `Copy New Password to the Clipboard`
- `Insert New Password`

These comands can be accessed from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac), typing `password` and selecting the desired function. Alternately, they can be assigned to a key binding.

Using the Code [multi-cursor](https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor) feature, multiple passwords can be generated and inserted into the editor window at the same time.

See [Extension Settings](#extension-settings) for the ways in which the password composition can be controlled.

> This extension works with Code on the desktop and for the web.

## Requirements

None.

## Extension Settings

Here's the data formatted as a markdown table of key, default value, and description:

| Name | Default Value | Description and Key |
|-----|---------------|-------------|
| Length | 10 | `vscode-password-generator.length`<br/>The length of password to generate. |
| Include Uppercase Letters | true | `vscode-password-generator.includeUppercaseLetters`<br/>Include uppercase letters in the generated password. |
| Include Lowercase Letters | true | `vscode-password-generator.includeLowercaseLetters`<br/>Include lowercase letters in the generated password. |
| Include Numbers | false | `vscode-password-generator.includeNumbers`<br/>Include numbers in the generated password. |
| Include Symbols | false | `vscode-password-generator.includeSymbols`<br/>Include symbols in the generated password. |
| Symbol Characters | "" | `vscode-password-generator.symbolCharacters`<br/>Define the set of symbols to select from instead of the default used by the extension. |
| Exclude Characters | "" | `vscode-password-generator.excludeCharacters`<br/>Define a set of characters to exclude from the generated password. |
| Exclude Similar Characters | false | `vscode-password-generator.excludeSimilarCharacters`<br/>Exclude similar looking characters (e.g. 0oO, 1lI) from the generated password. |
| Strict | true | `vscode-password-generator.strict`<br/>Ensure least one of each included character type in the generated password. |

> Usage hint, if there is a requirement that passwords include letters, numbers and special characters, use the Strict (`vscode-password-generator.strict`) configuration setting.

## Known Issues

None reported.

## Release Notes

### 1.0.2

- Updated dependencies based on GitHub Dependabot alerts

### 1.0.1

- Added information about multi-cursor operation
- Add more usage information to README and improved settings table
- Modified a command name for clarity

### 1.0.0

- Initial release
- Insert new passwords into the current editor window or to the clipboard
- Configurable password settings to customize the generated password
  - Choose the desired combination of upper and lower case letters, numbers, symbols and length 
- Works on Code for the desktop or for the web
