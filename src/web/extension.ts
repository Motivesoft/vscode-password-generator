// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as generator from './passwordgenerator';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('Extension "vscode-password-generator" is now active');

	// Create password(s) and paste them into the editor window
	context.subscriptions.push(vscode.commands.registerCommand('vscode-password-generator.generateToEditor', () => {
		// This will create and insert multiple passwords if a multi-select cursor is being used
		let editor = vscode.window.activeTextEditor;
		if (editor) {
			editor.edit(edit => {
				editor.selections.forEach(v => edit.replace(v, generatePassword()));
			});
		}
	}));

	// Create a password and copy it onto the cliboard
	context.subscriptions.push(vscode.commands.registerCommand('vscode-password-generator.generateToClipboard', () => {
		vscode.env.clipboard.writeText(generatePassword());

		// Display a message box to the user
		vscode.window.showInformationMessage(`Password generated and copied to clipboard`);
	}));
}

// This method is called when your extension is deactivated
export function deactivate() { }

function generatePassword(): string {
	// Get the configuration settings for password generation instructions
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