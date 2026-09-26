export const backslashable = new Set([
    // " ",
    "\"",
    // "#",
    "+",
    ",",
    ";",
    "<",
    "=", // Technically does not have to be escaped, but we will escape it.
    ">",
    "\\",
]);
export const hexable = new Set([
    "\x00",
]);
export function escapeDistinguishedValue(str) {
    let ret = "";
    let i = 0;
    if (str.startsWith("#")) {
        ret += "\\#";
        i++;
    }
    if (str.startsWith(" ")) {
        ret += "\\ ";
    }
    while (i < str.length) {
        const char = str[i];
        if (backslashable.has(char)) {
            ret += `\\${char}`;
        }
        else if (hexable.has(char)) {
            ret += `\\${char.charCodeAt(0).toString(16).padStart(2, "0")}`;
        }
        else if ((i === (str.length - 1)) && (char === " ")) {
            ret += "\\ "; // Trailing space must be escaped.
        }
        else {
            ret += char;
        }
        i++;
    }
    return ret;
}
export default escapeDistinguishedValue;
