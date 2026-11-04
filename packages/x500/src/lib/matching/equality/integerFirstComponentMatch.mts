import { type INTEGER, ASN1TagClass, ASN1UniversalType, BERElement } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { approximatelyEqualInts } from "../approximate.mjs";
import type { IntegerInput } from "../readValue.mjs";
import { readInteger } from "../readValue.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * INTEGER assertion, or the INTEGER that is the first component of a
 * SEQUENCE. A `number` or `bigint` is that integer already.
 */
function readLeadingInteger (value: IntegerInput): INTEGER {
    if (typeof value === "number" || typeof value === "bigint") {
        return value;
    }
    if (
        value.tagClass === ASN1TagClass.universal
        && (
            value.tagNumber === ASN1UniversalType.integer
            || value.tagNumber === ASN1UniversalType.enumerated
        )
    ) {
        return readInteger(value);
    }
    const inner = new BERElement();
    inner.fromBytes(value.value);
    return readInteger(inner);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.4.1
 * `integerFirstComponentMatch`.
 *
 * Compares a presented INTEGER with a SEQUENCE whose first
 * component is a mandatory INTEGER. TRUE iff that first component
 * equals the presented integer.
 *
 * @param assertion Presented INTEGER.
 * @param value Stored SEQUENCE, or that leading integer already
 *  decoded (`ASN1Element`, `number`, or `bigint`).
 */
export
function integerFirstComponentMatchTyped (
    assertion: INTEGER,
    value: IntegerInput,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const a = readInteger(assertion);
    const v = readLeadingInteger(value);
    if (flags & MATCH_FLAG_APPROXIMATE) {
        return approximatelyEqualInts(a, v);
    }
    // loose equal is intentional so bigint matches number.
    return a == v;
}

integerFirstComponentMatchTyped satisfies TypedEquationFunction<INTEGER>;

/**
 * `integerFirstComponentMatch` as a `Matcher`.
 */
export
const integerFirstComponentMatch: Matcher = createEqualityMatcher(
    (el) => el.integer,
    integerFirstComponentMatchTyped,
    undefined,
    true,
);

export default integerFirstComponentMatch;
