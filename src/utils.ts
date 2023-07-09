export function generatePassword(length: number, includeUppercase: boolean, includeLowercase: boolean, includeNumbers: boolean, includeSymbols: boolean): string {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = lowerCaseLetters.toUpperCase();
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+{}[];:,.<>?';

    let allPossibleCharacters = '';
    if (includeLowercase) {
        allPossibleCharacters += lowerCaseLetters;
    }
    if (includeUppercase) {
        allPossibleCharacters += upperCaseLetters;
    }
    if (includeNumbers) {
        allPossibleCharacters += numbers;
    }
    if (includeSymbols) {
        allPossibleCharacters += symbols;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allPossibleCharacters.length);
        password += allPossibleCharacters[randomIndex];
    }

    return password;
}


export function passwordStrength(password: string): number {
    if (!password) return 0;

    // Score for variety of character types
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /\W|_/.test(password);
    const typeCount = (hasLowerCase ? 1 : 0) + (hasUpperCase ? 1 : 0) + (hasNumber ? 1 : 0) + (hasSymbol ? 1 : 0);
    const typeScore = typeCount / 4; // This will range from 0 to 1

    // Score for length of password
    let lengthScore = 0;
    if (password.length >= 12) lengthScore = 0.5;
    if (password.length >= 16) lengthScore = 1;

    // Average of the two scores, scaled to a range of 1 to 4
    return Math.round((typeScore + lengthScore) / 2 * 3) + 1;
}


export async function copyToClipboard(text: string) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}