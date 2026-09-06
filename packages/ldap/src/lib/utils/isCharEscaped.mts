/**
 * @summary Whether the character at `index` is escaped by an odd run of `escapeChar`.
 * @description
 *
 * Per RFC 4514, a delimiter is escaped when preceded by an odd number of
 * backslashes (each pair `\\` cancels one escape).
 *
 * @param str The string being scanned.
 * @param index Index of the delimiter character.
 * @param escapeChar Code unit of the escape character (default `\`).
 * @returns `true` if the character at `index` is escaped.
 * @function
 */
export
function isCharEscaped (
    str: string,
    index: number,
    escapeChar: number = "\\".charCodeAt(0),
): boolean {
    let backslashes: number = 0;
    for (let i: number = index - 1; i >= 0 && str.charCodeAt(i) === escapeChar; i--) {
        backslashes++;
    }
    return (backslashes % 2) === 1;
}

export default isCharEscaped;
