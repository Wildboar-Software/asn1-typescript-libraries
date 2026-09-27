import type { ASN1Element } from "@wildboar/asn1";
import { ASN1Construction, ASN1TagClass } from "@wildboar/asn1";
import SubstringSelection from "../types/SubstringSelection.mjs";
import { Buffer } from "node:buffer";

/**
 * One `initial` / `any` / `final` component, or a `control` /
 * unrecognized piece so the matcher can skip or reject it.
 */
export type SubstringComponent<T> =
    | { readonly kind: SubstringSelection; readonly value: T }
    | { readonly kind: "control" }
    | { readonly kind: "unknown" };

export interface SubstringPiece {
    readonly kind: SubstringSelection;
    readonly element: ASN1Element;
}

/**
 * `initial` / `any` / `final` are EXPLICIT [0]/[1]/[2] around a
 * CHOICE or `ANY`, so the payload is the inner element. Primitive
 * construction means IMPLICIT tagging (or an already-unwrapped
 * component): `.inner` throws, and the outer element is the payload.
 */
function unwrapExplicit (el: ASN1Element): ASN1Element {
    if (el.construction !== ASN1Construction.constructed) {
        return el;
    }
    return el.inner;
}

/**
 * Rec. ITU-T X.520 (10/2019) clause 8.1.3: collect `initial` / `any` /
 * `final` pieces from either a single component plus `selection`
 * (as `evaluateFilter` historically passed) or a full
 * `SubstringAssertion` / `OctetSubstringAssertion` SEQUENCE.
 * `control` components are ignored.
 */
export
function substringPieces (
    assertion: ASN1Element,
    selection?: SubstringSelection,
): SubstringPiece[] {
    if (selection !== undefined) {
        return [{ kind: selection, element: assertion }];
    }
    try {
        const pieces: SubstringPiece[] = [];
        for (const el of assertion.sequence) {
            if (el.tagClass !== ASN1TagClass.context) {
                continue;
            }
            if (el.tagNumber === 0) {
                pieces.push({ kind: SubstringSelection.initial, element: unwrapExplicit(el) });
            } else if (el.tagNumber === 1) {
                pieces.push({ kind: SubstringSelection.any_, element: unwrapExplicit(el) });
            } else if (el.tagNumber === 2) {
                pieces.push({ kind: SubstringSelection.final, element: unwrapExplicit(el) });
            }
        }
        return pieces;
    } catch {
        return [{ kind: SubstringSelection.any_, element: assertion }];
    }
}

function components<T> (
    pieces: readonly SubstringComponent<T>[],
): { initial?: T; final?: T; anys: T[] } | undefined {
    const anys: T[] = [];
    let initial: T | undefined;
    let final: T | undefined;
    for (const p of pieces) {
        switch (p.kind) {
            case "control": {
                break;
            }
            case "unknown": {
                return undefined;
            }
            case SubstringSelection.initial: {
                initial = p.value;
                break;
            }
            case SubstringSelection.final: {
                final = p.value;
                break;
            }
            case SubstringSelection.any_: {
                anys.push(p.value);
                break;
            }
            default: {
                return undefined;
            }
        }
    }
    return { initial, final, anys };
}

/**
 * TRUE iff `pieces` partition `stored` in order: `initial` is a
 * prefix, `final` a suffix, and each `any` a distinct later
 * portion (clause 8.1.3). `control` is ignored; `unknown` fails.
 */
export
function partitionString (stored: string, pieces: readonly SubstringComponent<string>[]): boolean {
    const n = components(pieces);
    if (!n) {
        return false;
    }
    let s = stored;
    if (n.initial !== undefined) {
        if (!s.startsWith(n.initial)) {
            return false;
        }
        s = s.slice(n.initial.length);
    }
    if (n.final !== undefined) {
        if (!s.endsWith(n.final)) {
            return false;
        }
        s = s.slice(0, s.length - n.final.length);
    }
    for (const a of n.anys) {
        const i = s.indexOf(a);
        if (i < 0) {
            return false;
        }
        s = s.slice(i + a.length);
    }
    return true;
}

/**
 * Same partitioning as {@link partitionString} over octets.
 */
export
function partitionOctets (stored: Uint8Array, pieces: readonly SubstringComponent<Uint8Array>[]): boolean {
    const n = components(pieces);
    if (!n) {
        return false;
    }
    let start = 0;
    let end = stored.length;
    if (n.initial) {
        if (
            (n.initial.length > (end - start))
            || Buffer.compare(stored.subarray(start, start + n.initial.length), n.initial)
        ) {
            return false;
        }
        start += n.initial.length;
    }
    if (n.final) {
        if (
            (n.final.length > (end - start))
            || Buffer.compare(stored.subarray(end - n.final.length, end), n.final)
        ) {
            return false;
        }
        end -= n.final.length;
    }
    const buf = Buffer.from(stored.subarray(start, end));
    let offset = 0;
    for (const a of n.anys) {
        const i = buf.indexOf(a, offset);
        if (i < 0) {
            return false;
        }
        offset = i + a.length;
    }
    return true;
}

/**
 * Clause 8.1.8: match against concatenated lines, but a piece must
 * not span more than one stored string. Pieces still occur in order.
 */
export
function partitionStringList (lines: readonly string[], pieces: readonly SubstringComponent<string>[]): boolean {
    const n = components(pieces);
    if (!n) {
        return false;
    }
    if (lines.length === 0) {
        return (n.initial === undefined) && (n.final === undefined) && (n.anys.length === 0);
    }
    if ((n.initial !== undefined) && !lines[0].startsWith(n.initial)) {
        return false;
    }
    if ((n.final !== undefined) && !lines[lines.length - 1].endsWith(n.final)) {
        return false;
    }
    let lineIdx = 0;
    let pos = n.initial ? n.initial.length : 0;
    for (const a of n.anys) {
        let found = false;
        while (lineIdx < lines.length) {
            const i = lines[lineIdx].indexOf(a, pos);
            if (i >= 0) {
                pos = i + a.length;
                found = true;
                break;
            }
            lineIdx += 1;
            pos = 0;
        }
        if (!found) {
            return false;
        }
    }
    return true;
}
