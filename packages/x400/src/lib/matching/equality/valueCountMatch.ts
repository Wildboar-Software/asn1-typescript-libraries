import {
    ASN1ConstructionError,
    ASN1TagClass,
    ASN1UniversalType,
    ASN1ValueError,
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
    type Attribute,
} from "@wildboar/x500/InformationFramework";
import {
    MATCH_FLAG_ASSERTION_VALIDATED,
    MATCH_FLAG_USED_FOR_NAME,
    type Matcher,
} from "@wildboar/x500";

/**
 * ITU-T Rec. X.413 (06/1999), clause 12.3 `valueCountMatch`.
 *
 * ```asn1
 * valueCountMatch MATCHING-RULE ::= {
 *     SYNTAX  INTEGER (1..ub-attribute-values)
 *     ID      id-mr-value-count-match
 * }
 * ```
 *
 * Returns `true` if and only if the nominated attribute contains a number of
 * values equal to the presented `INTEGER`, without decoding individual values.
 */
export
const valueCountMatch: Matcher = (
    assertion,
    valueOrValues,
    _getEqualityMatcher,
    flags = 0,
    matchedValues,
): boolean | undefined => {
    if (Array.isArray(assertion)) {
        const oid = valueOrValues.type_.dotDelimitedNotation;
        throw new Error(
            "substrings cannot be used to construct non-substrings "
            + `matching assertion for attribute type ${oid}`,
        );
    }
    if (
        !(flags & MATCH_FLAG_ASSERTION_VALIDATED)
        && (
            (assertion.tagClass !== ASN1TagClass.universal)
            || (assertion.tagNumber !== ASN1UniversalType.integer)
        )
    ) {
        throw new ASN1ConstructionError("valueCountMatch: expected INTEGER", assertion);
    }
    const expected: INTEGER = $._decodeInteger(assertion);
    if (!(flags & MATCH_FLAG_ASSERTION_VALIDATED) && expected < 1) {
        throw new ASN1ValueError(
            `valueCountMatch: assertion must be >= 1, got ${expected.toString()}`,
            assertion,
        );
    }
    if (flags & MATCH_FLAG_USED_FOR_NAME) {
        return undefined;
    }
    if (("value" in valueOrValues) || (valueOrValues instanceof AttributeTypeAndValue)) {
        const matched = expected == 1;
        if (matched && matchedValues) {
            matchedValues.values.push(valueOrValues.value);
        }
        return matched;
    }
    const attr: Attribute = valueOrValues;
    const vwcs = attr.valuesWithContext ?? [];
    const actualCount = attr.values.length + vwcs.length;
    const matched = expected == actualCount;
    if (matched && matchedValues) {
        matchedValues.values.push(...attr.values);
        if (matchedValues.valuesWithContext) {
            matchedValues.valuesWithContext.push(...vwcs);
        } else {
            for (const vwc of vwcs) {
                matchedValues.values.push(vwc.value);
            }
        }
    }
    return matched;
};

export default valueCountMatch;
