import { Buffer } from "node:buffer";

/**
 * One prepared substring piece. `initial` is a prefix, `final` is a
 * suffix, and `any` is sought at or after the cursor.
 */
export type OrderedStringPiece = {
    readonly kind: "initial" | "any" | "final";
    readonly value: string;
};

/**
 * One prepared octet substring piece.
 */
export type OrderedOctetPiece = {
    readonly kind: "initial" | "any" | "final";
    readonly value: Uint8Array;
};

/**
 * Match prepared string pieces left to right without overlap.
 *
 * Each piece is consumed: the next search starts at the end of the
 * previous match. `any` `"abc"` then `any` `"bcd"` matches `"abcbcd"`
 * and does not match `"abcd"`.
 *
 * @param pieces Non-empty pieces in anchor order. Values are non-empty.
 * @param value Prepared stored string.
 * @returns `true` when every piece matches in order.
 */
export
function matchStringPieces (
    pieces: readonly OrderedStringPiece[],
    value: string,
): boolean {
    let cursor = 0;
    let index = 0;
    if (pieces[0]?.kind === "initial") {
        const needle = pieces[0].value;
        if (needle.length === 0 || !value.startsWith(needle)) {
            return false;
        }
        cursor = needle.length;
        index = 1;
    }
    let end = pieces.length;
    if (pieces[pieces.length - 1]?.kind === "final") {
        end--;
    }
    for (; index < end; index++) {
        const piece = pieces[index];
        if (piece.kind !== "any" || piece.value.length === 0) {
            return false;
        }
        const found = value.indexOf(piece.value, cursor);
        if (found < 0) {
            return false;
        }
        cursor = found + piece.value.length;
    }
    const last = pieces[pieces.length - 1];
    if (last?.kind === "final") {
        const needle = last.value;
        if (needle.length === 0 || !value.endsWith(needle)) {
            return false;
        }
        if (value.length - needle.length < cursor) {
            return false;
        }
    }
    return pieces.length > 0;
}

/**
 * Match prepared octet pieces left to right without overlap.
 * Same cursor rule as {@link matchStringPieces}.
 *
 * @param pieces Non-empty pieces in anchor order.
 * @param value Stored octets.
 * @returns `true` when every piece matches in order.
 */
export
function matchOctetPieces (
    pieces: readonly OrderedOctetPiece[],
    value: Uint8Array,
): boolean {
    const haystack = Buffer.from(value.buffer, value.byteOffset, value.byteLength);
    let cursor = 0;
    let index = 0;
    if (pieces[0]?.kind === "initial") {
        const needle = pieces[0].value;
        if (needle.length === 0 || needle.length > value.length) {
            return false;
        }
        if (haystack.compare(needle, 0, needle.length, 0, needle.length) !== 0) {
            return false;
        }
        cursor = needle.length;
        index = 1;
    }
    let end = pieces.length;
    if (pieces[pieces.length - 1]?.kind === "final") {
        end--;
    }
    for (; index < end; index++) {
        const piece = pieces[index];
        if (piece.kind !== "any" || piece.value.length === 0) {
            return false;
        }
        const found = haystack.indexOf(piece.value, cursor);
        if (found < 0) {
            return false;
        }
        cursor = found + piece.value.length;
    }
    const last = pieces[pieces.length - 1];
    if (last?.kind === "final") {
        const needle = last.value;
        if (needle.length === 0 || needle.length > value.length) {
            return false;
        }
        const start = value.length - needle.length;
        if (start < cursor) {
            return false;
        }
        if (haystack.compare(needle, 0, needle.length, start, value.length) !== 0) {
            return false;
        }
    }
    return pieces.length > 0;
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
 * piece must lie inside a single line.
 *
 * @param pieces Prepared pieces in anchor order.
 * @param lines Prepared stored lines. Not empty.
 * @returns `true` when every piece matches without spanning a line.
 */
export
function matchStringListPieces (
    pieces: readonly OrderedStringPiece[],
    lines: readonly string[],
): boolean {
    if (lines.length === 0 || pieces.length === 0) {
        return false;
    }
    let line = 0;
    let offset = 0;
    let index = 0;
    if (pieces[0].kind === "initial") {
        const needle = pieces[0].value;
        if (needle.length === 0 || !lines[0].startsWith(needle)) {
            return false;
        }
        offset = needle.length;
        index = 1;
    }
    let end = pieces.length;
    if (pieces[pieces.length - 1].kind === "final") {
        end--;
    }
    for (; index < end; index++) {
        const piece = pieces[index];
        if (piece.kind !== "any") {
            return false;
        }
        const found = findInLines(lines, piece.value, line, offset);
        if (!found) {
            return false;
        }
        line = found.line;
        offset = found.offset;
    }
    const last = pieces[pieces.length - 1];
    if (last.kind === "final") {
        const needle = last.value;
        const lastLine = lines.length - 1;
        const stored = lines[lastLine];
        if (needle.length === 0 || !stored.endsWith(needle)) {
            return false;
        }
        if (line === lastLine && stored.length - needle.length < offset) {
            return false;
        }
    }
    return true;
}
