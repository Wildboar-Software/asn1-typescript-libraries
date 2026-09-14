import type EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
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
 */
export
const supplierOrConsumerInformationMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean => {
    const a: AssertionType = _decode_AssertionType(assertion);
    /**
     * `ConsumerInformation` is a subset of `SupplierInformation`. The
     * additional elements defined in `SupplierInformation` do not matter to
     * this matching rule.
     */
    const v: ConsumerInformation = _decode_ConsumerInformation(value);
    if (a.agreement_identifier !== v.agreementID.identifier) {
        return false;
    }
    return compareName(a.ae_title, v.ae_title, getEqualityMatcher);
}

export default supplierOrConsumerInformationMatch;
