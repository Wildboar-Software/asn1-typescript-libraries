import type EqualityMatcher from "../../types/EqualityMatcher.js";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    ConsumerInformation,
    _decode_ConsumerInformation,
} from "../../modules/DSAOperationalAttributeTypes/ConsumerInformation.ta.js";
import {
    supplierOrConsumerInformationMatch_AssertionType as AssertionType,
    _decode_supplierOrConsumerInformationMatch_AssertionType as _decode_AssertionType,
} from "../../modules/DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch-AssertionType.ta.js";
import compareName from "../../comparators/compareName.js";

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
    return compareName(a.ae_title, v.ae_title, getEqualityMatcher ?? (() => undefined));
}

export default supplierOrConsumerInformationMatch;
