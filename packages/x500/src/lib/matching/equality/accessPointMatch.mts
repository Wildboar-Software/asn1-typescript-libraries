import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    Name,
    _decode_Name,
} from "../../modules/InformationFramework/Name.ta.mjs";
import {
    AccessPoint,
    _decode_AccessPoint,
} from "../../modules/DistributedOperations/AccessPoint.ta.mjs";
import compareName from "../../comparators/compareName.mjs";

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
 * `assertion` may be an element or a `Name`. `value` may be an
 * element or an `AccessPoint`.
 */
export
function accessPointMatch (
    assertion: ASN1Element | Name,
    value: ASN1Element | AccessPoint,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const name = readAssertedName(assertion);
    if (!name) {
        return false;
    }
    return accessPointMatchTyped(
        name,
        readDecoded(value, _decode_AccessPoint),
        getEqualityMatcher,
    );
}

/**
 * `accessPointMatch` on a decoded name and access point.
 *
 * @param assertion Presented `ae-title`.
 * @param value Stored access point.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the names match.
 */
export
function accessPointMatchTyped (
    assertion: Name,
    value: AccessPoint,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return compareName(assertion, value.ae_title, getEqualityMatcher);
}

export default accessPointMatch;
