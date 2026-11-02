import { Buffer } from "node:buffer";
import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { approximatelyEqualBytes } from "../approximate.mjs";
import {
    _decode_OctetSubstringAssertion,
} from "../../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";
import type { FilterItem_substrings_strings_Item } from "../../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import {
    createSubstringsMatcher,
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_DEBUG,
    type AssertedSubstring,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { mapSubstringChoices } from "./prepareSubstrings.mjs";

const RULE = "octetStringSubstringsMatch";

function nonEmpty (bytes: Uint8Array): Uint8Array {
    if (bytes.length === 0) {
        throw new Error(`${RULE}: empty substring`);
    }
    return bytes;
}

function octetAssertion (el: ASN1Element): AssertedSubstring<Uint8Array>[] {
    return mapSubstringChoices(
        _decode_OctetSubstringAssertion(el),
        nonEmpty,
        RULE,
    );
}

function octetFilter (
    items: readonly FilterItem_substrings_strings_Item[],
): AssertedSubstring<Uint8Array>[] {
    return mapSubstringChoices(
        items,
        (el) => nonEmpty(el.octetString),
        RULE,
    );
}

function approxPieceLengths (len: number): readonly number[] {
    if (len <= 1) {
        return [len, len + 1];
    }
    return [len, len - 1, len + 1];
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.7
 * `octetStringSubstringsMatch`.
 *
 * TRUE when the stored OCTET STRING can be partitioned so the
 * presented `initial` / `any` / `final` octets match successive
 * portions in order. A later piece cannot reuse octets already
 * consumed. An assertion with no pieces is UNDEFINED.
 *
 * @param assertion Presented octet pieces.
 * @param value Stored `OCTET STRING`.
 */
export
function octetStringSubstringsMatchTyped (
    assertion: AssertedSubstring<Uint8Array>[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = value.octetString;
    const buf = Buffer.from(stored);
    const approximate = (flags & MATCH_FLAG_APPROXIMATE) !== 0;
    let start = 0;
    let end = stored.length;
    let sawPiece = false;
    for (let i = 0; i < assertion.length; i++) {
        const piece = assertion[i];
        if ("control" in piece) {
            if (flags & MATCH_FLAG_DEBUG) {
                console.error(
                    "@wildboar/x500: debug: octetStringSubstringsMatch: ignoring control attribute in substring assertion",
                );
            }
            continue;
        }
        sawPiece = true;
        if ("initial" in piece) {
            const needle = piece.initial;
            if (approximate) {
                let matchedNext = -1;
                for (const k of approxPieceLengths(needle.length)) {
                    if (start + k <= end && approximatelyEqualBytes(stored.subarray(start, start + k), needle)) {
                        matchedNext = start + k;
                        break;
                    }
                }
                if (matchedNext < 0) {
                    return false;
                }
                start = matchedNext;
            } else {
                const next = start + needle.length;
                if (next > end || Buffer.compare(stored.subarray(start, next), needle) !== 0) {
                    return false;
                }
                start = next;
            }
        } else if ("any_" in piece) {
            const needle = piece.any_;
            const idx = buf.indexOf(needle, start);
            if (idx >= 0 && (idx + needle.length) <= end) {
                start = idx + needle.length;
            } else if (approximate) {
                let matchedNext = -1;
                const lengths = approxPieceLengths(needle.length);
                outer: for (let pos = start; pos <= end; pos++) {
                    for (const k of lengths) {
                        if (pos + k <= end && approximatelyEqualBytes(stored.subarray(pos, pos + k), needle)) {
                            matchedNext = pos + k;
                            break outer;
                        }
                    }
                }
                if (matchedNext < 0) {
                    return false;
                }
                start = matchedNext;
            } else {
                return false;
            }
        } else if ("final" in piece) {
            const needle = piece.final;
            if (approximate) {
                let matchedFinalStart = -1;
                for (const k of approxPieceLengths(needle.length)) {
                    if (end - k >= start && approximatelyEqualBytes(stored.subarray(end - k, end), needle)) {
                        matchedFinalStart = end - k;
                        break;
                    }
                }
                if (matchedFinalStart < 0) {
                    return false;
                }
                end = matchedFinalStart;
            } else {
                const finalStart = end - needle.length;
                if (
                    finalStart < start
                    || Buffer.compare(stored.subarray(finalStart, end), needle) !== 0
                ) {
                    return false;
                }
                end = finalStart;
            }
        }
    }
    if (!sawPiece) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: octetStringSubstringsMatch: assertion contains no initial, any, or final substring",
            );
        }
        return undefined;
    }
    return true;
}

octetStringSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<Uint8Array>[]>;

/**
 * `octetStringSubstringsMatch` as a `Matcher`. The assertion is an
 * `OctetSubstringAssertion`, or filter components that are octet
 * strings.
 */
export
const octetStringSubstringsMatch: Matcher = createSubstringsMatcher(
    octetAssertion,
    octetStringSubstringsMatchTyped,
    octetFilter,
);

export default octetStringSubstringsMatch;
