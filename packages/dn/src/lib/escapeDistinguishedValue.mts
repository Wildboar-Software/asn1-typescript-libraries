export
const backslashable = new Set<number>([
    // " ",
    "\"".codePointAt(0)!,
    // "#",
    "+".codePointAt(0)!,
    ",".codePointAt(0)!,
    ";".codePointAt(0)!,
    "<".codePointAt(0)!,
    "=".codePointAt(0)!, // Technically does not have to be escaped, but we will escape it.
    ">".codePointAt(0)!,
    "\\".codePointAt(0)!,
]);

export
const hexable = new Set<number>([ 0 ]);

/**
 * Leading `#` or space, a trailing space, or one of `" + , ; < = > \ NUL`.
 * A space or `#` in the middle does not need escaping. Keep this in step with
 * {@link backslashable} and {@link hexable}.
 */
const needsEscape: RegExp = /^(?:#| )| $|["+,;<=>\\\0]/;

export
function escapeDistinguishedValue(str: string): string {
    if (!needsEscape.test(str)) {
        return str;
    }
    let ret!: string;
    let i: number = 0;
    if (str.startsWith("#") || str.startsWith(" ")) {
        ret = String.fromCodePoint("\\".codePointAt(0)!, str.codePointAt(0)!);
        i++;
    } else {
        ret = "";
    }
    while (i < str.length) {
        const char = str.charCodeAt(i);
        switch (char) {
            case ("\"".codePointAt(0)):
            case ("+".codePointAt(0)):
            case (",".codePointAt(0)):
            case (";".codePointAt(0)):
            case ("<".codePointAt(0)):
            case ("=".codePointAt(0)):
            case (">".codePointAt(0)):
            case ("\\".codePointAt(0)):
                ret += String.fromCodePoint("\\".codePointAt(0)!, char);
                break;
            case (0):
                ret += "\\00";
                break;
            case (0x20): // space
                if (i === (str.length - 1)) {
                    ret += "\\ "; // Trailing space must be escaped.
                } else {
                    ret += String.fromCodePoint(char);
                }
                break;
            default:
                ret += String.fromCodePoint(char);
        }
        i++;
    }
    return ret;
}

export default escapeDistinguishedValue;
