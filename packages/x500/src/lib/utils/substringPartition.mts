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

function misplacedInitial (): never {
    throw new Error("SubstringAssertion initial is not first");
}

function misplacedFinal (): never {
    throw new Error("SubstringAssertion final is not last");
}

/**
 * TRUE iff `pieces` partition `stored` in order: `initial` is a
 * prefix of the first element, `final` a suffix of the last, and
 * each `any` a distinct later portion (clause 8.1.3). `control` is
 * ignored; `unknown` fails. Throws if `initial` is not first or
 * `final` is not last.
 */
export
function partitionString (stored: string, pieces: readonly SubstringComponent<string>[]): boolean {
    let start = 0;
    let end = pieces.length;
    while (start < end && pieces[start].kind === "control") {
        start++;
    }
    while (end > start && pieces[end - 1].kind === "control") {
        end--;
    }
    let s = stored;
    if (start < end && pieces[start].kind === SubstringSelection.initial) {
        const initial = pieces[start].value;
        if (!s.startsWith(initial)) {
            return false;
        }
        s = s.slice(initial.length);
        start++;
    }
    if (start < end && pieces[end - 1].kind === SubstringSelection.final) {
        const final = pieces[end - 1].value;
        if (!s.endsWith(final)) {
            return false;
        }
        s = s.slice(0, s.length - final.length);
        end--;
    }
    for (let i = start; i < end; i++) {
        const p = pieces[i];
        if (p.kind === "control") {
            continue;
        }
        if (p.kind === "unknown") {
            return false;
        }
        if (p.kind === SubstringSelection.initial) {
            misplacedInitial();
        }
        if (p.kind === SubstringSelection.final) {
            misplacedFinal();
        }
        const idx = s.indexOf(p.value);
        if (idx < 0) {
            return false;
        }
        s = s.slice(idx + p.value.length);
    }
    return true;
}

/**
 * Same partitioning as {@link partitionString} over octets.
 */
export
function partitionOctets (stored: Uint8Array, pieces: readonly SubstringComponent<Uint8Array>[]): boolean {
    let start = 0;
    let end = pieces.length;
    while (start < end && pieces[start].kind === "control") {
        start++;
    }
    while (end > start && pieces[end - 1].kind === "control") {
        end--;
    }
    let from = 0;
    let to = stored.length;
    if (start < end && pieces[start].kind === SubstringSelection.initial) {
        const initial = pieces[start].value;
        if (
            (initial.length > (to - from))
            || Buffer.compare(stored.subarray(from, from + initial.length), initial)
        ) {
            return false;
        }
        from += initial.length;
        start++;
    }
    if (start < end && pieces[end - 1].kind === SubstringSelection.final) {
        const final = pieces[end - 1].value;
        if (
            (final.length > (to - from))
            || Buffer.compare(stored.subarray(to - final.length, to), final)
        ) {
            return false;
        }
        to -= final.length;
        end--;
    }
    const buf = Buffer.from(stored.subarray(from, to));
    let offset = 0;
    for (let i = start; i < end; i++) {
        const p = pieces[i];
        if (p.kind === "control") {
            continue;
        }
        if (p.kind === "unknown") {
            return false;
        }
        if (p.kind === SubstringSelection.initial) {
            misplacedInitial();
        }
        if (p.kind === SubstringSelection.final) {
            misplacedFinal();
        }
        const idx = buf.indexOf(p.value, offset);
        if (idx < 0) {
            return false;
        }
        offset = idx + p.value.length;
    }
    return true;
}

/**
 * Clause 8.1.8: match against concatenated lines, but a piece must
 * not span more than one stored string. Pieces still occur in order.
 */
export
function partitionStringList (lines: readonly string[], pieces: readonly SubstringComponent<string>[]): boolean {
    let start = 0;
    let end = pieces.length;
    while (start < end && pieces[start].kind === "control") {
        start++;
    }
    while (end > start && pieces[end - 1].kind === "control") {
        end--;
    }
    if (lines.length === 0) {
        for (let i = start; i < end; i++) {
            if (pieces[i].kind !== "control") {
                return false;
            }
        }
        return true;
    }
    let pos = 0;
    if (start < end && pieces[start].kind === SubstringSelection.initial) {
        const initial = pieces[start].value;
        if (!lines[0].startsWith(initial)) {
            return false;
        }
        pos = initial.length;
        start++;
    }
    if (start < end && pieces[end - 1].kind === SubstringSelection.final) {
        const final = pieces[end - 1].value;
        if (!lines[lines.length - 1].endsWith(final)) {
            return false;
        }
        end--;
    }
    let lineIdx = 0;
    for (let i = start; i < end; i++) {
        const p = pieces[i];
        if (p.kind === "control") {
            continue;
        }
        if (p.kind === "unknown") {
            return false;
        }
        if (p.kind === SubstringSelection.initial) {
            misplacedInitial();
        }
        if (p.kind === SubstringSelection.final) {
            misplacedFinal();
        }
        let found = false;
        while (lineIdx < lines.length) {
            const idx = lines[lineIdx].indexOf(p.value, pos);
            if (idx >= 0) {
                pos = idx + p.value.length;
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
