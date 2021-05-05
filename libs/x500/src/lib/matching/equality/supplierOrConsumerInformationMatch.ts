import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    ConsumerInformation,
    _decode_ConsumerInformation,
} from "../../modules/DSAOperationalAttributeTypes/ConsumerInformation.ta";
import {
    supplierOrConsumerInformationMatch_AssertionType as AssertionType,
    _decode_supplierOrConsumerInformationMatch_AssertionType as _decode_AssertionType,
} from "../../modules/DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch-AssertionType.ta";
import { compareName } from "../../comparators";

export
const supplierOrConsumerInformationMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
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
    return compareName(a.ae_title, v.ae_title);
}

export default supplierOrConsumerInformationMatch;
