import {
    ASN1Construction,
    ASN1ConstructionError,
    ASN1PaddingError,
    ASN1TruncationError,
    type ASN1Element,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import type { ObjectIdentifierInput } from "../readValue.mjs";
import { readObjectIdentifier } from "../readValue.mjs";
import { bytesEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.501 (10/2019), clause 13.5.2
 * `objectIdentifierMatch` (also 8.9.6).
 *
 * TRUE iff both OBJECT IDENTIFIER values have the same number of
 * integral components and each corresponding component is equal.
 *
 * @param assertion Presented object identifier.
 * @param value Stored object identifier, or that identifier already
 *  decoded. A dotted-decimal string is also accepted.
 */
export
function objectIdentifierMatchTyped (
    assertion: OBJECT_IDENTIFIER,
    value: ObjectIdentifierInput,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = readObjectIdentifier(value);
    if (flags & MATCH_FLAG_CONSTANT_TIME) {
        return bytesEqual(assertion.toBytesUnsafe(), stored.toBytesUnsafe(), true);
    }
    return assertion.isEqualTo(stored);
}

objectIdentifierMatchTyped satisfies TypedEquationFunction<OBJECT_IDENTIFIER>;

/**
 * Validates an encoded OBJECT IDENTIFIER assertion without decoding it.
 *
 * X.690 forbids leading `0x80` octets in a subidentifier, so a valid
 * encoding of a given object identifier is unique. Rejecting padded or
 * truncated assertions is what makes the octet-for-octet comparison in
 * `objectIdentifierMatch` correct.
 *
 * @param assertion Encoded OBJECT IDENTIFIER assertion.
 * @returns The content octets of the assertion.
 */
function objectIdentifierAssertionOctets (assertion: ASN1Element): Uint8Array {
    if (assertion.construction !== ASN1Construction.primitive) {
        throw new ASN1ConstructionError("OBJECT IDENTIFIER cannot be constructed.", assertion);
    }
    const octets = assertion.value;
    const len = octets.length;
    if (len === 0) {
        throw new ASN1TruncationError("Encoded value was too short to be an OBJECT IDENTIFIER!", assertion);
    }
    if (octets[len - 1] >= 0x80) {
        throw new ASN1TruncationError("OID was truncated.", assertion);
    }
    for (let i = 0; i < len; i++) {
        if (octets[i] === 0x80 && (i === 0 || octets[i - 1] < 0x80)) {
            throw new ASN1PaddingError("Prohibited padding on OBJECT IDENTIFIER node.", assertion);
        }
    }
    return octets;
}

/**
 * Compares the content octets of a validated assertion with those of
 * a stored OBJECT IDENTIFIER value. A malformed value cannot equal a
 * well-formed assertion, so the value is not validated.
 */
function objectIdentifierMatchOctets (
    assertion: Uint8Array,
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    return bytesEqual(assertion, value.value, flags & MATCH_FLAG_CONSTANT_TIME);
}

objectIdentifierMatchOctets satisfies TypedEquationFunction<Uint8Array>;

/**
 * `objectIdentifierMatch` as a `Matcher`. Neither the assertion nor
 * the stored values are decoded: content octets are compared directly.
 */
export
const objectIdentifierMatch: Matcher = createEqualityMatcher(
    objectIdentifierAssertionOctets,
    objectIdentifierMatchOctets,
);

export default objectIdentifierMatch;
