/**
 * String preparation for Rec. ITU-T X.520 (10/2019) clause 7.
 *
 * Six steps: Transcode (already done: JS strings are Unicode), Map,
 * Normalize (NFKC), Prohibit, Check bidi (no restrictions), then
 * Insignificant Character Removal. Failure at any step yields
 * `undefined` (X.520 UNDEFINED).
 */

export type PrepInsignificant =
    | "directory" // clause 7.6.1
    | "numeric" // clause 7.6.2
    | "telephone" // clause 8.2.8 / 8.2.9
    | "none";

export interface PrepStringOptions {
    /**
     * Clause 7.2: case-fold as in IETF RFC 3454 B.2 during Map.
     * Used by case-ignore, numeric, stored-prefix, and telephone matchers.
     */
    readonly caseFold?: boolean;
    /**
     * Clause 7.6 / 8.2.8 character removal. Default `directory`.
     */
    readonly insignificant?: PrepInsignificant;
}

const COMBINING_MARK = /^\p{M}/u;
const PRIVATE_USE = /^\p{Co}$/u;
const UNASSIGNED = /^\p{Cn}$/u;
const CONTROL = /^\p{Cc}$/u;
const FORMAT = /^\p{Cf}$/u;
const SPACE_SEP = /^\p{Zs}$/u;
const LINE_SEP = /^\p{Zl}$/u;
const PARA_SEP = /^\p{Zp}$/u;

/**
 * RFC 3454 B.2 / Unicode full case-fold mappings that are not the
 * same as `String.prototype.toLowerCase()`.
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

function isSurrogateCodePoint (cp: number): boolean {
    return (cp >= 0xD800) && (cp <= 0xDFFF);
}

function isNoncharacter (cp: number): boolean {
    if ((cp >= 0xFDD0) && (cp <= 0xFDEF)) {
        return true;
    }
    return ((cp & 0xFFFE) === 0xFFFE);
}

function isVariationSelector (cp: number): boolean {
    return (
        ((cp >= 0x180B) && (cp <= 0x180D))
        || ((cp >= 0xFE00) && (cp <= 0xFE0F))
    );
}

function mapsToNothing (cp: number): boolean {
    return (
        (cp === 0x00AD)
        || (cp === 0x1806)
        || (cp === 0x034F)
        || (cp === 0xFFFC)
        || (cp === 0x200B)
        || isVariationSelector(cp)
    );
}

function mapsToSpace (cp: number): boolean {
    return (
        (cp === 0x0009)
        || (cp === 0x000A)
        || (cp === 0x000B)
        || (cp === 0x000C)
        || (cp === 0x000D)
        || (cp === 0x0085)
    );
}

function foldCodePoint (cp: number): string {
    const mapped = FULL_CASE_FOLD.get(cp);
    if (mapped !== undefined) {
        return mapped;
    }
    return String.fromCodePoint(cp).toLowerCase();
}

/**
 * Clause 7.2 Map. Returns the mapped character(s), which may be empty.
 */
function mapCodePoint (cp: number, caseFold: boolean): string {
    if (mapsToNothing(cp)) {
        return "";
    }
    if (mapsToSpace(cp)) {
        return " ";
    }
    const ch = String.fromCodePoint(cp);
    if (CONTROL.test(ch) || FORMAT.test(ch)) {
        return "";
    }
    if (SPACE_SEP.test(ch) || LINE_SEP.test(ch) || PARA_SEP.test(ch)) {
        return " ";
    }
    return caseFold ? foldCodePoint(cp) : ch;
}

function isCombiningMark (cp: number): boolean {
    return COMBINING_MARK.test(String.fromCodePoint(cp));
}

/**
 * Clause 7.4. `str` is already mapped and NFKC-normalized.
 */
function isProhibited (str: string): boolean {
    if (str.length === 0) {
        return true;
    }
    const first = str.codePointAt(0);
    if (first === undefined || isCombiningMark(first)) {
        return true;
    }
    for (const ch of str) {
        const cp = ch.codePointAt(0)!;
        if (
            isSurrogateCodePoint(cp)
            || isNoncharacter(cp)
            || (cp === 0xFFFD)
            || PRIVATE_USE.test(ch)
            || UNASSIGNED.test(ch)
        ) {
            return true;
        }
    }
    return false;
}

/**
 * Clause 7.6.1: SPACE (U+0020) not followed by a combining mark.
 * `chars` is a code-point array (`[...str]`).
 */
function isInsignificantSpace (chars: string[], index: number): boolean {
    if (chars[index] !== " ") {
        return false;
    }
    const next = chars[index + 1];
    return (next === undefined) || !COMBINING_MARK.test(next);
}

function removeDirectorySpaces (str: string): string {
    const chars = [...str];
    let start = 0;
    let end = chars.length;
    while ((start < end) && isInsignificantSpace(chars, start)) {
        start += 1;
    }
    while ((end > start) && isInsignificantSpace(chars, end - 1)) {
        end -= 1;
    }
    if (start === end) {
        // Entirely insignificant spaces → a single space.
        return " ";
    }
    let out = "";
    let inSpace = false;
    for (let i = start; i < end; i++) {
        if (isInsignificantSpace(chars, i)) {
            if (!inSpace) {
                out += " ";
                inSpace = true;
            }
        } else {
            out += chars[i];
            inSpace = false;
        }
    }
    return out;
}

function removeAllSpaces (str: string): string {
    const chars = [...str];
    let out = "";
    for (let i = 0; i < chars.length; i++) {
        if (!isInsignificantSpace(chars, i)) {
            out += chars[i];
        }
    }
    return out;
}

function removeTelephoneInsignificant (str: string): string {
    const chars = [...str];
    let out = "";
    for (let i = 0; i < chars.length; i++) {
        if ((chars[i] === "-") || isInsignificantSpace(chars, i)) {
            continue;
        }
        out += chars[i];
    }
    return out;
}

/**
 * @summary Prepare a string for matching, per ITU-T X.520 clause 7.
 * @description
 *
 * Applies Map (clause 7.2), NFKC (7.3), Prohibit (7.4), and
 * insignificant-character removal (7.6 / 8.2.8). The input is
 * already Unicode (clause 7.1). Clause 7.5 imposes no bidi checks.
 *
 * @param {string} str The transcoded string.
 * @param {PrepStringOptions} [options] Case-folding and ICR mode.
 * @returns {string | undefined} The prepared string, or `undefined`
 *  if a step failed (UNDEFINED).
 *
 * @function
 */
export
function prepString (str: string, options?: PrepStringOptions): string | undefined {
    const caseFold = options?.caseFold === true;
    const insignificant: PrepInsignificant = options?.insignificant ?? "directory";
    let mapped = "";
    for (const ch of str) {
        mapped += mapCodePoint(ch.codePointAt(0)!, caseFold);
    }
    const normalized = mapped.normalize("NFKC");
    if (isProhibited(normalized)) {
        return undefined;
    }
    switch (insignificant) {
        case "none": {
            return normalized;
        }
        case "numeric": {
            return removeAllSpaces(normalized);
        }
        case "telephone": {
            return removeTelephoneInsignificant(normalized);
        }
        default: {
            return removeDirectorySpaces(normalized);
        }
    }
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
