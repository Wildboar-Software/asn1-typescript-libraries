import type { ASN1Element } from "@wildboar/asn1";
import { ASN1TagClass } from "@wildboar/asn1";
import SubstringSelection from "../types/SubstringSelection.mjs";
import { Buffer } from "node:buffer";

export type SubstringKind = "initial" | "any" | "final";

export interface SubstringPiece {
    readonly kind: SubstringKind;
    readonly element: ASN1Element;
}

function kindFromSelection (selection: SubstringSelection): SubstringKind | undefined {
    switch (selection) {
        case SubstringSelection.initial: return "initial";
        case SubstringSelection.final: return "final";
        case SubstringSelection.any_: return "any";
        default: return undefined;
    }
}

function unwrapExplicit (el: ASN1Element): ASN1Element {
    try {
        return el.inner;
    } catch {
        return el;
    }
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
        const kind = kindFromSelection(selection);
        if (!kind) {
            return [];
        }
        return [{ kind, element: assertion }];
    }
    try {
        const pieces: SubstringPiece[] = [];
        for (const el of assertion.sequence) {
            if (el.tagClass !== ASN1TagClass.context) {
                continue;
            }
            if (el.tagNumber === 0) {
                pieces.push({ kind: "initial", element: unwrapExplicit(el) });
            } else if (el.tagNumber === 1) {
                pieces.push({ kind: "any", element: unwrapExplicit(el) });
            } else if (el.tagNumber === 2) {
                pieces.push({ kind: "final", element: unwrapExplicit(el) });
            }
        }
        return pieces;
    } catch {
        return [{ kind: "any", element: assertion }];
    }
}

/**
 * TRUE iff `needles` partition `stored` in order: `initial` is a
 * prefix, `final` a suffix, and each `any` a distinct later
 * portion (clause 8.1.3).
 */
export
function partitionString (stored: string, needles: readonly { kind: SubstringKind; text: string }[]): boolean {
    let initial: string | undefined;
    let final: string | undefined;
    const anys: string[] = [];
    for (const n of needles) {
        if (n.kind === "initial") {
            initial = n.text;
        } else if (n.kind === "final") {
            final = n.text;
        } else {
            anys.push(n.text);
        }
    }
    let s = stored;
    if (initial !== undefined) {
        if (!s.startsWith(initial)) {
            return false;
        }
        s = s.slice(initial.length);
    }
    if (final !== undefined) {
        if (!s.endsWith(final)) {
            return false;
        }
        s = s.slice(0, s.length - final.length);
    }
    for (const a of anys) {
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
function partitionOctets (stored: Uint8Array, needles: readonly { kind: SubstringKind; bytes: Uint8Array }[]): boolean {
    let initial: Uint8Array | undefined;
    let final: Uint8Array | undefined;
    const anys: Uint8Array[] = [];
    for (const n of needles) {
        if (n.kind === "initial") {
            initial = n.bytes;
        } else if (n.kind === "final") {
            final = n.bytes;
        } else {
            anys.push(n.bytes);
        }
    }
    let start = 0;
    let end = stored.length;
    if (initial) {
        if (
            (initial.length > (end - start))
            || Buffer.compare(stored.subarray(start, start + initial.length), initial)
        ) {
            return false;
        }
        start += initial.length;
    }
    if (final) {
        if (
            (final.length > (end - start))
            || Buffer.compare(stored.subarray(end - final.length, end), final)
        ) {
            return false;
        }
        end -= final.length;
    }
    const buf = Buffer.from(stored.subarray(start, end));
    let offset = 0;
    for (const a of anys) {
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
function partitionStringList (lines: readonly string[], needles: readonly { kind: SubstringKind; text: string }[]): boolean {
    if (lines.length === 0) {
        return needles.length === 0;
    }
    let initial: string | undefined;
    let final: string | undefined;
    const anys: string[] = [];
    for (const n of needles) {
        if (n.kind === "initial") {
            initial = n.text;
        } else if (n.kind === "final") {
            final = n.text;
        } else {
            anys.push(n.text);
        }
    }
    if ((initial !== undefined) && !lines[0].startsWith(initial)) {
        return false;
    }
    if ((final !== undefined) && !lines[lines.length - 1].endsWith(final)) {
        return false;
    }
    let lineIdx = 0;
    let pos = initial ? initial.length : 0;
    for (const a of anys) {
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
