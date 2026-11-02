import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import type { ObjectIdentifierInput } from "../readValue.mjs";
import {
    readLeadingObjectIdentifier,
} from "../readValue.mjs";
import { bytesEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.4.2
 * `objectIdentifierFirstComponentMatch`.
 *
 * Compares a presented OBJECT IDENTIFIER with a SEQUENCE whose
 * first component is a mandatory OID. TRUE iff that first
 * component matches via `objectIdentifierMatch`.
 *
 * @param assertion Presented object identifier.
 * @param value Stored SEQUENCE, or that OID already decoded.
 */
export
function objectIdentifierFirstComponentMatchTyped (
    assertion: OBJECT_IDENTIFIER,
    value: ObjectIdentifierInput,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = readLeadingObjectIdentifier(value);
    if (flags & MATCH_FLAG_CONSTANT_TIME) {
        return bytesEqual(assertion.toBytesUnsafe(), stored.toBytesUnsafe(), true);
    }
    return assertion.isEqualTo(stored);
}

objectIdentifierFirstComponentMatchTyped satisfies TypedEquationFunction<OBJECT_IDENTIFIER>;

/**
 * `objectIdentifierFirstComponentMatch` as a `Matcher`.
 */
export
const objectIdentifierFirstComponentMatch: Matcher = createEqualityMatcher(
    (el) => el.objectIdentifier,
    objectIdentifierFirstComponentMatchTyped,
    undefined,
    true,
);

export default objectIdentifierFirstComponentMatch;
