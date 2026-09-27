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

export type SubstringPartitioner<T> = Generator<
    boolean,
    boolean,
    SubstringComponent<T> | undefined
>;

function misplacedInitial (): never {
    throw new Error("SubstringAssertion initial is not first");
}

function misplacedFinal (): never {
    throw new Error("SubstringAssertion final is not last");
}

/**
 * Drive a substring partitioner: `next()` once to start, `next(piece)`
 * for each component, then `next()` to finish. `true` means the
 * pieces still match.
 */
function* partition<T> (
    applyInitial: (value: T) => boolean,
    applyFinal: (value: T) => boolean,
    applyAny: (value: T) => boolean,
): SubstringPartitioner<T> {
    let seenContent = false;
    let seenFinal = false;
    const anys: T[] = [];

    const runAnys = (): boolean => {
        for (const a of anys) {
            if (!applyAny(a)) {
                return false;
            }
        }
        return true;
    };

    while (true) {
        const piece: SubstringComponent<T> | undefined = yield true;
        if (piece === undefined) {
            return seenFinal ? true : runAnys();
        }
        switch (piece.kind) {
            case "control": {
                break;
            }
            case "unknown": {
                return false;
            }
            case SubstringSelection.initial: {
                if (seenContent) {
                    misplacedInitial();
                }
                seenContent = true;
                if (!applyInitial(piece.value)) {
                    return false;
                }
                break;
            }
            case SubstringSelection.final: {
                if (seenFinal) {
                    misplacedFinal();
                }
                seenFinal = true;
                seenContent = true;
                if (!applyFinal(piece.value) || !runAnys()) {
                    return false;
                }
                break;
            }
            case SubstringSelection.any_: {
                if (seenFinal) {
                    misplacedFinal();
                }
                seenContent = true;
                anys.push(piece.value);
                break;
            }
            default: {
                return false;
            }
        }
    }
}

/**
 * Rec. ITU-T X.520 (10/2019) clause 8.1.3. Feed pieces with
 * `next(piece)`; `initial` must be first and `final` last. `any`
 * pieces are matched in the middle after those ends are taken.
 * `control` is ignored; `unknown` fails.
 */
export
function partitionString (stored: string): SubstringPartitioner<string> {
    let s = stored;
    return partition(
        (initial): boolean => {
            if (!s.startsWith(initial)) {
                return false;
            }
            s = s.slice(initial.length);
            return true;
        },
        (final): boolean => {
            if (!s.endsWith(final)) {
                return false;
            }
            s = s.slice(0, s.length - final.length);
            return true;
        },
        (any): boolean => {
            const i = s.indexOf(any);
            if (i < 0) {
                return false;
            }
            s = s.slice(i + any.length);
            return true;
        },
    );
}

/**
 * Same partitioning as {@link partitionString} over octets.
 */
export
function partitionOctets (stored: Uint8Array): SubstringPartitioner<Uint8Array> {
    let from = 0;
    let to = stored.length;
    return partition(
        (initial): boolean => {
            if (
                (initial.length > (to - from))
                || Buffer.compare(stored.subarray(from, from + initial.length), initial)
            ) {
                return false;
            }
            from += initial.length;
            return true;
        },
        (final): boolean => {
            if (
                (final.length > (to - from))
                || Buffer.compare(stored.subarray(to - final.length, to), final)
            ) {
                return false;
            }
            to -= final.length;
            return true;
        },
        (any): boolean => {
            const i = Buffer.from(stored.subarray(from, to)).indexOf(any);
            if (i < 0) {
                return false;
            }
            from += i + any.length;
            return true;
        },
    );
}

/**
 * Clause 8.1.8: match against concatenated lines, but a piece must
 * not span more than one stored string. Pieces still occur in order.
 */
export
function partitionStringList (lines: readonly string[]): SubstringPartitioner<string> {
    let lineIdx = 0;
    let pos = 0;
    let lastLimit = lines.length === 0 ? 0 : lines[lines.length - 1].length;
    return partition(
        (initial): boolean => {
            if (lines.length === 0 || !lines[0].startsWith(initial)) {
                return false;
            }
            pos = initial.length;
            return true;
        },
        (final): boolean => {
            if (lines.length === 0 || !lines[lines.length - 1].endsWith(final)) {
                return false;
            }
            lastLimit = lines[lines.length - 1].length - final.length;
            return true;
        },
        (any): boolean => {
            while (lineIdx < lines.length) {
                const limit = (lineIdx === lines.length - 1) ? lastLimit : lines[lineIdx].length;
                const haystack = lines[lineIdx].slice(0, limit);
                const i = haystack.indexOf(any, pos);
                if (i >= 0) {
                    pos = i + any.length;
                    return true;
                }
                lineIdx += 1;
                pos = 0;
            }
            return false;
        },
    );
}
