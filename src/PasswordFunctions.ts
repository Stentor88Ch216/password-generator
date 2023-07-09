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
    let score = 0;
    if (password.length >= 12) score++;
    if (/[a-zA-Z]/.test(password)) score++; // any letter
    if (/[0-9]/.test(password)) score++; // number
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++; // special character

    return score;
}
