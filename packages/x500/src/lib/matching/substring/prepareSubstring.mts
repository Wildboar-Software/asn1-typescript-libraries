import type { PrepStringOptions } from "../../utils/prepString.mjs";
import { prepString } from "../../utils/prepString.mjs";
import type {
    PreparedOctetSubstring,
    PreparedSubstring,
} from "../readValue.mjs";
import type {
    OrderedOctetPiece,
    OrderedStringPiece,
} from "./matchInOrder.mjs";
import { preparedAnchorsAreValid } from "./substringAnchors.mjs";

const CASE_FOLD: PrepStringOptions = { caseFold: true };

const NUMERIC_SPACES: RegExp = /\s+/g;

const TELEPHONE_INSIGNIFICANT: RegExp = /[- ]/g;

/**
 * Drop `control`, prepare each remaining piece, and reject a sequence
 * whose anchors are illegal or whose prepared text is empty.
 *
 * @param pieces Assertion pieces whose payloads are still raw strings.
 * @param caseFold When set, fold case the way `caseIgnoreMatch` does.
 * @returns Prepared pieces, or `undefined` when the assertion cannot match.
 */
export
function prepareDirectoryPieces (
    pieces: readonly PreparedSubstring[],
    caseFold: boolean,
): readonly OrderedStringPiece[] | undefined {
    if (!preparedAnchorsAreValid(pieces)) {
        return undefined;
    }
    const options = caseFold ? CASE_FOLD : undefined;
    const out: OrderedStringPiece[] = [];
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        if (piece.kind === "control") {
            continue;
        }
        if (piece.kind === "unknown") {
            return undefined;
        }
        const prepared = prepString(piece.value, options);
        if (prepared === undefined || prepared.length === 0) {
            return undefined;
        }
        out.push({ kind: piece.kind, value: prepared });
    }
    if (out.length === 0) {
        return undefined;
    }
    return out;
}

/**
 * Remove every space from each piece. An empty result cannot match.
 *
 * @param pieces Raw numeric-string pieces.
 * @returns Pieces with spaces removed, or `undefined` when illegal.
 */
export
function prepareNumericPieces (
    pieces: readonly PreparedSubstring[],
): readonly OrderedStringPiece[] | undefined {
    if (!preparedAnchorsAreValid(pieces)) {
        return undefined;
    }
    const out: OrderedStringPiece[] = [];
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        if (piece.kind === "control") {
            continue;
        }
        if (piece.kind === "unknown") {
            return undefined;
        }
        const prepared = piece.value.replace(NUMERIC_SPACES, "");
        if (prepared.length === 0) {
            return undefined;
        }
        out.push({ kind: piece.kind, value: prepared });
    }
    if (out.length === 0) {
        return undefined;
    }
    return out;
}

/**
 * Remove spaces and hyphens from each telephone-number piece.
 *
 * @param pieces Raw telephone-number pieces.
 * @returns Pieces with insignificant characters removed.
 */
export
function prepareTelephonePieces (
    pieces: readonly PreparedSubstring[],
): readonly OrderedStringPiece[] | undefined {
    if (!preparedAnchorsAreValid(pieces)) {
        return undefined;
    }
    const out: OrderedStringPiece[] = [];
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        if (piece.kind === "control") {
            continue;
        }
        if (piece.kind === "unknown") {
            return undefined;
        }
        const prepared = piece.value.replace(TELEPHONE_INSIGNIFICANT, "");
        if (prepared.length === 0) {
            return undefined;
        }
        out.push({ kind: piece.kind, value: prepared });
    }
    if (out.length === 0) {
        return undefined;
    }
    return out;
}

/**
 * Remove every space, as in `numericStringMatch`.
 *
 * @param value Stored or asserted numeric string.
 * @returns The digit sequence. Empty when `value` was only spaces.
 */
export
function stripNumeric (value: string): string {
    return value.replace(NUMERIC_SPACES, "");
}

/**
 * Remove spaces and hyphens, as in `telephoneNumberMatch`.
 *
 * @param value Stored or asserted telephone number.
 * @returns The number with insignificant characters removed.
 */
export
function stripTelephone (value: string): string {
    return value.replace(TELEPHONE_INSIGNIFICANT, "");
}

/**
 * Prepare stored lines for `caseIgnoreListSubstringsMatch`. One
 * prohibited line makes the whole value unusable.
 *
 * @param lines Stored lines, already transcoded to strings.
 * @returns Prepared lines, or `undefined` when preparation fails.
 */
export
function prepareDirectoryLines (
    lines: readonly string[],
): readonly string[] | undefined {
    if (lines.length === 0) {
        return undefined;
    }
    const out = new Array<string>(lines.length);
    for (let i = 0; i < lines.length; i++) {
        const prepared = prepString(lines[i], CASE_FOLD);
        if (prepared === undefined) {
            return undefined;
        }
        out[i] = prepared;
    }
    return out;
}

/**
 * Reject an empty octet piece and drop nothing else: octet assertions
 * have no `control`.
 *
 * @param pieces Raw octet pieces.
 * @returns The same pieces when every one is usable.
 */
export
function prepareOctetPieces (
    pieces: readonly PreparedOctetSubstring[],
): readonly OrderedOctetPiece[] | undefined {
    if (!preparedAnchorsAreValid(pieces)) {
        return undefined;
    }
    const out: OrderedOctetPiece[] = [];
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        if (piece.kind === "control" || piece.kind === "unknown") {
            return undefined;
        }
        if (piece.value.length === 0) {
            return undefined;
        }
        out.push({ kind: piece.kind, value: piece.value });
    }
    if (out.length === 0) {
        return undefined;
    }
    return out;
}
