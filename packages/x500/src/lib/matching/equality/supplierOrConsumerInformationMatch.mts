import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    ConsumerInformation,
    _decode_ConsumerInformation,
} from "../../modules/DSAOperationalAttributeTypes/ConsumerInformation.ta.mjs";
import {
    supplierOrConsumerInformationMatch_AssertionType as AssertionType,
    _decode_supplierOrConsumerInformationMatch_AssertionType as _decode_AssertionType,
} from "../../modules/DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch-AssertionType.ta.mjs";
import compareName from "../../comparators/compareName.mjs";

/**
 * Rec. ITU-T X.501 (10/2019), clause 24.2.1.9.3
 * `supplierOrConsumerInformationMatch`.
 *
 * Equality for `SupplierInformation` or `ConsumerInformation`.
 * TRUE iff `ae-title` matches as a distinguished name and the
 * agreement `identifier` INTEGER matches.
 *
 * `assertion` may be an element or the assertion type. `value` may
 * be an element or `ConsumerInformation` (a subset of
 * `SupplierInformation`).
 */
export
function supplierOrConsumerInformationMatch (
    assertion: ASN1Element | AssertionType,
    value: ASN1Element | ConsumerInformation,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    return supplierOrConsumerInformationMatchTyped(
        readDecoded(assertion, _decode_AssertionType),
        readDecoded(value, _decode_ConsumerInformation),
        getEqualityMatcher,
    );
}

/**
 * `supplierOrConsumerInformationMatch` on decoded values.
 *
 * `ConsumerInformation` is a subset of `SupplierInformation`. The
 * additional elements defined in `SupplierInformation` do not matter to
 * this matching rule.
 *
 * @param a Presented assertion.
 * @param v Stored consumer information.
 * @param getEqualityMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the agreement id and names match.
 */
export
function supplierOrConsumerInformationMatchTyped (
    a: AssertionType,
    v: ConsumerInformation,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (a.agreement_identifier !== v.agreementID.identifier) {
        return false;
    }
    return compareName(a.ae_title, v.ae_title, getEqualityMatcher);
}

export default supplierOrConsumerInformationMatch;
