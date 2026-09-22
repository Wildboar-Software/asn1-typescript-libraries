import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import {
    ASN1TagClass,
    ASN1UniversalType,
    type ASN1Element,
    type OCTET_STRING,
} from "@wildboar/asn1";
import { _decode_ProtocolInformation } from "../../modules/SelectedAttributeTypes/ProtocolInformation.ta.mjs";
import { compareNSAP } from "../../comparators/compareNSAPs.mjs";

function assertedNAddress (assertion: ASN1Element): OCTET_STRING {
    if (
        assertion.tagClass === ASN1TagClass.universal
        && assertion.tagNumber === ASN1UniversalType.sequence
    ) {
        return _decode_ProtocolInformation(assertion).nAddress;
    }
    return assertion.octetString;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.12
 * `protocolInformationMatch`.
 *
 * Assertion syntax is the `nAddress` OCTET STRING of
 * `ProtocolInformation`. TRUE iff that presented NSAP matches the
 * stored `nAddress` under `compareNSAP`. Stored `profiles` are
 * ignored.
 *
 * A presented `ProtocolInformation` is also accepted, although
 * that is not the assertion syntax of this matching rule. Only
 * its `nAddress` is compared; its `profiles` are ignored.
 */
export
const protocolInformationMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const asserted: OCTET_STRING = assertedNAddress(assertion);
    const stored: OCTET_STRING = _decode_ProtocolInformation(value).nAddress;
    return compareNSAP(asserted, stored);
}

export default protocolInformationMatch;
