import { Buffer } from "node:buffer";
import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    _decode_OctetSubstringAssertion,
} from "../../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";
import type { FilterItem_substrings_strings_Item } from "../../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import {
    createSubstringsMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    type AssertedSubstring,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    ctBytesEqualAt,
    ctBytesIndexOf,
} from "../constantTime.mjs";
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

function matchOctetSubstringsConstantTime (
    stored: Uint8Array,
    assertion: AssertedSubstring<Uint8Array>[],
    flags: number = 0,
): boolean | undefined {
    let cursor = 0;
    let end = stored.length;
    let matched = 1;
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
        if ("any_" in piece) {
            const needle = piece.any_;
            const found = ctBytesIndexOf(stored, needle, cursor, end);
            const hit = found >= 0 ? 1 : 0;
            matched &= hit;
            cursor += hit * (found + needle.length - cursor);
        } else if ("initial" in piece) {
            const needle = piece.initial;
            const hit = ctBytesEqualAt(stored, cursor, needle)
                & ((cursor + needle.length) <= end ? 1 : 0);
            matched &= hit;
            cursor += hit * needle.length;
        } else if ("final" in piece) {
            const needle = piece.final;
            const start = end - needle.length;
            const hit = ctBytesEqualAt(stored, start, needle)
                & (start >= cursor ? 1 : 0);
            matched &= hit;
            end -= hit * needle.length;
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
    return matched === 1;
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
    if (flags & MATCH_FLAG_CONSTANT_TIME) {
        return matchOctetSubstringsConstantTime(stored, assertion, flags);
    }
    const buf = Buffer.from(stored);
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
            const next = start + needle.length;
            if (next > end || Buffer.compare(stored.subarray(start, next), needle) !== 0) {
                return false;
            }
            start = next;
        } else if ("any_" in piece) {
            const needle = piece.any_;
            const idx = buf.indexOf(needle, start);
            if (idx < 0 || (idx + needle.length) > end) {
                return false;
            }
            start = idx + needle.length;
        } else if ("final" in piece) {
            const needle = piece.final;
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
