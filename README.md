# Password Generator

This extension generates passwords as combinations of letters, numbers and symbols to insert into the current editor window, or place onto the clipboard.

The composition and length of the passwords is configurable.

## Features

Two commands can be used:
- `Copy New Password to the Clipboard`
- `Copy New Password to the current editor window`

See [Extension Settings](#extension-settings) to see the ways in which the password composition can be controlled.


## Requirements

None.

## Extension Settings

Here's the data formatted as a markdown table of key, default value, and description:

| Key | Default Value | Description |
|-----|---------------|-------------|
| vscode-password-generator.length | 10 | The length of password to generate |
| vscode-password-generator.includeUppercaseLetters | true | Include uppercase letters in the generated password |
| vscode-password-generator.includeLowercaseLetters | true | Include lowercase letters in the generated password |
| vscode-password-generator.includeNumbers | false | Include numbers in the generated password |
| vscode-password-generator.includeSymbols | false | Include symbols in the generated password |
| vscode-password-generator.symbolCharacters | "" | Define the set of symbols to select from instead of the default used by the extension |
| vscode-password-generator.excludeCharacters | "" | Define a set of characters to exclude from the generated password |
| vscode-password-generator.excludeSimilarCharacters | false | Exclude similar looking characters (e.g. 0oO, 1lI) from the generated password |
| vscode-password-generator.strict | true | Ensure least one of each included character type in the generated password |

## Known Issues

None reported.

## Release Notes

### 1.0.0

- Initial release
- Insert new passwords into the current editor window or to the clipboard
- Configurable password settings to customize the generated password
  - Choose the desired combination of upper and lower case letters, numbers, symbols and length 
- Works on Code for the desktop or for the web
