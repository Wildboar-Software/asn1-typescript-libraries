// Information on "\p{Cc}":
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
// - https://unicode.org/reports/tr18/#General_Category_Property

/**
 * Clause 7.2: TAB, LF, VT, FF, CR, and NEL map to SPACE. Applied
 * before `mappedToNothing` so those controls are not deleted.
 */
const controlsToSpace: RegExp = /[\t\n\v\f\r\u0085]/g;

/**
 * Clause 7.2 map-to-nothing: SOFT HYPHEN, MONGOLIAN TODO SOFT
 * HYPHEN, COMBINING GRAPHEME JOINER, Mongolian free-variation
 * selectors, variation selectors U+FE00..U+FE0F, OBJECT
 * REPLACEMENT CHARACTER, ZERO WIDTH SPACE, remaining controls,
 * and remaining format characters.
 */
const mappedToNothing: RegExp = /[\u00AD\u1806\u034F\u180B-\u180D\uFE00-\uFE0F\uFFFC\u200B\p{Cc}\p{Cf}]+/ug;

export const prohibitedCharacters: RegExp = /[\uD800-\uDFFF\uFFFD]+/;

/**
 * RFC 3454 B.2 mappings that are not the same as
 * `String.prototype.toLowerCase()`. Used when `caseFold` is set.
 */
const FULL_CASE_FOLD: ReadonlyMap<number, string> = new Map([
    [0x00DF, "ss"],
    [0x0130, "i\u0307"],
    [0x0149, "\u02BCn"],
    [0x017F, "s"],
    [0x01F0, "j\u030C"],
    [0x0390, "\u03B9\u0308\u0301"],
    [0x03B0, "\u03C5\u0308\u0301"],
    [0x0587, "\u0565\u0582"],
    [0x1E96, "h\u0331"],
    [0x1E97, "t\u0308"],
    [0x1E98, "w\u030A"],
    [0x1E99, "y\u030A"],
    [0x1E9A, "a\u02BE"],
    [0x1E9E, "ss"],
    [0xFB00, "ff"],
    [0xFB01, "fi"],
    [0xFB02, "fl"],
    [0xFB03, "ffi"],
    [0xFB04, "ffl"],
    [0xFB05, "st"],
    [0xFB06, "st"],
]);

function foldCase (str: string): string {
    let out = "";
    for (const ch of str) {
        const mapped = FULL_CASE_FOLD.get(ch.codePointAt(0)!);
        out += mapped ?? ch.toLowerCase();
    }
    return out;
}

export interface PrepStringOptions {
    /**
     * Clause 7.2: case-fold as in IETF RFC 3454 B.2 during Map.
     * Used by case-ignore and stored-prefix matchers.
     */
    readonly caseFold?: boolean;
}

/**
 * @summary Prepare a string for matching, per ITU Recommendation X.520, Section 7.
 * @description
 *
 * This function normalizes an input string for comparison in X.500 matching
 * rules according to the procedures defined in
 * [ITU Recommendation X.520 (2019)](https://www.itu.int/rec/T-REC-X.520/en),
 * Section 7.
 *
 * The input string is already expected to be transcoded, thereby satisfying
 * the procedures defined in section 7.1. There is nothing to be done relating
 * to section 7.5. NumericString and TelephoneNumber insignificant-character
 * removal (7.6.2 / 8.2.8) belong in those matching rules, not here:
 * NumericString is only digits and SPACE, so Map and case-folding are no-ops.
 *
 * Prohibit (7.4) may run before or after Map: the two sets do not overlap.
 *
 * @param {string} str The string to be normalized.
 * @param {PrepStringOptions} [options] `caseFold` applies RFC 3454 B.2 during Map.
 * @returns {string | undefined} The normalized string, or `undefined` if there
 *  was a prohibited character or the mapped string was empty.
 *
 * @function
 */
export
function prepString (str: string, options?: PrepStringOptions): string | undefined {
    if (prohibitedCharacters.test(str)) { // 7.4: Prohibit
        return undefined;
    }
    // 7.2: Map. Controls that become SPACE are rewritten first so they
    // are not deleted with the remaining Cc characters.
    let mapped = str
        .replace(controlsToSpace, " ")
        .replace(mappedToNothing, "");
    if (options?.caseFold === true) {
        mapped = foldCase(mapped);
    }
    mapped = mapped.normalize("NFKC"); // 7.3: Normalize
    if (mapped.length === 0) {
        return undefined;
    }
    // 7.6.1: consecutive whitespace is one SPACE; leading and
    // trailing SPACE are removed; a string of only spaces becomes
    // a single SPACE.
    const trimmed = mapped.replace(/\s+/g, " ").trim();
    return trimmed.length === 0 ? " " : trimmed;
}

/**
 * Unicode code-point (UTF-16) collation used by X.520 clause 8.1.2
 * ordering matching rules. Negative if `a` precedes `b`.
 */
export
function compareCodePoints (a: string, b: string): number {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
