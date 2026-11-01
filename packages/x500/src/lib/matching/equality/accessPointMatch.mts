import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { readDecoded } from "../readValue.mjs";
import {
    type Name,
    _decode_Name,
} from "../../modules/InformationFramework/Name.ta.mjs";
import {
    AccessPoint,
    _decode_AccessPoint,
} from "../../modules/DistributedOperations/AccessPoint.ta.mjs";
import { compareName } from "@wildboar/dn";

/**
 * The assertion syntax is `Name`. A presented `AccessPoint` SET is
 * also accepted: `ae-title` is context-specific tag 0, EXPLICIT.
 */
function readAssertedName (assertion: ASN1Element | Name): Name | null {
    if (!ASN1Element.isElement(assertion)) {
        return assertion;
    }
    if (
        assertion.tagClass === ASN1TagClass.universal
        && assertion.tagNumber === ASN1UniversalType.set
    ) {
        const aeTitle = assertion.set.find((component) => (
            component.tagClass === ASN1TagClass.context
            && component.tagNumber === 0
        ));
        if (!aeTitle) {
            return null;
        }
        return _decode_Name(aeTitle.inner);
    }
    return _decode_Name(assertion);
}

/**
 * Rec. ITU-T X.501 (10/2019), clause 24.2.1.9.1 `accessPointMatch`.
 *
 * Equality for `AccessPoint`. The assertion is the `Name`
 * (`ae-title`) component of the access point. TRUE iff those names
 * match as distinguished names.
 *
 * A presented `AccessPoint` SET is also accepted: `ae-title` is
 * context-specific tag 0, EXPLICIT. A missing ae-title is an
 * assertion error.
 *
 * @param assertion Presented `ae-title`.
 * @param value Stored access point, or that access point already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 */
export
function accessPointMatchTyped (
    assertion: Name,
    value: AccessPoint | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
): boolean | undefined {
    const stored = readDecoded(value, _decode_AccessPoint);
    return compareName(assertion, stored.ae_title, valueEqualityMatcher(getMatcher));
}

accessPointMatchTyped satisfies TypedEquationFunction<Name>;

function decodeAccessPointAssertion (el: ASN1Element): Name {
    const name = readAssertedName(el);
    if (!name) {
        throw new Error("accessPointMatch assertion has no ae-title");
    }
    return name;
}

/**
 * `accessPointMatch` as a `Matcher`.
 */
export
const accessPointMatch: Matcher = createEqualityMatcher(
    decodeAccessPointAssertion,
    accessPointMatchTyped,
    undefined,
    true,
);

export default accessPointMatch;
