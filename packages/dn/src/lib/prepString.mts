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

/**
 * Code units outside printable ASCII. Used only as a reject for the
 * long-string scan, so it stays non-global and `test` cannot stick.
 */
const notPlainAscii: RegExp = /[^\u0020-\u007E]/;

/**
 * Leading whitespace, trailing whitespace, a whitespace run, or
 * whitespace other than U+0020. When this does not match, replacing
 * `/\s+/` with a single space and trimming would not change the string.
 */
const needsInsignificantSpaceRemoval: RegExp = /^\s|\s\s|\s$|[^\S ]/;

const insignificantSpaces: RegExp = /\s+/g;

const SPACE: number = 0x20;

/**
 * Above this length, a string that is not printable ASCII is prepared
 * with the regexp steps directly. A character scan is faster for
 * shorter strings and for printable ASCII of any length. It is slower
 * when a mapped character sits near the end of a longer string: the
 * scan walks the whole string and then so does `replace`.
 */
const SCAN_LIMIT: number = 64;

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
 * Clause 7.6.1. A run of spaces becomes one SPACE, and leading and
 * trailing SPACE are removed. A string of only spaces becomes one SPACE.
 * Single internal U+0020s are already in that form; `replace` would
 * still allocate a new string for them.
 */
function removeInsignificantSpaces (mapped: string): string {
    if (!needsInsignificantSpaceRemoval.test(mapped)) {
        return mapped;
    }
    const trimmed: string = mapped.replace(insignificantSpaces, " ").trim();
    return trimmed.length === 0 ? " " : trimmed;
}

/**
 * Map, prohibit, normalize, and insignificant-space removal, always
 * running the regexp steps. Used when the string is longer than
 * {@link SCAN_LIMIT} and is not printable ASCII.
 */
function prepStringGeneral (str: string, caseFold: boolean): string | undefined {
    if (prohibitedCharacters.test(str)) { // 7.4: Prohibit
        return undefined;
    }
    // 7.2: Map. Controls that become SPACE are rewritten first so they
    // are not deleted with the remaining Cc characters.
    let mapped: string = str
        .replace(controlsToSpace, " ")
        .replace(mappedToNothing, "");
    if (caseFold) {
        mapped = foldCase(mapped);
    }
    mapped = mapped.normalize("NFKC"); // 7.3: Normalize
    if (mapped.length === 0) {
        return undefined;
    }
    return removeInsignificantSpaces(mapped);
}

/**
 * Prepare a short string, or any printable ASCII string, by scanning
 * it once.
 *
 * This is the path taken when {@link prepStringGeneral} does not apply:
 * the string is at most {@link SCAN_LIMIT} code units, or every code
 * unit is in U+0020..U+007E. Printable ASCII skips Map, Prohibit, and
 * NFKC, and its case fold is `toLowerCase`. A short string that is not
 * printable ASCII calls `replace` only for the mappings the scan found.
 */
function prepStringShortOrAscii (str: string, caseFold: boolean): string | undefined {
    const n: number = str.length;
    let mapControls: boolean = false;
    let maybeMappedToNothing: boolean = false;
    let needsSpace: boolean = false;
    let prevSpace: boolean = false;
    let plain: boolean = true;
    for (let i: number = 0; i < n; i++) {
        const c: number = str.charCodeAt(i);
        if (c === SPACE) {
            if (prevSpace || i === 0 || i === (n - 1)) {
                needsSpace = true;
            }
            prevSpace = true;
            continue;
        }
        prevSpace = false;
        if (c > 0x7E) {
            plain = false;
            if (c === 0x85) { // NEL maps to SPACE, not to nothing
                mapControls = true;
            } else if (c === 0xFFFD || (c >= 0xD800 && c <= 0xDFFF)) {
                return undefined; // 7.4: Prohibit
            } else {
                maybeMappedToNothing = true;
            }
            continue;
        }
        if (c < SPACE) {
            plain = false;
            // TAB, LF, VT, FF, CR. Other C0 controls map to nothing.
            if (c >= 0x09 && c <= 0x0D) {
                mapControls = true;
            } else {
                maybeMappedToNothing = true;
            }
        }
    }
    if (plain) {
        const mapped: string = caseFold ? str.toLowerCase() : str;
        if (!needsSpace) {
            return mapped.length === 0 ? undefined : mapped;
        }
        return removeInsignificantSpaces(mapped);
    }
    let mapped: string = str;
    if (mapControls) {
        mapped = mapped.replace(controlsToSpace, " ");
    }
    if (maybeMappedToNothing) {
        mapped = mapped.replace(mappedToNothing, "");
    }
    if (caseFold) {
        mapped = foldCase(mapped);
    }
    mapped = mapped.normalize("NFKC");
    if (mapped.length === 0) {
        return undefined;
    }
    return removeInsignificantSpaces(mapped);
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
    const caseFold: boolean = options?.caseFold === true;
    // Long strings that are not printable ASCII stay on the regexp
    // path. Everything else is short or ASCII. See
    // `packages/dn/bench/prepString.mjs`.
    if (str.length > SCAN_LIMIT && notPlainAscii.test(str)) {
        return prepStringGeneral(str, caseFold);
    }
    return prepStringShortOrAscii(str, caseFold);
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
