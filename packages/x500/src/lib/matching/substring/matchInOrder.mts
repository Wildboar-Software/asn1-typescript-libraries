import { Buffer } from "node:buffer";
import {
    prepString,
    prohibitedCharacters,
    type PrepStringOptions,
} from "../../utils/prepString.mjs";

/**
 * One substring component. `control` has no `value` and is skipped.
 * `initial` is a prefix, `final` is a suffix, and `any` is sought
 * at or after the cursor.
 */
export type ScannableStringPiece = {
    readonly kind: string;
    readonly value?: string;
};

/**
 * One octet substring component.
 */
export type ScannableOctetPiece = {
    readonly kind: string;
    readonly value?: Uint8Array;
};

/**
 * Prepare one directory or IA5 substring.
 *
 * A prohibited character yields `undefined`: the match is Undefined.
 * A string that maps to nothing yields `""`: the match is FALSE.
 * The scan applies this to one component at a time.
 *
 * @param text Presented or stored string.
 * @param options `caseFold` selects case-ignore preparation.
 * @returns The prepared string, `""` when nothing remains, or
 *  `undefined` when a character is prohibited.
 */
export
function prepareSubstringComponent (
    text: string,
    options?: PrepStringOptions,
): string | undefined {
    if (prohibitedCharacters.test(text)) {
        return undefined;
    }
    return prepString(text, options) ?? "";
}

/**
 * Match string pieces left to right without overlap.
 *
 * `control` is skipped in place. Each remaining piece is consumed:
 * the next search starts at the end of the previous match. `any`
 * `"abc"` then `any` `"bcd"` matches `"abcbcd"` and does not match
 * `"abcd"`. An empty needle is FALSE. When `prepare` returns
 * `undefined`, this returns `undefined` immediately.
 *
 * @param pieces Components in assertion order.
 * @param value Prepared stored string.
 * @param prepare Prepares one assertion component. Omitted when the
 *  assertion is already prepared.
 * @returns `true` when every substantive piece matches in order.
 */
export
function matchStringPieces (
    pieces: readonly ScannableStringPiece[],
    value: string,
    prepare?: (text: string) => string | undefined,
): boolean | undefined {
    let cursor = 0;
    let substantive = 0;
    let finalNeedle: string | undefined;
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        if (piece.kind === "control") {
            continue;
        }
        if (piece.kind !== "initial" && piece.kind !== "any" && piece.kind !== "final") {
            return false;
        }
        if (piece.value === undefined) {
            return false;
        }
        const needle = prepare ? prepare(piece.value) : piece.value;
        if (needle === undefined) {
            return undefined;
        }
        if (needle.length === 0) {
            return false;
        }
        if (piece.kind === "initial") {
            if (substantive !== 0 || !value.startsWith(needle)) {
                return false;
            }
            cursor = needle.length;
        } else if (piece.kind === "final") {
            if (i !== pieces.length - 1) {
                return false;
            }
            finalNeedle = needle;
        } else {
            const found = value.indexOf(needle, cursor);
            if (found < 0) {
                return false;
            }
            cursor = found + needle.length;
        }
        substantive++;
    }
    if (finalNeedle !== undefined) {
        if (!value.endsWith(finalNeedle) || value.length - finalNeedle.length < cursor) {
            return false;
        }
    }
    return substantive > 0;
}

/**
 * Match octet pieces left to right without overlap.
 * Same cursor rule as {@link matchStringPieces}. `control` is skipped.
 * An empty piece is FALSE.
 *
 * @param pieces Components in assertion order.
 * @param value Stored octets.
 * @returns `true` when every substantive piece matches in order.
 */
export
function matchOctetPieces (
    pieces: readonly ScannableOctetPiece[],
    value: Uint8Array,
): boolean {
    const haystack = Buffer.from(value.buffer, value.byteOffset, value.byteLength);
    let cursor = 0;
    let substantive = 0;
    let finalNeedle: Uint8Array | undefined;
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        if (piece.kind === "control") {
            continue;
        }
        if (piece.kind !== "initial" && piece.kind !== "any" && piece.kind !== "final") {
            return false;
        }
        const needle = piece.value;
        if (!needle || needle.length === 0) {
            return false;
        }
        if (piece.kind === "initial") {
            if (
                substantive !== 0
                || needle.length > value.length
                || haystack.compare(needle, 0, needle.length, 0, needle.length) !== 0
            ) {
                return false;
            }
            cursor = needle.length;
        } else if (piece.kind === "final") {
            if (i !== pieces.length - 1) {
                return false;
            }
            finalNeedle = needle;
        } else {
            const found = haystack.indexOf(needle, cursor);
            if (found < 0) {
                return false;
            }
            cursor = found + needle.length;
        }
        substantive++;
    }
    if (finalNeedle) {
        if (finalNeedle.length > value.length) {
            return false;
        }
        const start = value.length - finalNeedle.length;
        if (
            start < cursor
            || haystack.compare(finalNeedle, 0, finalNeedle.length, start, value.length) !== 0
        ) {
            return false;
        }
    }
    return substantive > 0;
}

/**
 * Find `needle` entirely inside one line, at or after `(line, offset)`.
 * A match never crosses a line boundary.
 */
function findInLines (
    lines: readonly string[],
    needle: string,
    line: number,
    offset: number,
): { readonly line: number; readonly offset: number } | undefined {
    if (needle.length === 0) {
        return undefined;
    }
    for (let i = line; i < lines.length; i++) {
        const from = i === line ? offset : 0;
        const found = lines[i].indexOf(needle, from);
        if (found >= 0) {
            return { line: i, offset: found + needle.length };
        }
    }
    return undefined;
}

/**
 * `caseIgnoreListSubstringsMatch` scan. Pieces are matched in order
 * against the concatenation of `lines` with no separator, and each
 * piece must lie inside a single line. `control` is skipped.
 *
 * @param pieces Components in assertion order.
 * @param lines Prepared stored lines.
 * @param prepare Prepares one assertion component. Omitted when the
 *  assertion is already prepared.
 * @returns `true` when every substantive piece matches without spanning a line.
 */
export
function matchStringListPieces (
    pieces: readonly ScannableStringPiece[],
    lines: readonly string[],
    prepare?: (text: string) => string | undefined,
): boolean | undefined {
    if (lines.length === 0) {
        return false;
    }
    let line = 0;
    let offset = 0;
    let substantive = 0;
    let finalNeedle: string | undefined;
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        if (piece.kind === "control") {
            continue;
        }
        if (piece.kind !== "initial" && piece.kind !== "any" && piece.kind !== "final") {
            return false;
        }
        if (piece.value === undefined) {
            return false;
        }
        const needle = prepare ? prepare(piece.value) : piece.value;
        if (needle === undefined) {
            return undefined;
        }
        if (needle.length === 0) {
            return false;
        }
        if (piece.kind === "initial") {
            if (substantive !== 0 || !lines[0].startsWith(needle)) {
                return false;
            }
            offset = needle.length;
        } else if (piece.kind === "final") {
            if (i !== pieces.length - 1) {
                return false;
            }
            finalNeedle = needle;
        } else {
            const found = findInLines(lines, needle, line, offset);
            if (!found) {
                return false;
            }
            line = found.line;
            offset = found.offset;
        }
        substantive++;
    }
    if (finalNeedle !== undefined) {
        const lastLine = lines.length - 1;
        const stored = lines[lastLine];
        if (
            !stored.endsWith(finalNeedle)
            || (line === lastLine && stored.length - finalNeedle.length < offset)
        ) {
            return false;
        }
    }
    return substantive > 0;
}
