// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as generator from './passwordgenerator';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-password-generator" is now active in the web extension host!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('vscode-password-generator.helloWorld', () => {
		const password = generatePassword();

		// Display a message box to the user
		vscode.window.showInformationMessage(`Password generated: ${password}`);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }

function generatePassword(): string {
	// Read the configuration settings for password generation instructions
	const configuration = vscode.workspace.getConfiguration("vscode-password-generator");

	// Generate a password
	return generator.generate({
		length: configuration.get("length"),
		includeUppercase: configuration.get("includeUppercaseLetters"),
		includeLowercase: configuration.get("includeLowercaseLetters"),
		includeNumbers: configuration.get("includeNumbers"),
		includeSymbols: configuration.get("includeSymbols"),
		symbolCharacters: configuration.get("symbolCharacters"),
		excludeCharacters: configuration.get("excludeCharacters"),
		excludeSimilarCharacters: configuration.get("excludeSimilarCharacters"),
		strict: configuration.get("strict")
	});
}