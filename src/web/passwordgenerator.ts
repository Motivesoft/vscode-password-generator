export interface GenerateOptions {
    /**
     * Length of the generated password.
     * @default 10
     */
    length?: number;
    /**
     * Should the password include numbers
     * @default false
     */
    numbers?: boolean;
    /**
     * Should the password include symbols, or symbols to include
     * @default false
     */
    symbols?: boolean | string;
    /**
     * Should the password include lowercase characters
     * @default true
     */
    lowercase?: boolean;
    /**
     * Should the password include uppercase characters
     * @default true
     */
    uppercase?: boolean;
    /**
     * Should exclude visually similar characters like 'i' and 'I'
     * @default false
     */
    excludeSimilarCharacters?: boolean;
    /**
     * List of characters to be excluded from the password
     * @default ""
     */
    exclude?: string;
    /**
     * Password should include at least one character from each pool
     * @default false
     */
    strict?: boolean;
}

/**
 * Generate one password with the given options.
 */
export function generate(options?: GenerateOptions): string {
    const charsetSimilar = "iloILO01!|/";

    var charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charsetLower = "abcdefghijklmnopqrstuvwxyz";
    var charsetDigits = "0123456789";
    var charsetSpecial = "!@#$%^&*()_+{}|:<>?-=[];',./";

    var charset: string = "";
    var password: string = "";

    // Remove either similar or specifically excluded characters
    var excluded = ""; 
    if (options?.excludeSimilarCharacters) {
        excluded += charsetSimilar;        
    }

    if (options?.exclude) {
        excluded += options.exclude;        
    }    

    if (excluded.length > 0) {
        charsetUpper = filter( charsetUpper, excluded );
        charsetLower = filter( charsetLower, excluded );
        charsetDigits = filter( charsetDigits, excluded );
        charsetSpecial = filter( charsetSpecial, excluded );
    }

    // Build a list of candidate characters from what's left
    if (options?.numbers) {
        charset += charsetDigits;

        // If we're being strict, make sure there is one of these characters in the password
        if (options?.strict) {
            password += randChar(charsetDigits);
        }
    }

    if (options?.uppercase) {
        charset += charsetUpper;

        // If we're being strict, make sure there is one of these characters in the password
        if (options?.strict) {
            password += randChar(charsetUpper);
        }
    }

    if (options?.lowercase) {
        charset += charsetLower;

        // If we're being strict, make sure there is one of these characters in the password
        if (options?.strict) {
            password += randChar(charsetLower);
        }
    }

    if (options?.symbols) {
        charset += charsetSpecial;

        // If we're being strict, make sure there is one of these characters in the password
        if (options?.strict) {
            password += randChar(charsetSpecial);
        }
    }

    // No types of character where selected
    if (charset.length === 0) {
        console.error("No character types selected for password");
        return "";
    }

    // Strict password and short password may get in each other's way
    var length = options?.length || 10;
    if( length < password.length) {
        // Can't satisfy the strictness rule in a password this short
        console.error("Requested password length is too short for a strict password");
        return "";
    }

    // Fill the password to length
    while(length > password.length) {
        password += randChar(charset);
    }

    // Shuffle the password
    const array = password.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = rand(i + 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
    password = array.join('');
  
    return password;
}

/**
 * Bulk generate multiple passwords at once, with the same options for all.
 */
export function generateMultiple(count: number, options?: GenerateOptions): string[] {
    var passwords: string[] = [];

    for (let index = 0; index < count; index++) {
        passwords.push(generate(options));
    }

    return passwords;
}

/**
 * Eliminate excluded characters from the input string and return the clean version 
 */
function filter(charset: string, excluded: string) : string {
    for (const element of excluded) {
        charset.replace(element,"");
    }

    return charset;
}

/** 
 * Return a random integer between 0 and <code>upper</code> 
 */
function rand(upper: number) : number {
    return Math.floor(Math.random() * (upper + 1));
}
/** 
 * Return a random integer between 0 and <code>upper</code> 
 */
function randChar(charset: string) : string {
    return charset[rand(charset.length)];
}