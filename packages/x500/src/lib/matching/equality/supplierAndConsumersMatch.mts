import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    SupplierAndConsumers,
    _decode_SupplierAndConsumers,
} from "../../modules/DSAOperationalAttributeTypes/SupplierAndConsumers.ta.mjs";
import {
    Name,
    _decode_Name,
} from "../../modules/InformationFramework/Name.ta.mjs";
import compareName from "../../comparators/compareName.mjs";

/**
 * Rec. ITU-T X.501 (10/2019), clause 24.2.1.9.4
 * `supplierAndConsumersMatch`.
 *
 * Equality for `SupplierAndConsumers` (and compatible types). TRUE
 * iff the `ae-title` components match as distinguished names.
 *
 * `assertion` may be an element or a `Name`. `value` may be an
 * element or a `SupplierAndConsumers`.
 */
export
function supplierAndConsumersMatch (
    assertion: ASN1Element | Name,
    value: ASN1Element | SupplierAndConsumers,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return supplierAndConsumersMatchTyped(
        readDecoded(assertion, _decode_Name),
        readDecoded(value, _decode_SupplierAndConsumers),
        getEqualityMatcher,
    );
}

/**
 * `supplierAndConsumersMatch` on a decoded name and value.
 *
 * @param assertion Presented `ae-title`.
 * @param value Stored supplier and consumers.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the names match.
 */
export
function supplierAndConsumersMatchTyped (
    assertion: Name,
    value: SupplierAndConsumers,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return compareName(assertion, value.ae_title, getEqualityMatcher);
}

export default supplierAndConsumersMatch;
